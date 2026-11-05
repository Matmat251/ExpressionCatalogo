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
        <section id="catalogo" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B2643] block mb-1">
                Prendas en Stock & Confección
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
                Catálogo de Prendas Expresion's New
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                Corte princesa en calidad Gazú y lino sastrero. Precios disponibles por menor, por mayor (curva y docena) y confección institucional.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B2643] hover:text-[#721C34] bg-white border border-stone-200 px-3 py-2 rounded-lg shadow-2xs hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <Ruler className="w-3.5 h-3.5" />
                Guía de Medidas
              </button>

              <button
                type="button"
                onClick={() => setIsLocationOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4E6B32] hover:text-[#3B5324] bg-white border border-stone-200 px-3 py-2 rounded-lg shadow-2xs hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                C.C. El Rey tda. 342 - D
              </button>
            </div>
          </div>

          {/* Interactive Filter Tabs (Zero-Pill: functional segmented button controls) */}
          <div className="space-y-4 mb-8">
            
            {/* Category Segmented Controls with touch scroll and snap */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl overflow-x-auto snap-x scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 snap-start ${
                    selectedCategory === cat.id
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sub-Filters Bar: Fabric, Size, Search & Sorting */}
            <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 flex-1">
                {/* Search input */}
                <div className="relative w-full sm:w-auto sm:min-w-[190px] sm:max-w-xs flex-1">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Buscar Lady Smoking, Secret, Gazú..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-8.5 pr-7 py-2 sm:py-1.5 text-xs focus:ring-1 focus:ring-[#8B2643] focus:bg-white focus:outline-hidden"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-700 text-xs cursor-pointer p-0.5"
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
                    className="w-full sm:w-auto bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 sm:py-1.5 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
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
                    className="w-full sm:w-auto bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 sm:py-1.5 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
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
              <div className="flex items-center justify-between sm:justify-end gap-2.5 text-xs pt-1 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                <span className="text-stone-500 font-mono tabular-nums whitespace-nowrap text-[11px] sm:text-xs">
                  {filteredList.length} {filteredList.length === 1 ? 'prenda' : 'prendas'}
                </span>

                <div className="flex items-center gap-1.5">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:ring-1 focus:ring-[#8B2643] focus:outline-hidden"
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
                      className="p-1.5 text-stone-500 hover:text-[#8B2643] rounded hover:bg-stone-100 transition-colors cursor-pointer"
                      title="Restablecer filtros"
                      aria-label="Restablecer filtros"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredList.length === 0 ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 text-center max-w-md mx-auto my-8">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3 text-stone-400">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-stone-900 text-base mb-1">
                No encontramos prendas con esos filtros
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Prueba cambiando la tela, talla o término de búsqueda, o consulta por confección a medida.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-[#8B2643] hover:bg-[#721C34] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Ver todas las prendas
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
              className="flex items-center gap-2 bg-[#4E6B32] hover:bg-[#3D5528] text-white text-xs font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
              aria-label="Contactar a Expresion's New por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 978 095 313</span>
            </a>
          </div>
        </aside>

        {/* Mobile & Tablet Fixed Bottom Navigation Dock */}
        <nav
          aria-label="Navegación móvil inferior"
          className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-1.5 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex items-center justify-around"
        >
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              const el = document.getElementById('catalogo');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center justify-center p-1.5 text-stone-600 hover:text-[#8B2643] transition-colors"
          >
            <Search className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-medium">Catálogo</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(true)}
            className="flex flex-col items-center justify-center p-1.5 text-stone-600 hover:text-[#8B2643] transition-colors"
          >
            <Ruler className="w-4 h-4 mb-0.5 text-[#8B2643]" />
            <span className="text-[10px] font-medium">Tallas</span>
          </button>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 text-stone-600 hover:text-[#4E6B32] transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#4E6B32] text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-semibold text-[#4E6B32]">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setIsLocationOpen(true)}
            className="flex flex-col items-center justify-center p-1.5 text-stone-600 hover:text-[#4E6B32] transition-colors"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-[#4E6B32]" />
            <span className="text-[10px] font-medium">Tienda</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex flex-col items-center justify-center p-1.5 text-stone-600 hover:text-[#8B2643] transition-colors"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 mb-0.5 text-[#8B2643]" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#8B2643] text-white text-[9px] font-bold px-1 rounded-full tabular-nums">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">Cotizar</span>
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
