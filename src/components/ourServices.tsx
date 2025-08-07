import React from 'react';

const services = [
  "Interior & Exterior Painting",
  "Facade Restoration",
  "Color Consultation",
  "Decorative Painting & Murals",
  "High-End Residential & Office Finishes"
];

const OurServices: React.FC = () => {
  return (
    // 1. Contenedor principal. Hacemos que sea 'relative' para posicionar el fondo.
    <section className="relative">

      {/* 2. Div para el fondo con efecto parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed brightness-50"
        style={{ backgroundImage: "url('/Imagen5.jpg')" }} // Elige una de tus imágenes
      >
        {/* Este div está vacío, solo sirve como capa de fondo */}
      </div>

      {/* 3. Contenedor del contenido. Debe ser 'relative' y tener un z-index mayor que el fondo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            // Las tarjetas de servicio ahora tienen un fondo semi-transparente para integrarse mejor
            <div key={service} className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-2xl hover:shadow-2xl
             transition-shadow duration-300">
              <h3 className="font-extralight text-2xl text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurServices;