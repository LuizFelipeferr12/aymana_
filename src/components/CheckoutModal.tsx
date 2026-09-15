"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const handleCheckout = () => {
    const phone = "5511999999999";
    const textItems = items.map(
      item => `${item.quantity}x ${item.product.name} (${formatPrice(item.product.price * item.quantity)})`
    ).join("%0A");
    
    const message = `Olá, AyManá! Gostaria de fazer o seguinte pedido:%0A%0A${textItems}%0A%0A*Total: ${formatPrice(totalPrice)}*%0A%0AAguardo confirmação.`;
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-text-main/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-3xl z-[70] flex flex-col max-w-lg mx-auto shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-accent">
              <h2 className="text-xl font-serif font-bold text-text-main flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Seu Pedido
              </h2>
              <button 
                onClick={onClose}
                className="p-2 bg-accent/50 text-text-muted rounded-full hover:bg-accent hover:text-text-main transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-text-muted py-10">
                  <p>Seu carrinho está vazio.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-accent shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-main text-sm line-clamp-1">{item.product.name}</h4>
                      <p className="text-primary font-bold text-sm">{formatPrice(item.product.price)}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-accent/50 rounded-full px-2 py-1">
                      <button 
                        onClick={() => {
                          if (item.quantity > 1) updateQuantity(item.product.id, item.quantity - 1);
                          else removeItem(item.product.id);
                        }}
                        className="p-1 text-text-muted hover:text-text-main"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-text-muted hover:text-text-main"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-slate-50 border-t border-accent">
                <div className="flex justify-between mb-4 text-text-main font-semibold text-lg">
                  <span>Total ({totalItems} itens)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all"
                >
                  Finalizar no WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
