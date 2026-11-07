/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProductSuit } from '../utils/tailoring';
import { SuitVisual } from './SuitVisual';
import { MessageCircle, ShoppingBag, Eye, Star, Layers } from 'lucide-react';

interface ProductCardProps {
  product: ProductSuit;
  onOpenDetails: (product: ProductSuit) => void;
  onQuickAdd: (product: ProductSuit, color: string, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onQuickAdd,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, selectedColor.name, selectedSize);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const whatsappInquiryUrl = `https://wa.me/51978095313?text=${encodeURIComponent(
    `Hola Expresion's New, deseo consultar disponibilidad y cotizar la prenda "${product.name}" (${product.subtitle}) en talla ${selectedSize} y color ${selectedColor.name}.`
  )}`;

  return (
    <div
      className="group flex flex-col bg-white rounded-2xl border border-[#E7E0D8] shadow-[0_4px_20px_-4px_rgba(42,46,53,0.05)] hover:shadow-[0_16px_32px_-6px_rgba(139,38,67,0.1)] hover:border-[#8B2643]/35 transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => onOpenDetails(product)}
      data-testid={`product-card-${product.id}`}
    >
      {/* Top Visual Area */}
      <div className="relative p-2.5 pb-0 bg-gradient-to-b from-[#FDFCFB] to-[#F5EFEB]">
        <SuitVisual
          product={product}
          activeColorHex={selectedColor.hex}
          aspect="card"
        />

        {/* Pieces indicator (2 piezas / 3 piezas) */}
        {product.pieces && product.pieces !== 'individual' && (
          <div className="absolute top-3 right-3 z-10 text-[10px] font-semibold text-stone-700 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-2xs border border-stone-200/80 uppercase tracking-wider">
            {product.pieces}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Unboxed Metadata with · separator */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1.5">
            <span className="uppercase tracking-[0.14em] text-[10px] sm:text-[11px] text-[#4E6B32] font-semibold">
              {product.category === 'conjunto'
                ? 'Conjunto Sastre'
                : product.category === 'blazer'
                ? 'Blazer Sastrero'
                : product.category === 'blusa'
                ? 'Blusa Ejecutiva'
                : 'Pantalón de Vestir'}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-[11px] text-stone-600">{product.cut}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" aria-hidden="true" />
              {product.rating}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-bold text-base sm:text-lg text-[#1C1917] group-hover:text-[#8B2643] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatch Picker with comfortable touch targets */}
        <div className="pt-1">
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-2">
            <span>Color: <strong className="text-stone-800 font-semibold">{selectedColor.name}</strong></span>
            {selectedColor.angles ? (
              <span className="text-stone-500 font-medium text-[10px]">
                3 ángulos (Frontal/Lado/Trasera)
              </span>
            ) : (
              <span className="text-stone-400">{product.sizes.length} tallas</span>
            )}
          </div>
          <div
            className="flex items-center gap-2 flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {product.colors.map((c) => {
              const isSelected = selectedColor.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  aria-pressed={isSelected}
                  className={`w-6.5 h-6.5 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8B2643] ${
                    isSelected
                      ? 'border-[#8B2643] scale-110 shadow-xs ring-2 ring-[#8B2643]/30'
                      : 'border-white hover:scale-105 shadow-2xs'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Seleccionar color ${c.name}${isSelected ? ' (seleccionado)' : ''}`}
                  title={`${c.name}${c.angles ? ' · Disponible en 3 ángulos' : ''}`}
                >
                  {isSelected && (
                    <span
                      className="w-1.5 h-1.5 rounded-full shadow-xs"
                      style={{
                        backgroundColor:
                          c.hex.toLowerCase() === '#ffffff' ||
                          c.hex.toLowerCase() === '#f4efe6' ||
                          c.hex.toLowerCase() === '#e8dfd8' ||
                          c.hex.toLowerCase() === '#faf7f4'
                            ? '#24262B'
                            : '#ffffff',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modality (Menor & Mayor) and Actions */}
        <div className="pt-3 border-t border-[#E7E0D8]/80 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-[#8B2643] tracking-wider uppercase block">
              Venta Mayor & Menor
            </span>
            <span className="text-[10px] text-stone-500 font-medium">
              Tallas {product.sizes[0]} a {product.sizes[product.sizes.length - 1]}
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleAddToCart}
              className={`px-3 py-2 min-h-[40px] rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                addedNotice
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 hover:bg-stone-200/90 text-stone-800'
              }`}
              title="Agregar a cotización"
              aria-label={`Agregar ${product.name} a cotización`}
            >
              <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">
                {addedNotice ? '¡Agregado!' : '+ Cotizar'}
              </span>
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-h-[40px] min-w-[40px] bg-[#4E6B32] hover:bg-[#3D5324] text-white rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center shadow-2xs"
              title="Consultar por WhatsApp"
              aria-label={`Consultar ${product.name} por WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="p-2.5 min-h-[40px] min-w-[40px] bg-[#8B2643] hover:bg-[#6E1A32] text-white rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center shadow-2xs"
              title="Ver detalles completos"
              aria-label={`Ver detalles de ${product.name}`}
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
