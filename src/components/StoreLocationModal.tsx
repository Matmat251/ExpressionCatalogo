/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { STORE_INFO } from '../data/catalog';
import {
  X,
  MapPin,
  Phone,
  Clock,
  Calendar,
  MessageCircle,
  CheckCircle,
  Building2,
  Navigation,
} from 'lucide-react';

interface StoreLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocationModal: React.FC<StoreLocationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('11:00');
  const [clientName, setClientName] = useState('');
  const [booked, setBooked] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus close button on open without scrolling & handle Escape
  useEffect(() => {
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentDate || !clientName) return;

    setBooked(true);

    const message = `¡Hola Expresion's New! Deseo agendar una visita y prueba de sastres en la tienda:
👤 *Cliente:* ${clientName}
📅 *Fecha:* ${appointmentDate}
⏰ *Hora:* ${appointmentTime}
📍 *Lugar:* Centro Comercial El REY tda. 342 - D

¿Me podrían confirmar si tienen disponibilidad para esa hora? ¡Muchas gracias!`;

    setTimeout(() => {
      window.open(`https://wa.me/51978095313?text=${encodeURIComponent(message)}`, '_blank');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-stone-950/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F4]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4E6B32]/10 text-[#4E6B32] flex items-center justify-center">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 id="store-modal-title" className="font-display font-bold text-lg sm:text-xl text-stone-900 leading-tight">
                Tienda & Taller de Sastrería
              </h2>
              <span className="text-[11px] text-stone-500">
                {STORE_INFO.address}
              </span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto overscroll-contain space-y-6">
          
          {/* Main location card */}
          <div className="bg-gradient-to-br from-[#8B2643]/5 via-white to-[#4E6B32]/5 rounded-xl p-5 border border-stone-200 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B2643] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base text-stone-900">
                  Centro Comercial El REY
                </h3>
                <p className="text-sm font-semibold text-[#8B2643]">
                  Tienda 342 - D (Tercer Nivel)
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Ubicados estratégicamente en el corazón de la moda de Gamarra (Jr. Gamarra con Jr. Antonio Bazo, La Victoria, Lima).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-stone-100">
              <div className="flex items-center gap-2 text-stone-700">
                <Clock className="w-4 h-4 text-[#4E6B32] shrink-0" />
                <span><strong>Horario:</strong> {STORE_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Phone className="w-4 h-4 text-[#8B2643] shrink-0" />
                <span>
                  <strong>Celular:</strong>{' '}
                  <a href={`tel:${STORE_INFO.phoneDisplay.replace(/\s+/g, '')}`} className="underline font-bold text-[#8B2643]">
                    {STORE_INFO.phoneDisplay}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Fitting Room and Tailoring in Store perks */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide">
              ¿Qué encontrarás en nuestra tienda física?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Probadores Cómodos y Privados</strong>
                  <span className="text-stone-600">Pruébate los diferentes cortes y siente la caída de las telas.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Sastres Maestros en Taller</strong>
                  <span className="text-stone-600">Entallado gratuito en basta, mangas y cintura en el acto.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Muestrario de Telas Finitas</strong>
                  <span className="text-stone-600">Catálogo físico de lana fría, casimir inglés y crepé en más de 20 colores.</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4E6B32] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Medidas a Domicilio o Corporativo</strong>
                  <span className="text-stone-600">Atendemos pedidos por mayor y uniformes para empresas e instituciones.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Scheduler */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide flex items-center gap-1.5 mb-3 text-[#8B2643]">
              <Calendar className="w-4 h-4" />
              Agendar Cita de Prueba & Asesoría Personalizada
            </h4>

            {booked ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  ¡Cita registrada! Se ha abierto WhatsApp para que confirmes tu llegada con nuestro equipo en C.C. El Rey.
                </span>
              </div>
            ) : (
              <form onSubmit={handleBookVisit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Tu Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carmen Salazar"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Fecha de Visita</label>
                    <input
                      type="date"
                      required
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Hora Estimada</label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:30">06:30 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B2643] hover:bg-[#6E1A32] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs min-h-[44px] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Confirmar Cita vía WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-t border-[#E7E0D8] bg-[#FAF7F4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-600 font-medium text-center sm:text-left flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4E6B32]" aria-hidden="true" />
            <span>¡Te esperamos en Centro Comercial El REY tda. 342 - D!</span>
          </span>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4E6B32] hover:bg-[#3D5324] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-2xs min-h-[44px] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
