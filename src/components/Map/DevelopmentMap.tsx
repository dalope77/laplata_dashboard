import { MapContainer, TileLayer, WMSTileLayer, Polygon, Popup, LayersControl, CircleMarker, useMapEvents, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { UrbanDevelopment } from '../../types/development';
import { mockDevelopments } from '../../data/mockDevelopments';
import { LeafletMouseEvent } from 'leaflet';

interface DevelopmentMapProps {
  onSelectDevelopment: (dev: UrbanDevelopment) => void;
  selectedDevelopment: UrbanDevelopment | null;
  isDrawingMode?: boolean;
  onAddPoint?: (lat: number, lng: number) => void;
  onRemovePoint?: (index: number) => void;
}

const WMS_URBASIG = "https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wms";
const WMS_ARBA = "https://geo.arba.gov.ar/geoserver/idera/wms";

import { useEffect, useRef } from 'react';

function MapEventHandler({ isDrawingMode, onAddPoint, selectedDevelopment }: { isDrawingMode?: boolean, onAddPoint?: (lat: number, lng: number) => void, selectedDevelopment?: UrbanDevelopment | null }) {
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      if (isDrawingMode && onAddPoint) {
        onAddPoint(e.latlng.lat, e.latlng.lng);
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

export function DevelopmentMap({ onSelectDevelopment, selectedDevelopment, isDrawingMode, onAddPoint, onRemovePoint }: DevelopmentMapProps) {
  // Use the first development's first coordinate as center, or default to La Plata
  const centerCoord = mockDevelopments[0]?.polygon[0] || { lat: -34.9205, lng: -57.9536 };
  const position: [number, number] = [centerCoord.lat, centerCoord.lng];

  const getColor = (status: string) => {
    switch (status) {
      case "verde": return "#10b981";
      case "amarillo": return "#f59e0b";
      case "rojo": return "#ef4444";
      default: return "#3b82f6";
    }
  };

  return (
    <MapContainer center={position} zoom={13} className={`w-full h-full z-0 ${isDrawingMode ? 'cursor-crosshair' : ''}`}>
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
            layers="idera:Parcela"
            format="image/png"
            transparent={true}
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Zonificación UrbaSIG">
          <WMSTileLayer
            url={WMS_URBASIG}
            layers="urbasig:uso_del_suelo"
            format="image/png"
            transparent={true}
            opacity={0.6}
          />
        </LayersControl.Overlay>
      </LayersControl>

      <MapEventHandler isDrawingMode={isDrawingMode} onAddPoint={onAddPoint} selectedDevelopment={selectedDevelopment} />

      {mockDevelopments.map((dev) => {
        const isSelected = selectedDevelopment?.id === dev.id;
        const color = getColor(dev.complianceStatus);
        
        return (
          <Polygon
            key={dev.id}
            positions={dev.polygon.map(p => [p.lat, p.lng])}
            pathOptions={{
              color: isSelected ? "#4f46e5" : color,
              weight: isSelected ? 4 : 2,
              fillColor: color,
              fillOpacity: 0.4
            }}
            eventHandlers={{
              click: () => {
                if (!isDrawingMode) {
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
                    <span className="font-medium">USD {dev.financials.marketValueIrregularUsd.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Valor Final:</span>
                    <span className="font-bold text-green-700">USD {dev.financials.marketValueRegularizedUsd.toLocaleString()}</span>
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
    </MapContainer>
  );
}
