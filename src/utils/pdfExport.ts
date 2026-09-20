import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { UrbanDevelopment } from '../types/development';

export function generateDevelopmentReport(dev: UrbanDevelopment) {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('INFORME DE EMPRENDIMIENTO URBANO', 14, 22);
  
  doc.setFontSize(12);
  doc.text(`Nombre: ${dev.name}`, 14, 32);
  doc.text(`Tipo: ${dev.type.replace('_', ' ').toUpperCase()}`, 14, 38);
  doc.text(`Estado de Regularización: ${dev.complianceStatus.toUpperCase()}`, 14, 44);

  // Technical Data
  doc.setFontSize(14);
  doc.text('Ficha Técnica', 14, 56);
  
  autoTable(doc, {
    startY: 60,
    head: [['Atributo', 'Valor']],
    body: [
      ['Superficie Total', `${dev.technicalData.totalAreaSqM.toLocaleString()} m²`],
      ['Viviendas Ejecutadas', `${dev.technicalData.executedUnits}`],
      ['Zona de Territorialidad', dev.technicalData.zonaTerritorialidad.toUpperCase()],
      ['Ley 14.449 (Hábitat)', dev.technicalData.ley14449 ? 'Sí' : 'No'],
      ['Empadronamiento DPOUT', dev.technicalData.inDpoutRegistry ? 'Sí' : 'No'],
      ['Zonificación UrbaSIG', dev.technicalData.indicators.zoning],
      ['FOS / FOT', `${dev.technicalData.indicators.fos} / ${dev.technicalData.indicators.fot}`],
    ],
    theme: 'grid',
    headStyles: { fillColor: [79, 70, 229] }
  });

  // Procedures
  doc.setFontSize(14);
  doc.text('Gestión y Trámites', 14, (doc as any).lastAutoTable.finalY + 14);
  
  const proceduresBody = dev.procedures.map(p => [
    p.category.toUpperCase(),
    p.name,
    p.status.toUpperCase().replace('_', ' ')
  ]);

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 18,
    head: [['Fase', 'Trámite', 'Estado']],
    body: proceduresBody,
    theme: 'striped',
    headStyles: { fillColor: [55, 65, 81] }
  });

  // Financials
  doc.setFontSize(14);
  doc.text('Resumen Financiero', 14, (doc as any).lastAutoTable.finalY + 14);

  autoTable(doc, {
    startY: (doc as any).lastAutoTable.finalY + 18,
    head: [['Concepto', 'Monto (USD)']],
    body: [
      ['Valor Actual (Estado Irregular)', `$${dev.financials.marketValueIrregularUsd.toLocaleString()}`],
      ['Valor Final (Regularizado)', `$${dev.financials.marketValueRegularizedUsd.toLocaleString()}`],
      ['Costo Estimado de Regularización', `$${dev.financials.regularizationCostUsd.toLocaleString()}`],
      ['Plusvalía Estimada', `$${dev.financials.plusvaliaAmountUsd.toLocaleString()}`],
    ],
    theme: 'grid',
    headStyles: { fillColor: [16, 185, 129] }
  });

  // Save the PDF
  doc.save(`informe_${dev.name.replace(/\s+/g, '_').toLowerCase()}.pdf`);
}
