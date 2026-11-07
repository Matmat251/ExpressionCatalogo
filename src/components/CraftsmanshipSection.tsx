/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STORE_INFO } from '../data/catalog';
import {
  Scissors,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  Heart,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telas' | 'acabados' | 'anatomia'>('telas');

  const fabrics = [
    {
      name: 'Lana Fría Italiana (Super 120s)',
      weight: '240 gr/m²',
      season: 'Todo el año (Climas templados y cálidos)',
      features: 'Transpirable, no se arruga, caída sastrera impecable y tacto sedoso.',
      colorHex: '#3E4451',
    },
    {
      name: 'Casimir Inglés Clásico',
      weight: '280 gr/m²',
      season: 'Otoño / Invierno y eventos solemnes',
      features: 'Estructura rígida de alta durabilidad, retención de calor y elegancia formal.',
      colorHex: '#1E293B',
    },
    {
      name: 'Crepé Premium Femenino',
      weight: '230 gr/m²',
      season: 'Primavera, Verano y Galas',
      features: 'Textura granulada elegante, elasticidad natural confortable y resistencia al uso diario.',
      colorHex: '#8B2643',
    },
    {
      name: 'Lino & Algodón Estival',
      weight: '210 gr/m²',
      season: 'Verano y Eventos de Día',
      features: 'Fresco y ligero, ideal para ceremonias al aire libre y días cálidos.',
      colorHex: '#EAE5D9',
    },
  ];

  return (
    <section id="telas-acabados" className="py-14 sm:py-20 bg-white border-b border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2643] mb-2">
            <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Taller & Confección Artesanal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1917] tracking-tight text-balance">
            Telas de Alta Calidad & Acabados Delicados
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            En <strong>Expresion's New</strong> fusionamos el patronaje anatómico femenino con los mejores tejidos para crear sastres que duran años y realzan tu porte.
          </p>

          {/* Interactive tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#F4EFEA] border border-[#E7E0D8] rounded-2xl mt-8 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('telas')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-98 ${
                activeTab === 'telas'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              1. Nuestras Telas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('acabados')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-98 ${
                activeTab === 'acabados'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              2. Bolsillos & Acabados
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('anatomia')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-98 ${
                activeTab === 'anatomia'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              3. Corte Anatómico
            </button>
          </div>
        </div>

        {/* Tab 1: Telas */}
        {activeTab === 'telas' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabrics.map((fabric, idx) => (
              <div
                key={fabric.name}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E0D8] shadow-[0_4px_20px_-4px_rgba(42,46,53,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(42,46,53,0.08)] hover:border-[#8B2643]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <span
                      className="w-7 h-7 rounded-full shadow-inner border border-white ring-1 ring-stone-200"
                      style={{ backgroundColor: fabric.colorHex }}
                    />
                    <span className="text-[11px] font-mono text-stone-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#1C1917] mb-1.5 leading-snug">
                    {fabric.name}
                  </h3>

                  <div className="text-[11px] text-[#8B2643] font-semibold mb-2 tracking-wide uppercase">
                    {fabric.season}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {fabric.features}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E0D8]/70 text-[11px] text-stone-500 font-mono">
                  Gramaje: {fabric.weight}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Acabados Delicados & Bolsillos Funcionales */}
        {activeTab === 'acabados' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-7 border border-[#E7E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center mb-4">
                <Scissors className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                Bolsillos Reales & Funcionales
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                A diferencia de la moda rápida con bolsillos simulados, en Expresion's New confeccionamos bolsillos reales con fondo de algodón reforzado: ideales para llaves, credencial corporativa o smartphone.
              </p>
              <ul className="text-xs text-stone-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Bolsillo con tapeta convertible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Vivo sastre reforzado con entretela
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Bolsillo secreto interior para tarjetas
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-7 border border-[#E7E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#4E6B32]/10 text-[#4E6B32] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                Pespuntes & Botonadura
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                El alma de una sastrería radica en la firmeza de sus costuras. Empleamos hilos alemanes de alta tenacidad y botones con costura cruzada manual para que nunca se desprendan.
              </p>
              <ul className="text-xs text-stone-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Pespunte picado (pick-stitching) en solapa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Botones biselados o forrados a tono
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Ojal sastre con refuerzo de lágrima
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-7 border border-[#E7E0D8] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                Forro Sedoso Antiestático
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                El interior es tan importante como el exterior. Usamos forros de satén y acetato que deslizan suavemente sobre blusas y vestidos, evitando la electricidad estática y facilitando el movimiento.
              </p>
              <ul className="text-xs text-stone-700 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Tejido transpirable de secado rápido
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Fuelle de holgura en espalda para movilidad
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" /> Opción de bordar tu nombre o iniciales
                </li>
              </ul>
            </div>

          </div>
        )}

        {/* Tab 3: Corte Anatómico Femenino */}
        {activeTab === 'anatomia' && (
          <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-8 border border-[#E7E0D8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-semibold text-[#8B2643] uppercase tracking-wider block mb-1">
                  Patronaje Especializado
                </span>
                <h3 className="font-display font-bold text-2xl text-stone-900 mb-3">
                  Diseñado para la Silueta de la Mujer Peruana
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  A diferencia de las marcas importadas que no contemplan las curvas naturales, nuestro taller en el Centro Comercial El Rey desarrolla moldes exclusivos que entallan la cintura sin ajustar la espalda ni oprimir el busto.
                </p>

                <div className="space-y-3 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                    <span><strong>Pretina anatómica en pantalones:</strong> No se baja al sentarte y estiliza la zona abdominal.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                    <span><strong>Pinzas de entalle proporcionales:</strong> Marcan la silueta con elegancia sobria sin resultar ceñidas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                    <span><strong>Hombreras sutiles de algodón:</strong> Otorgan estructura y presencia visual erguida para presentaciones y reuniones.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-[#8B2643] fill-[#8B2643]" />
                  <span>"Hecho con amor para mujeres únicas"</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Visítanos en nuestra tienda física para probarte la colección y recibir asesoría personalizada sobre el color y corte que mejor realza tu tono de piel y fisionomía.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-stone-100">
                  <span className="font-medium text-stone-500">📍 C.C. El REY tda. 342 - D</span>
                  <span className="font-bold text-[#8B2643]">Cel. 978 095 313</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
