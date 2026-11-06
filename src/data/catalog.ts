/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductSuit } from '../utils/tailoring';

export interface SocialMediaInfo {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  desc: string;
}

export interface BrandConcept {
  title: string;
  description: string;
  mission: string;
  values: string[];
}

export interface TargetAudienceItem {
  role: string;
  title: string;
  description: string;
  idealSuits: string;
}

export interface SalesTypeItem {
  id: 'menor' | 'mayor' | 'confeccion';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface CommercialConditions {
  location: {
    address: string;
    details: string;
    city: string;
    landmarks: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappUrl: string;
    hours: string;
  };
  shipping: {
    methods: string[];
    agencies: string[];
    coverage: string;
  };
  payment: {
    digital: string[];
    banks: string[];
    store: string[];
  };
  policies: {
    exchanges: string;
    fitting: string;
    warranty: string;
  };
}

export const BRAND_CONCEPT: BrandConcept = {
  title: "Sastrería Fina Femenina",
  description:
    "Expresion's New es una sastrería especializada y taller de confección femenina ubicada en el Centro Comercial El Rey de Gamarra, Lima. Nos dedicamos a diseñar y confeccionar sastres ejecutivos, blazers, blusas y pantalones de tiro alto con patronaje anatómico y corte princesa. Apostamos por telas de la más alta calidad como la reconocida tela Gazú sastrera y linos seleccionados, brindando a cada mujer una prenda duradera, de caída impecable y confort insuperable.",
  mission:
    "Empoderar a la mujer profesional y emprendedora a través de trajes sastre que proyectan autoridad, elegancia y distinción, confeccionados con dedicación artesanal y acabados minuciosos.",
  values: [
    "Corte princesa anatómico que realza la silueta",
    "Calidad Gazú y linos de alta durabilidad y cero arrugas",
    "Bolsillos funcionales y secreteras de seguridad",
    "Acabados delicados y costuras reforzadas en taller propio",
  ],
};

export const TARGET_AUDIENCE: TargetAudienceItem[] = [
  {
    role: "Ejecutivas & Directivas",
    title: "Liderazgo Corporativo",
    description:
      "Gerentes, directivas de empresas privadas, bancarias y ejecutivas de finanzas que buscan proyectar seguridad y distinción en directorios y reuniones corporativas.",
    idealSuits: "Lady Smoking 3 piezas, Lady Espiga 3 piezas",
  },
  {
    role: "Abogadas & Sector Legal",
    title: "Solemnidad & Porte",
    description:
      "Juezas, fiscales, abogadas litigantes y notarias que requieren trajes de gran prestancia para audiencias, despachos y ponencias oficiales.",
    idealSuits: "Miss Classic 3 piezas, Lady Smoking 2 piezas",
  },
  {
    role: "Emprendedoras & Líderes",
    title: "Estilo & Versatilidad",
    description:
      "Mujeres dinámicas que dirigen sus propios negocios y asisten a eventos de networking, ferias y conferencias comerciales.",
    idealSuits: "Blazer Miranda 2, Pantalón Lady Secret",
  },
  {
    role: "Docentes & Académicas",
    title: "Comodidad Formal",
    description:
      "Catedráticas, docentes y directoras de instituciones educativas que necesitan presencia pulcra y libertad de movimiento durante toda la jornada.",
    idealSuits: "Miss Classic 2 piezas, Blazer Princesa 3/4",
  },
  {
    role: "Graduadas & Ceremonias",
    title: "Momentos Inolvidables",
    description:
      "Jóvenes egresadas, postulantes y público en general que celebran sustentaciones de tesis, grados académicos, matrimonios civiles y cócteles.",
    idealSuits: "Lady Smoking 2 y 3 piezas, Blusa Lino Princess",
  },
];

export const SOCIAL_MEDIA: SocialMediaInfo[] = [
  {
    platform: "WhatsApp Oficial",
    handle: "978 095 313",
    url: "https://wa.me/51978095313",
    icon: "message-circle",
    desc: "Atención inmediata, catálogo digital, pedidos y asesoría de tallas personalizada.",
  },
  {
    platform: "TikTok",
    handle: "@expresionsnew",
    url: "https://tiktok.com/@expresionsnew",
    icon: "video",
    desc: "Videos en vivo de nuestras colecciones, pruebas de tela Gazú y tips de combinación ejecutiva.",
  },
  {
    platform: "Instagram",
    handle: "@expresionsnew",
    url: "https://www.instagram.com/expresionsnew?mdxt=OG93djdlbXpqZTcx",
    icon: "camera",
    desc: "Sesiones fotográficas oficiales, looks corporativos y detalles de acabados de taller.",
  },
  {
    platform: "Facebook",
    handle: "Expresion's New - Sastrería Dama",
    url: "https://www.facebook.com/share/1EPFZaz5yH/",
    icon: "facebook",
    desc: "Novedades, transmisiones, testimonios de clientas y promociones por temporada.",
  },
];

export const SALES_TYPES: SalesTypeItem[] = [
  {
    id: "menor",
    title: "Venta por Menor",
    tagline: "Prendas unitarias con entallado en tienda",
    description:
      "Lleva tu conjunto, blazer o pantalón favorito para tu uso personal. En nuestra tienda física te asesoramos con la talla ideal y te realizamos el ajuste de basta y cintura al instante sin costo adicional.",
    features: [
      "Prueba en probadores privados de tienda",
      "Asesoría de silueta y colores según tu tono de piel",
      "Ajuste gratuito de basta y cintura en taller",
      "Envíos a domicilio en Lima y provincias",
    ],
    ctaText: "Cotizar por Menor",
  },
  {
    id: "mayor",
    title: "Venta por Mayor",
    tagline: "Precios especiales por curva y docena",
    description:
      "Atendemos a dueñas de boutiques, tiendas de moda y distribuidoras de todas las regiones del Perú. Ofrecemos precios de fabricante directamente desde nuestro taller en Gamarra con curvas completas de tallas (XS a XL).",
    features: [
      "Escala de descuentos por docenas y medias docenas",
      "Curva completa de tallas: XS, S, M, L y XL",
      "Catálogo de colores surtidos a elección",
      "Embalaje y despacho seguro a agencias de carga en 24h",
    ],
    ctaText: "Pedir Lista de Precios Mayorista",
  },
  {
    id: "confeccion",
    title: "Confección a Medida & Uniformes",
    tagline: "Proyectos corporativos e institucionales",
    description:
      "Desarrollamos uniformes sastre para empresas privadas, estudios de abogados, bancos, clínicas, colegios y entidades públicas. Brindamos servicio de toma de medidas en su sede o en nuestra tienda, selección de telas exclusivas y bordado de logotipo corporativo.",
    features: [
      "Toma de medidas personalizadas por sastres expertos",
      "Bordado computarizado de logo institucional en forro o solapa",
      "Telas de alto rendimiento antiarrugas para uso diario",
      "Emisión de Factura electrónica y guías de remisión",
    ],
    ctaText: "Cotizar Confección Corporativa",
  },
];

export const COMMERCIAL_DATA: CommercialConditions = {
  location: {
    address: "Centro Comercial El REY, tda. 342 - D",
    details: "Tercer Nivel (Piso 3), Galería El Rey",
    city: "Jr. Gamarra con Jr. Antonio Bazo, La Victoria, Lima - Perú",
    landmarks: "A media cuadra de la Av. 28 de Julio y estación Gamarra del Metro de Lima.",
  },
  contact: {
    phone: "51978095313",
    phoneDisplay: "978 095 313",
    whatsappUrl: "https://wa.me/51978095313",
    hours: "Lunes a Sábado: 9:30 AM a 7:30 PM (Domingos previa coordinación)",
  },
  shipping: {
    methods: [
      "Recojo directo en tienda física: C.C. El Rey tda. 342 - D",
      "Delivery motorizado express en Lima Metropolitana y Callao",
      "Envíos a nivel nacional para provincias con entrega en agencia o a domicilio",
    ],
    agencies: ["Shalom Empresarial", "Olva Courier", "Marvisur", "Flores Hermanos", "Móvil Bus"],
    coverage: "Llegamos a las 25 regiones del Perú con guía de remisión y clave de recojo.",
  },
  payment: {
    digital: ["Yape", "Plin"],
    banks: ["BCP (Banco de Crédito del Perú)", "BBVA Continental", "Interbank", "Banco de la Nación"],
    store: ["Tarjetas Visa / Mastercard", "Efectivo en caja"],
  },
  policies: {
    exchanges: "Cambios de talla permitidos dentro de los 7 días calendario posteriores a la compra con prenda en perfecto estado y etiqueta original.",
    fitting: "Entallado fino gratuito (ajuste de basta en pantalón y ajuste de pretina) para compras presenciales en nuestro taller de C.C. El Rey.",
    warranty: "Garantía de confección: costuras firmes, cierres de alta calidad y botones garantizados.",
  },
};

export const STORE_INFO = {
  name: "Expresion's New",
  slogan: "¡UNA MODA CON ESTILO!",
  tagline: "HECHO CON AMOR PARA MUJERES ÚNICAS",
  subheading: "TRABAJAMOS CON LAS MEJORES CALIDADES DE TELA",
  phone: COMMERCIAL_DATA.contact.phone,
  phoneDisplay: COMMERCIAL_DATA.contact.phoneDisplay,
  whatsappUrl: COMMERCIAL_DATA.contact.whatsappUrl,
  address: COMMERCIAL_DATA.location.address,
  addressNote: COMMERCIAL_DATA.location.details,
  hours: COMMERCIAL_DATA.contact.hours,
};

export const FABRICS_LIST = [
  'Calidad Gazú',
  'Calidad Gazú (Textura Espiga)',
  'Lino Sastrero',
  'Lino Fino',
];

/**
 * EXACT 13 ITEMS GIVEN BY THE USER:
 * 1. Conjunto Lady Smoking 2 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 2. Conjunto Lady Smoking 3 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 3. Conjunto Lady Espiga 2 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 4. Conjunto Lady Espiga 3 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 5. Conjunto Miss Classic 2 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 6. Conjunto Miss Classic 3 piezas (Corte princesa, calidad Gazú, XS a XL)
 * 7. Blazer Princesa 3/4 (XS a L)
 * 8. Blazer Miranda 2 (XS a L)
 * 9. Blusa Lino Princess (Lino, XS a XL)
 * 10. Pantalón Lady Luna (Bolsillos, 2 botones, tiro alto, XS a XL)
 * 11. Pantalón Lady Secret (2 botones, tiro alto, secretera, XS a XL)
 * 12. Pantalón Lady Secret Premium (1 botón, tiro alto, bolsillo atrás, secretera, XS a XL)
 * 13. Pantalón Lady Luna Lino (1 botón, bolsillos, XS a L)
 */
export const CATALOG_PRODUCTS: ProductSuit[] = [
  {
    id: 'lady-smoking-2p',
    name: 'Conjunto Lady Smoking 2 piezas',
    pieces: '2 piezas',
    subtitle: 'Corte princesa, calidad Gazú · Saco con solapa smoking curva y pantalón tiro alto 2 botones',
    category: 'conjunto',
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú'],
    primaryImage: './assets/aistudio/lady_smoking_2p_plomo.png',
    galleryImages: [
      './assets/aistudio/lady_smoking_2p_plomo.png',
      './assets/aistudio/lady_smoking_2p_negro.png',
      './assets/aistudio/lady_smoking_2p_marino.png',
      './assets/aistudio/lady_smoking_2p_azul_noche.png',
    ],
    colors: [
      {
        name: 'Plomo Rata',
        hex: '#565A63',
        class: 'bg-slate-600',
        image: './assets/aistudio/lady_smoking_2p_plomo.png',
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/lady_smoking_2p_negro.png',
      },
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/lady_smoking_2p_marino.png',
      },
      {
        name: 'Azul Noche',
        hex: '#0F172A',
        class: 'bg-slate-950',
        image: './assets/aistudio/lady_smoking_2p_azul_noche.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Fotos reales en maniquí de sastrería en sus 4 colores oficiales',
      'Solapa smoking curva (cuello smoking alargado de alta costura)',
      'Pantalón formal de tiro alto con pretina ancha anatómica de 2 botones',
      'Corte princesa anatómico que estiliza el talle',
      'Disponible en Plomo Rata, Negro, Azul Marino y Azul Noche',
    ],
    description:
      'Elegante traje sastre de 2 piezas modelo Lady Smoking. Confeccionado en tela Gazú de alta calidad, destaca por su refinada solapa smoking sin muescas y su pantalón de tiro alto con pretina anatómica de 2 botones. Ideal para lucir impecable en jornadas ejecutivas y ocasiones formales.',
    details: {
      pockets: 'Bolsillos funcionales tipo ojal con vivo fino sastre',
      closure: '1 botón frontal en blazer y 2 botones en pretina de pantalón',
      lining: 'Forro sastrero transpirable de alta sedosidad',
      lapel: 'Solapa smoking alargada y curva sin muesca',
    },
    recommendedFor: 'Directorios, conferencias, eventos de gala ejecutiva y presentaciones',
    badge: 'Fotos Reales (4 Colores)',
    rating: 4.96,
    reviewsCount: 64,
    inStock: true,
  },
  {
    id: 'lady-smoking-3p',
    name: 'Conjunto Lady Smoking 3 piezas',
    pieces: '3 piezas',
    subtitle: 'Corte princesa, calidad Gazú · Blazer smoking, chaleco 4 botones y pantalón',
    category: 'conjunto',
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú'],
    primaryImage: './assets/aistudio/lady_smoking_3p_plomo.png',
    galleryImages: [
      './assets/aistudio/lady_smoking_3p_plomo.png',
      './assets/aistudio/lady_smoking_3p_plomo_chaleco.png',
      './assets/aistudio/lady_smoking_3p_negro.png',
      './assets/aistudio/lady_smoking_3p_negro_chaleco.png',
      './assets/aistudio/lady_smoking_3p_marino.jpg',
      './assets/aistudio/lady_smoking_3p_marino_chaleco.jpg',
      './assets/aistudio/lady_smoking_3p_azul_noche.png',
      './assets/aistudio/lady_smoking_3p_azul_noche_chaleco.png',
    ],
    colors: [
      {
        name: 'Plomo Rata',
        hex: '#565A63',
        class: 'bg-slate-600',
        image: './assets/aistudio/lady_smoking_3p_plomo.png',
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/lady_smoking_3p_negro.png',
      },
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/lady_smoking_3p_marino.jpg',
      },
      {
        name: 'Azul Noche',
        hex: '#0F172A',
        class: 'bg-slate-950',
        image: './assets/aistudio/lady_smoking_3p_azul_noche.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Tres piezas: blazer con solapa smoking, chaleco sastrero y pantalón',
      'Chaleco entallado corte princesa con escote en V y 4 botones a tono',
      'Solapa smoking curva alargada sin muescas de alta costura',
      'Pantalón formal de tiro alto con raya planchada y bolsillos funcionales',
      'Disponible en Plomo Rata, Negro, Azul Marino y Azul Noche (con y sin saco)',
    ],
    description:
      'Conjunto ejecutivo sastre de 3 piezas modelo Lady Smoking. Confeccionado en tela Gazú de primera calidad, incluye blazer con solapa smoking, chaleco anatómico de 4 botones que estiliza la figura y pantalón de vestir. Permite una versatilidad absoluta para directorios, reuniones y presentaciones.',
    details: {
      pockets: 'Bolsillos funcionales tipo ojal con vivos finos en saco y chaleco',
      closure: 'Blazer a 1 botón frontal + chaleco a 4 botones sastre',
      lining: 'Forro total en satén sedoso y transpirable',
      lapel: 'Solapa smoking alargada curva sin muesca',
    },
    recommendedFor: 'Directorios, decanas, ejecutivas, conferencias y eventos protocolares',
    badge: 'Fotos Reales (4 Colores + Chaleco)',
    rating: 4.98,
    reviewsCount: 72,
    inStock: true,
  },
  {
    id: 'lady-espiga-2p',
    name: 'Conjunto Lady Espiga 2 piezas',
    pieces: '2 piezas',
    subtitle: 'Corte princesa, calidad Gazú en espiga sastrera · Saco clásico y pantalón de tiro alto 2 botones',
    category: 'conjunto',
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú (Textura Espiga)'],
    primaryImage: './assets/aistudio/lady_espiga_2p_charcoal.png',
    galleryImages: [
      './assets/aistudio/lady_espiga_2p_charcoal.png',
      './assets/aistudio/lady_espiga_2p_plomo.png',
      './assets/aistudio/lady_espiga_2p_verde_petroleo.png',
      './assets/aistudio/lady_espiga_2p_marino.png',
      './assets/aistudio/lady_espiga_2p_azul_noche.png',
    ],
    colors: [
      {
        name: 'Charcoal',
        hex: '#2C3038',
        class: 'bg-stone-800',
        image: './assets/aistudio/lady_espiga_2p_charcoal.png',
      },
      {
        name: 'Plomo',
        hex: '#5A606C',
        class: 'bg-slate-600',
        image: './assets/aistudio/lady_espiga_2p_plomo.png',
      },
      {
        name: 'Verde Petróleo',
        hex: '#1A4342',
        class: 'bg-teal-900',
        image: './assets/aistudio/lady_espiga_2p_verde_petroleo.png',
      },
      {
        name: 'Azul Marino',
        hex: '#1E2C4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/lady_espiga_2p_marino.png',
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/lady_espiga_2p_azul_noche.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Fotos reales en maniquí de sastrería 12D en 5 colores oficiales',
      'Textura tejida en espiga sutil que aporta cuerpo y presencia ejecutiva',
      'Saco entallado corte princesa con solapa de muesca clásica sastre',
      'Pantalón de caída impecable con raya planchada y pretina de 2 botones',
      'Disponible en Charcoal, Plomo, Verde Petróleo, Azul Marino y Azul Noche',
    ],
    description:
      'Conjunto sastre de 2 piezas modelo Lady Espiga. Confeccionado en tela Gazú con refinado tramado espiga que aporta rica textura y distinción británica adaptada al calce femenino. Incluye blazer de corte princesa anatómico con solapa clásica y pantalón de vestir con raya planchada y pretina anatómica de 2 botones.',
    details: {
      pockets: 'Bolsillos funcionales con vivo fino sastre en saco y pantalón',
      closure: 'Un botón frontal sastre y pretina anatómica de 2 botones',
      lining: 'Forro total en satén sedoso y transpirable',
      lapel: 'Solapa clásica de muesca pespunteada',
    },
    recommendedFor: 'Oficina ejecutiva, auditorías, congresos, ponencias y cátedras universitarias',
    badge: 'Fotos Reales (5 Colores)',
    rating: 4.97,
    reviewsCount: 56,
    inStock: true,
  },
  {
    id: 'lady-espiga-3p',
    name: 'Conjunto Lady Espiga 3 piezas',
    pieces: '3 piezas',
    subtitle: 'Corte princesa, calidad Gazú en espiga · Blazer clásico, chaleco sastre 4 botones y pantalón 2 botones',
    category: 'conjunto',
    primaryImage: './assets/aistudio/lady_espiga_3p_v2_charcoal.png',
    galleryImages: [
      './assets/aistudio/lady_espiga_3p_v2_charcoal.png',
      './assets/aistudio/lady_espiga_3p_v2_plomo.png',
      './assets/aistudio/lady_espiga_3p_v2_verde_petroleo.png',
      './assets/aistudio/lady_espiga_3p_v2_azul_marino.png',
      './assets/aistudio/lady_espiga_3p_v2_azul_noche.png',
      './assets/aistudio/lady_espiga_3p_v2_negro.png',
    ],
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú (Textura Espiga)'],
    colors: [
      {
        name: 'Charcoal',
        hex: '#2C3038',
        class: 'bg-stone-800',
        image: './assets/aistudio/lady_espiga_3p_v2_charcoal.png',
      },
      {
        name: 'Plomo',
        hex: '#5A606C',
        class: 'bg-slate-600',
        image: './assets/aistudio/lady_espiga_3p_v2_plomo.png',
      },
      {
        name: 'Verde Petróleo',
        hex: '#1A4342',
        class: 'bg-teal-900',
        image: './assets/aistudio/lady_espiga_3p_v2_verde_petroleo.png',
      },
      {
        name: 'Azul Marino',
        hex: '#162238',
        class: 'bg-slate-900',
        image: './assets/aistudio/lady_espiga_3p_v2_azul_marino.png',
      },
      {
        name: 'Azul Noche',
        hex: '#12102A',
        class: 'bg-slate-950',
        image: './assets/aistudio/lady_espiga_3p_v2_azul_noche.png',
      },
      {
        name: 'Negro',
        hex: '#1C1C1E',
        class: 'bg-stone-900',
        image: './assets/aistudio/lady_espiga_3p_v2_negro.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Tres piezas: blazer clásico, chaleco sastre entallado y pantalón',
      'Fotos reales en maniquí de taller en 6 tonalidades',
      'Chaleco anatómico con escote en V y 4 botones a tono',
      'Solapa clásica de muesca sastre pespunteada',
      'Pantalón de caída recta/palazo con raya planchada y pretina 2 botones',
      'Disponible en Charcoal, Plomo, Verde Petróleo, Azul Marino, Azul Noche y Negro',
    ],
    description:
      'Conjunto ejecutivo sastre de 3 piezas modelo Lady Espiga. Confeccionado en tela Gazú de alta gama con sutil tejido espiga. Integra blazer de corte princesa anatómico, chaleco de vestir entallado de 4 botones que estiliza la cintura y pantalón formal de tiro alto con pretina anatómica de 2 botones.',
    details: {
      pockets: 'Bolsillos funcionales tipo ojal con vivos finos en saco, chaleco y pantalón',
      closure: 'Un botón central en blazer + 4 botones en chaleco + 2 botones en pretina',
      lining: 'Forro total en satén sedoso y transpirable',
      lapel: 'Solapa clásica de muesca pespunteada',
    },
    recommendedFor: 'Directorios corporativos, graduaciones, eventos solemnes y despachos',
    badge: 'Fotos Reales (6 Colores)',
    rating: 4.98,
    reviewsCount: 65,
    inStock: true,
  },
  {
    id: 'miss-classic-2p',
    name: 'Conjunto Miss Classic 2 piezas',
    pieces: '2 piezas',
    subtitle: 'Corte princesa, calidad Gazú · Saco sastre clásico 2 botones y pantalón recto formal',
    category: 'conjunto',
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú'],
    primaryImage: './assets/aistudio/miss_classic_2p_marino.png',
    galleryImages: [
      './assets/aistudio/miss_classic_2p_marino.png',
      './assets/aistudio/miss_classic_2p_negro.png',
      './assets/aistudio/miss_classic_2p_azul_noche.png',
      './assets/aistudio/miss_classic_2p_charcoal.png',
      './assets/aistudio/miss_classic_2p_plomo.png',
    ],
    colors: [
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/miss_classic_2p_marino.png',
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/miss_classic_2p_negro.png',
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/miss_classic_2p_azul_noche.png',
      },
      {
        name: 'Charcoal',
        hex: '#2C3038',
        class: 'bg-stone-800',
        image: './assets/aistudio/miss_classic_2p_charcoal.png',
      },
      {
        name: 'Plomo',
        hex: '#5A606C',
        class: 'bg-slate-600',
        image: './assets/aistudio/miss_classic_2p_plomo.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Fotos reales en maniquí de taller en 5 colores oficiales',
      'Corte princesa anatómico sobrio y equilibrado',
      'Saco formal de dos botones frontales de alta fijación',
      'Pantalón recto con raya planchada y trabillas para cinturón',
      'Disponible en Azul Marino, Negro, Azul Noche, Charcoal y Plomo',
    ],
    description:
      'Conjunto sastre de 2 piezas modelo Miss Classic. El uniforme corporativo por excelencia para ejecutivas bancarias, abogadas y profesionales del sector privado. Confeccionado en tela Gazú de alta resistencia al planchado y al roce, brinda una silueta pulcra y cómoda para toda la jornada.',
    details: {
      pockets: 'Bolsillos laterales con vivos finos en saco y pantalón',
      closure: 'Dos botones frontales biselados en blazer y cierre reforzado en pantalón',
      lining: 'Forro transpirable en satén de alta calidad',
      lapel: 'Solapa clásica de muesca sastre',
    },
    recommendedFor: 'Bancos, finanzas, administración, sector legal y uso corporativo diario',
    badge: 'Fotos Reales (5 Colores)',
    rating: 4.96,
    reviewsCount: 78,
    inStock: true,
  },
  {
    id: 'miss-classic-3p',
    name: 'Conjunto Miss Classic 3 piezas',
    pieces: '3 piezas',
    subtitle: 'Corte princesa, calidad Gazú · Saco clásico 2 botones, chaleco 4 botones y pantalón recto',
    category: 'conjunto',
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú'],
    primaryImage: './assets/aistudio/miss_classic_3p_marino.png',
    galleryImages: [
      './assets/aistudio/miss_classic_3p_marino.png',
      './assets/aistudio/miss_classic_3p_negro.png',
      './assets/aistudio/miss_classic_3p_azul_noche.png',
      './assets/aistudio/miss_classic_3p_plomo.png',
    ],
    colors: [
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/miss_classic_3p_marino.png',
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/miss_classic_3p_negro.png',
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/miss_classic_3p_azul_noche.png',
      },
      {
        name: 'Plomo',
        hex: '#5A606C',
        class: 'bg-slate-600',
        image: './assets/aistudio/miss_classic_3p_plomo.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Conjunto completo de 3 piezas: saco, chaleco anatómico y pantalón',
      'Fotos reales de taller en maniquí en sus 4 colores oficiales',
      'Chaleco sastrero entallado con escote en V y 4 botones a tono',
      'Saco formal de corte princesa con solapa de muesca clásica',
      'Disponible en Azul Marino, Negro, Azul Noche y Plomo',
    ],
    description:
      'La máxima expresión del traje ejecutivo formal femenino. El modelo Miss Classic 3 piezas combina el porte estructurado del saco clásico de dos botones con la versatilidad de un chaleco sastrero entallado de 4 botones y pantalón de vestir de corte recto impecable.',
    details: {
      pockets: 'Bolsillos funcionales tipo ojal con vivos finos en saco, chaleco y pantalón',
      closure: 'Dos botones en blazer + cuatro botones en chaleco',
      lining: 'Forro total en satén sedoso y transpirable',
      lapel: 'Solapa clásica de muesca sastre',
    },
    recommendedFor: 'Superintendencias, estudios jurídicos, finanzas, decanaturas y ceremonias oficiales',
    badge: 'Fotos Reales (4 Colores)',
    rating: 4.97,
    reviewsCount: 68,
    inStock: true,
  },
  {
    id: 'blazer-princesa-3-4',
    name: 'Blazer Princesa 3/4',
    pieces: 'individual',
    subtitle: 'Corte princesa anatómico con manga 3/4 en calidad Gazú · 11 colores de taller',
    category: 'blazer',
    primaryImage: './assets/aistudio/blazer_3_4_chicle.png',
    galleryImages: [
      './assets/aistudio/blazer_3_4_chicle.png',
      './assets/aistudio/blazer_3_4_guinda.png',
      './assets/aistudio/blazer_3_4_marron.png',
      './assets/aistudio/blazer_3_4_negro.png',
      './assets/aistudio/blazer_3_4_palo_rosa.png',
      './assets/aistudio/blazer_3_4_perla.png',
      './assets/aistudio/blazer_3_4_verde_botella.png',
      './assets/aistudio/blazer_3_4_plomo.png',
      './assets/aistudio/blazer_3_4_azulino.png',
      './assets/aistudio/blazer_3_4_marino.png',
      './assets/aistudio/blazer_3_4_azul_noche.png',
    ],
    cut: 'Corte princesa anatómico',
    fabrics: ['Calidad Gazú'],
    colors: [
      {
        name: 'Rosa Chicle',
        hex: '#E85A9D',
        class: 'bg-pink-500',
        image: './assets/aistudio/blazer_3_4_chicle.png',
      },
      {
        name: 'Guinda',
        hex: '#721D38',
        class: 'bg-rose-950',
        image: './assets/aistudio/blazer_3_4_guinda.png',
      },
      {
        name: 'Marrón',
        hex: '#5A3828',
        class: 'bg-stone-800',
        image: './assets/aistudio/blazer_3_4_marron.png',
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/blazer_3_4_negro.png',
      },
      {
        name: 'Palo Rosa',
        hex: '#CB8899',
        class: 'bg-pink-300',
        image: './assets/aistudio/blazer_3_4_palo_rosa.png',
      },
      {
        name: 'Perla',
        hex: '#F3EFEA',
        class: 'bg-stone-100',
        image: './assets/aistudio/blazer_3_4_perla.png',
      },
      {
        name: 'Verde Botella',
        hex: '#1B4B38',
        class: 'bg-emerald-950',
        image: './assets/aistudio/blazer_3_4_verde_botella.png',
      },
      {
        name: 'Plomo',
        hex: '#585E6B',
        class: 'bg-slate-600',
        image: './assets/aistudio/blazer_3_4_plomo.png',
      },
      {
        name: 'Azulino',
        hex: '#244B8C',
        class: 'bg-blue-700',
        image: './assets/aistudio/blazer_3_4_azulino.png',
      },
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/blazer_3_4_marino.png',
      },
      {
        name: 'Azul Noche',
        hex: '#121824',
        class: 'bg-slate-950',
        image: './assets/aistudio/blazer_3_4_azul_noche.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    features: [
      'Fotos reales de taller en maniquí 12D en 11 colores exclusivos',
      'Manga 3/4 que estiliza los brazos y permite comodidad activa',
      'Corte princesa entallado en espalda y cintura anatómica',
      'Bolsillos funcionales exteriores con vivo fino sastre',
      'Disponible en Chicle, Guinda, Marrón, Negro, Palo Rosa, Perla, Verde Botella, Plomo, Azulino, Marino y Azul Noche',
    ],
    description:
      'Un blazer dinámico, fresco y sumamente versátil con mangas tres cuartos. Su corte princesa estiliza la figura y brinda soltura en los brazos para desenvolverse cómodamente en jornadas activas, conferencias y eventos. Colección completa con fotografías reales en 11 colores.',
    details: {
      pockets: 'Bolsillos laterales con vivo fino sastre',
      closure: 'Un botón central reforzado a tono',
      lining: 'Forro sastrero transpirable y sedoso',
      lapel: 'Solapa de muesca estilizada',
    },
    recommendedFor: 'Oficina activa, recepciones, climas de media estación y eventos sociales',
    badge: 'Fotos Reales (11 Colores)',
    rating: 4.96,
    reviewsCount: 84,
    inStock: true,
  },
  {
    id: 'blazer-miranda-2',
    name: 'Blazer Miranda 2',
    pieces: 'individual',
    subtitle: 'Corte princesa estructurado, calidad Gazú · Solapa clásica sastre y botón frontal',
    category: 'blazer',
    primaryImage: './assets/aistudio/blazer_miranda_negro.png',
    galleryImages: [
      './assets/aistudio/blazer_miranda_negro.png',
      './assets/aistudio/blazer_miranda_perla.png',
      './assets/aistudio/blazer_miranda_topo.png',
      './assets/aistudio/blazer_miranda_beige.png',
    ],
    cut: 'Corte princesa estructurado',
    fabrics: ['Calidad Gazú'],
    colors: [
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/blazer_miranda_negro.png',
      },
      {
        name: 'Perla',
        hex: '#EFECE6',
        class: 'bg-stone-100',
        image: './assets/aistudio/blazer_miranda_perla.png',
      },
      {
        name: 'Topo',
        hex: '#8D7F75',
        class: 'bg-stone-500',
        image: './assets/aistudio/blazer_miranda_topo.png',
      },
      {
        name: 'Beige',
        hex: '#CDB296',
        class: 'bg-amber-200',
        image: './assets/aistudio/blazer_miranda_beige.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    features: [
      'Fotos reales en maniquí de sastrería en 4 colores exclusivos',
      'Solapa de muesca clásica sastre pespunteada',
      'Corte princesa entallado que define y estiliza la figura',
      'Bolsillos funcionales exteriores con vivo fino',
      'Disponible en Negro, Perla, Topo y Beige',
    ],
    description:
      'Saco sastre de corte princesa estructurado modelo Miranda 2. Diseñado con una solapa de muesca estilizada, botón central reforzado y bolsillos funcionales de vivo fino. Combínalo con pantalones de vestir para una reunión de directorio o con prendas casuales para un porte impecable.',
    details: {
      pockets: 'Bolsillos laterales con vivo fino sastre',
      closure: 'Un botón central reforzado a tono',
      lining: 'Forro total en satén sedoso y transpirable',
      lapel: 'Solapa de muesca pespunteada clásica',
    },
    recommendedFor: 'Reuniones de negocio, despachos, presentaciones ejecutivas y estilo formal',
    badge: 'Fotos Reales (4 Colores)',
    rating: 4.95,
    reviewsCount: 47,
    inStock: true,
  },
  {
    id: 'blusa-lino-princess',
    name: 'Blusa Lino Princess',
    pieces: 'individual',
    subtitle: 'Lino fino seleccionado · Corte princesa y silueta ejecutiva anatómica',
    category: 'blusa',
    primaryImage: './assets/aistudio/blusa_blanca_1080x1080_72f8a0d3.png',
    galleryImages: [
      './assets/aistudio/blusa_blanca_1080x1080_72f8a0d3.png',
      './assets/aistudio/blusa_azul_marino_1080x1080_8b2fd14a.png',
      './assets/aistudio/blusa_roja_1080x1080_bf0b9f63.png',
      './assets/aistudio/blusa_celeste_1080x1080_54a824f9.png',
      './assets/aistudio/imagen_1080x1080_90de7ff0.png',
    ],
    cut: 'Corte princesa femenino',
    fabrics: ['Lino Fino'],
    colors: [
      {
        name: 'Blanco Puro',
        hex: '#FFFFFF',
        class: 'bg-white',
        image: './assets/aistudio/blusa_blanca_1080x1080_72f8a0d3.png',
      },
      {
        name: 'Azul Marino',
        hex: '#1D2A44',
        class: 'bg-slate-900',
        image: './assets/aistudio/blusa_azul_marino_1080x1080_8b2fd14a.png',
      },
      {
        name: 'Rojo Pasión',
        hex: '#B91C1C',
        class: 'bg-red-700',
        image: './assets/aistudio/blusa_roja_1080x1080_bf0b9f63.png',
      },
      {
        name: 'Celeste Cielo',
        hex: '#8CBCE0',
        class: 'bg-sky-300',
        image: './assets/aistudio/blusa_celeste_1080x1080_54a824f9.png',
      },
      {
        name: 'Rosa Palo',
        hex: '#DB839B',
        class: 'bg-pink-400',
        image: './assets/aistudio/imagen_1080x1080_90de7ff0.png',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Fotos reales en modelo: 5 colores exclusivos disponibles',
      'Confeccionada en lino fino de tacto ultra suave',
      'Corte princesa que no forma abultamientos bajo el saco',
      'Apertura lateral sutil para movilidad y caída perfecta',
    ],
    description:
      'La compañera perfecta para todos los trajes sastre de Expresion\'s New. El lino fino permite respiración cutánea durante largas jornadas y su corte princesa se acopla limpiamente debajo del blazer sin generar arrugas.',
    details: {
      pockets: 'Sin bolsillos para silueta limpia',
      closure: 'Corte anatómico slip-on con escote redondeado fino',
      lining: 'Sin forro (tejido no transparente)',
      lapel: 'Escote sastre delicado',
    },
    recommendedFor: 'Uso diario con sastre, ponencias y días cálidos',
    badge: 'Fotos Reales (5 Colores)',
    rating: 4.95,
    reviewsCount: 68,
    inStock: true,
  },
  {
    id: 'pantalon-lady-luna',
    name: 'Pantalón Lady Luna',
    pieces: 'individual',
    subtitle: 'Bolsillos funcionales, pretina ancha 2 botones, tiro alto en calidad Gazú · 7 colores con vistas 360°',
    category: 'pantalon',
    primaryImage: './assets/aistudio/pantalon_lady_luna_negro_frontal.png',
    galleryImages: [
      // Negro
      './assets/aistudio/pantalon_lady_luna_negro_frontal.png',
      './assets/aistudio/pantalon_lady_luna_negro_lado.png',
      './assets/aistudio/pantalon_lady_luna_negro_trasera.png',
      // Palo Rosa
      './assets/aistudio/pantalon_lady_luna_palorosa_frontal.png',
      './assets/aistudio/pantalon_lady_luna_palorosa_lado.png',
      './assets/aistudio/pantalon_lady_luna_palorosa_trasera.png',
      // Perla
      './assets/aistudio/pantalon_lady_luna_perla_frontal.png',
      './assets/aistudio/pantalon_lady_luna_perla_lado.png',
      './assets/aistudio/pantalon_lady_luna_perla_trasera.png',
      // Plomo
      './assets/aistudio/pantalon_lady_luna_plomo_frontal.png',
      './assets/aistudio/pantalon_lady_luna_plomo_lado.png',
      './assets/aistudio/pantalon_lady_luna_plomo_trasera.png',
      // Azul Barcelona
      './assets/aistudio/pantalon_lady_luna_azul_barcelona_frontal.png',
      './assets/aistudio/pantalon_lady_luna_azul_barcelona_lado.png',
      './assets/aistudio/pantalon_lady_luna_azul_barcelona_trasera.png',
      // Caqui
      './assets/aistudio/pantalon_lady_luna_caqui_frontal.png',
      './assets/aistudio/pantalon_lady_luna_caqui_lado.png',
      './assets/aistudio/pantalon_lady_luna_caqui_trasera.png',
      // Azul Noche
      './assets/aistudio/pantalon_lady_luna_azul_noche_frontal.png',
      './assets/aistudio/pantalon_lady_luna_azul_noche_lado.png',
      './assets/aistudio/pantalon_lady_luna_azul_noche_trasera.png',
    ],
    cut: 'Corte princesa anatómico de tiro alto',
    fabrics: ['Calidad Gazú'],
    colors: [
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/pantalon_lady_luna_negro_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_negro_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_negro_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_negro_trasera.png',
        },
      },
      {
        name: 'Palo Rosa',
        hex: '#CB8899',
        class: 'bg-pink-300',
        image: './assets/aistudio/pantalon_lady_luna_palorosa_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_palorosa_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_palorosa_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_palorosa_trasera.png',
        },
      },
      {
        name: 'Perla',
        hex: '#F3EFEA',
        class: 'bg-stone-100',
        image: './assets/aistudio/pantalon_lady_luna_perla_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_perla_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_perla_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_perla_trasera.png',
        },
      },
      {
        name: 'Plomo',
        hex: '#5A606C',
        class: 'bg-slate-600',
        image: './assets/aistudio/pantalon_lady_luna_plomo_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_plomo_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_plomo_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_plomo_trasera.png',
        },
      },
      {
        name: 'Azul Barcelona',
        hex: '#1E4E8C',
        class: 'bg-blue-700',
        image: './assets/aistudio/pantalon_lady_luna_azul_barcelona_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_azul_barcelona_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_azul_barcelona_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_azul_barcelona_trasera.png',
        },
      },
      {
        name: 'Caqui',
        hex: '#C2A888',
        class: 'bg-amber-700',
        image: './assets/aistudio/pantalon_lady_luna_caqui_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_caqui_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_caqui_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_caqui_trasera.png',
        },
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/pantalon_lady_luna_azul_noche_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_azul_noche_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_azul_noche_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_azul_noche_trasera.png',
        },
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      '21 fotos reales en maniquí de taller: 7 colores con 3 ángulos cada uno (Frontal, De Lado y Trasera)',
      'Rotación automática interactiva de ángulos al pulsar cada color',
      'Pretina ancha anatómica con 2 botones de seguridad a tono',
      'Tiro alto que estiliza el abdomen y alarga la pierna',
      'Bolsillos laterales funcionales profundos y raya sastre planchada indeleble',
      'Corte posterior limpio y entallado sin bolsillos traseros',
      'Disponible en Negro, Palo Rosa, Perla, Plomo, Azul Barcelona, Caqui y Azul Noche',
    ],
    description:
      'El pantalón sastre más solicitado en nuestra tienda de C.C. El Rey. Confeccionado en tejido Gazú de alta resistencia, cuenta con pretina ancha de doble botón que sostiene con elegancia y raya sastre marcada. Incluye 21 fotografías reales de taller con visualización en 360° (ángulos frontal, lateral y posterior) en sus 7 tonalidades.',
    details: {
      pockets: 'Bolsillos diagonales delanteros reales y profundos',
      closure: 'Pretina ancha con 2 botones a tono y cierre metálico reforzado',
      lining: 'Pretina interior reforzada con entretela sastre alemana',
    },
    recommendedFor: 'Trabajo diario, oficina, eventos ejecutivos y combinación con blusas o blazers',
    badge: 'Fotos Reales (7 Colores · 3 Ángulos)',
    rating: 4.96,
    reviewsCount: 104,
    inStock: true,
  },
  {
    id: 'pantalon-lady-secret',
    name: 'Pantalón Lady Secret',
    pieces: 'individual',
    subtitle: '1 botón central, tiro alto y secretera oculta en calidad Gazú · 6 colores con vistas 360°',
    category: 'pantalon',
    primaryImage: './assets/aistudio/pantalon_lady_secret_negro_frontal.png',
    galleryImages: [
      // Negro
      './assets/aistudio/pantalon_lady_secret_negro_frontal.png',
      './assets/aistudio/pantalon_lady_secret_negro_lado.png',
      './assets/aistudio/pantalon_lady_secret_negro_trasera.png',
      // Azul Marino
      './assets/aistudio/pantalon_lady_secret_azul_marino_frontal.png',
      './assets/aistudio/pantalon_lady_secret_azul_marino_lado.png',
      './assets/aistudio/pantalon_lady_secret_azul_marino_trasera.png',
      // Azul Noche
      './assets/aistudio/pantalon_lady_secret_azul_noche_frontal.png',
      './assets/aistudio/pantalon_lady_secret_azul_noche_lado.png',
      './assets/aistudio/pantalon_lady_secret_azul_noche_trasera.png',
      // Beige
      './assets/aistudio/pantalon_lady_secret_beige_frontal.png',
      './assets/aistudio/pantalon_lady_secret_beige_lado.png',
      './assets/aistudio/pantalon_lady_secret_beige_trasera.png',
      // Plomo Plata
      './assets/aistudio/pantalon_lady_secret_plomo_plata_frontal.png',
      './assets/aistudio/pantalon_lady_secret_plomo_plata_lado.png',
      './assets/aistudio/pantalon_lady_secret_plomo_plata_trasera.png',
      // Plomo Rata
      './assets/aistudio/pantalon_lady_secret_plomo_rata_frontal.png',
      './assets/aistudio/pantalon_lady_secret_plomo_rata_lado.png',
      './assets/aistudio/pantalon_lady_secret_plomo_rata_trasera.png',
    ],
    cut: 'Corte princesa anatómico de tiro alto',
    fabrics: ['Calidad Gazú'],
    colors: [
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/pantalon_lady_secret_negro_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_negro_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_negro_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_negro_trasera.png',
        },
      },
      {
        name: 'Azul Marino',
        hex: '#1B2A4A',
        class: 'bg-slate-900',
        image: './assets/aistudio/pantalon_lady_secret_azul_marino_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_azul_marino_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_azul_marino_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_azul_marino_trasera.png',
        },
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/pantalon_lady_secret_azul_noche_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_azul_noche_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_azul_noche_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_azul_noche_trasera.png',
        },
      },
      {
        name: 'Beige',
        hex: '#CDB296',
        class: 'bg-amber-200',
        image: './assets/aistudio/pantalon_lady_secret_beige_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_beige_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_beige_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_beige_trasera.png',
        },
      },
      {
        name: 'Plomo Plata',
        hex: '#B8BEC8',
        class: 'bg-slate-300',
        image: './assets/aistudio/pantalon_lady_secret_plomo_plata_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_plomo_plata_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_plomo_plata_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_plomo_plata_trasera.png',
        },
      },
      {
        name: 'Plomo Rata',
        hex: '#505560',
        class: 'bg-slate-700',
        image: './assets/aistudio/pantalon_lady_secret_plomo_rata_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_plomo_rata_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_plomo_rata_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_plomo_rata_trasera.png',
        },
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      '18 fotos reales en maniquí de taller: 6 colores con 3 ángulos cada uno (Frontal, De Lado y Trasera)',
      'Rotación automática interactiva de ángulos al pulsar cada color',
      'Secretera oculta en pretina para llaves, billetes o credencial',
      'Pretina anatómica reforzada con 1 botón central a tono',
      'Tiro alto modelador que estiliza el abdomen y alarga la pierna',
      'Bolsillos laterales diagonales funcionales y raya sastre permanente',
      'Calce posterior limpio sin bolsillos traseros para una silueta estilizada',
      'Disponible en Negro, Azul Marino, Azul Noche, Beige, Plomo Plata y Plomo Rata',
    ],
    description:
      'Diseñado para la mujer profesional moderna y precavida. El modelo Lady Secret confeccionado en calidad Gazú incorpora un bolsillo secreto oculto en el interior de la pretina para guardar de forma segura elementos indispensables. Cuenta con 18 fotografías reales de taller con visualización en 360° en sus 6 tonalidades.',
    details: {
      pockets: 'Bolsillos laterales diagonales + secretera oculta interna en pretina',
      closure: 'Un botón frontal central a tono y cierre reforzado',
      lining: 'Pretina de alta costura con refuerzo sastre alemán',
    },
    recommendedFor: 'Ejecutivas, profesionales en constante desplazamiento, oficinas y eventos formales',
    badge: 'Fotos Reales (6 Colores · 3 Ángulos)',
    rating: 4.95,
    reviewsCount: 78,
    inStock: true,
  },
  {
    id: 'pantalon-lady-secret-premium',
    name: 'Pantalón Lady Secret Premium',
    pieces: 'individual',
    subtitle: '1 botón central, tiro alto, bolsillos posteriores de vivo fino y secretera oculta · Vistas 360°',
    category: 'pantalon',
    primaryImage: './assets/aistudio/pantalon_lady_secret_premium_marron_frontal.png',
    galleryImages: [
      // Marrón
      './assets/aistudio/pantalon_lady_secret_premium_marron_frontal.png',
      './assets/aistudio/pantalon_lady_secret_premium_marron_lado.png',
      './assets/aistudio/pantalon_lady_secret_premium_marron_trasera.png',
      // Plomo Plata
      './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_frontal.png',
      './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_lado.png',
      './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_trasera.png',
      // Beige
      './assets/aistudio/pantalon_lady_secret_premium_beige_frontal.png',
      './assets/aistudio/pantalon_lady_secret_premium_beige_lado.png',
      './assets/aistudio/pantalon_lady_secret_premium_beige_trasera.png',
    ],
    cut: 'Corte princesa anatómico estilizado',
    fabrics: ['Calidad Gazú'],
    colors: [
      {
        name: 'Marrón',
        hex: '#4A3528',
        class: 'bg-amber-950',
        image: './assets/aistudio/pantalon_lady_secret_premium_marron_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_premium_marron_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_premium_marron_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_premium_marron_trasera.png',
        },
      },
      {
        name: 'Plomo Plata',
        hex: '#B8BEC8',
        class: 'bg-slate-300',
        image: './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_premium_plomo_plata_trasera.png',
        },
      },
      {
        name: 'Beige',
        hex: '#CDB296',
        class: 'bg-amber-200',
        image: './assets/aistudio/pantalon_lady_secret_premium_beige_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_secret_premium_beige_frontal.png',
          lado: './assets/aistudio/pantalon_lady_secret_premium_beige_lado.png',
          trasera: './assets/aistudio/pantalon_lady_secret_premium_beige_trasera.png',
        },
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      '9 fotos reales en maniquí de taller: 3 colores con 3 ángulos cada uno (Frontal, De Lado y Trasera)',
      'Rotación automática interactiva de ángulos al pulsar cada color',
      'Bolsillos posteriores refinados con vivo fino sastre',
      'Secretera oculta en la pretina para llaves o billetes',
      'Un botón central sobrio y elegante a tono',
      'Tiro alto que estiliza el talle y alarga la pierna',
      'Corte de pierna recto sastre con raya permanente planchada',
      'Disponible en Marrón, Plomo Plata y Beige',
    ],
    description:
      'La versión de alta gama de la línea Secret. Incorpora bolsillos traseros refinados de vivo fino sastre, un botón frontal minimalista y la secretera oculta en pretina. Confeccionado en tela Gazú de máxima resistencia con 9 fotografías reales en 360° en sus 3 tonalidades.',
    details: {
      pockets: 'Bolsillos laterales diagonales, bolsillos posteriores de vivo fino y secretera interna',
      closure: 'Un botón central reforzado y cremallera de latón de alta durabilidad',
      lining: 'Refuerzo de pretina interior indeformable de alta costura',
    },
    recommendedFor: 'Directorios, reuniones formales, ceremonias y estilo ejecutivo superior',
    badge: 'Fotos Reales (3 Colores · 3 Ángulos)',
    rating: 4.97,
    reviewsCount: 56,
    inStock: true,
  },
  {
    id: 'pantalon-lady-luna-lino',
    name: 'Pantalón Lady Luna Lino',
    pieces: 'individual',
    subtitle: '1 botón central, tiro alto y bolsillos funcionales en lino sastrero estructurado · Vistas 360°',
    category: 'pantalon',
    primaryImage: './assets/aistudio/pantalon_lady_luna_lino_acero_frontal.png',
    galleryImages: [
      // Acero
      './assets/aistudio/pantalon_lady_luna_lino_acero_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_acero_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_acero_trasera.png',
      // Azul Noche
      './assets/aistudio/pantalon_lady_luna_lino_azul_noche_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_azul_noche_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_azul_noche_trasera.png',
      // Topo
      './assets/aistudio/pantalon_lady_luna_lino_topo_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_topo_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_topo_trasera.png',
      // Camello
      './assets/aistudio/pantalon_lady_luna_lino_camello_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_camello_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_camello_trasera.png',
      // Negro
      './assets/aistudio/pantalon_lady_luna_lino_negro_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_negro_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_negro_trasera.png',
      // Plomo Intenso
      './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_frontal.png',
      './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_lado.png',
      './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_trasera.png',
    ],
    cut: 'Corte princesa estival de tiro alto',
    fabrics: ['Lino Sastrero'],
    colors: [
      {
        name: 'Acero',
        hex: '#647D96',
        class: 'bg-slate-500',
        image: './assets/aistudio/pantalon_lady_luna_lino_acero_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_acero_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_acero_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_acero_trasera.png',
        },
      },
      {
        name: 'Azul Noche',
        hex: '#141A28',
        class: 'bg-slate-950',
        image: './assets/aistudio/pantalon_lady_luna_lino_azul_noche_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_azul_noche_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_azul_noche_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_azul_noche_trasera.png',
        },
      },
      {
        name: 'Topo',
        hex: '#8D7F75',
        class: 'bg-stone-500',
        image: './assets/aistudio/pantalon_lady_luna_lino_topo_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_topo_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_topo_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_topo_trasera.png',
        },
      },
      {
        name: 'Camello',
        hex: '#C69352',
        class: 'bg-amber-600',
        image: './assets/aistudio/pantalon_lady_luna_lino_camello_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_camello_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_camello_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_camello_trasera.png',
        },
      },
      {
        name: 'Negro',
        hex: '#18181B',
        class: 'bg-zinc-900',
        image: './assets/aistudio/pantalon_lady_luna_lino_negro_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_negro_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_negro_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_negro_trasera.png',
        },
      },
      {
        name: 'Plomo Intenso',
        hex: '#606672',
        class: 'bg-slate-600',
        image: './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_frontal.png',
        angles: {
          frontal: './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_frontal.png',
          lado: './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_lado.png',
          trasera: './assets/aistudio/pantalon_lady_luna_lino_plomo_intenso_trasera.png',
        },
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      '18 fotos reales en maniquí de taller: 6 colores con 3 ángulos cada uno (Frontal, De Lado y Trasera)',
      'Rotación automática interactiva de ángulos al pulsar cada color',
      'Tejido de lino estructurado con caída sastrera impecable y fresca',
      'Pretina anatómica de tiro alto con 1 botón central a tono',
      'Bolsillos laterales diagonales funcionales y raya sastre permanente',
      'Calce posterior limpio con pinzas moldeadoras de figura',
      'Disponible en Acero, Azul Noche, Topo, Camello, Negro y Plomo Intenso',
    ],
    description:
      'Combina la nobleza, frescura y textura del lino sastrero con el corte y caída impecable de Expresion\'s New. Diseñado con pretina anatómica de 1 botón a tono, bolsillos funcionales y raya permanente. Incluye 18 fotografías reales de taller con visualización en 360° en sus 6 tonalidades.',
    details: {
      pockets: 'Bolsillos laterales diagonales funcionales',
      closure: 'Un botón central reforzado a tono y cremallera oculta',
      lining: 'Pretina de algodón transpirable y costuras interiores reforzadas',
    },
    recommendedFor: 'Eventos al aire libre, climas cálidos, ponencias y estilo business-chic estival',
    badge: 'Fotos Reales (6 Colores · 3 Ángulos)',
    rating: 4.95,
    reviewsCount: 64,
    inStock: true,
  },
];
