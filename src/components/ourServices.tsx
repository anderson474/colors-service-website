// src/components/OurServices.tsx
"use client";

import React from 'react';
// 1. Ya no necesitamos react-scroll-parallax ni next/image para el fondo
import { motion } from 'framer-motion';

const services = [
  "Interior & Exterior Painting",
  "Facade Restoration",
  "Color Consultation",
  "Decorative Painting & Murals",
  "High-End Residential & Office Finishes"
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const OurServices: React.FC = () => {
  return (
    // La section sigue siendo 'relative' para que el div de fondo se posicione correctamente
    <section className="relative py-40 md:py-60 overflow-hidden">
      
      {/* 2. REEMPLAZO: Usamos un div simple con bg-fixed, igual que en Testimonials */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed brightness-50"
        style={{ backgroundImage: "url('/Imagen5.jpg')" }}
      />

      {/* El resto del contenido se mantiene igual, pero ahora sobre el fondo que sí funciona */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map(service => (
            <motion.div 
              key={service} 
              className="w-[80%] sm:w-[45%] lg:w-[30%] bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2"
              variants={cardVariants}
            >
              <h3 className="font-serif text-xl md:text-2xl text-white">{service}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default OurServices;