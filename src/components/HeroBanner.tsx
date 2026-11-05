/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CATALOG_PRODUCTS, STORE_INFO } from '../data/catalog';
import { SuitVisual } from './SuitVisual';
import {
  Sparkles,
  Layers,
  Briefcase,
  CheckCircle,
  Phone,
  MapPin,
  Heart,
  Ruler,
  MessageCircle,
  Scissors,
} from 'lucide-react';

interface HeroBannerProps {
  onOpenSizeGuide: () => void;
  onOpenLocation: () => void;
  onExploreCatalog: () => void;
  onSelectProduct: (product: any) => void;
  onScrollToAbout: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenSizeGuide,
  onOpenLocation,
  onExploreCatalog,
  onSelectProduct,
  onScrollToAbout,
}) => {
  // Flagship showcase: Lady Espiga 3 piezas with real workshop maniquí photo
  const heroSuit = CATALOG_PRODUCTS.find((p) => p.id === 'lady-espiga-3p') || CATALOG_PRODUCTS[0];
  const [selectedColorHex, setSelectedColorHex] = useState(heroSuit.colors[0].hex);
  const [selectedColorName, setSelectedColorName] = useState(heroSuit.colors[0].name);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F4] via-[#F4EFEA] to-[#FAF7F4] border-b border-stone-200/70 pt-8 pb-12 sm:pb-16 lg:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Message, Slogan, and Tailoring Value Propositions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Subtle workshop badge - No duplicate logo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#4E6B32]/10 border border-[#4E6B32]/20 text-[#4E6B32] text-xs font-semibold rounded-lg w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sastrería Fina Femenina · Centro Comercial El Rey tda. 342 - D</span>
            </div>

            {/* Main Headline from the flyer */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#8B2643]" />
                <span className="text-xs font-semibold tracking-widest text-[#8B2643] uppercase">
                  Colección Exclusiva · Calidad Gazú & Lino
                </span>
                <span className="h-px w-8 bg-[#8B2643]" />
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#2A2E35] tracking-tight leading-[1.1] text-balance">
                Venta de Sastre <br />
                <span className="text-[#8B2643] italic font-normal">— Para Dama —</span>
              </h1>

              {/* Subheading from image */}
              <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-[#8B2643] text-white font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 rounded-md shadow-xs">
                <Scissors className="w-3.5 h-3.5 shrink-0" />
                <span>{STORE_INFO.subheading}</span>
              </div>
            </div>

            {/* 3 Core Benefits from the Flyer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 sm:pt-2">
              <div className="p-3 sm:p-3.5 rounded-lg bg-white/90 border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#8B2643] font-semibold text-xs mb-1">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Diseños Elegantes</span>
                </div>
                <p className="text-[12px] text-stone-600 leading-snug">
                  Corte princesa que realza tu estilo y presencia.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-lg bg-white/90 border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#8B2643] font-semibold text-xs mb-1">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>Telas de Calidad</span>
                </div>
                <p className="text-[12px] text-stone-600 leading-snug">
                  Calidad Gazú y lino para máxima durabilidad y confort.
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-lg bg-white/90 border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-[#8B2643] font-semibold text-xs mb-1">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>Ideal Para Todo</span>
                </div>
                <p className="text-[12px] text-stone-600 leading-snug">
                  Oficina, reuniones ejecutivas y ocasiones especiales.
                </p>
              </div>
            </div>

            {/* Tailoring Details Highlight & Contact Block from the Flyer */}
            <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#8B2643]/10 flex items-center justify-center text-[#8B2643] shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Bolsillos Funcionales & Acabados Delicados
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Bolsillos reales, secreteras ocultas de seguridad, botones de alta resistencia y forros de seda.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B2643]">
                  <Heart className="w-3.5 h-3.5 fill-[#8B2643]" />
                  <span className="italic">{STORE_INFO.tagline}</span>
                </div>
              </div>

              {/* Contact and Location Strip from Flyer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <a
                  href={`tel:${STORE_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#8B2643] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                      CEL. / PEDIDOS
                    </span>
                    <span className="text-sm font-bold text-[#8B2643] tabular-nums">
                      {STORE_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={onOpenLocation}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4E6B32] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">
                      NOS ENCUENTRAS EN
                    </span>
                    <span className="text-xs font-bold text-stone-800 line-clamp-1">
                      {STORE_INFO.address}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto bg-[#8B2643] hover:bg-[#721C34] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-all hover:translate-y-[-1px] text-center cursor-pointer"
              >
                Ver Catálogo de Prendas
              </button>

              <button
                type="button"
                onClick={onScrollToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium px-5 py-3 rounded-lg border border-stone-300 shadow-2xs transition-colors cursor-pointer"
              >
                Conocer la Marca
              </button>

              <a
                href={STORE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4E6B32] hover:bg-[#3D5427] text-white text-sm font-medium px-5 py-3 rounded-lg shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp 978 095 313
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Flagship Suit Showcase (Modelo Portada) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] font-semibold text-[#8B2643] uppercase tracking-wider">
                    {heroSuit.cut} · Calidad Gazú
                  </span>
                  <h3 className="font-display font-bold text-lg text-stone-900 leading-tight">
                    {heroSuit.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">Modalidad</span>
                  <span className="text-xs font-bold text-[#4E6B32] uppercase">
                    Mayor y Menor
                  </span>
                </div>
              </div>

              {/* Visual Presentation */}
              <div className="relative mb-4">
                <SuitVisual
                  product={heroSuit}
                  activeColorHex={selectedColorHex}
                  aspect="hero"
                  highlightPockets={true}
                />
              </div>

              {/* Colorway Switcher */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Color seleccionado:</span>
                  <span className="font-semibold text-stone-800">{selectedColorName}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {heroSuit.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => {
                        setSelectedColorHex(c.hex);
                        setSelectedColorName(c.name);
                      }}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColorHex === c.hex
                          ? 'border-[#8B2643] scale-110 shadow-xs ring-2 ring-[#8B2643]/20'
                          : 'border-white hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={`Seleccionar color ${c.name}`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quick actions for hero suit */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => onSelectProduct(heroSuit)}
                  className="w-full text-center py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Detalles & Confección
                </button>
                <a
                  href={`https://wa.me/51978095313?text=${encodeURIComponent(
                    `Hola Expresion's New! Me interesa el "${heroSuit.name}" en color ${selectedColorName}. Deseo consultar disponibilidad y medidas en C.C. El Rey.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#8B2643] hover:bg-[#721C34] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Consultar Tallas
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
