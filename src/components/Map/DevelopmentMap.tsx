import { MapContainer, TileLayer, WMSTileLayer, Polygon, Popup, LayersControl, CircleMarker, useMapEvents, Tooltip, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { UrbanDevelopment } from '../../types/development';
import type { LeafletMouseEvent } from 'leaflet';

interface DevelopmentMapProps {
  developments: UrbanDevelopment[];
  onSelectDevelopment: (dev: UrbanDevelopment) => void;
  selectedDevelopment: UrbanDevelopment | null;
  isDrawingMode?: boolean;
  onAddPoint?: (lat: number, lng: number) => void;
  onRemovePoint?: (index: number) => void;
  marketPoints?: any[];
  isParcelPickMode?: boolean;
  onAddParcelFromMap?: (lat: number, lng: number) => void;
}

const WMS_URBASIG = "https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wms";
const WMS_ARBA = "https://geo.arba.gov.ar/geoserver/idera/wms";

import { useEffect, useRef, useState } from 'react';
import { calculateDynamicValues } from '../../utils/financials';
import { GeoJSON } from 'react-leaflet';

function MapEventHandler({ isDrawingMode, onAddPoint, selectedDevelopment, isParcelPickMode, onAddParcelFromMap }: { isDrawingMode?: boolean, onAddPoint?: (lat: number, lng: number) => void, selectedDevelopment?: UrbanDevelopment | null, isParcelPickMode?: boolean, onAddParcelFromMap?: (lat: number, lng: number) => void }) {
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      if (isDrawingMode && onAddPoint) {
        onAddPoint(e.latlng.lat, e.latlng.lng);
      } else if (isParcelPickMode && onAddParcelFromMap) {
        onAddParcelFromMap(e.latlng.lat, e.latlng.lng);
      }
    }
  });

  const lastFlownDevId = useRef<string | null>(null);

  useEffect(() => {
    // The side panel has a 300ms CSS transition.
    // We need to invalidate the map size after the transition completes
    // so Leaflet knows the container size changed and loads the missing tiles.
    const timeoutId = setTimeout(() => {
      map.invalidateSize();
      
      if (selectedDevelopment && selectedDevelopment.polygon.length > 0) {
        // Only fly if we haven't flown to this specific development yet
        if (lastFlownDevId.current !== selectedDevelopment.id) {
          const center = selectedDevelopment.polygon[0];
          map.flyTo([center.lat, center.lng], 16, { animate: true, duration: 1.5 });
          lastFlownDevId.current = selectedDevelopment.id;
        }
      } else {
        // Reset if null
        lastFlownDevId.current = null;
      }
    }, 350); // Slightly more than the 300ms tailwind transition

    return () => clearTimeout(timeoutId);
  }, [selectedDevelopment?.id, map]);

  return null;
}

export function DevelopmentMap({ developments, onSelectDevelopment, selectedDevelopment, isDrawingMode, onAddPoint, onRemovePoint, marketPoints = [], isParcelPickMode, onAddParcelFromMap }: DevelopmentMapProps) {
  // Use the first development's first coordinate as center, or default to La Plata
  const centerCoord = developments[0]?.polygon[0] || { lat: -34.9205, lng: -57.9536 };
  const position: [number, number] = [centerCoord.lat, centerCoord.lng];

  const [parcelGeoJson, setParcelGeoJson] = useState<any>(null);

  useEffect(() => {
    async function fetchParcels() {
      if (!selectedDevelopment || !selectedDevelopment.technicalData.parcels || selectedDevelopment.technicalData.parcels.length === 0) {
        setParcelGeoJson(null);
        return;
      }
      const validParcels = selectedDevelopment.technicalData.parcels
        .map(p => p.replace('Nomenclatura: ', '').trim())
        .filter(p => p.length > 5);
      
      if (validParcels.length === 0) {
        setParcelGeoJson(null);
        return;
      }

      try {
        const featureIds = validParcels.map(p => `Parcela.${p}`).join(',');
        const url = `https://geo.arba.gov.ar/geoserver/idera/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=idera:Parcela&featureId=${featureIds}&outputFormat=application/json&srsName=EPSG:4326`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.features) {
          setParcelGeoJson(data);
        }
      } catch(e) {
        console.error("Error fetching parcel geometries", e);
      }
    }
    fetchParcels();
  }, [selectedDevelopment?.technicalData.parcels]);

  // Group market points by development id for efficient rendering inside popups? No, just render them globally as a layer.
  const marketPointsToRender = marketPoints || [];

  const getBorderColor = (dev: UrbanDevelopment) => {
    if (dev.isRegularized) return "#3b82f6"; // Azul para regularizado
    switch (dev.complianceStatus) {
      case "verde": return "#10b981";
      case "amarillo": return "#f59e0b";
      case "rojo": return "#ef4444";
      default: return "#9ca3af";
    }
  };

  const getFillColor = (type: string) => {
    switch (type) {
      case "loteo_social": return "#a855f7"; // Purple
      case "loteo_abierto": return "#0ea5e9"; // Light blue
      case "club_campo": return "#14b8a6"; // Teal
      case "barrio_cerrado": return "#6366f1"; // Indigo
      case "condominio": return "#06b6d4"; // Cyan
      case "ph_horizontal": return "#06b6d4"; // Cyan
      case "parque_industrial": return "#6b7280"; // Gray
      default: return "#9ca3af";
    }
  };

  const isCrosshair = isDrawingMode || isParcelPickMode;

  return (
    <MapContainer center={position} zoom={13} className={`w-full h-full z-0 ${isCrosshair ? 'cursor-crosshair' : ''}`}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satélite">
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name="Parcelario GeoARBA">
          <WMSTileLayer
            url={WMS_ARBA}
            layers="idera:Parcela,idera:Subparcela"
            format="image/png"
            transparent={true}
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Zonificación UrbaSIG">
          <WMSTileLayer
            url={WMS_URBASIG}
            layers="urbasig:uso_del_suelo"
            format="image/png"
            transparent={true}
            opacity={0.6}
          />
        </LayersControl.Overlay>
      </LayersControl>

      {/* Forzar capa de Parcelas cuando estamos en modo selección */}
      {isParcelPickMode && (
        <WMSTileLayer
          url={WMS_ARBA}
          layers="idera:Parcela,idera:Subparcela"
          format="image/png"
          transparent={true}
          zIndex={10} // Asegurar que quede por encima del mapa base
        />
      )}

      <MapEventHandler 
        isDrawingMode={isDrawingMode} 
        onAddPoint={onAddPoint} 
        selectedDevelopment={selectedDevelopment} 
        isParcelPickMode={isParcelPickMode}
        onAddParcelFromMap={onAddParcelFromMap}
      />

      {parcelGeoJson && (
        <GeoJSON 
          key={JSON.stringify(selectedDevelopment?.technicalData.parcels)} // Force re-render on data change
          data={parcelGeoJson} 
          pathOptions={{
            color: '#f59e0b', // Amber 500
            weight: 3,
            fillColor: '#fcd34d', // Amber 300
            fillOpacity: 0.5
          }} 
        />
      )}

      {developments.map((dev) => {
        const isSelected = selectedDevelopment?.id === dev.id;
        const borderColor = getBorderColor(dev);
        const fillColor = getFillColor(dev.type);
        
        const devMarketPoints = marketPointsToRender.filter((mp: any) => mp.development_id === dev.id);
        const dynamicVals = calculateDynamicValues(dev, devMarketPoints);
        
        return (
          <Polygon
            key={`${dev.id}-parcelMode-${isParcelPickMode}`}
            positions={dev.polygon.map(p => [p.lat, p.lng])}
            interactive={!isParcelPickMode} // No interceptar clics en modo parcela
            pathOptions={{
              color: isSelected ? "#ffffff" : borderColor, // Blanco si está seleccionado, sino borde de estado
              weight: isSelected ? 4 : 3, // Borde más grueso
              fillColor: fillColor,
              fillOpacity: (isSelected && isParcelPickMode) ? 0.0 : 0.6 // Transparente para seleccionar parcelas
            }}
            eventHandlers={{
              click: () => {
                if (!isDrawingMode && !isParcelPickMode) {
                  onSelectDevelopment(dev);
                }
              }
            }}
          >
            {!isDrawingMode && (
              <Popup className="rounded-xl">
              <div className="p-1 max-w-[200px]">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    {dev.type.replace('_', ' ')}
                  </span>
                  <div className={`w-2.5 h-2.5 rounded-full ${dev.complianceStatus === 'rojo' ? 'bg-red-500' : dev.complianceStatus === 'amarillo' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                </div>
                <h3 className="font-bold text-sm leading-tight text-gray-900 mb-2">{dev.name}</h3>
                
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Valor Actual:</span>
                    <span className="font-medium">USD {dynamicVals.actual.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Valor Final:</span>
                    <span className="font-bold text-green-700">USD {dynamicVals.final.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => onSelectDevelopment(dev)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1.5 rounded transition-colors"
                >
                  Regularizar Emprendimiento
                </button>
              </div>
            </Popup>
            )}
          </Polygon>
        );
      })}

      {/* Render markers for executed units for the selected development ONLY */}
      {selectedDevelopment?.technicalData.executedUnitsPoints?.map((pt, idx) => (
        <CircleMarker
          key={`pt-${idx}`}
          center={[pt.lat, pt.lng]}
          radius={6}
          pathOptions={{ color: '#ef4444', fillColor: '#ef4444', fillOpacity: 1, weight: 2 }}
          eventHandlers={{
            click: (e) => {
              // Prevent triggering the map click
              e.originalEvent.stopPropagation();
              if (isDrawingMode && onRemovePoint) {
                onRemovePoint(idx);
              }
            }
          }}
        >
          {isDrawingMode && <Tooltip>Clic para eliminar</Tooltip>}
        </CircleMarker>
      ))}

      {/* Render Market Comparables from Supabase */}
      <LayersControl.Overlay checked name="Publicaciones Mercado">
        <LayerGroup>
          {marketPointsToRender.map((mp: any, idx: number) => (
            <CircleMarker
              key={`mp-${mp.id || idx}`}
              center={[mp.lat, mp.lng]}
              radius={5}
              pathOptions={{ color: '#ffffff', fillColor: '#2563eb', fillOpacity: 0.9, weight: 1.5 }}
              eventHandlers={{
                click: (e) => {
                  e.originalEvent.stopPropagation();
                  if (mp.source_url) {
                    window.open(mp.source_url, '_blank');
                  }
                }
              }}
            >
              <Tooltip className="text-xs">
                <div className="font-bold">{mp.title}</div>
                <div>USD {mp.price_usd?.toLocaleString()}</div>
                <div>{mp.sq_meters} m²</div>
                <div className="text-[9px] text-blue-500 mt-1">Clic para abrir link</div>
              </Tooltip>
            </CircleMarker>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>
    </MapContainer>
  );
}
