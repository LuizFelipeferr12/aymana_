"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowDown, MessageCircle } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll animations linked to the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Central brigadeiro transforms: grows, rotates, and floats smoothly
  const brigadeiroScale = useTransform(scrollYProgress, [0, 1], [1, 1.45]);
  const brigadeiroRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const brigadeiroY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  // Typography parallax: letters separate to the sides
  const textXLeft = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const textXRight = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  // Floating particles scatter on scroll
  const particle1X = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const particle1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const particle2X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const particle2Y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const particle3X = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const particle3Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const particle4X = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const particle4Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const particlesOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Bottom cards and controls fade gently as user enters the menu
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);
  const bottomY = useTransform(scrollYProgress, [0, 0.6], [0, 40]);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] text-white min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between pt-10 pb-8 px-4 select-none"
    >
      {/* Celestial lighting atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300/20 via-transparent to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-slate-950/40" />

      {/* Main 3D Depth Typography Area */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center my-auto pt-4 sm:pt-8">
        
        {/* Giant 3D Layered Typography: AYM + BRIGADEIRO + ANÁ */}
        <div className="relative flex items-center justify-center w-full my-2 sm:my-4">
          
          {/* Left Wing Letters: AYM */}
          <motion.span
            style={{ x: textXLeft, opacity: textOpacity }}
            className="font-serif font-black text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tighter text-white drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
          >
            AYM
          </motion.span>

          {/* Central 3D Gourmet Brigadeiro */}
          <motion.div
            style={{
              scale: brigadeiroScale,
              rotate: brigadeiroRotate,
              y: brigadeiroY,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 mx-[-16px] xs:mx-[-24px] sm:mx-[-45px] md:mx-[-65px] w-40 xs:w-48 sm:w-64 md:w-80 lg:w-[23rem] aspect-square shrink-0 cursor-grab active:cursor-grabbing"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-brigadeiro.png"
              alt="Brigadeiro Gourmet Artesanal AyManá"
              className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] hover:scale-105 transition-transform duration-300"
              draggable={false}
            />

            {/* Suspended Chocolate Sprinkles (Floating in 3D space) */}
            <motion.div
              style={{ x: particle1X, y: particle1Y, opacity: particlesOpacity }}
              className="absolute -top-4 -left-4 w-4 h-8 bg-[#3d2314] rounded-full rotate-45 shadow-md shadow-black/40 border-t border-amber-900/40"
            />
            <motion.div
              style={{ x: particle2X, y: particle2Y, opacity: particlesOpacity }}
              className="absolute -top-6 right-6 w-3 h-7 bg-[#2e1a0f] rounded-full -rotate-12 shadow-md shadow-black/40"
            />
            <motion.div
              style={{ x: particle3X, y: particle3Y, opacity: particlesOpacity }}
              className="absolute bottom-6 -left-6 w-3.5 h-7 bg-[#452717] rounded-full rotate-[60deg] shadow-md shadow-black/40"
            />
            <motion.div
              style={{ x: particle4X, y: particle4Y, opacity: particlesOpacity }}
              className="absolute -bottom-4 right-10 w-3 h-6 bg-[#2a170d] rounded-full rotate-[25deg] shadow-md shadow-black/40"
            />
          </motion.div>

          {/* Right Wing Letters: ANÁ */}
          <motion.span
            style={{ x: textXRight, opacity: textOpacity }}
            className="font-serif font-black text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tighter text-white drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
          >
            ANÁ
          </motion.span>
        </div>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sky-100 font-sans font-bold text-xs xs:text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-8 drop-shadow-sm max-w-xl"
        >
          Adoçando dias com o amor de Deus • Confeitaria Artesanal
        </motion.p>

        {/* CTA Buttons (Pills inspired by the reference) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white text-sky-950 rounded-full font-bold shadow-xl shadow-black/20 hover:bg-sky-50 hover:shadow-sky-300/30 transition-all active:scale-95 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span>Ver Cardápio</span>
            <ChevronRight className="w-5 h-5 text-sky-600" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido na AyManá."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 border-2 border-white/75 text-white rounded-full font-bold hover:bg-white/15 transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pedir no WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Shelf: Preview Cards & Mouse Scroll Indicator */}
      <motion.div
        style={{ opacity: bottomOpacity, y: bottomY }}
        className="relative z-10 max-w-4xl mx-auto w-full pt-8 sm:pt-12 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-left"
      >
        {/* Left Preview Card */}
        <div 
          onClick={scrollToMenu}
          className="hidden md:flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/15 cursor-pointer transition-all active:scale-98"
        >
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-sky-900/40 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-brigadeiro.png"
              alt="Brigadeiro Gourmet"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white leading-tight">Brigadeiro Gourmet</h4>
            <p className="text-xs text-sky-100/80 line-clamp-1 mt-0.5">Puro cacau com chocolate belga</p>
          </div>
        </div>

        {/* Center: Mouse Scroll Indicator */}
        <div 
          onClick={scrollToMenu}
          className="flex flex-col items-center justify-center cursor-pointer group py-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-1.5 mb-1 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
          <span className="text-[11px] font-semibold text-sky-100 tracking-wider uppercase group-hover:text-white transition-colors flex items-center gap-1">
            Role para ver o cardápio
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </span>
        </div>

        {/* Right Preview Card */}
        <div 
          onClick={scrollToMenu}
          className="hidden md:flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/15 cursor-pointer transition-all active:scale-98"
        >
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-sky-900/40 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=200&auto=format&fit=crop"
              alt="Bolos de Pote"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white leading-tight">Bolos de Pote</h4>
            <p className="text-xs text-sky-100/80 line-clamp-1 mt-0.5">Ninho com morangos frescos</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
