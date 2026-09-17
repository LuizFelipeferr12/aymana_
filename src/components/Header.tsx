"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 h-18 flex items-center justify-between">
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo-2.png" 
            alt="AyManá Confeitaria Artesanal" 
            className="h-10 sm:h-11 w-auto object-contain drop-shadow-xs hover:scale-105 transition-transform duration-200" 
          />
        </div>
        
        <button
          onClick={onOpenCart}
          className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-main hover:bg-sky-50 rounded-full transition-colors active:scale-95 group focus:outline-none focus:ring-2 focus:ring-primary/40"
          aria-label="Abrir carrinho de compras"
        >
          <ShoppingCart className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full shadow-sm">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
