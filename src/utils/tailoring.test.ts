/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateTailoringSize,
  filterProducts,
  calculateCartTotals,
  buildWhatsAppQuoteUrl,
  type ProductSuit,
  type CartItem,
} from './tailoring.ts';

const mockSmoking: ProductSuit = {
  id: 'lady-smoking-2p',
  name: 'Conjunto Lady Smoking 2 piezas',
  pieces: '2 piezas',
  subtitle: 'Corte princesa, calidad Gazú',
  category: 'conjunto',
  price: 240,
  wholesalePrice: 195,
  cut: 'Corte princesa',
  fabrics: ['Calidad Gazú'],
  colors: [{ name: 'Gris Carbón', hex: '#3E4451', class: 'bg-slate-700' }],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  features: ['Solapa smoking satinada', 'Bolsillos funcionales'],
  description: 'Conjunto sastre refinado en calidad Gazú.',
  details: {
    pockets: 'Bolsillos con vivo fino',
    closure: 'Un botón forrado en satén',
    lining: 'Satén transpirable',
    lapel: 'Solapa smoking',
  },
  recommendedFor: 'Ejecutivas y eventos',
  badge: 'Más Vendido',
  rating: 4.9,
  reviewsCount: 38,
  inStock: true,
};

const mockPantalon: ProductSuit = {
  id: 'pantalon-lady-secret',
  name: 'Pantalón Lady Secret',
  pieces: 'individual',
  subtitle: '2 botones, tiro alto, secretera',
  category: 'pantalon',
  price: 95,
  wholesalePrice: 75,
  cut: 'Corte princesa anatómico',
  fabrics: ['Calidad Gazú'],
  colors: [{ name: 'Negro Azabache', hex: '#18181B', class: 'bg-zinc-900' }],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  features: ['2 botones frontales', 'Secretera oculta', 'Tiro alto anatómico'],
  description: 'Pantalón formal con secretera oculta para mayor seguridad.',
  details: {
    pockets: 'Bolsillos laterales y secretera oculta',
    closure: 'Dos botones reforzados',
    lining: 'Pretina reforzada',
  },
  recommendedFor: 'Oficina y uso diario',
  rating: 4.8,
  reviewsCount: 29,
  inStock: true,
};

test('calculateTailoringSize identifies exact standard size', () => {
  const result = calculateTailoringSize({ bust: 87, waist: 67, hip: 93 });
  assert.equal(result.size, 'S');
  assert.equal(result.fitAssessment, 'perfect');
});

test('calculateTailoringSize suggests bespoke tailoring for out-of-scale measurements', () => {
  const result = calculateTailoringSize({ bust: 130, waist: 55, hip: 125 });
  assert.equal(result.fitAssessment, 'custom_recommended');
  assert.match(result.details, /confección/i);
});

test('calculateTailoringSize handles empty or invalid zero measurements safely', () => {
  const result = calculateTailoringSize({ bust: 0, waist: 0, hip: 0 });
  assert.equal(result.size, 'A Medida');
  assert.equal(result.fitAssessment, 'custom_recommended');
});

test('filterProducts filters by category and search terms', () => {
  const products = [mockSmoking, mockPantalon];

  const filteredConjuntos = filterProducts(products, { category: 'conjunto' });
  assert.equal(filteredConjuntos.length, 1);
  assert.equal(filteredConjuntos[0].id, 'lady-smoking-2p');

  const filteredPantalones = filterProducts(products, { category: 'pantalon' });
  assert.equal(filteredPantalones.length, 1);
  assert.equal(filteredPantalones[0].id, 'pantalon-lady-secret');

  const filteredSearch = filterProducts(products, { searchQuery: 'secretera' });
  assert.equal(filteredSearch.length, 1);
  assert.equal(filteredSearch[0].id, 'pantalon-lady-secret');
});

test('calculateCartTotals computes quantity of items', () => {
  const items: CartItem[] = [
    {
      id: 'item-1',
      product: mockSmoking,
      selectedColor: 'Gris Carbón',
      selectedFabric: 'Calidad Gazú',
      selectedSize: 'M',
      orderType: 'menor',
      customFinish: {
        pocketType: 'Vivo fino',
        buttonType: 'Botón forrado',
        liningColor: 'Satén',
        embroideredInitials: 'EN',
      },
      quantity: 2,
    },
  ];

  const totals = calculateCartTotals(items);
  assert.equal(totals.itemCount, 2);
});

test('buildWhatsAppQuoteUrl constructs proper WhatsApp link with wholesale type and address', () => {
  const items: CartItem[] = [
    {
      id: 'item-1',
      product: mockSmoking,
      selectedColor: 'Gris Carbón',
      selectedFabric: 'Calidad Gazú',
      selectedSize: 'M',
      orderType: 'mayor',
      quantity: 6,
    },
  ];

  const url = buildWhatsAppQuoteUrl(items, {
    name: 'Rosa Huamán',
    city: 'Arequipa',
    orderType: 'mayor',
  });
  assert.match(url, /https:\/\/wa\.me\/51978095313/);
  assert.match(url, /Rosa%20Huam/);
  assert.match(url, /MAYOR/);
  assert.match(url, /Centro%20Comercial%20El%20REY/);
});
