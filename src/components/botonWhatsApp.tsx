// src/components/BotonWhatsApp.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsApp: React.FC = () => {
  // 1. Configura tu número y mensaje.
  // IMPORTANTE: El número debe ir sin el '+' y sin espacios.
  const numeroTelefono = '18572462445'; 
  
  // Mensaje predeterminado relevante para tu negocio en Boston.
  const mensaje = 'Hello, I\'m interested in your painting services and would like a quote.';

  // Codifica el mensaje para que sea seguro en una URL.
  const mensajeCodificado = encodeURIComponent(mensaje);

  const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  return (
    // Contenedor principal que posiciona todo en la esquina inferior derecha.
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3">
      
      {/* La burbuja de mensaje con animación sutil (opcional) */}
      <div className="relative group">
        <div className="
          bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg
           group-hover:opacity-100 transition-opacity duration-300
        ">
          Need help?
        </div>
        {/* El puntero/flecha de la burbuja */}
        <div 
          className="
            absolute left-2/3 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45
             group-hover:opacity-100 transition-opacity duration-300
          "
          style={{ bottom: '-8px' }} // Posiciona la flecha
        ></div>
      </div>

      {/* El botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 text-white p-4 rounded-full 
          shadow-lg hover:bg-green-600 transition-all duration-300 
          flex items-center justify-center
          hover:scale-110
        "
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default BotonWhatsApp;