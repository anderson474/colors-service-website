import React from 'react';

const Testimonials: React.FC = () => {
  return (
    // 1. Contenedor principal para el posicionamiento relativo
    <section className="relative py-20">

      {/* 2. Fondo con efecto parallax. Se coloca en una capa inferior (z-0) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed brightness-50"
        style={{ backgroundImage: "url('/ImagePexel1.jpg')" }}
      >
        {/* Este div está vacío, solo sirve como la capa de fondo visual */}
      </div>

      {/* 3. Contenedor para todo el contenido. Se coloca en una capa superior (z-10) */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* Título de la sección. Ahora en blanco para que sea perfectamente legible. */}
        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-white">
          What Our Clients Say
        </h2>

        {/* Tarjeta de testimonio con el efecto de "cristal esmerilado" que ya tenías */}
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <p className="font-sans text-xl italic mb-6 text-slate-800">
            “Color Service helped us completely transform our storefront. On time, meticulous, and extremely professional.”
          </p>
          <p className="font-semibold text-navy">
            — Carlos R., South End
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;