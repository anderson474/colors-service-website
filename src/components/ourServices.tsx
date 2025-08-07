// src/components/OurServices.tsx
"use client"; // También necesita ser un componente de cliente.

import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const services = [
  "Interior & Exterior Painting",
  "Facade Restoration",
  "Color Consultation",
  "Decorative Painting & Murals",
  "High-End Residential & Office Finishes"
];

const OurServices: React.FC = () => {
  return (
    // Usamos ParallaxBanner como contenedor principal de la sección.
    <ParallaxBanner
      style={{ aspectRatio: '2 / 1', height: 'auto' }} // Define la proporción o altura de la sección
      className="relative"
    >
      {/* Capa 1: La imagen de fondo. 'speed' controla la velocidad del parallax. */}
      <ParallaxBannerLayer
        image="/Imagen5.webp" // Usa tu imagen optimizada
        speed={-20} // Un valor negativo hace que se mueva hacia arriba más lento que el scroll
        className="brightness-50" // Oscurece la imagen para el contraste
      />

      {/* Capa 2: El contenido. Lo ponemos en una capa superior. */}
      <ParallaxBannerLayer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <div 
                  key={service} 
                  className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-white">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default OurServices;