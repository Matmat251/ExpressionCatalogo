/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BRAND_CONCEPT,
  TARGET_AUDIENCE,
  SALES_TYPES,
  COMMERCIAL_DATA,
  SOCIAL_MEDIA,
  STORE_INFO,
} from '../data/catalog';
import { ExpresionsLogo } from './ExpresionsLogo';
import {
  Sparkles,
  Users,
  ShoppingBag,
  Store,
  Truck,
  CreditCard,
  ShieldCheck,
  MessageCircle,
  Video,
  Camera,
  Facebook,
  MapPin,
  Phone,
  Clock,
  Scissors,
  CheckCircle2,
  Building2,
  ChevronRight,
  Heart,
} from 'lucide-react';

interface BrandPresentationSectionProps {
  onSelectCategory: (cat: string) => void;
  onOpenLocation: () => void;
  onOpenSizeGuide: () => void;
}

export const BrandPresentationSection: React.FC<BrandPresentationSectionProps> = ({
  onSelectCategory,
  onOpenLocation,
  onOpenSizeGuide,
}) => {
  const [activeTab, setActiveTab] = useState<'concepto' | 'publico' | 'ventas' | 'comercial' | 'redes'>('concepto');

  return (
    <section id="sobre-nosotros" className="py-14 sm:py-20 bg-white border-b border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Brand Presentation Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block p-5 sm:p-7 rounded-3xl bg-[#FAF7F4] border border-[#E7E0D8] shadow-sm">
            <ExpresionsLogo size="xl" showSlogan={true} />
          </div>

          <div>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2643] block">
              Confección Fina de Sastres Femeninos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1C1917] tracking-tight mt-1.5">
              {BRAND_CONCEPT.title}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-balance">
            {BRAND_CONCEPT.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8B2643]">
            <Heart className="w-3.5 h-3.5 fill-[#8B2643]" aria-hidden="true" />
            <span className="font-editorial italic text-base">{STORE_INFO.tagline}</span>
          </div>
        </div>

        {/* Section Navigation Tabs (Zero-Pill: functional segmented controls with mobile swipe) */}
        <div className="flex items-center justify-start sm:justify-center mb-10 overflow-x-auto snap-x scrollbar-none px-1 -mx-2 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#F4EFEA] border border-[#E7E0D8] rounded-2xl shrink-0 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('concepto')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                activeTab === 'concepto'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              1. Concepto & Taller
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('publico')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                activeTab === 'publico'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              2. Público Objetivo
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ventas')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                activeTab === 'ventas'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              3. Tipos de Venta
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('comercial')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                activeTab === 'comercial'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              4. Datos Comerciales & Envíos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('redes')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                activeTab === 'redes'
                  ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              5. Redes Sociales
            </button>
          </div>
        </div>

        {/* Tab 1: CONCEPTO */}
        {activeTab === 'concepto' && (
          <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-semibold text-[#8B2643] uppercase tracking-wider block">
                  Quiénes Somos & Filosofía
                </span>
                <h3 className="text-2xl font-display font-bold text-stone-900 leading-tight">
                  Maestría Sastrera en Gamarra para la Mujer Moderna
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  En <strong>Expresion's New</strong> no solo vendemos prendas; creamos armaduras de seguridad y elegancia. Trabajamos exclusivamente con patronistas y sastres de amplia trayectoria en nuestra sede del <strong>Centro Comercial El Rey</strong>, cuidando la caída milimétrica de las solapas, el entallado de la cintura y la durabilidad de los tejidos.
                </p>
                <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                  <p className="text-xs italic text-stone-700 leading-relaxed">
                    "{BRAND_CONCEPT.mission}"
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 bg-white rounded-xl p-5 border border-stone-200 shadow-xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5 text-[#4E6B32]">
                  <Scissors className="w-4 h-4" />
                  Nuestros Pilares de Confección
                </h4>
                <ul className="text-xs space-y-2 text-stone-700">
                  {BRAND_CONCEPT.values.map((val, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: PÚBLICO OBJETIVO */}
        {activeTab === 'publico' && (
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#8B2643] uppercase tracking-wider block mb-1">
                A Quiénes Vendemos
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                Diseñado para Mujeres que Dejan Huella
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Nuestras clientas encuentran en Expresion's New la prenda exacta para su profesión y momentos clave de su carrera.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TARGET_AUDIENCE.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 rounded-xl p-5 border border-stone-200/80 flex flex-col justify-between hover:border-stone-300 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-[#8B2643] uppercase tracking-wider text-[11px]">
                        {item.role}
                      </span>
                      <span className="font-mono text-stone-400">0{idx + 1}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-stone-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 text-[11px] text-[#4E6B32] font-medium">
                    Prendas ideales: <strong>{item.idealSuits}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: TIPOS DE VENTA */}
        {activeTab === 'ventas' && (
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#8B2643] uppercase tracking-wider block mb-1">
                Modalidades de Atención
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                Venta por Menor, por Mayor y Confección Corporativa
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Flexibilidad total para compras individuales, boutiques y contratos corporativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SALES_TYPES.map((sale) => (
                <div
                  key={sale.id}
                  className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {sale.id === 'mayor' && (
                    <div className="absolute top-0 right-0 bg-[#4E6B32] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                      Mayorista
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-semibold text-[#8B2643] uppercase tracking-wider block mb-1">
                      {sale.tagline}
                    </span>
                    <h4 className="font-display font-bold text-xl text-stone-900 mb-3">
                      {sale.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {sale.description}
                    </p>

                    <ul className="text-xs text-stone-700 space-y-2 mb-6">
                      {sale.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/51978095313?text=${encodeURIComponent(
                      `¡Hola Expresion's New! Deseo consultar información y cotización para: ${sale.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-[#8B2643] hover:bg-[#721C34] text-white text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{sale.ctaText}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: DATOS COMERCIALES & CONDICIONES */}
        {activeTab === 'comercial' && (
          <div className="bg-stone-50 rounded-2xl p-5 sm:p-8 border border-stone-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Location & Contact */}
              <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-[#8B2643] font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <h4>Ubicación & Tienda Física</h4>
                </div>
                <div className="text-xs text-stone-700 space-y-1.5">
                  <strong className="block text-stone-900 text-sm">
                    {COMMERCIAL_DATA.location.address}
                  </strong>
                  <p>{COMMERCIAL_DATA.location.details}</p>
                  <p className="text-stone-500">{COMMERCIAL_DATA.location.city}</p>
                  <p className="text-[11px] text-[#4E6B32] font-medium pt-1">
                    {COMMERCIAL_DATA.location.landmarks}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Horario:</span>
                  <span className="font-semibold text-stone-800">{COMMERCIAL_DATA.contact.hours}</span>
                </div>
              </div>

              {/* Shipping & National Agencies */}
              <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-[#4E6B32] font-bold text-sm">
                  <Truck className="w-4 h-4" />
                  <h4>Modalidad de Envíos</h4>
                </div>
                <p className="text-xs text-stone-600">
                  {COMMERCIAL_DATA.shipping.coverage}
                </p>
                <div className="text-xs space-y-1 text-stone-700">
                  <span className="font-semibold text-stone-900 block text-[11px]">Agencias autorizadas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {COMMERCIAL_DATA.shipping.agencies.map((agency) => (
                      <span
                        key={agency}
                        className="text-[11px] bg-stone-100 px-2 py-0.5 rounded text-stone-700 font-medium border border-stone-200"
                      >
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 pt-1">
                  Envíos express en Lima Metropolitana con motorizado el mismo día.
                </p>
              </div>

              {/* Payment Methods & Policies */}
              <div className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-[#8B2643] font-bold text-sm">
                  <CreditCard className="w-4 h-4" />
                  <h4>Medios de Pago & Garantía</h4>
                </div>
                <div className="text-xs space-y-2 text-stone-700">
                  <div>
                    <span className="font-semibold text-stone-900 block text-[11px]">Billeteras Digitales:</span>
                    <span className="text-stone-600">Yape · Plin (al 978 095 313)</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block text-[11px]">Bancos:</span>
                    <span className="text-stone-600">BCP · BBVA · Interbank · Banco de la Nación</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block text-[11px]">Garantía:</span>
                    <span className="text-stone-600">{COMMERCIAL_DATA.policies.fitting}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 5: REDES SOCIALES */}
        {activeTab === 'redes' && (
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#8B2643] uppercase tracking-wider block mb-1">
                Conéctate con Nosotros
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                Encuéntranos en Redes Sociales
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Síguenos para conocer lanzamientos de nuevos colores en calidad Gazú, testimonios y directos desde tienda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-50 hover:bg-white rounded-xl p-5 border border-stone-200 hover:border-stone-300 transition-all shadow-xs group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8B2643] group-hover:text-[#4E6B32] transition-colors mb-3">
                      {social.platform.includes('WhatsApp') ? (
                        <MessageCircle className="w-5 h-5 text-emerald-600" />
                      ) : social.platform.includes('TikTok') ? (
                        <Video className="w-5 h-5 text-black" />
                      ) : social.platform.includes('Instagram') ? (
                        <Camera className="w-5 h-5 text-pink-600" />
                      ) : (
                        <Facebook className="w-5 h-5 text-blue-600" />
                      )}
                    </div>

                    <h4 className="font-display font-bold text-base text-stone-900">
                      {social.platform}
                    </h4>
                    <span className="text-xs font-semibold text-[#8B2643] block mt-0.5">
                      {social.handle}
                    </span>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {social.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-[#4E6B32] group-hover:underline">
                    <span>Seguir cuenta</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
