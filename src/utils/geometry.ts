import * as turf from '@turf/turf';

export function calculatePolygonAreaSqM(coords: Array<{ lat: number; lng: number }>): number {
  if (!coords || coords.length < 3) return 0;
  try {
    const ring = coords.map(p => [p.lng, p.lat]);
    ring.push([coords[0].lng, coords[0].lat]); // close the polygon
    const poly = turf.polygon([ring]);
    return Math.round(turf.area(poly));
  } catch (e) {
    console.error('Error calculating polygon area:', e);
    return 0;
  }
}
