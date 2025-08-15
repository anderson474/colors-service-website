// src/components/OurServices.tsx
"use client"; // Sigue siendo un componente de cliente

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image'; // Importamos el componente Image de Next.js

const services = [
  "Interior & Exterior Painting",
  "Facade Restoration",
  "Color Consultation",
  "Decorative Painting & Murals",
  "High-End Residential & Office Finishes"
];

const OurServices: React.FC = () => {
  return (
    // 1. Contenedor principal. Es 'relative' para posicionar el fondo parallax.
    // Le damos padding vertical para que el contenido respire.
    <section className="relative py-16 md:py-24 overflow-hidden">
      
      {/* 2. El Fondo Parallax. Usamos el componente <Parallax> más flexible. */}
      {/* Está posicionado absolutamente para ocupar todo el espacio detrás del contenido. */}
      <Parallax speed={-15} className="absolute inset-0 z-0">
        {/* Usamos next/image para una optimización de imagen perfecta. */}
        <Image
          src="/Imagen5.jpg" // ¡IMPORTANTE: Usa tu imagen optimizada .webp!
          alt="Beautifully painted porch"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </Parallax>

      {/* 3. El Contenido. Este div ahora está en el flujo normal del documento. */}
      {/* Su altura natural definirá la altura de toda la sección. */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">Our Services</h2>
        
        {/* El grid ya era responsivo, lo cual es perfecto. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(service => (
            <div 
              key={service} 
              className="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-serif text-xl md:text-2xl text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
// esta es la verga de teclado me encanta para programar es la maldita verga
export default OurServices;