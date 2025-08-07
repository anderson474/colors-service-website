import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 flex items-center 
    justify-center text-center text-white">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed brightness-50"
        style={{ backgroundImage: "url('/ImagePexel1.jpg')" }} // Elige una de tus imágenes
      >
        {/* Este div está vacío, solo sirve como capa de fondo */}
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-navy">What Our Clients Say</h2>
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <p className="font-sans text-xl italic mb-6 text-gray-500">
            “Color Service helped us completely transform our storefront. On time, meticulous, and extremely professional.”
          </p>
          <p className="font-semibold text-navy">— Carlos R., South End</p>
        </div>
      </div>
    </section>
  );
};
//ImagePexel1.jpg
export default Testimonials;