"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-accent/30 py-12 px-4 sm:py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-12 h-12 bg-primary/20 rounded-full blur-xl" 
      />
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto z-10"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          Confeitaria Artesanal
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text-main font-bold leading-tight mb-6">
          Adoçando dias com o <span className="text-primary italic">amor de Deus</span>
        </h1>
        <p className="text-text-muted text-lg sm:text-xl mb-8 font-sans max-w-lg mx-auto">
          Ingredientes selecionados, receitas de família e muito carinho em cada preparo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Ver Cardápio
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de tirar uma dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-text-main border border-accent rounded-full font-semibold hover:bg-accent transition-colors active:scale-95 flex items-center justify-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
