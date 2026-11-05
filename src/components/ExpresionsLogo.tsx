/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ExpresionsLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'burgundy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
}

export const ExpresionsLogo: React.FC<ExpresionsLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const isBurgundy = variant === 'burgundy';

  // Choose the official logo asset: pristine high-res asset for light backgrounds, white monochrome for dark
  const logoSrc = isDark || isBurgundy
    ? './assets/logo_white.png'
    : './assets/aistudio/a_clean_white_background_graphic_logo_image_overa_1e4b27d9.png';

  // Size constraints for different viewports and contexts
  const sizeStyles = {
    sm: 'h-8 sm:h-9 max-w-[160px]',
    md: 'h-10 sm:h-12 max-w-[210px] sm:max-w-[260px]',
    lg: 'h-13 sm:h-16 max-w-[270px] sm:max-w-[320px]',
    xl: 'h-20 sm:h-24 max-w-[340px] sm:max-w-[420px]',
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      aria-label="Expresion's New — ¡Una moda con estilo!"
    >
      <img
        src={logoSrc}
        alt="Expresion's New — ¡Una moda con estilo!"
        className={`w-auto object-contain transition-all duration-200 ${sizeStyles} ${
          !isDark && !isBurgundy ? 'mix-blend-multiply' : ''
        }`}
        loading="eager"
        decoding="async"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.indexOf('logo_transparent') === -1) {
            target.src = './assets/logo_transparent.png';
          }
        }}
      />
    </div>
  );
};
