import type { UrbanDevelopment } from '../types/development';

export function calculateDynamicValues(development: UrbanDevelopment, marketPoints: any[]) {
  const { financials, technicalData } = development;
  
  if (!marketPoints || marketPoints.length === 0) {
    return calculateAdditionalKpis(
      development, 
      financials.marketValueIrregularUsd, 
      financials.marketValueRegularizedUsd, 
      false
    );
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
    return calculateAdditionalKpis(
      development, 
      financials.marketValueIrregularUsd, 
      financials.marketValueRegularizedUsd, 
      false
    );
  }

  const avgSqmPrice = sumPricePerSqm / validPointsCount;
  
  // New Valor Actual = avg * totalArea
  const newActual = Math.round(avgSqmPrice * technicalData.totalAreaSqM);
  
  // Calculate original ratio
  const ratio = financials.marketValueIrregularUsd > 0 
    ? (financials.marketValueRegularizedUsd / financials.marketValueIrregularUsd)
    : 1.3; // fallback 30% increase
    
  const newFinal = Math.round(newActual * ratio);
  
  return calculateAdditionalKpis(development, newActual, newFinal, true, avgSqmPrice);
}

function calculateAdditionalKpis(development: UrbanDevelopment, actual: number, final: number, isDynamic: boolean, avgSqmPrice?: number) {
  // Cessions Art 56 Ley 8912
  // 10m2/hab for green space + 4m2/hab for equipment = 14m2/hab
  // If no density/units, default to 14% of total area
  let cessionsSqM = 0;
  const { density } = development.technicalData.indicators;
  const { executedUnits, totalAreaSqM } = development.technicalData;

  const projectedHabitantsFromDensity = density > 0 ? (totalAreaSqM / 10000) * density : 0;
  const projectedHabitantsFromUnits = executedUnits > 0 ? executedUnits * 4 : 0;
  
  const estimatedHabitants = projectedHabitantsFromDensity || projectedHabitantsFromUnits;

  if (estimatedHabitants > 0) {
    cessionsSqM = estimatedHabitants * 14;
  } else {
    cessionsSqM = totalAreaSqM * 0.14; // fallback 14%
  }

  // Plusvalía (La Plata: 10% of the difference between regularized and irregular value)
  const plusvalia = Math.max(0, (final - actual) * 0.10);

  return {
    actual,
    final,
    isDynamic,
    avgSqmPrice,
    cessionsSqM: Math.round(cessionsSqM),
    plusvalia: Math.round(plusvalia)
  };
}
