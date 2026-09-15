"use client";

import { Plus } from "lucide-react";
import { Product } from "../data/mock";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-2xl shadow-sm border border-accent overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-accent/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-text-main leading-tight mt-1">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-text-muted mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-accent">
          <span className="font-bold text-lg text-text-main">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          
          <button
            onClick={() => addItem(product)}
            className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors active:scale-95"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
