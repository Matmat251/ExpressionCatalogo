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
      className="group flex flex-col bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-200 overflow-hidden cursor-pointer"
      onClick={() => onOpenDetails(product)}
      data-testid={`product-card-${product.id}`}
    >
      {/* Top Visual Area */}
      <div className="relative p-2.5 pb-0 bg-stone-50/50">
        <SuitVisual
          product={product}
          activeColorHex={selectedColor.hex}
          aspect="card"
        />

        {/* Subtle Text Tag */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 text-[11px] font-semibold text-[#8B2643] bg-white/95 px-2 py-0.5 rounded shadow-2xs border border-stone-200 tracking-wide uppercase">
            {product.badge}
          </div>
        )}

        {/* Pieces indicator (2 piezas / 3 piezas) */}
        {product.pieces && product.pieces !== 'individual' && (
          <div className="absolute top-4 right-4 z-10 text-[10px] font-bold text-white bg-[#4E6B32] px-2 py-0.5 rounded shadow-2xs uppercase tracking-wider">
            {product.pieces}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Unboxed Metadata with · separator */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1">
            <span className="uppercase tracking-wider text-[11px] text-[#4E6B32] font-semibold">
              {product.category === 'conjunto'
                ? 'Conjunto Sastre'
                : product.category === 'blazer'
                ? 'Blazer Sastrero'
                : product.category === 'blusa'
                ? 'Blusa Ejecutiva'
                : 'Pantalón de Vestir'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{product.cut}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-0.5 text-amber-600 font-semibold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              {product.rating}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-bold text-base text-stone-900 group-hover:text-[#8B2643] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatch Picker with comfortable touch targets */}
        <div className="pt-1">
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
            <span>Color: <strong className="text-stone-700">{selectedColor.name}</strong></span>
            {selectedColor.angles ? (
              <span className="text-[#8B2643] font-semibold text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B2643] animate-pulse" />
                Vistas 360°
              </span>
            ) : (
              <span>{product.sizes.length} tallas</span>
            )}
          </div>
          <div
            className="flex items-center gap-1.5 flex-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c)}
                className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                  selectedColor.name === c.name
                    ? 'border-[#8B2643] scale-110 shadow-xs ring-2 ring-[#8B2643]/30'
                    : 'border-stone-300 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                aria-label={`Color ${c.name}`}
                title={`${c.name}${c.angles ? ' · Toca para ver ángulos automáticos' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Modality (Menor & Mayor) and Actions */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-[#8B2643] tracking-wide uppercase block">
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
              className={`p-2 min-h-[38px] rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                addedNotice
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
              title="Agregar a cotización"
              aria-label={`Agregar ${product.name} a cotización`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {addedNotice ? '¡Agregado!' : '+ Cotizar'}
              </span>
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 min-h-[38px] min-w-[38px] bg-[#4E6B32] hover:bg-[#3E5528] text-white rounded-lg transition-colors flex items-center justify-center"
              title="Consultar por WhatsApp"
              aria-label={`Consultar ${product.name} por WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="p-2 min-h-[38px] min-w-[38px] bg-[#8B2643] hover:bg-[#721C34] text-white rounded-lg transition-colors flex items-center justify-center"
              title="Ver detalles completos"
              aria-label={`Ver detalles de ${product.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
