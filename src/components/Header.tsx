"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 h-full py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo-2.png" 
            alt="AyManá" 
            className="h-full w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform" 
          />
        </div>
        
        <button
          onClick={onOpenCart}
          className="relative p-2 text-text-main hover:bg-accent rounded-full transition-colors active:scale-95"
          aria-label="Abrir carrinho"
        >
          <ShoppingCart className="w-6 h-6 text-primary" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full transform translate-x-1/4 -translate-y-1/4">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
