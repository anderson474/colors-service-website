'use client'

import React from 'react';
import Lottie from 'react-lottie';

// 1. Importa los datos de las animaciones desde tus archivos locales
import animationClean from '../lottieFiles/Cleaning.json';
import animationPrecision from '../lottieFiles/Precision.json'; // Asegúrate de que los nombres coincidan
import animationTime from '../lottieFiles/Time.json';
import animationService from '../lottieFiles/service.json';
import animationSatisfied from '../lottieFiles/Customer.json'; // Cambié a Customer.json basado en tu captura de pantalla

// 2. Asocia cada texto con su animación importada
const animations = {
  'Precision in Every Stroke': animationPrecision,
  'On-Time, Every Time': animationTime,
  'Clean, Disruption-Free Work': animationClean,
  'Personalized Service': animationService,
  '100+ Satisfied Clients in Greater Boston': animationSatisfied
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-navy font-serif text-4xl md:text-5xl mb-12">Why Choose Color Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {Object.entries(animations).map(([text, animationData]) => {
            // 3. Define las opciones para cada Lottie como en la documentación
            const defaultOptions = {
              loop: true,
              autoplay: true,
              animationData: animationData, // Usa el dato de la animación actual
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            };

            return (
              <div key={text} className="flex flex-col items-center">
                <Lottie 
                  options={defaultOptions}
                  height={150} // Puedes ajustar el tamaño
                  width={150}  // Puedes ajustar el tamaño
                />
                <h3 className="font-sans font-semibold text-lg text-gray-500 mt-4 text-center">{text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;