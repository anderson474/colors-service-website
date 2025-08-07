'use client'

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center 
    justify-center text-center text-white">
      {/* Fondo con imagen */}
      <Image
        src="/Imagen1.jpg" // Usa una de tus imágenes de alta calidad
        alt="Elegant painted wall"
        layout="fill"
        objectFit="cover"
        className="z-[-1] brightness-50" // oscurece la imagen para que el texto resalte
      />
      
      <div className="z-10 p-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-4">
          <TypeAnimation
            sequence={[
              'Your Space',
              2000, // Pausa de 2 segundos
              'Our Color',
              3000, // Pausa de 3 segundos
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity} // Repetir la animación infinitamente
            speed={40} // Velocidad de tipeo
          />
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Professional residential and commercial painting services in Boston, MA.
        </p>
        
          
          <a href="#gallery" className="border-2 border-white text-white 
          font-bold py-3 px-8 rounded-full hover:bg-white hover:text-navy transition-all">
            View Our Work
          </a>
      </div>
    </section>
  );
};

export default Hero;