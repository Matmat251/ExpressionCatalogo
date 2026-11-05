/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProductSuit } from '../utils/tailoring';
import { RotateCw, Play, Pause } from 'lucide-react';

interface SuitVisualProps {
  product: ProductSuit;
  activeColorHex?: string;
  imageOverride?: string;
  className?: string;
  aspect?: 'card' | 'hero' | 'detail';
  highlightPockets?: boolean;
  selectedAngle?: 'frontal' | 'lado' | 'trasera';
  onAngleChange?: (angle: 'frontal' | 'lado' | 'trasera') => void;
}

export const SuitVisual: React.FC<SuitVisualProps> = ({
  product,
  activeColorHex,
  imageOverride,
  className = '',
  aspect = 'card',
  highlightPockets = false,
  selectedAngle,
  onAngleChange,
}) => {
  const suitColor = activeColorHex || product.colors[0]?.hex || '#3E4451';

  // Garment type indicators
  const isPantsOnly = product.category === 'pantalon';
  const isBlazerOnly = product.category === 'blazer';
  const isBlouseOnly = product.category === 'blusa';
  const isThreePieces = product.pieces === '3 piezas' || product.name.includes('3 piezas');
  const isSmoking = product.name.toLowerCase().includes('smoking');
  const isEspiga = product.name.toLowerCase().includes('espiga');
  const isThreeQuarterSleeve = product.name.includes('3/4');
  const isSecretPant = product.name.toLowerCase().includes('secret');
  const isLinen = product.fabrics.some((f) => f.toLowerCase().includes('lino'));

  // Button and inner colors
  const buttonColor = isLinen ? '#78716C' : '#1F2937';
  const innerShirtColor = isSmoking ? '#F4B5C6' : isBlouseOnly ? suitColor : '#FFFFFF';

  const activeColorObj =
    product.colors.find((c) => c.hex === activeColorHex) || product.colors[0];

  // Dynamic angles support (e.g. Pantalón Lady Luna with 3 angles: frontal, lado, trasera)
  const anglesList = activeColorObj?.angles
    ? [
        { key: 'frontal' as const, label: 'Frontal', src: activeColorObj.angles.frontal },
        { key: 'lado' as const, label: 'De Lado', src: activeColorObj.angles.lado },
        { key: 'trasera' as const, label: 'Trasera', src: activeColorObj.angles.trasera },
      ]
    : null;

  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // When active color changes, reset angle to frontal and enable auto rotation
  useEffect(() => {
    setActiveAngleIndex(0);
    if (anglesList) {
      setIsAutoRotating(true);
    }
  }, [activeColorHex]);

  // Listen to external selectedAngle override if provided
  useEffect(() => {
    if (selectedAngle && anglesList) {
      const idx = anglesList.findIndex((a) => a.key === selectedAngle);
      if (idx !== -1) {
        setActiveAngleIndex(idx);
        setIsAutoRotating(false);
      }
    }
  }, [selectedAngle]);

  // Automatic angle cycling interval (1.8s per angle)
  useEffect(() => {
    if (!anglesList || !isAutoRotating || imageOverride) return;

    const interval = setInterval(() => {
      setActiveAngleIndex((prev) => (prev + 1) % anglesList.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [anglesList, isAutoRotating, imageOverride]);

  const currentAngleObj = anglesList ? anglesList[activeAngleIndex] : null;
  const activeImage =
    imageOverride ||
    (anglesList ? currentAngleObj?.src : activeColorObj?.image) ||
    product.primaryImage;

  const containerHeight =
    aspect === 'hero' ? 'h-80 sm:h-96 lg:h-[430px]' : aspect === 'detail' ? 'h-80 sm:h-96' : 'h-64 sm:h-72';

  return (
    <div
      className={`relative w-full ${containerHeight} overflow-hidden rounded-xl bg-gradient-to-b from-[#FBF9F7] via-[#F4EFEA] to-[#ECE5DC] flex items-center justify-center p-3 group select-none ${className}`}
      data-testid={`suit-visual-${product.id}`}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2A2E35 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Floating 360° Angle Auto-Rotation Badge & Controls for multi-angle garments */}
      {anglesList && (
        <div
          className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md text-white text-[11px] border border-white/20 select-none animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="p-0.5 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
            title={isAutoRotating ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
            aria-label={isAutoRotating ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
          >
            <RotateCw
              className={`w-3 h-3 text-amber-400 ${isAutoRotating ? 'animate-spin' : ''}`}
              style={{ animationDuration: '3.5s' }}
            />
            {isAutoRotating ? (
              <Pause className="w-2.5 h-2.5 text-stone-300" />
            ) : (
              <Play className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            )}
          </button>

          <span className="font-semibold text-amber-300 tracking-wide text-[10px]">
            {currentAngleObj?.label}
          </span>

          <div className="flex items-center gap-1 ml-1 border-l border-white/20 pl-1.5">
            {anglesList.map((angle, idx) => (
              <button
                key={angle.key}
                type="button"
                onClick={() => {
                  setActiveAngleIndex(idx);
                  setIsAutoRotating(false);
                  if (onAngleChange) onAngleChange(angle.key);
                }}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold transition-all cursor-pointer ${
                  idx === activeAngleIndex && !imageOverride
                    ? 'bg-amber-400 text-stone-950 shadow-xs scale-105'
                    : 'bg-white/10 hover:bg-white/25 text-stone-300'
                }`}
                title={`Ver ángulo ${angle.label}`}
              >
                {angle.label === 'Frontal' ? 'Frontal' : angle.label === 'De Lado' ? 'Perfil' : 'Espalda'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Real Photograph from User's Drive / Workshop */}
      {activeImage ? (
        <div className="relative w-full h-full flex items-center justify-center p-1">
          <img
            key={activeImage}
            src={activeImage}
            alt={`${product.name} en ${activeColorObj?.name || 'taller'} - vista ${currentAngleObj?.label || 'oficial'}`}
            className="h-full w-full object-contain object-center transition-all duration-300 group-hover:scale-[1.04] drop-shadow-sm animate-fadeIn"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        /* Main SVG Vector Fashion Tailoring Silhouette for items pending photography */
        <svg
          className="h-full w-auto max-w-[90%] filter drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
          viewBox="0 0 280 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`${product.name} en corte princesa`}
        >
        <defs>
          <linearGradient id={`garmentGrad-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={suitColor} stopOpacity="1" />
            <stop offset="60%" stopColor={suitColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#111827" stopOpacity="0.25" />
          </linearGradient>

          {/* Espiga texture pattern if applicable */}
          {isEspiga && (
            <pattern id={`espigaPat-${product.id}`} width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 0 4 L 4 0 L 8 4 L 4 8 Z" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
            </pattern>
          )}

          <filter id={`lapelShadow-${product.id}`} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ================= BLOUSE ONLY ================= */}
        {isBlouseOnly ? (
          <g id="blouse-princess">
            {/* Blouse Body */}
            <path
              d="M 85 85 L 115 70 L 165 70 L 195 85 L 185 240 L 95 240 Z"
              fill={suitColor}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="1"
            />
            {/* Princess Seams (Corte Princesa) */}
            <path d="M 115 85 C 122 130, 122 180, 118 240" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 165 85 C 158 130, 158 180, 162 240" stroke="rgba(0,0,0,0.2)" strokeWidth="1" strokeDasharray="3 2" />
            {/* Sleeves */}
            <path d="M 85 85 L 65 200 L 90 200 L 95 130 Z" fill={suitColor} />
            <path d="M 195 85 L 215 200 L 190 200 L 185 130 Z" fill={suitColor} />
            {/* Formal Collar */}
            <path d="M 115 70 L 140 100 L 165 70 L 140 85 Z" fill="#FFFFFF" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
            {/* Mother of pearl buttons */}
            <circle cx="140" cy="115" r="3" fill="#F8FAFC" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
            <circle cx="140" cy="145" r="3" fill="#F8FAFC" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
            <circle cx="140" cy="175" r="3" fill="#F8FAFC" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
            <circle cx="140" cy="205" r="3" fill="#F8FAFC" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
          </g>
        ) : isPantsOnly ? (
          /* ================= PANTS ONLY ================= */
          <g id="pants-standalone">
            {/* Standalone Pants Top & Legs */}
            <path
              d="M 95 80 L 185 80 L 200 380 L 165 380 L 142 210 L 138 210 L 115 380 L 80 380 Z"
              fill={suitColor}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="1.5"
            />
            {/* Wide Waistband (Pretina Tiro Alto) */}
            <rect x="94" y="80" width="92" height="28" rx="2" fill={suitColor} stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            
            {/* Buttons on waistband */}
            {product.subtitle.includes('2 botones') ? (
              <>
                <circle cx="134" cy="94" r="3.5" fill={buttonColor} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <circle cx="146" cy="94" r="3.5" fill={buttonColor} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
              </>
            ) : (
              <circle cx="140" cy="94" r="4" fill={buttonColor} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
            )}

            {/* Functional side pockets */}
            <line x1="98" y1="110" x2="120" y2="150" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
            <line x1="182" y1="110" x2="160" y2="150" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />

            {/* Secret Pocket (Secretera oculta) indicator */}
            {isSecretPant && (
              <g id="secret-pocket-badge">
                <rect x="150" y="86" width="28" height="15" rx="3" fill="#8B2643" opacity="0.9" />
                <text x="164" y="97" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">SECRET</text>
              </g>
            )}

            {/* Pressed creases (Raya sastre) */}
            <line x1="102" y1="120" x2="98" y2="375" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <line x1="178" y1="120" x2="182" y2="375" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          </g>
        ) : (
          /* ================= SUIT OR BLAZER ================= */
          <g id="suit-ensemble">
            {/* Inner Silk Top / Blouse */}
            <path d="M 120 75 L 140 125 L 160 75 Z" fill={innerShirtColor} />
            {isSmoking && (
              <path d="M 124 82 Q 140 98 156 82" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="1 3" strokeLinecap="round" />
            )}

            {/* Blazer Torso with Corte Princesa */}
            <path
              d="M 75 75 
                 C 90 70, 115 68, 140 68 
                 C 165 68, 190 70, 205 75 
                 L 215 130 
                 L 205 240 
                 C 190 245, 160 250, 140 250 
                 C 120 250, 90 245, 75 240 
                 L 65 130 Z"
              fill={`url(#garmentGrad-${product.id})`}
              stroke={suitColor}
              strokeWidth="1.5"
            />

            {/* Espiga texture overlay */}
            {isEspiga && (
              <path
                d="M 75 75 C 90 70, 115 68, 140 68 C 165 68, 190 70, 205 75 L 215 130 L 205 240 C 190 245, 160 250, 140 250 C 120 250, 90 245, 75 240 L 65 130 Z"
                fill={`url(#espigaPat-${product.id})`}
              />
            )}

            {/* Corte Princesa Anatomical Seams */}
            <path d="M 100 80 C 108 120, 108 170, 102 240" stroke="rgba(0,0,0,0.22)" strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 180 80 C 172 120, 172 170, 178 240" stroke="rgba(0,0,0,0.22)" strokeWidth="1" strokeDasharray="3 2" />

            {/* Sleeves (Regular vs 3/4) */}
            {isThreeQuarterSleeve ? (
              <>
                <path d="M 75 75 L 58 175 L 82 175 L 80 135 Z" fill={suitColor} />
                <path d="M 205 75 L 222 175 L 198 175 L 200 135 Z" fill={suitColor} />
                {/* Forearm visible in 3/4 sleeve */}
                <rect x="62" y="175" width="16" height="35" rx="3" fill="#F8E5D8" opacity="0.8" />
                <rect x="202" y="175" width="16" height="35" rx="3" fill="#F8E5D8" opacity="0.8" />
              </>
            ) : (
              <>
                <path d="M 75 75 L 55 190 L 75 235 L 90 220 L 80 135 Z" fill={suitColor} />
                <path d="M 205 75 L 225 190 L 205 235 L 190 220 L 200 135 Z" fill={suitColor} />
                {/* Sleeve buttons */}
                <circle cx="68" cy="225" r="2" fill={buttonColor} />
                <circle cx="71" cy="229" r="2" fill={buttonColor} />
                <circle cx="212" cy="225" r="2" fill={buttonColor} />
                <circle cx="209" cy="229" r="2" fill={buttonColor} />
              </>
            )}

            {/* Chaleco (Vest) if 3 pieces */}
            {isThreePieces && (
              <path
                d="M 110 90 L 140 145 L 170 90 L 165 195 L 140 215 L 115 195 Z"
                fill={suitColor}
                stroke="#FFFFFF"
                strokeOpacity="0.25"
                strokeWidth="1.2"
              />
            )}

            {/* Lapels: Smoking Satin vs Classic Notch */}
            {isSmoking ? (
              // Shawl / Smoking Lapels
              <>
                <path
                  d="M 115 70 C 105 110, 105 150, 136 175 L 126 70 Z"
                  fill={suitColor}
                  filter={`url(#lapelShadow-${product.id})`}
                />
                <path
                  d="M 165 70 C 175 110, 175 150, 144 175 L 154 70 Z"
                  fill={suitColor}
                  filter={`url(#lapelShadow-${product.id})`}
                />
                {/* Satin rim shine */}
                <path d="M 116 72 C 107 110, 107 148, 135 174" stroke="#FCD34D" strokeWidth="0.8" fill="none" opacity="0.6" />
                <path d="M 164 72 C 173 110, 173 148, 145 174" stroke="#FCD34D" strokeWidth="0.8" fill="none" opacity="0.6" />
              </>
            ) : (
              // Classic Notch Lapels
              <>
                <path
                  d="M 110 70 L 100 110 L 115 115 L 108 150 L 136 175 L 122 70 Z"
                  fill={suitColor}
                  filter={`url(#lapelShadow-${product.id})`}
                />
                <path
                  d="M 170 70 L 180 110 L 165 115 L 172 150 L 144 175 L 158 70 Z"
                  fill={suitColor}
                  filter={`url(#lapelShadow-${product.id})`}
                />
                {/* Pick stitching */}
                <path d="M 109 72 L 99 111 L 114 116 L 107 151 L 135 176" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeDasharray="1.5 2" fill="none" />
              </>
            )}

            {/* Front Buttons */}
            {product.id.includes('miranda') || !isSmoking ? (
              <>
                <circle cx="140" cy="178" r="4" fill={buttonColor} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <circle cx="140" cy="198" r="4" fill={buttonColor} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
              </>
            ) : (
              <circle cx="140" cy="180" r="4.5" fill={buttonColor} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            )}

            {/* Functional Pockets */}
            <g id="pockets">
              <rect x="85" y="200" width="34" height="5" rx="1.5" fill={buttonColor} opacity="0.85" />
              <line x1="84" y1="200" x2="120" y2="200" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
              <rect x="161" y="200" width="34" height="5" rx="1.5" fill={buttonColor} opacity="0.85" />
              <line x1="160" y1="200" x2="196" y2="200" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
            </g>

            {/* Lower Garment: Pants if suit ensemble */}
            {!isBlazerOnly && (
              <g id="trousers-in-suit">
                <path
                  d="M 102 240 L 88 395 L 118 395 L 138 290 L 142 290 L 162 395 L 192 395 L 178 240 Z"
                  fill={suitColor}
                  stroke="rgba(0,0,0,0.15)"
                  strokeWidth="1"
                />
                <line x1="103" y1="260" x2="103" y2="390" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="177" y1="260" x2="177" y2="390" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </g>
            )}
          </g>
        )}
      </svg>
    )}

      {/* Badges from the flyer */}
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2A2E35] bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs border border-stone-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B2643]" />
          {product.cut}
        </span>
        {product.details?.pockets && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#2A2E35] bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs border border-stone-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4E6B32]" />
            Bolsillos funcionales
          </span>
        )}
      </div>

      {/* Floating fabric tag */}
      <div className="absolute bottom-3 right-3 text-[10px] font-medium text-[#555] bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs border border-stone-200 pointer-events-none">
        {product.fabrics[0]}
      </div>
    </div>
  );
};
