/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ProductSuit, BodyMeasurements } from '../utils/tailoring';
import { SuitVisual } from './SuitVisual';
import {
  X,
  Check,
  Ruler,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Scissors,
  CheckCircle,
  Layers,
  ShieldCheck,
  RotateCw,
} from 'lucide-react';

interface ProductModalProps {
  product: ProductSuit | null;
  onClose: () => void;
  onAddToCart: (
    product: ProductSuit,
    color: string,
    fabric: string,
    size: string,
    customMeasurements?: BodyMeasurements,
    customFinish?: any,
    orderType?: 'menor' | 'mayor' | 'confeccion'
  ) => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedFabric, setSelectedFabric] = useState(product.fabrics[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [orderType, setOrderType] = useState<'menor' | 'mayor' | 'confeccion'>('menor');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedAngle, setSelectedAngle] = useState<'frontal' | 'lado' | 'trasera'>('frontal');

  // Bespoke customizations
  const [pocketStyle, setPocketStyle] = useState('Bolsillos con tapeta funcional y vivo');
  const [buttonStyle, setButtonStyle] = useState('Botón clásico biselado sastre');
  const [liningColor, setLiningColor] = useState('Satén a tono sedoso');
  const [includeInitials, setIncludeInitials] = useState(false);
  const [initials, setInitials] = useState('');

  // Optional custom measurements
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');

  const [addedToast, setAddedToast] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus close button on open (preventScroll: true) and handle Escape + Arrow Left/Right gallery navigation
  useEffect(() => {
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        // Navigate gallery or multi-angle photos forward
        if (product.galleryImages && product.galleryImages.length > 1) {
          const currentImg = previewImage || selectedColor.image || product.primaryImage || '';
          const currentIdx = product.galleryImages.indexOf(currentImg);
          const nextIdx = currentIdx >= 0 ? (currentIdx + 1) % product.galleryImages.length : 0;
          setPreviewImage(product.galleryImages[nextIdx]);
        } else if (selectedColor.angles) {
          const angles: ('frontal' | 'lado' | 'trasera')[] = ['frontal', 'lado', 'trasera'];
          const currentIdx = angles.indexOf(selectedAngle);
          const nextAngle = angles[(currentIdx + 1) % angles.length];
          setSelectedAngle(nextAngle);
          setPreviewImage(selectedColor.angles[nextAngle]);
        }
      } else if (e.key === 'ArrowLeft') {
        // Navigate gallery or multi-angle photos backward
        if (product.galleryImages && product.galleryImages.length > 1) {
          const currentImg = previewImage || selectedColor.image || product.primaryImage || '';
          const currentIdx = product.galleryImages.indexOf(currentImg);
          const prevIdx = currentIdx >= 0
            ? (currentIdx - 1 + product.galleryImages.length) % product.galleryImages.length
            : product.galleryImages.length - 1;
          setPreviewImage(product.galleryImages[prevIdx]);
        } else if (selectedColor.angles) {
          const angles: ('frontal' | 'lado' | 'trasera')[] = ['frontal', 'lado', 'trasera'];
          const currentIdx = angles.indexOf(selectedAngle);
          const prevAngle = angles[(currentIdx - 1 + angles.length) % angles.length];
          setSelectedAngle(prevAngle);
          setPreviewImage(selectedColor.angles[prevAngle]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, product, selectedColor, selectedAngle, previewImage]);

  const handleAdd = () => {
    const customMeasurements: BodyMeasurements | undefined =
      showMeasurements && bust && waist && hip
        ? {
            bust: parseFloat(bust) || 0,
            waist: parseFloat(waist) || 0,
            hip: parseFloat(hip) || 0,
          }
        : undefined;

    const customFinish = {
      pocketType: pocketStyle,
      buttonType: buttonStyle,
      liningColor: liningColor,
      embroideredInitials: includeInitials && initials ? initials.trim().toUpperCase() : undefined,
    };

    onAddToCart(
      product,
      selectedColor.name,
      selectedFabric,
      selectedSize,
      customMeasurements,
      customFinish,
      orderType
    );

    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 900);
  };

  const whatsappDirectUrl = `https://wa.me/51978095313?text=${encodeURIComponent(
    `¡Hola Expresion's New! Deseo consultar y cotizar la prenda "${product.name}" (${product.subtitle})
• Modalidad: ${orderType === 'mayor' ? 'VENTA POR MAYOR' : orderType === 'confeccion' ? 'CONFECCIÓN CORPORATIVA' : 'VENTA POR MENOR'}
• Talla: ${selectedSize}
• Color: ${selectedColor.name}
• Tela: ${selectedFabric}
${showMeasurements && bust ? `• Medidas: Busto ${bust}cm, Cintura ${waist}cm, Cadera ${hip}cm\n` : ''}
¿Tienen disponibilidad en Centro Comercial El Rey tda. 342 - D?`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-stone-950/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-suit-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F4]">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#8B2643] uppercase tracking-[0.16em] block">
              Sastrería Fina Femenina · Expresion's New
            </span>
            <div className="flex items-center gap-3">
              <h2 id="modal-suit-title" className="font-display font-bold text-xl sm:text-2xl text-stone-900 leading-tight">
                {product.name}
              </h2>
              {product.galleryImages && product.galleryImages.length > 1 && (
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                  ← / → fotos
                </span>
              )}
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

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Visual Rendering and Tailoring Callouts */}
            <div className="md:col-span-5 flex flex-col space-y-4">
              <SuitVisual
                product={product}
                activeColorHex={selectedColor.hex}
                imageOverride={previewImage || undefined}
                aspect="detail"
                highlightPockets={true}
                selectedAngle={selectedAngle}
                onAngleChange={(ang) => setSelectedAngle(ang)}
              />

              {/* Selector de ángulos discreto únicamente si la prenda cuenta con fotografía multi-ángulo (Pantalones) */}
              {selectedColor.angles && (
                <div className="flex items-center justify-between bg-stone-50 border border-stone-200/80 rounded-xl p-2.5">
                  <span className="text-xs text-stone-600 font-medium">
                    Ángulo de corte ({selectedColor.name}):
                  </span>
                  <div className="flex items-center gap-1.5">
                    {(['frontal', 'lado', 'trasera'] as const).map((angleKey) => {
                      const label = angleKey === 'frontal' ? 'Frontal' : angleKey === 'lado' ? 'De Lado' : 'Espalda';
                      const imgUrl = selectedColor.angles![angleKey];
                      const isCurrent = previewImage === imgUrl || (!previewImage && selectedAngle === angleKey);
                      return (
                        <button
                          key={angleKey}
                          type="button"
                          onClick={() => {
                            setPreviewImage(imgUrl);
                            setSelectedAngle(angleKey);
                          }}
                          className={`py-1 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-[#8B2643] text-white shadow-xs'
                              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Gallery of photos for products with multiple color/chaleco images */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium">
                    <span>Galería de fotos ({product.galleryImages.length} fotos)</span>
                    <span className="text-[#8B2643] text-[10px]">Click para alternar vista</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {product.galleryImages.map((imgUrl, idx) => {
                      const isChaleco = imgUrl.toLowerCase().includes('chaleco');
                      const isMultiAnglePant =
                        imgUrl.toLowerCase().includes('pantalon_lady_luna') ||
                        imgUrl.toLowerCase().includes('pantalon_lady_secret');
                      const matchedColor =
                        product.colors.find((c) => c.image === imgUrl) ||
                        product.colors.find((c) => {
                          const lower = imgUrl.toLowerCase();
                          if (lower.includes('acero') && c.name.toLowerCase().includes('acero')) return true;
                          if (lower.includes('camello') && c.name.toLowerCase().includes('camello')) return true;
                          if (lower.includes('topo') && c.name.toLowerCase().includes('topo')) return true;
                          if (lower.includes('plomo_intenso') && (c.name.toLowerCase().includes('intenso') || c.name.toLowerCase().includes('plomo'))) return true;
                          if (lower.includes('marron') && c.name.toLowerCase().includes('marr')) return true;
                          if (lower.includes('plomo_plata') && c.name.toLowerCase().includes('plata')) return true;
                          if (lower.includes('plomo_rata') && c.name.toLowerCase().includes('rata')) return true;
                          if (lower.includes('beige') && c.name.toLowerCase().includes('beige')) return true;
                          if (lower.includes('palorosa') && c.name.toLowerCase().includes('palo')) return true;
                          if (lower.includes('perla') && c.name.toLowerCase().includes('perla')) return true;
                          if (lower.includes('azul_barcelona') && c.name.toLowerCase().includes('barcelona')) return true;
                          if (lower.includes('caqui') && c.name.toLowerCase().includes('caqui')) return true;
                          if ((lower.includes('charcoal') || lower.includes('charcol')) && c.name.toLowerCase().includes('charcoal')) return true;
                          if (lower.includes('plomo') && c.name.toLowerCase().includes('plomo')) return true;
                          if (lower.includes('negro') && c.name.toLowerCase().includes('negro')) return true;
                          if (lower.includes('marino') && c.name.toLowerCase().includes('marino')) return true;
                          if ((lower.includes('azul_noche') || lower.includes('azulnoche')) && c.name.toLowerCase().includes('noche')) return true;
                          if (lower.includes('petroleo') && c.name.toLowerCase().includes('petróleo')) return true;
                          return false;
                        });

                      const currentActive = previewImage || selectedColor.image || product.primaryImage;
                      const isSelected = currentActive === imgUrl;

                      // Smart badge label
                      let shortName = matchedColor
                        ? matchedColor.name.includes('Acero')
                          ? 'Acero'
                          : matchedColor.name.includes('Camello')
                          ? 'Camello'
                          : matchedColor.name.includes('Topo')
                          ? 'Topo'
                          : matchedColor.name.includes('Intenso')
                          ? 'P. Intenso'
                          : matchedColor.name.includes('Plata')
                          ? 'P. Plata'
                          : matchedColor.name.includes('Rata')
                          ? 'P. Rata'
                          : matchedColor.name.includes('Marrón')
                          ? 'Marrón'
                          : matchedColor.name.includes('Beige')
                          ? 'Beige'
                          : matchedColor.name.includes('Botella')
                          ? 'V. Botella'
                          : matchedColor.name.includes('Petróleo')
                          ? 'V. Petróleo'
                          : matchedColor.name.includes('Palo')
                          ? 'Palo Rosa'
                          : matchedColor.name.includes('Barcelona')
                          ? 'Barcelona'
                          : matchedColor.name.includes('Chicle')
                          ? 'Chicle'
                          : matchedColor.name.includes('Marino')
                          ? 'Marino'
                          : matchedColor.name.includes('Noche')
                          ? 'Noche'
                          : matchedColor.name.split(' ')[0]
                        : `Vista ${idx + 1}`;

                      let label = shortName;
                      if (isMultiAnglePant) {
                        const angleName = imgUrl.includes('frontal') ? 'Frontal' : imgUrl.includes('lado') ? 'Perfil' : 'Espalda';
                        label = `${shortName} ${angleName}`;
                      } else if (isChaleco) {
                        label = `${shortName} Chaleco`;
                      } else if (
                        product.id === 'lady-smoking-3p' ||
                        product.id === 'lady-espiga-3p' ||
                        product.id === 'miss-classic-3p'
                      ) {
                        label = `${shortName} 3 Pzas`;
                      } else if (
                        product.id === 'lady-smoking-2p' ||
                        product.id === 'lady-espiga-2p' ||
                        product.id === 'miss-classic-2p'
                      ) {
                        label = `${shortName} 2 Pzas`;
                      }

                      return (
                        <button
                          key={imgUrl + idx}
                          type="button"
                          onClick={() => {
                            setPreviewImage(imgUrl);
                            if (matchedColor) setSelectedColor(matchedColor);
                            if (imgUrl.includes('frontal')) setSelectedAngle('frontal');
                            else if (imgUrl.includes('lado')) setSelectedAngle('lado');
                            else if (imgUrl.includes('trasera')) setSelectedAngle('trasera');
                          }}
                          className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer group/thumb ${
                            isSelected
                              ? 'border-[#8B2643] ring-2 ring-[#8B2643]/30 scale-105 shadow-sm'
                              : 'border-stone-200 opacity-75 hover:opacity-100 hover:border-stone-400'
                          }`}
                          title={`${label} · ${matchedColor?.name || product.name}`}
                        >
                          <img
                            src={imgUrl}
                            alt={label}
                            className="w-full h-full object-cover object-top"
                          />
                          <span
                            className={`absolute bottom-0 inset-x-0 text-[8px] font-semibold text-center py-0.5 truncate px-0.5 ${
                              isChaleco
                                ? 'bg-[#4E6B32]/90 text-white'
                                : 'bg-stone-900/85 text-white'
                            }`}
                          >
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Flyer specific tailoring features */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2.5 text-xs">
                <div className="font-bold text-stone-900 uppercase tracking-wide text-[11px] flex items-center gap-1.5 text-[#8B2643]">
                  <Scissors className="w-3.5 h-3.5" />
                  Especificaciones de Taller
                </div>
                <div className="flex items-start gap-2 text-stone-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                  <span><strong>Corte:</strong> {product.cut}</span>
                </div>
                <div className="flex items-start gap-2 text-stone-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                  <span><strong>Bolsillos:</strong> {product.details.pockets}</span>
                </div>
                <div className="flex items-start gap-2 text-stone-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                  <span><strong>Cierre y Botones:</strong> {product.details.closure}</span>
                </div>
                {product.details.lapel && (
                  <div className="flex items-start gap-2 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#4E6B32] shrink-0 mt-0.5" />
                    <span><strong>Solapa:</strong> {product.details.lapel}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Customization Controls */}
            <div className="md:col-span-7 flex flex-col space-y-5">
              
              {/* Product Info & Modality Header */}
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-3">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-[11px] text-[#4E6B32] font-semibold mt-1">
                    Recomendado para: {product.recommendedFor}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">Cotización</span>
                  <span className="text-xs sm:text-sm font-bold text-[#4E6B32] block">
                    {orderType === 'mayor' ? 'Venta por Mayor' : orderType === 'confeccion' ? 'Confección a Medida' : 'Venta por Menor'}
                  </span>
                  <span className="text-[10px] text-stone-500">
                    Curvas, docenas y entallado
                  </span>
                </div>
              </div>

              {/* Order Type Toggle (Menor / Mayor / Confección) */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-2">
                  Modalidad de Compra
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('menor')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer text-center ${
                      orderType === 'menor'
                        ? 'border-[#8B2643] bg-rose-50/50 text-[#8B2643] ring-1 ring-[#8B2643]'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Por Menor
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('mayor')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer text-center ${
                      orderType === 'mayor'
                        ? 'border-[#4E6B32] bg-emerald-50/50 text-[#4E6B32] ring-1 ring-[#4E6B32]'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Por Mayor
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('confeccion')}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer text-center ${
                      orderType === 'confeccion'
                        ? 'border-stone-800 bg-stone-100 text-stone-900 ring-1 ring-stone-800'
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    Confección / Corp.
                  </button>
                </div>
              </div>

              {/* 1. Color Selector */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-2">
                  Color seleccionado: <strong className="text-[#8B2643] font-bold">{selectedColor.name}</strong>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor.name === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedColor(c);
                          if (c.angles) {
                            setPreviewImage(null);
                            setSelectedAngle('frontal');
                          } else {
                            setPreviewImage(c.image || null);
                          }
                        }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#8B2643] bg-rose-50/60 text-[#8B2643] ring-1 ring-[#8B2643] font-semibold'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0 ${
                            isSelected ? 'ring-2 ring-[#8B2643]/30 scale-105' : ''
                          }`}
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-[#8B2643] shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Fabric Quality */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Calidad de Tela: <span className="text-[#4E6B32]">{selectedFabric}</span>
                </label>
                <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#4E6B32] shrink-0" />
                  <span>
                    Confeccionado en <strong>{product.fabrics.join(' / ')}</strong>: tejido sastrero de máxima durabilidad, caída pesada y resistencia a arrugas.
                  </span>
                </div>
              </div>

              {/* 3. Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-stone-800">
                    Talla ({product.sizes.length} disponibles)
                  </label>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="inline-flex items-center gap-1 text-[11px] text-[#8B2643] font-medium hover:underline cursor-pointer"
                  >
                    <Ruler className="w-3 h-3" />
                    ¿Dudas con tu talla? Ver calculadora
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#8B2643] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Custom Personal Measurements */}
              <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/60">
                <button
                  type="button"
                  onClick={() => setShowMeasurements(!showMeasurements)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-stone-800 cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Scissors className="w-4 h-4 text-[#8B2643]" />
                    ¿Deseas entallado exacto a tus medidas? (Opcional)
                  </span>
                  <span className="text-[#8B2643]">
                    {showMeasurements ? 'Ocultar' : '+ Indicar Medidas'}
                  </span>
                </button>

                {showMeasurements && (
                  <div className="mt-3 pt-3 border-t border-stone-200 grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">Busto (cm)</label>
                      <input
                        type="number"
                        placeholder="Ej. 90"
                        value={bust}
                        onChange={(e) => setBust(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">Cintura (cm)</label>
                      <input
                        type="number"
                        placeholder="Ej. 72"
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">Cadera (cm)</label>
                      <input
                        type="number"
                        placeholder="Ej. 98"
                        value={hip}
                        onChange={(e) => setHip(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
                      />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-t border-[#E7E0D8] bg-[#FAF7F4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4E6B32]" aria-hidden="true" />
            <span>Tienda: <strong>C.C. El REY tda. 342 - D</strong> (Gamarra)</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#4E6B32] hover:bg-[#3D5324] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-2xs whitespace-nowrap min-h-[44px] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Pedir por WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center justify-center gap-2 bg-[#8B2643] hover:bg-[#6E1A32] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer min-h-[44px] active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{addedToast ? '¡Agregado a tu Cotización!' : 'Agregar a Cotización'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
