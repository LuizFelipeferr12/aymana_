"use client";

import { useState } from "react";
import { CATEGORIES, MOCK_PRODUCTS, Category } from "../data/mock";
import { ProductCard } from "./ProductCard";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-text-main mb-3">Nosso Cardápio</h2>
          <p className="text-text-muted">Escolha suas delícias e adicione ao carrinho</p>
        </div>

        {/* Categories Carousel */}
        <div className="relative mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 snap-x">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95",
                  activeCategory === category 
                    ? "bg-primary text-white shadow-md shadow-primary/30" 
                    : "bg-white text-text-muted border border-accent hover:border-primary/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  );
}
