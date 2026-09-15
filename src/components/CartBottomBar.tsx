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
            className="w-full bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-between hover:bg-primary-hover active:scale-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <span className="font-semibold text-sm">Ver carrinho</span>
            </div>
            
            <span className="font-bold text-lg">
              {formatPrice(totalPrice)}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
