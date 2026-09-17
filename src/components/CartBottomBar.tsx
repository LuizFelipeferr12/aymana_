"use client";

import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface CartBottomBarProps {
  onOpenCart: () => void;
}

export function CartBottomBar({ onOpenCart }: CartBottomBarProps) {
  const { totalItems, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <button
            onClick={onOpenCart}
            className="w-full bg-primary text-white p-4 min-h-[56px] rounded-2xl shadow-xl shadow-sky-600/25 flex items-center justify-between hover:bg-primary-hover active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              </div>
              <span className="font-semibold text-sm tracking-wide">Ver carrinho</span>
            </div>
            
            <span className="font-bold text-lg tabular-nums tracking-tight">
              {formatPrice(totalPrice)}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
