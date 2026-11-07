/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExpresionsLogo } from './ExpresionsLogo';
import { STORE_INFO } from '../data/catalog';
import {
  MessageCircle,
  ShoppingBag,
  Ruler,
  MapPin,
  Phone,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Scissors,
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizeGuide: () => void;
  onOpenLocation: () => void;
  onSelectCategory: (category: string) => void;
  onScrollToAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSizeGuide,
  onOpenLocation,
  onSelectCategory,
  onScrollToAbout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro announcement strip with store coordinates from the image */}
      <div className="bg-[#721C34] text-white text-xs py-2 px-3 sm:px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs min-w-0">
            <span className="flex items-center gap-1.5 font-medium truncate text-rose-100">
              <MapPin className="w-3.5 h-3.5 text-[#F6D285] shrink-0" aria-hidden="true" />
              <span className="truncate">{STORE_INFO.address}</span>
            </span>
            <span className="hidden md:inline-block text-white/30" aria-hidden="true">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-rose-100/90 shrink-0 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#F6D285]" aria-hidden="true" />
              Cel. <strong className="text-white font-semibold">{STORE_INFO.phoneDisplay}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium shrink-0">
            <span className="font-editorial italic hidden lg:inline text-amber-100/95 text-sm tracking-wide">
              "{STORE_INFO.tagline}"
            </span>
            <a
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#4E6B32] hover:bg-[#3D5324] text-white px-3 py-1 rounded-full text-[11px] transition-all duration-200 whitespace-nowrap font-semibold shadow-2xs hover:shadow-sm active:scale-95"
              aria-label="Contactar por WhatsApp al 978 095 313"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp <span className="hidden xs:inline">978 095 313</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation complying with Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F4]/95 backdrop-blur-md border-b border-[#E7E0D8] shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-17 sm:h-20 flex items-center justify-between gap-2 sm:gap-8">
          
          {/* Mobile hamburger menu toggle (visible on < lg) */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-stone-800 hover:text-[#8B2643] rounded-xl hover:bg-stone-200/60 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#8B2643]" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8B2643] rounded-lg py-1 transition-transform group-hover:scale-[1.01]"
            aria-label="Expresion's New — Inicio"
          >
            <ExpresionsLogo size="md" showSlogan={true} />
          </a>

          {/* Zone 2: Desktop text navigation links (lg+) with luxury editorial tracking */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.14em] font-semibold text-stone-700" aria-label="Navegación principal">
            <button
              type="button"
              onClick={onScrollToAbout}
              className="hover:text-[#8B2643] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B2643] hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
            >
              Quiénes Somos
            </button>
            <a
              href="#catalogo"
              onClick={() => onSelectCategory('all')}
              className="hover:text-[#8B2643] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B2643] hover:after:w-full after:transition-all after:duration-200"
            >
              Catálogo
            </a>
            <a
              href="#catalogo"
              onClick={() => onSelectCategory('conjunto')}
              className="hover:text-[#8B2643] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B2643] hover:after:w-full after:transition-all after:duration-200"
            >
              Conjuntos
            </a>
            <button
              type="button"
              onClick={onOpenSizeGuide}
              className="inline-flex items-center gap-1.5 hover:text-[#8B2643] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B2643] hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5 text-[#8B2643]" aria-hidden="true" />
              Guía de Tallas
            </button>
            <button
              type="button"
              onClick={onOpenLocation}
              className="inline-flex items-center gap-1.5 hover:text-[#4E6B32] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4E6B32] hover:after:w-full after:transition-all after:duration-200 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4E6B32]" aria-hidden="true" />
              Tienda El Rey
            </button>
          </nav>

          {/* Zone 3: Actions (Size guide shortcut + Cart button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenSizeGuide}
              className="hidden sm:flex lg:hidden items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 hover:text-[#8B2643] rounded-lg border border-[#E7E0D8] bg-white shadow-2xs hover:bg-stone-50 transition-colors"
              aria-label="Calculadora de Tallas"
              title="Calculadora de Tallas"
            >
              <Ruler className="w-3.5 h-3.5 text-[#8B2643]" aria-hidden="true" />
              <span>Tallas</span>
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#8B2643] hover:bg-[#6E1A32] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_2px_12px_rgba(139,38,67,0.25)] hover:shadow-[0_4px_16px_rgba(139,38,67,0.35)] whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
              aria-label={`Ver cotización (${cartCount} prendas)`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Mi Cotización</span>
              <span className="sm:hidden">Cotizar</span>
              {cartCount > 0 && (
                <span className="bg-[#4E6B32] text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full tabular-nums ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E7E0D8] bg-white/98 backdrop-blur-lg shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="px-4 py-5 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8B2643] px-2">
                Navegación Rápida
              </div>

              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() =>
                    handleMobileNavClick(() => {
                      onScrollToAbout();
                    })
                  }
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Quiénes Somos & Taller</span>
                      <span className="text-xs text-stone-500">Filosofía, confección y telas</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleMobileNavClick(() => {
                      onSelectCategory('all');
                      const el = document.getElementById('catalogo');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    })
                  }
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4E6B32]/10 text-[#4E6B32] flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Catálogo Completo (13 Prendas)</span>
                      <span className="text-xs text-stone-500">Conjuntos, Blazers, Blusas y Pantalones</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleMobileNavClick(() => {
                      onSelectCategory('conjunto');
                      const el = document.getElementById('catalogo');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    })
                  }
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Conjuntos 2 & 3 Piezas</span>
                      <span className="text-xs text-stone-500">Lady Smoking, Lady Espiga y Miss Classic</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleMobileNavClick(onOpenSizeGuide)}
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Calculadora de Tallas</span>
                      <span className="text-xs text-stone-500">Calcula tu talla exacta (XS a XL)</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleMobileNavClick(onOpenLocation)}
                  className="w-full flex items-center justify-between p-3 text-left rounded-xl hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4E6B32]/10 text-[#4E6B32] flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-semibold">Tienda C.C. El Rey tda. 342 - D</span>
                      <span className="text-xs text-stone-500">Gamarra · Agendar visita o prueba</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              </div>

              {/* Direct WhatsApp Callout in Mobile Drawer */}
              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <a
                  href={STORE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#4E6B32] hover:bg-[#3D5427] text-white p-3 rounded-xl font-semibold text-sm transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por WhatsApp: 978 095 313</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

