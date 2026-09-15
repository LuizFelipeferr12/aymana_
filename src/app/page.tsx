"use client";

import { useState } from "react";
import { CartProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { PurposeSection } from "../components/PurposeSection";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { CartBottomBar } from "../components/CartBottomBar";
import { CheckoutModal } from "../components/CheckoutModal";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <HeroSection />
          <PurposeSection />
          <Menu />
        </main>
        
        <Footer />
        
        <CartBottomBar onOpenCart={() => setIsCartOpen(true)} />
        <CheckoutModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </CartProvider>
  );
}
