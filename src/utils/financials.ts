import type { UrbanDevelopment } from '../types/development';

export function calculateDynamicValues(development: UrbanDevelopment, marketPoints: any[]) {
  const { financials, technicalData } = development;
  
  if (!marketPoints || marketPoints.length === 0) {
    return {
      actual: financials.marketValueIrregularUsd,
      final: financials.marketValueRegularizedUsd,
      isDynamic: false
    };
  }

  // Calculate average price per sqm from valid market points
  let validPointsCount = 0;
  let sumPricePerSqm = 0;

  for (const mp of marketPoints) {
    if (mp.price_usd && mp.sq_meters && mp.sq_meters > 0) {
      sumPricePerSqm += (mp.price_usd / mp.sq_meters);
      validPointsCount++;
    }
  }

  if (validPointsCount === 0) {
    return {
      actual: financials.marketValueIrregularUsd,
      final: financials.marketValueRegularizedUsd,
      isDynamic: false
    };
  }

  const avgSqmPrice = sumPricePerSqm / validPointsCount;
  
  // New Valor Actual = avg * totalArea
  const newActual = Math.round(avgSqmPrice * technicalData.totalAreaSqM);
  
  // Calculate original ratio
  const ratio = financials.marketValueIrregularUsd > 0 
    ? (financials.marketValueRegularizedUsd / financials.marketValueIrregularUsd)
    : 1.3; // fallback 30% increase
    
  const newFinal = Math.round(newActual * ratio);

  return {
    actual: newActual,
    final: newFinal,
    isDynamic: true,
    avgSqmPrice: avgSqmPrice
  };
}
