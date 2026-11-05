/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartItem, calculateCartTotals, buildWhatsAppQuoteUrl } from '../utils/tailoring';
import { STORE_INFO } from '../data/catalog';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  Scissors,
  CheckCircle2,
  Calendar,
  Truck,
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('Lima');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'menor' | 'mayor' | 'confeccion'>('menor');
  const [customerNotes, setCustomerNotes] = useState('');

  const totals = calculateCartTotals(items);

  const whatsappUrl = buildWhatsAppQuoteUrl(items, {
    name: customerName,
    phone: customerPhone,
    city: customerCity,
    orderType: orderType,
    notes: customerNotes,
  });

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-[#FAF7F4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#8B2643]/10 text-[#8B2643] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cart-title" className="font-display font-bold text-base text-stone-900">
                Mi Cotización de Prendas
              </h2>
              <span className="text-[11px] text-stone-500">
                {totals.itemCount} {totals.itemCount === 1 ? 'prenda' : 'prendas'} seleccionadas
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Cerrar cotizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mb-3 text-stone-400">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-stone-800 text-base mb-1">
                Tu cotización está vacía
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mb-4">
                Explora los conjuntos Lady Smoking, Lady Espiga, Miss Classic, blazers y pantalones en calidad Gazú.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-[#8B2643] hover:underline cursor-pointer"
              >
                ← Volver al catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 space-y-2 relative"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-sm text-stone-900 leading-snug">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-stone-500 flex flex-wrap gap-x-2 gap-y-0.5 mt-0.5">
                        <span>Talla: <strong className="text-stone-700">{item.selectedSize}</strong></span>
                        <span>·</span>
                        <span>Color: <strong className="text-stone-700">{item.selectedColor}</strong></span>
                        <span>·</span>
                        <span>{item.product.cut}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                      title="Eliminar de cotización"
                      aria-label={`Eliminar ${item.product.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Custom Finishes Note */}
                  {item.customFinish && (
                    <div className="text-[10px] bg-white rounded p-2 border border-stone-200/70 text-stone-600 space-y-0.5">
                      <div className="flex items-center gap-1 font-semibold text-[#8B2643]">
                        <Scissors className="w-2.5 h-2.5" />
                        Detalles:
                      </div>
                      <div>• {item.customFinish.pocketType}</div>
                      {item.customFinish.embroideredInitials && (
                        <div>• Iniciales bordadas: <strong>{item.customFinish.embroideredInitials}</strong></div>
                      )}
                      {item.customMeasurements && (
                        <div>
                          • Medidas: Busto {item.customMeasurements.bust}cm | Cintura {item.customMeasurements.waist}cm | Cadera {item.customMeasurements.hip}cm
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quantity and Line Status */}
                  <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 text-xs">
                    <div className="flex items-center border border-stone-300 rounded bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-mono font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[11px] font-bold text-[#4E6B32] uppercase bg-[#4E6B32]/10 px-2 py-0.5 rounded">
                      Para Cotizar
                    </span>
                  </div>
                </div>
              ))}

              {/* Customer Details for the WhatsApp Message */}
              <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 space-y-2.5 mt-4">
                <span className="block text-xs font-bold text-stone-800 uppercase tracking-wide">
                  Datos de la Consulta / Pedido
                </span>

                {/* Modalidad Selection */}
                <div>
                  <label className="block text-[11px] text-stone-600 mb-1">Modalidad de Pedido</label>
                  <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setOrderType('menor')}
                      className={`p-1.5 rounded border font-medium text-center cursor-pointer transition-colors ${
                        orderType === 'menor'
                          ? 'bg-[#8B2643] text-white border-[#8B2643]'
                          : 'bg-white text-stone-700 border-stone-200'
                      }`}
                    >
                      Por Menor
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('mayor')}
                      className={`p-1.5 rounded border font-medium text-center cursor-pointer transition-colors ${
                        orderType === 'mayor'
                          ? 'bg-[#4E6B32] text-white border-[#4E6B32]'
                          : 'bg-white text-stone-700 border-stone-200'
                      }`}
                    >
                      Por Mayor
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('confeccion')}
                      className={`p-1.5 rounded border font-medium text-center cursor-pointer transition-colors ${
                        orderType === 'confeccion'
                          ? 'bg-stone-800 text-white border-stone-800'
                          : 'bg-white text-stone-700 border-stone-200'
                      }`}
                    >
                      Confección
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-stone-600 mb-0.5">Tu Nombre</label>
                    <input
                      type="text"
                      placeholder="Ej. Ana Beltrán"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-2.5 py-1 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone-600 mb-0.5">Ciudad de Destino</label>
                    <input
                      type="text"
                      placeholder="Ej. Lima / Arequipa"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-2.5 py-1 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Celular de contacto</label>
                  <input
                    type="tel"
                    placeholder="978..."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded px-2.5 py-1 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-stone-600 mb-0.5">Consulta adicional</label>
                  <textarea
                    rows={2}
                    placeholder="Ej. ¿Tienen en Lady Smoking para envío por Shalom?"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded p-2 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Totals and WhatsApp Dispatch */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#FAF7F4] space-y-3">
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1.5 shadow-2xs">
              <div className="flex justify-between items-center font-bold text-stone-900">
                <span>Total de prendas a cotizar:</span>
                <span className="font-mono tabular-nums text-sm text-[#8B2643] bg-rose-50 px-2 py-0.5 rounded">
                  {totals.itemCount} {totals.itemCount === 1 ? 'prenda' : 'prendas'}
                </span>
              </div>
              <p className="text-[11px] text-stone-500 leading-snug">
                Al enviar por WhatsApp, el taller de Expresion's New te responderá con la cotización exacta según la modalidad seleccionada (por mayor, menor o confección).
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#4E6B32] hover:bg-[#3E5528] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Cotización a WhatsApp (978 095 313)</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
              <span>📍 C.C. El REY tda. 342 - D</span>
              <button
                type="button"
                onClick={onClearCart}
                className="text-stone-400 hover:text-stone-600 hover:underline cursor-pointer"
              >
                Vaciar lista
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
