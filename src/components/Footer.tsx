/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { STORE_INFO, SOCIAL_MEDIA, COMMERCIAL_DATA } from '../data/catalog';
import { ExpresionsLogo } from './ExpresionsLogo';
import { MapPin, Phone, MessageCircle, Clock, Heart, Truck, CreditCard } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onOpenLocation: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSizeGuide,
  onOpenLocation,
  onSelectCategory,
}) => {
  return (
    <footer className="bg-[#24262B] text-stone-300 pt-12 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-700/80">
          
          {/* Brand Info & Social Media */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start">
              <ExpresionsLogo variant="dark" size="md" showSlogan={true} />
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Sastrería fina femenina y taller de confección en Gamarra. Especialistas en corte princesa con calidad Gazú y lino para ejecutivas, abogadas y emprendedoras.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-rose-300 font-medium">
              <Heart className="w-3.5 h-3.5 fill-rose-300" />
              <span>{STORE_INFO.tagline}</span>
            </div>

            {/* Social media handles */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                Redes Oficiales (@expresionsnew)
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white px-2.5 py-1 rounded transition-colors text-[11px]"
                  >
                    <span>{social.platform}:</span>
                    <strong className="text-emerald-400">{social.handle}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Prendas en Stock (13 Modelos)
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Todas las Prendas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('conjunto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Conjuntos Lady Smoking (2 y 3 pzas)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('conjunto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Conjuntos Lady Espiga (2 y 3 pzas)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('conjunto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Conjuntos Miss Classic (2 y 3 pzas)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('blazer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blazers Princesa 3/4 y Miranda 2
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('pantalon')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pantalones Lady Luna y Lady Secret
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('blusa')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blusas Lino Princess
                </button>
              </li>
            </ul>
          </div>

          {/* Location, Shipping and Contact from Image */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Datos Comerciales & Envíos
            </h4>
            <div className="text-xs space-y-2.5 text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{COMMERCIAL_DATA.location.address}</strong>
                  <span>{COMMERCIAL_DATA.location.details}</span>
                  <p className="text-stone-500 text-[11px]">{COMMERCIAL_DATA.location.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F43F5E] shrink-0" />
                <div>
                  <span className="block text-[11px] text-stone-500">Celular / Pedidos</span>
                  <a
                    href={`tel:${COMMERCIAL_DATA.contact.phoneDisplay.replace(/\s+/g, '')}`}
                    className="text-white font-bold hover:underline"
                  >
                    {COMMERCIAL_DATA.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Envíos: Shalom, Olva, Marvisur y Flores a todo el Perú</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMMERCIAL_DATA.contact.hours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMMERCIAL_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4E6B32] hover:bg-[#3D5528] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Directo (978 095 313)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Expresion's New. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 text-[11px]">
            <span>Venta por Menor, Mayor y Confección</span>
            <span>·</span>
            <span>C.C. El Rey tda. 342 - D</span>
            <span>·</span>
            <span>Calidad Gazú & Lino</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
