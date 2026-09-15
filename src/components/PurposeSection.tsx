"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function PurposeSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-accent/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-32 h-32 text-primary" />
          </div>

          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-3xl font-serif font-bold text-text-main mb-4">
              Nosso Propósito
            </h2>
            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
              <p>
                O nome <span className="font-semibold text-primary">AyManá</span> foi inspirado no "Maná" enviado por Deus no deserto — simbolizando sustento, graça diária e amor.
              </p>
              <p>
                Acreditamos que cada doce é uma forma de partilhar afeto. Nossas receitas são preparadas artesanalmente para levar alegria e um toque celestial ao seu dia.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary/20">
              <blockquote className="italic text-text-main font-serif text-xl sm:text-2xl font-medium">
                "Provem e vejam como o Senhor é bom."
                <footer className="text-sm font-sans text-primary mt-2 not-italic font-semibold">— Salmos 34:8</footer>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
