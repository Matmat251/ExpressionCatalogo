/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { calculateTailoringSize, SIZE_CHART } from '../utils/tailoring';
import { STORE_INFO } from '../data/catalog';
import { X, Ruler, CheckCircle2, MessageCircle, HelpCircle, Scissors } from 'lucide-react';

interface SizeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeCalculatorModal: React.FC<SizeCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [bust, setBust] = useState<string>('90');
  const [waist, setWaist] = useState<string>('72');
  const [hip, setHip] = useState<string>('98');

  const bustNum = parseFloat(bust) || 0;
  const waistNum = parseFloat(waist) || 0;
  const hipNum = parseFloat(hip) || 0;

  const recommendation = calculateTailoringSize({
    bust: bustNum,
    waist: waistNum,
    hip: hipNum,
  });

  const whatsappMeasurementUrl = `https://wa.me/51978095313?text=${encodeURIComponent(
    `Hola Expresion's New! He calculado mis medidas en su catálogo web:
• Busto: ${bustNum} cm
• Cintura: ${waistNum} cm
• Cadera: ${hipNum} cm
• Talla sugerida: ${recommendation.size}

Quisiera agendar una prueba de entallado o consultar qué modelos tienen listos en mi talla en la tienda de C.C. El Rey tda. 342 - D.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-calc-title"
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F4]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h2 id="size-calc-title" className="font-display font-bold text-lg text-stone-900 leading-tight">
                Calculadora de Talla & Medidas Sastre
              </h2>
              <span className="text-[11px] text-stone-500">
                Patronaje anatómico de dama · Expresion's New
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Cerrar calculadora"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Measurement input fields */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wide block mb-3">
              Ingresa tus medidas con cinta métrica (en centímetros)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  1. Busto (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="60"
                    max="150"
                    value={bust}
                    onChange={(e) => setBust(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-semibold text-stone-900 focus:ring-2 focus:ring-[#8B2643] focus:outline-hidden"
                  />
                  <span className="absolute right-3 top-2 text-xs text-stone-400">cm</span>
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">Por la parte más prominente</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  2. Cintura (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="50"
                    max="140"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-semibold text-stone-900 focus:ring-2 focus:ring-[#8B2643] focus:outline-hidden"
                  />
                  <span className="absolute right-3 top-2 text-xs text-stone-400">cm</span>
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">2 dedos sobre el ombligo</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  3. Cadera (cm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="70"
                    max="160"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-semibold text-stone-900 focus:ring-2 focus:ring-[#8B2643] focus:outline-hidden"
                  />
                  <span className="absolute right-3 top-2 text-xs text-stone-400">cm</span>
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">Parte más ancha de los glúteos</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="rounded-xl p-5 border bg-rose-50/50 border-rose-200/80">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-semibold text-[#8B2643] uppercase tracking-wider block">
                  Tu Talla Recomendada
                </span>
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#8B2643] mt-0.5">
                  {recommendation.size}
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#8B2643] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs text-stone-700 mt-2.5 leading-relaxed">
              {recommendation.details}
            </p>

            <div className="mt-4 pt-3 border-t border-rose-200/60 flex items-center gap-2 text-xs text-stone-600">
              <Scissors className="w-3.5 h-3.5 text-[#4E6B32] shrink-0" />
              <span>
                <strong>Ajuste Gratuito:</strong> Todos nuestros sastres comprados en tienda incluyen ajuste fino de basta, mangas y cintura en nuestro taller.
              </span>
            </div>
          </div>

          {/* Size Chart Reference Table */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-2">
              Tabla de Medidas Anatómicas Estándar
            </h4>
            <div className="overflow-x-auto border border-stone-200 rounded-lg">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-100 text-stone-700 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-3 py-2">Talla</th>
                    <th className="px-3 py-2">Busto (cm)</th>
                    <th className="px-3 py-2">Cintura (cm)</th>
                    <th className="px-3 py-2">Cadera (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600 font-mono tabular-nums">
                  {Object.entries(SIZE_CHART).map(([sizeKey, values]) => {
                    const isSelected = sizeKey === recommendation.size;
                    return (
                      <tr
                        key={sizeKey}
                        className={isSelected ? 'bg-[#8B2643]/10 font-bold text-[#8B2643]' : ''}
                      >
                        <td className="px-3 py-2 font-sans font-semibold">{sizeKey}</td>
                        <td className="px-3 py-2">{values.bust[0]} - {values.bust[1]}</td>
                        <td className="px-3 py-2">{values.waist[0]} - {values.waist[1]}</td>
                        <td className="px-3 py-2">{values.hip[0]} - {values.hip[1]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-stone-200 bg-[#FAF7F4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-500 text-center sm:text-left">
            ¿Dudas? Nuestro sastre maestro te asiste directamente.
          </span>

          <a
            href={whatsappMeasurementUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4E6B32] hover:bg-[#3E5528] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-2xs min-h-[42px]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Enviar medidas por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
