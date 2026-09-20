import { useState } from 'react';
import { MapContainer, TileLayer, WMSTileLayer, GeoJSON, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Map as MapIcon, Info, LogOut } from 'lucide-react';

// ARBA and URBASIG WMS/WFS Services
const WMS_URBASIG = "https://urbasig.gob.gba.gob.ar/geoserver/urbasig/wms";
const WMS_ARBA = "https://carto.arba.gov.ar/geoserver/wms";

// Mock GeoJSON for neighborhoods (to be replaced later)
const mockNeighborhoods = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Casco Urbano", population: 200000 },
      geometry: {
        type: "Polygon",
        coordinates: [[[-57.97, -34.90], [-57.93, -34.90], [-57.93, -34.94], [-57.97, -34.94], [-57.97, -34.90]]]
      }
    }
  ]
};

export default function MapDashboard({ onLogout }: { onLogout: () => void }) {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  
  const position: [number, number] = [-34.9205, -57.9536];

  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      click: () => {
        setSelectedFeature(feature.properties);
      }
    });
  };

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar Dashboard */}
      <div className="w-full md:w-80 bg-white dark:bg-gray-900 shadow-xl z-20 flex flex-col border-r border-gray-200 dark:border-gray-800">
        <div className="p-5 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <MapIcon className="text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">La Plata Geo</h1>
          </div>
          <button onClick={onLogout} className="p-2 text-gray-500 hover:text-red-500 transition-colors" title="Cerrar sesión">
            <LogOut size={18} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-5">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers size={16} /> Capas Activas
            </h2>
            <p className="text-xs text-gray-400 mb-4">Usa el control superior derecho en el mapa para alternar capas.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <h2 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
              <Info size={16} /> Información del Barrio
            </h2>
            {selectedFeature ? (
              <div className="space-y-2 mt-4">
                <div className="flex justify-between border-b border-blue-200/50 pb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Nombre</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedFeature.name || 'Desconocido'}</span>
                </div>
                <div className="flex justify-between border-b border-blue-200/50 pb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Población (aprox)</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedFeature.population || '-'}</span>
                </div>
                {/* Additional dynamic properties can be mapped here */}
                {Object.entries(selectedFeature).map(([key, value]) => {
                  if (key === 'name' || key === 'population') return null;
                  return (
                    <div key={key} className="flex justify-between border-b border-blue-200/50 pb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{String(value)}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-blue-600/70 dark:text-blue-400/70 mt-2">Haz clic en un polígono en el mapa para ver sus datos asociados.</p>
            )}
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative z-10">
        <MapContainer center={position} zoom={13} className="w-full h-full">
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

            {/* GeoARBA Parcelario */}
            <LayersControl.Overlay name="Parcelario GeoARBA">
              <LayerGroup>
                 {/* This WMS URL corresponds to Arba Carto (Needs validation if it matches specific layer names like 'Catastro:Parcelas') */}
                 <WMSTileLayer
                   url={WMS_ARBA}
                   layers="Catastro:Parcelas"
                   format="image/png"
                   transparent={true}
                   version="1.1.1"
                 />
              </LayerGroup>
            </LayersControl.Overlay>

            {/* UrbaSIG Zonificacion */}
            <LayersControl.Overlay checked name="Zonificación UrbaSIG">
              <LayerGroup>
                 <WMSTileLayer
                   url={WMS_URBASIG}
                   layers="urbasig:zonificacion"
                   format="image/png"
                   transparent={true}
                   version="1.1.1"
                 />
              </LayerGroup>
            </LayersControl.Overlay>

            {/* Barrios (GeoJSON to be replaced) */}
            <LayersControl.Overlay checked name="Barrios La Plata">
              <LayerGroup>
                {/* @ts-ignore */}
                <GeoJSON 
                  data={mockNeighborhoods as any} 
                  onEachFeature={onEachFeature}
                  style={{ color: '#3b82f6', weight: 2, fillOpacity: 0.2 }}
                />
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
