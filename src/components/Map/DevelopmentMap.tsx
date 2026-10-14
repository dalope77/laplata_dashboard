import { MapContainer, TileLayer, WMSTileLayer, Polygon, Polyline, Popup, LayersControl, CircleMarker, Marker, useMapEvents, Tooltip, LayerGroup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { UrbanDevelopment } from '../../types/development';
import type { LeafletMouseEvent } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { calculateDynamicValues } from '../../utils/financials';
import { Trash2, Undo2, Check, Edit3, Plus } from 'lucide-react';

interface DevelopmentMapProps {
  developments: UrbanDevelopment[];
  onSelectDevelopment: (dev: UrbanDevelopment) => void;
  selectedDevelopment: UrbanDevelopment | null;
  isDrawingMode?: boolean;
  onAddPoint?: (lat: number, lng: number) => void;
  onRemovePoint?: (index: number) => void;
  onRemoveLastPoint?: () => void;
  onClearAllPoints?: () => void;
  onToggleDrawingMode?: () => void;
  marketPoints?: any[];
  isParcelPickMode?: boolean;
  onAddParcelFromMap?: (lat: number, lng: number) => void;
  showIncludedParcels?: boolean;
  onToggleShowIncludedParcels?: () => void;
  isEditingPolygon?: boolean;
  onToggleEditingPolygon?: () => void;
  onUpdatePolygon?: (newPolygon: Array<{ lat: number; lng: number }>) => void;
  onStartEditingPolygon?: (dev: UrbanDevelopment) => void;
}

const WMS_URBASIG = "https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wms";
const WMS_ARBA = "https://geo.arba.gov.ar/geoserver/idera/wms";

const vertexIcon = L.divIcon({
  className: 'custom-vertex-handle',
  html: '<div style="width: 14px; height: 14px; background: #ffffff; border: 3px solid #6366f1; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.45); cursor: move;"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7]
});

const midpointIcon = L.divIcon({
  className: 'custom-midpoint-handle',
  html: '<div style="width: 10px; height: 10px; background: #e0e7ff; border: 2px dashed #4f46e5; border-radius: 50%; box-shadow: 0 1px 4px rgba(0,0,0,0.35); cursor: pointer;"></div>',
  iconSize: [10, 10],
  iconAnchor: [5, 5]
});

function MapEventHandler({ 
  isDrawingMode, 
  onAddPoint, 
  selectedDevelopment, 
  isParcelPickMode, 
  onAddParcelFromMap,
  isEditingPolygon,
  isClickToAddVertex,
  onAddPolygonVertex
}: { 
  isDrawingMode?: boolean, 
  onAddPoint?: (lat: number, lng: number) => void, 
  selectedDevelopment?: UrbanDevelopment | null, 
  isParcelPickMode?: boolean, 
  onAddParcelFromMap?: (lat: number, lng: number) => void,
  isEditingPolygon?: boolean,
  isClickToAddVertex?: boolean,
  onAddPolygonVertex?: (lat: number, lng: number) => void
}) {
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      if (isEditingPolygon && onAddPolygonVertex && (isClickToAddVertex || (selectedDevelopment?.polygon?.length || 0) < 3)) {
        onAddPolygonVertex(e.latlng.lat, e.latlng.lng);
      } else if (isDrawingMode && onAddPoint) {
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
      
      if (selectedDevelopment && selectedDevelopment.polygon && selectedDevelopment.polygon.length > 0) {
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

export function DevelopmentMap({ 
  developments, 
  onSelectDevelopment, 
  selectedDevelopment, 
  isDrawingMode, 
  onAddPoint, 
  onRemovePoint, 
  onRemoveLastPoint,
  onClearAllPoints,
  onToggleDrawingMode,
  marketPoints = [], 
  isParcelPickMode, 
  onAddParcelFromMap,
  showIncludedParcels = false,
  isEditingPolygon = false,
  onToggleEditingPolygon,
  onUpdatePolygon,
  onStartEditingPolygon
}: DevelopmentMapProps) {
  // Use the first development's first coordinate as center, or default to La Plata
  const centerCoord = developments[0]?.polygon[0] || { lat: -34.9205, lng: -57.9536 };
  const position: [number, number] = [centerCoord.lat, centerCoord.lng];

  const [parcelGeoJson, setParcelGeoJson] = useState<any>(null);
  const [isClickToAddVertex, setIsClickToAddVertex] = useState(false);

  // When opening edit mode with empty polygon, auto-enable click to add
  useEffect(() => {
    if (isEditingPolygon && (!selectedDevelopment?.polygon || selectedDevelopment.polygon.length < 3)) {
      setIsClickToAddVertex(true);
    }
  }, [isEditingPolygon, selectedDevelopment?.polygon?.length]);

  useEffect(() => {
    let isActive = true;
    // Always clear parcelGeoJson immediately when selection, parcels or toggles change
    setParcelGeoJson(null);

    const shouldShow = showIncludedParcels || isParcelPickMode;
    if (!selectedDevelopment || !shouldShow) {
      return;
    }

    const validParcels = (selectedDevelopment.technicalData.parcels || [])
      .map(p => p.replace('Nomenclatura: ', '').trim())
      .filter(p => p.length > 5);
    
    if (validParcels.length === 0) {
      return;
    }

    async function fetchParcels() {
      try {
        const featureIds = validParcels.map(p => `Parcela.${p}`).join(',');
        const url = `https://geo.arba.gov.ar/geoserver/idera/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=idera:Parcela&featureId=${featureIds}&outputFormat=application/json&srsName=EPSG:4326`;
        const res = await fetch(url);
        const data = await res.json();
        if (isActive && data && data.features) {
          setParcelGeoJson(data);
        }
      } catch(e) {
        console.error("Error fetching parcel geometries", e);
      }
    }
    fetchParcels();

    return () => {
      isActive = false;
      setParcelGeoJson(null);
    };
  }, [selectedDevelopment?.id, selectedDevelopment?.technicalData.parcels, showIncludedParcels, isParcelPickMode]);

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

  const isCrosshair = isDrawingMode || isParcelPickMode || (isEditingPolygon && (isClickToAddVertex || (selectedDevelopment?.polygon?.length || 0) < 3));
  const executedPointsCount = selectedDevelopment?.technicalData.executedUnitsPoints?.length || 0;
  const currentPolygonVertices = selectedDevelopment?.polygon || [];

  const handleAddPolygonVertex = (lat: number, lng: number) => {
    if (!selectedDevelopment || !onUpdatePolygon) return;
    const newPoly = [...currentPolygonVertices, { lat, lng }];
    onUpdatePolygon(newPoly);
  };

  return (
    <div className="relative w-full h-full">
      {/* Floating Toolbar for Drawing Mode (Viviendas Ejecutadas) */}
      {isDrawingMode && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-slate-900/95 text-white backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-slate-700 flex items-center gap-3 text-xs animate-in fade-in slide-in-from-top-2">
          <span className="flex items-center gap-2 font-semibold text-red-400">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            Marcando viviendas ({executedPointsCount})
          </span>
          <span className="text-slate-600">|</span>
          <button
            disabled={executedPointsCount === 0}
            onClick={() => {
              if (onRemoveLastPoint) {
                onRemoveLastPoint();
              } else if (onRemovePoint && executedPointsCount > 0) {
                onRemovePoint(executedPointsCount - 1);
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-30 disabled:pointer-events-none rounded-full text-xs font-medium transition-colors border border-slate-600 shadow-sm"
            title="Borrar último punto agregado"
          >
            <Undo2 className="w-3.5 h-3.5 text-amber-400" /> Borrar última
          </button>
          {executedPointsCount > 0 && (
            <button
              onClick={() => {
                if (window.confirm("¿Seguro que deseas borrar todas las viviendas marcadas de este barrio?")) {
                  if (onClearAllPoints) {
                    onClearAllPoints();
                  } else if (onRemovePoint) {
                    for (let i = executedPointsCount - 1; i >= 0; i--) {
                      onRemovePoint(i);
                    }
                  }
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1 bg-red-950/70 hover:bg-red-900 text-red-200 rounded-full text-xs font-medium transition-colors border border-red-800/70 shadow-sm"
              title="Borrar todas las viviendas marcadas"
            >
              <Trash2 className="w-3.5 h-3.5" /> Borrar todas
            </button>
          )}
          {onToggleDrawingMode && (
            <button
              onClick={onToggleDrawingMode}
              className="flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold shadow transition-colors ml-1"
            >
              <Check className="w-3.5 h-3.5" /> Listo
            </button>
          )}
        </div>
      )}

      {/* Floating Toolbar for Polygon Editing Mode */}
      {isEditingPolygon && selectedDevelopment && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-slate-900/95 text-white backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-indigo-500/60 flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-top-2">
          <span className="flex items-center gap-2 font-semibold text-indigo-400">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            Polígono ({currentPolygonVertices.length} vértices)
          </span>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => setIsClickToAddVertex(!isClickToAddVertex)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors border shadow-sm ${
              isClickToAddVertex 
                ? 'bg-indigo-600 text-white border-indigo-400' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600'
            }`}
            title="Activar/desactivar agregar vértices haciendo clic en el mapa"
          >
            <Plus className="w-3.5 h-3.5" />
            {isClickToAddVertex ? 'Clic para sumar: ACTIVO' : 'Sumar con clic'}
          </button>
          <button
            disabled={currentPolygonVertices.length === 0}
            onClick={() => {
              if (currentPolygonVertices.length > 0 && onUpdatePolygon) {
                onUpdatePolygon(currentPolygonVertices.slice(0, -1));
              }
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-30 disabled:pointer-events-none rounded-full text-xs font-medium transition-colors border border-slate-600 shadow-sm"
            title="Deshacer el último vértice agregado"
          >
            <Undo2 className="w-3.5 h-3.5 text-amber-400" /> Deshacer
          </button>
          {currentPolygonVertices.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm("¿Seguro que deseas limpiar este polígono para redibujarlo desde cero?")) {
                  if (onUpdatePolygon) onUpdatePolygon([]);
                  setIsClickToAddVertex(true);
                }
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-red-950/70 hover:bg-red-900 text-red-200 rounded-full text-xs font-medium transition-colors border border-red-800/70 shadow-sm"
              title="Borrar todos los vértices del polígono"
            >
              <Trash2 className="w-3.5 h-3.5" /> Limpiar
            </button>
          )}
          {onToggleEditingPolygon && (
            <button
              onClick={onToggleEditingPolygon}
              className="flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold shadow transition-colors ml-1"
            >
              <Check className="w-3.5 h-3.5" /> Listo
            </button>
          )}
        </div>
      )}

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

        {/* Capa WMS de Parcelas activada cuando se selecciona en mapa o se prende la capa de parcelas */}
        {(isParcelPickMode || showIncludedParcels) && (
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
          isEditingPolygon={isEditingPolygon}
          isClickToAddVertex={isClickToAddVertex}
          onAddPolygonVertex={handleAddPolygonVertex}
        />

        {parcelGeoJson && (showIncludedParcels || isParcelPickMode) && (
          <GeoJSON 
            key={`${selectedDevelopment?.id}-${JSON.stringify(selectedDevelopment?.technicalData.parcels || [])}`}
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
          const isCurrentEditing = isSelected && isEditingPolygon;
          const borderColor = getBorderColor(dev);
          const fillColor = getFillColor(dev.type);
          
          const devMarketPoints = marketPointsToRender.filter((mp: any) => mp.development_id === dev.id);
          const dynamicVals = calculateDynamicValues(dev, devMarketPoints);
          
          // If in edit mode and has only 2 points, render a polyline connecting them
          if (isCurrentEditing && dev.polygon.length === 2) {
            return (
              <Polyline
                key={`${dev.id}-poly-line`}
                positions={dev.polygon.map(p => [p.lat, p.lng])}
                pathOptions={{
                  color: '#6366f1',
                  weight: 3,
                  dashArray: '6, 6'
                }}
              />
            );
          }

          if (!dev.polygon || dev.polygon.length < 3) return null;

          return (
            <Polygon
              key={`${dev.id}-parcelMode-${isParcelPickMode}-edit-${isCurrentEditing}`}
              positions={dev.polygon.map(p => [p.lat, p.lng])}
              interactive={!isParcelPickMode && !isEditingPolygon} // No interceptar clics en modo parcela o edición de polígono
              pathOptions={{
                color: isCurrentEditing ? "#6366f1" : (isSelected ? "#ffffff" : borderColor),
                dashArray: isCurrentEditing ? "6, 6" : undefined,
                weight: isCurrentEditing ? 4 : (isSelected ? 4 : 3),
                fillColor: isCurrentEditing ? "#818cf8" : fillColor,
                fillOpacity: (isSelected && isParcelPickMode) ? 0.0 : (isCurrentEditing ? 0.45 : 0.6)
              }}
              eventHandlers={{
                click: () => {
                  if (!isDrawingMode && !isParcelPickMode && !isEditingPolygon) {
                    onSelectDevelopment(dev);
                  }
                }
              }}
            >
              {!isDrawingMode && !isEditingPolygon && (
                <Popup className="rounded-xl">
                <div className="p-1 max-w-[210px]">
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

                  <div className="flex flex-col gap-1.5">
                    <button 
                      onClick={() => onSelectDevelopment(dev)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1.5 rounded transition-colors"
                    >
                      Regularizar Emprendimiento
                    </button>
                    <button 
                      onClick={() => {
                        onSelectDevelopment(dev);
                        if (onStartEditingPolygon) {
                          onStartEditingPolygon(dev);
                        }
                      }}
                      className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-semibold py-1 rounded transition-colors flex items-center justify-center gap-1 border border-indigo-200 dark:border-indigo-900"
                    >
                      <Edit3 className="w-3 h-3" /> Modificar Polígono
                    </button>
                  </div>
                </div>
              </Popup>
              )}
            </Polygon>
          );
        })}

        {/* Render Vertex Handles for selectedDevelopment during Polygon Edit Mode */}
        {isEditingPolygon && selectedDevelopment && currentPolygonVertices.map((vertex, idx) => (
          <Marker
            key={`poly-vertex-${idx}`}
            position={[vertex.lat, vertex.lng]}
            draggable={true}
            icon={vertexIcon}
            eventHandlers={{
              click: (e) => {
                e.originalEvent?.stopPropagation();
              },
              dragend: (e) => {
                const latLng = e.target.getLatLng();
                const newPoly = [...currentPolygonVertices];
                newPoly[idx] = { lat: latLng.lat, lng: latLng.lng };
                if (onUpdatePolygon) onUpdatePolygon(newPoly);
              }
            }}
          >
            <Popup>
              <div className="p-1.5 text-center min-w-[120px]">
                <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">Vértice #{idx + 1}</p>
                <p className="text-[10px] text-gray-500 mb-2">Arrastrá para reposicionar</p>
                {currentPolygonVertices.length > 3 ? (
                  <button
                    onClick={() => {
                      const newPoly = currentPolygonVertices.filter((_, i) => i !== idx);
                      if (onUpdatePolygon) onUpdatePolygon(newPoly);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-[11px] py-1 px-2 rounded font-semibold flex items-center justify-center gap-1 transition-colors shadow"
                  >
                    <Trash2 className="w-3 h-3" /> Eliminar vértice
                  </button>
                ) : (
                  <span className="text-[10px] text-amber-600 font-medium">Mínimo 3 vértices</span>
                )}
              </div>
            </Popup>
            <Tooltip className="text-[10px]">Vértice #{idx + 1} (arrastrá para mover)</Tooltip>
          </Marker>
        ))}

        {/* Render Midpoint Insertion Markers during Polygon Edit Mode */}
        {isEditingPolygon && selectedDevelopment && currentPolygonVertices.length >= 2 && currentPolygonVertices.map((vertex, idx) => {
          const polyLen = currentPolygonVertices.length;
          const nextIdx = (idx + 1) % polyLen;
          if (polyLen < 3 && nextIdx === 0) return null;
          const nextVertex = currentPolygonVertices[nextIdx];
          const midLat = (vertex.lat + nextVertex.lat) / 2;
          const midLng = (vertex.lng + nextVertex.lng) / 2;

          return (
            <Marker
              key={`poly-midpoint-${idx}`}
              position={[midLat, midLng]}
              draggable={true}
              icon={midpointIcon}
              eventHandlers={{
                dragend: (e) => {
                  const latLng = e.target.getLatLng();
                  const newPoly = [...currentPolygonVertices];
                  newPoly.splice(idx + 1, 0, { lat: latLng.lat, lng: latLng.lng });
                  if (onUpdatePolygon) onUpdatePolygon(newPoly);
                },
                click: (e) => {
                  e.originalEvent?.stopPropagation();
                  const newPoly = [...currentPolygonVertices];
                  newPoly.splice(idx + 1, 0, { lat: midLat, lng: midLng });
                  if (onUpdatePolygon) onUpdatePolygon(newPoly);
                }
              }}
            >
              <Tooltip className="text-[10px]">Clic o arrastrá para insertar vértice</Tooltip>
            </Marker>
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
              }
            }}
          >
            <Popup>
              <div className="p-1.5 text-center min-w-[130px]">
                <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1.5">Vivienda #{idx + 1}</p>
                {onRemovePoint && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemovePoint(idx);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-[11px] py-1 px-2 rounded font-semibold flex items-center justify-center gap-1 transition-colors shadow"
                  >
                    <Trash2 className="w-3 h-3" /> Borrar vivienda
                  </button>
                )}
              </div>
            </Popup>
            {isDrawingMode && <Tooltip>Vivienda #{idx + 1}</Tooltip>}
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
    </div>
  );
}

