/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type GarmentCategory = 'todos' | 'conjunto' | 'blazer' | 'blusa' | 'pantalon';

export interface ProductColor {
  name: string;
  hex: string;
  class: string;
  image?: string;
  angles?: {
    frontal: string;
    lado: string;
    trasera: string;
  };
}

export interface ProductSuit {
  id: string;
  name: string;
  pieces?: '2 piezas' | '3 piezas' | 'individual';
  subtitle: string;
  category: GarmentCategory;
  price?: number;
  wholesalePrice?: number;
  fabrics: string[];
  cut: string;
  colors: ProductColor[];
  sizes: string[];
  features: string[];
  description: string;
  details: {
    pockets: string;
    closure: string;
    lining?: string;
    lapel?: string;
  };
  recommendedFor: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  primaryImage?: string;
  galleryImages?: string[];
}

export interface BodyMeasurements {
  bust: number;       // cm (busto)
  waist: number;      // cm (cintura)
  hip: number;        // cm (cadera)
  height?: number;    // cm (estatura)
  shoulder?: number;  // cm (hombros)
}

export interface SizeRecommendation {
  size: string;
  fitAssessment: 'perfect' | 'proportional' | 'custom_recommended';
  details: string;
}

export interface CartItem {
  id: string;
  product: ProductSuit;
  selectedColor: string;
  selectedFabric: string;
  selectedSize: string;
  orderType: 'menor' | 'mayor' | 'confeccion';
  customMeasurements?: BodyMeasurements;
  customFinish?: {
    pocketType: string;
    buttonType: string;
    liningColor: string;
    embroideredInitials?: string;
  };
  quantity: number;
  unitPrice?: number;
}

/**
 * Standard women tailoring measurement chart (in cm)
 */
export const SIZE_CHART: Record<string, { bust: [number, number]; waist: [number, number]; hip: [number, number] }> = {
  'XS': { bust: [80, 84], waist: [60, 64], hip: [86, 90] },
  'S': { bust: [85, 89], waist: [65, 69], hip: [91, 95] },
  'M': { bust: [90, 94], waist: [70, 75], hip: [96, 101] },
  'L': { bust: [95, 100], waist: [76, 82], hip: [102, 108] },
  'XL': { bust: [101, 108], waist: [83, 90], hip: [109, 116] },
};

/**
 * Calculates recommended tailoring size
 */
export function calculateTailoringSize(measurements: BodyMeasurements): SizeRecommendation {
  const { bust, waist, hip } = measurements;

  if (bust <= 0 || waist <= 0 || hip <= 0) {
    return {
      size: 'A Medida',
      fitAssessment: 'custom_recommended',
      details: 'Ingresa medidas válidas para un cálculo preciso.',
    };
  }

  const sizes = Object.keys(SIZE_CHART);
  let bestFit = '';
  let minDeviation = Infinity;

  for (const size of sizes) {
    const chart = SIZE_CHART[size];
    const avgBust = (chart.bust[0] + chart.bust[1]) / 2;
    const avgWaist = (chart.waist[0] + chart.waist[1]) / 2;
    const avgHip = (chart.hip[0] + chart.hip[1]) / 2;

    const devBust = Math.abs(bust - avgBust);
    const devWaist = Math.abs(waist - avgWaist);
    const devHip = Math.abs(hip - avgHip);

    const totalDev = devBust * 1.2 + devWaist * 1.5 + devHip * 1.1;

    const insideBust = bust >= chart.bust[0] && bust <= chart.bust[1];
    const insideWaist = waist >= chart.waist[0] && waist <= chart.waist[1];
    const insideHip = hip >= chart.hip[0] && hip <= chart.hip[1];

    if (insideBust && insideWaist && insideHip) {
      return {
        size,
        fitAssessment: 'perfect',
        details: `Tus medidas encajan con la talla ${size}. Nuestro corte princesa se ajustará armoniosamente a tu silueta.`,
      };
    }

    if (totalDev < minDeviation) {
      minDeviation = totalDev;
      bestFit = size;
    }
  }

  if (minDeviation <= 12) {
    return {
      size: bestFit,
      fitAssessment: 'proportional',
      details: `Tu proporción principal es talla ${bestFit}. En Expresion's New te realizamos el entallado final en tienda.`,
    };
  }

  return {
    size: 'Confección A Medida',
    fitAssessment: 'custom_recommended',
    details: 'Tus proporciones son únicas. Te sugerimos nuestro servicio de confección exclusiva a medida en taller.',
  };
}

/**
 * Filter catalog products by category, fabric, size, query, and sorting
 */
export function filterProducts(
  products: ProductSuit[],
  filters: {
    category?: string;
    fabric?: string;
    size?: string;
    searchQuery?: string;
    sort?: 'recommended' | 'name-asc' | 'name-desc' | 'rating';
  }
): ProductSuit[] {
  return products
    .filter((product) => {
      if (filters.category && filters.category !== 'all' && filters.category !== 'todos') {
        if (product.category !== filters.category) return false;
      }
      if (filters.fabric && filters.fabric !== 'all') {
        const hasFabric = product.fabrics.some(
          (f) => f.toLowerCase().includes(filters.fabric!.toLowerCase())
        );
        if (!hasFabric) return false;
      }
      if (filters.size && filters.size !== 'all') {
        const matchesSize = product.sizes.some((s) => s.includes(filters.size!));
        if (!matchesSize) return false;
      }
      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSubtitle = product.subtitle?.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesFabric = product.fabrics.some((f) => f.toLowerCase().includes(query));
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesFeatures = product.features.some((feat) => feat.toLowerCase().includes(query));
        if (!matchesName && !matchesSubtitle && !matchesDesc && !matchesFabric && !matchesCategory && !matchesFeatures) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating':
          return b.rating - a.rating;
        case 'recommended':
        default:
          return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
      }
    });
}

/**
 * Calculate count for cart or quotation
 */
export function calculateCartTotals(items: CartItem[]): {
  itemCount: number;
} {
  let itemCount = 0;
  for (const item of items) {
    itemCount += item.quantity;
  }
  return { itemCount };
}

/**
 * Build WhatsApp order/quote URL for Expresion's New
 * Cel: 978 095 313 (Peru +51)
 */
export function buildWhatsAppQuoteUrl(
  items: CartItem[],
  customerInfo?: {
    name?: string;
    phone?: string;
    orderType?: 'menor' | 'mayor' | 'confeccion';
    visitDate?: string;
    city?: string;
    notes?: string;
  }
): string {
  const phoneNumber = '51978095313';
  let message = '¡Hola Expresion\'s New! ✨ Quisiera consultar disponibilidad y cotizar las siguientes prendas de su catálogo:\n\n';

  if (customerInfo?.orderType) {
    const typeLabel =
      customerInfo.orderType === 'mayor'
        ? 'VENTA POR MAYOR (Precios por curva / docena)'
        : customerInfo.orderType === 'confeccion'
        ? 'CONFECCIÓN A MEDIDA / CORPORATIVO'
        : 'VENTA POR MENOR';
    message += `🏷️ *MODALIDAD:* ${typeLabel}\n\n`;
  }

  if (items.length === 0) {
    message += 'Deseo información sobre sus sastres, conjuntos y blazers en Centro Comercial El Rey tda. 342 - D.\n';
  } else {
    items.forEach((item, index) => {
      message += `📌 *${index + 1}. ${item.product.name}*\n`;
      message += `   • Talla: ${item.selectedSize}\n`;
      message += `   • Color: ${item.selectedColor}\n`;
      message += `   • Tela: ${item.selectedFabric}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      if (item.customFinish?.pocketType) {
        message += `   • Bolsillos: ${item.customFinish.pocketType}\n`;
      }
      if (item.customFinish?.embroideredInitials) {
        message += `   • Iniciales bordadas: ${item.customFinish.embroideredInitials}\n`;
      }
      if (item.customMeasurements) {
        message += `   • Medidas: Busto ${item.customMeasurements.bust}cm | Cintura ${item.customMeasurements.waist}cm | Cadera ${item.customMeasurements.hip}cm\n`;
      }
      message += '\n';
    });
  }

  if (customerInfo?.name) {
    message += `👤 *Cliente:* ${customerInfo.name}\n`;
  }
  if (customerInfo?.city) {
    message += `📦 *Ciudad / Destino:* ${customerInfo.city}\n`;
  }
  if (customerInfo?.visitDate) {
    message += `📅 *Fecha aproximada de visita / pedido:* ${customerInfo.visitDate}\n`;
  }
  if (customerInfo?.notes) {
    message += `💬 *Consulta:* ${customerInfo.notes}\n`;
  }

  message += '\n📍 *Tienda:* Centro Comercial El REY tda. 342 - D (Gamarra, Lima)';

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
