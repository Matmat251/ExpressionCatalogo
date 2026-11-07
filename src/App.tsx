/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CATALOG_PRODUCTS, FABRICS_LIST, STORE_INFO } from './data/catalog';
import {
  ProductSuit,
  CartItem,
  BodyMeasurements,
  filterProducts,
} from './utils/tailoring';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BrandPresentationSection } from './components/BrandPresentationSection';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SizeCalculatorModal } from './components/SizeCalculatorModal';
import { StoreLocationModal } from './components/StoreLocationModal';
import { CartDrawer } from './components/CartDrawer';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { Footer } from './components/Footer';
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Ruler,
  MapPin,
  MessageCircle,
  Scissors,
  ShoppingBag,
  X,
} from 'lucide-react';

export default function App() {
  // Navigation & Modals state
  const [selectedProduct, setSelectedProduct] = useState<ProductSuit | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart / Quotation state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'name-asc' | 'name-desc' | 'rating'>('recommended');

  // Filtered catalog
  const filteredList = useMemo(() => {
    return filterProducts(CATALOG_PRODUCTS, {
      category: selectedCategory,
      fabric: selectedFabric,
      size: selectedSize,
      searchQuery,
      sort: sortBy,
    });
  }, [selectedCategory, selectedFabric, selectedSize, searchQuery, sortBy]);

  // Cart operations
  const handleAddToCart = (
    product: ProductSuit,
    color: string,
    fabric: string,
    size: string,
    customMeasurements?: BodyMeasurements,
    customFinish?: any,
    orderType: 'menor' | 'mayor' | 'confeccion' = 'menor'
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedFabric === fabric &&
          item.selectedSize === size &&
          item.orderType === orderType
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }

      const newItem: CartItem = {
        id: `${product.id}-${color}-${size}-${orderType}-${Date.now()}`,
        product,
        selectedColor: color,
        selectedFabric: fabric,
        selectedSize: size,
        orderType,
        customMeasurements,
        customFinish,
        quantity: 1,
      };

      return [...prev, newItem];
    });
  };

  const handleQuickAdd = (product: ProductSuit, color: string, size: string) => {
    handleAddToCart(product, color, product.fabrics[0], size);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedFabric('all');
    setSelectedSize('all');
    setSearchQuery('');
    setSortBy('recommended');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('sobre-nosotros');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const categories = [
    { id: 'all', label: 'Todas las Prendas (13)' },
    { id: 'conjunto', label: 'Conjuntos 2 & 3 Piezas' },
    { id: 'blazer', label: 'Blazers Sastreros' },
    { id: 'blusa', label: 'Blusas en Lino' },
    { id: 'pantalon', label: 'Pantalones de Tiro Alto' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F4] text-[#24262B]">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('catalogo');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onScrollToAbout={scrollToAbout}
      />

      {/* Main Content Area with bottom clearance for mobile dock */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero Section featuring Flyer details */}
        <HeroBanner
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          onOpenLocation={() => setIsLocationOpen(true)}
          onExploreCatalog={() => {
            const el = document.getElementById('catalogo');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onScrollToAbout={scrollToAbout}
        />

        {/* Brand Presentation Section: Concepto, Público Objetivo, Redes Sociales, Tipo de Venta, Datos Comerciales */}
        <BrandPresentationSection
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('catalogo');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLocation={() => setIsLocationOpen(true)}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        {/* Catalog Section */}
        <section id="catalogo" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Subtitle with luxury editorial hierarchy */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2643] block mb-1.5">
                Prendas en Stock & Confección Fina
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1C1917] tracking-tight">
                Catálogo de Sastres Expresion's New
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-xl leading-relaxed">
                Corte princesa anatómico en calidad Gazú y lino sastrero. Disponibles por menor, por mayor (curva y docena) y confección a medida.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B2643] hover:text-[#6E1A32] bg-white border border-[#E7E0D8] hover:border-[#8B2643]/40 px-4 py-2.5 rounded-full shadow-2xs hover:bg-rose-50/40 transition-all cursor-pointer active:scale-95"
              >
                <Ruler className="w-3.5 h-3.5" aria-hidden="true" />
                Guía de Medidas
              </button>

              <button
                type="button"
                onClick={() => setIsLocationOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#4E6B32] hover:text-[#3B5324] bg-white border border-[#E7E0D8] hover:border-[#4E6B32]/40 px-4 py-2.5 rounded-full shadow-2xs hover:bg-emerald-50/40 transition-all cursor-pointer active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                C.C. El Rey tda. 342 - D
              </button>
            </div>
          </div>

          {/* Interactive Filter Tabs (Zero-Pill: functional segmented button controls) */}
          <div className="space-y-4 mb-8">
            
            {/* Category Segmented Controls with touch scroll and snap */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#F4EFEA] border border-[#E7E0D8] rounded-2xl overflow-x-auto snap-x scrollbar-none shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start active:scale-98 ${
                    selectedCategory === cat.id
                      ? 'bg-white text-[#1C1917] shadow-sm font-bold border border-[#E7E0D8]/60'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sub-Filters Bar: Fabric, Size, Search & Sorting */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E7E0D8] shadow-[0_2px_12px_rgba(42,46,53,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
              
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 flex-1">
                {/* Search input */}
                <div className="relative w-full sm:w-auto sm:min-w-[210px] sm:max-w-xs flex-1">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Buscar Lady Smoking, Secret, Gazú..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#FAF7F4] border border-[#E7E0D8] rounded-xl pl-9 pr-7 py-2 text-xs focus:ring-1 focus:ring-[#8B2643] focus:border-[#8B2643] focus:bg-white focus:outline-hidden transition-all text-stone-800 placeholder-stone-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 text-xs cursor-pointer p-0.5 rounded-full hover:bg-stone-200"
                      aria-label="Limpiar búsqueda"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Fabric and Size dropdowns in a flexible grid on small screens */}
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
                  <select
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                    className="w-full sm:w-auto bg-[#FAF7F4] border border-[#E7E0D8] rounded-xl px-3 py-2 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:border-[#8B2643] focus:outline-hidden font-medium cursor-pointer"
                    aria-label="Filtrar por tela"
                  >
                    <option value="all">Todas las Telas</option>
                    {FABRICS_LIST.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full sm:w-auto bg-[#FAF7F4] border border-[#E7E0D8] rounded-xl px-3 py-2 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:border-[#8B2643] focus:outline-hidden font-medium cursor-pointer"
                    aria-label="Filtrar por talla"
                  >
                    <option value="all">Todas las Tallas</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="A Medida">A Medida (Bespoke)</option>
                  </select>
                </div>
              </div>

              {/* Sort selector and Result counter */}
              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs pt-1 sm:pt-0 border-t sm:border-t-0 border-[#E7E0D8]/60">
                <span className="text-stone-500 font-mono tabular-nums whitespace-nowrap text-[11px] sm:text-xs">
                  {filteredList.length} {filteredList.length === 1 ? 'prenda' : 'prendas'}
                </span>

                <div className="flex items-center gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-[#FAF7F4] border border-[#E7E0D8] rounded-xl px-3 py-2 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:border-[#8B2643] focus:outline-hidden font-medium cursor-pointer"
                    aria-label="Ordenar productos"
                  >
                    <option value="recommended">Recomendados</option>
                    <option value="name-asc">Nombre: A - Z</option>
                    <option value="name-desc">Nombre: Z - A</option>
                    <option value="rating">Mejor Valorados</option>
                  </select>

                  {(selectedCategory !== 'all' || selectedFabric !== 'all' || selectedSize !== 'all' || searchQuery) && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="p-2 text-stone-500 hover:text-[#8B2643] rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
                      title="Restablecer filtros"
                      aria-label="Restablecer filtros"
                    >
                      <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Active Filter Chips & Live Result Counter */}
          {(selectedCategory !== 'all' || selectedFabric !== 'all' || selectedSize !== 'all' || searchQuery.trim() !== '') && (
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs bg-white p-3 rounded-xl border border-[#E7E0D8] shadow-2xs">
              <span className="text-stone-500 font-medium text-[11px] uppercase tracking-wider mr-1">
                Filtros activos:
              </span>

              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F4] text-stone-800 border border-[#E7E0D8] text-xs font-medium">
                  <span>Categoría: <strong>{categories.find((c) => c.id === selectedCategory)?.label || selectedCategory}</strong></span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className="text-stone-400 hover:text-stone-700 hover:bg-stone-200/80 rounded-full p-0.5 inline-flex items-center justify-center cursor-pointer ml-0.5"
                    aria-label="Quitar filtro de categoría"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                </span>
              )}

              {selectedFabric !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F4] text-stone-800 border border-[#E7E0D8] text-xs font-medium">
                  <span>Tela: <strong>{selectedFabric}</strong></span>
                  <button
                    type="button"
                    onClick={() => setSelectedFabric('all')}
                    className="text-stone-400 hover:text-stone-700 hover:bg-stone-200/80 rounded-full p-0.5 inline-flex items-center justify-center cursor-pointer ml-0.5"
                    aria-label="Quitar filtro de tela"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                </span>
              )}

              {selectedSize !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF7F4] text-stone-800 border border-[#E7E0D8] text-xs font-medium">
                  <span>Talla: <strong>{selectedSize}</strong></span>
                  <button
                    type="button"
                    onClick={() => setSelectedSize('all')}
                    className="text-stone-400 hover:text-stone-700 hover:bg-stone-200/80 rounded-full p-0.5 inline-flex items-center justify-center cursor-pointer ml-0.5"
                    aria-label="Quitar filtro de talla"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                </span>
              )}

              {searchQuery.trim() !== '' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-50 text-[#8B2643] border border-rose-200 text-xs font-medium">
                  <span>Búsqueda: <strong>"{searchQuery}"</strong></span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-[#8B2643]/70 hover:text-[#8B2643] hover:bg-rose-100 rounded-full p-0.5 inline-flex items-center justify-center cursor-pointer ml-0.5"
                    aria-label="Quitar filtro de búsqueda"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                  </button>
                </span>
              )}

              <div className="ml-auto flex items-center gap-3">
                <span className="text-[11px] text-stone-500 font-mono">
                  Mostrando {filteredList.length} de {CATALOG_PRODUCTS.length} prendas
                </span>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#8B2643] hover:text-[#6E1A32] underline underline-offset-2 font-medium cursor-pointer py-0.5 px-1.5 hover:bg-rose-50/60 rounded-md transition-colors"
                >
                  Limpiar todos
                </button>
              </div>
            </div>
          )}

          {/* Product Cards Grid */}
          {filteredList.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E7E0D8] p-8 sm:p-14 text-center max-w-md mx-auto my-10 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-[#8B2643]/70">
                <SlidersHorizontal className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-stone-900 text-lg mb-1.5">
                No encontramos prendas con esos filtros
              </h3>
              <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                Prueba cambiando la tela, talla o término de búsqueda, o consulta directamente por confección a medida en taller.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-[#8B2643] hover:bg-[#6E1A32] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-xs transition-all cursor-pointer active:scale-95"
              >
                Ver todas las prendas (13)
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setSelectedProduct(p)}
                  onQuickAdd={handleQuickAdd}
                />
              ))}
            </div>
          )}
        </section>

        {/* Craftsmanship & Fabrics Section */}
        <CraftsmanshipSection />

        {/* Desktop Floating WhatsApp Button */}
        <aside
          aria-label="Acceso rápido de contacto"
          className="hidden lg:flex fixed bottom-6 right-6 z-30 pointer-events-none"
        >
          <div className="pointer-events-auto">
            <a
              href={`https://wa.me/51978095313?text=${encodeURIComponent(
                "¡Hola Expresion's New! Visité su catálogo web y deseo consultar sobre las prendas en calidad Gazú y lino."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#4E6B32] hover:bg-[#3D5324] text-white text-xs font-semibold px-5 py-3.5 rounded-full shadow-[0_8px_25px_rgba(78,107,50,0.35)] hover:shadow-[0_12px_30px_rgba(78,107,50,0.45)] transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Contactar a Expresion's New por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp: 978 095 313</span>
            </a>
          </div>
        </aside>

        {/* Mobile & Tablet Fixed Bottom Navigation Dock complying with Safe Area Insets */}
        <nav
          aria-label="Navegación móvil inferior"
          className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E7E0D8] px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-around select-none"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              const el = document.getElementById('catalogo');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-stone-700 hover:text-[#8B2643] transition-colors min-w-[56px] min-h-[44px] cursor-pointer"
          >
            <Search className="w-4 h-4 mb-0.5" aria-hidden="true" />
            <span className="text-[10px] font-medium tracking-tight">Catálogo</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(true)}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-stone-700 hover:text-[#8B2643] transition-colors min-w-[56px] min-h-[44px] cursor-pointer"
          >
            <Ruler className="w-4 h-4 mb-0.5 text-[#8B2643]" aria-hidden="true" />
            <span className="text-[10px] font-medium tracking-tight">Tallas</span>
          </button>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px]"
            aria-label="Contactar por WhatsApp"
          >
            <div className="w-7 h-7 rounded-full bg-[#4E6B32] text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </div>
            <span className="text-[10px] font-semibold text-[#4E6B32] mt-0.5">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setIsLocationOpen(true)}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-stone-700 hover:text-[#4E6B32] transition-colors min-w-[56px] min-h-[44px] cursor-pointer"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-[#4E6B32]" aria-hidden="true" />
            <span className="text-[10px] font-medium tracking-tight">Tienda</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex flex-col items-center justify-center p-2 rounded-xl text-stone-700 hover:text-[#8B2643] transition-colors min-w-[56px] min-h-[44px] cursor-pointer"
            aria-label={`Ver cotización (${totalCartCount} prendas)`}
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 mb-0.5 text-[#8B2643]" aria-hidden="true" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#8B2643] text-white text-[9px] font-bold px-1 rounded-full tabular-nums ring-1 ring-white">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium tracking-tight">Cotizar</span>
          </button>
        </nav>
      </main>

      {/* Footer */}
      <Footer
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenLocation={() => setIsLocationOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById('catalogo');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interactive Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => {
          setSelectedProduct(null);
          setIsSizeGuideOpen(true);
        }}
      />

      <SizeCalculatorModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <StoreLocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
