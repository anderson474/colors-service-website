import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    // Usamos las clases de Tailwind directamente. bg-navy es nuestro color personalizado.
    <footer className="bg-[#040707] text-white font-sans">
      <div className="max-w-7xl mx-auto pt-5 
      flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-5">

        {/* Sección de Contacto */}
        <div className="flex flex-col gap-2">
          <h4 className="font-serif text-xl text-gold mb-2">Contact us</h4>
          <p>📞(123) 456-7890</p>
          <p>📍Boston, MA</p>
          <p>Licencia #12345</p>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="flex flex-col gap-2">
          <h4 className="font-serif text-xl text-gold mb-2">Follow us</h4>
          {/* <a href="#" className="hover:text-gold transition-colors">Facebook</a> */}
          <a href="https://www.instagram.com/colorservicepainting?igsh=ajZ1em1mOGRyYXFp&utm_source=qr" 
          className="hover:text-gold transition-colors">Instagram</a>
          {/* <a href="#" className="hover:text-gold transition-colors">LinkedIn</a> */}
        </div>
        {/* Sección del Logo y Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/Logocolorsservice1.png" // Asegúrate que el nombre sea correcto
            alt="Logo colors service 1" 
            width={180} 
            height={60}
            className="object-contain mb-4"
          />
        </div>

      </div>
      <p className="font-serif text-gold italic text-center">
        Precision. Style. Trust.
      </p>
    </footer>
  );
};

export default Footer;