"use client";

import React from 'react';
import Image from 'next/image';

// 2. Importa los componentes de Swiper y los estilos necesarios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importa los estilos base de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  { src: '/Imagen2.jpg', alt: 'Exterior painting in Back Bay' },
  { src: '/Imagen4.jpg', alt: 'Interior room painting in Cambridge' },
  { src: '/Imagen6.jpg', alt: 'House facade in Beacon Hill' },
  { src: '/Imagen7.jpg', alt: 'Modern living room finish' },
  { src: '/Imagen10.jpg', alt: 'Bedroom painting service' },
  { src: '/Imagen8.jpg', alt: 'Commercial exterior painting' },
  { src: '/Imagen9.jpg', alt: 'Bathroom' },
  { src: '/Imagen11.jpg', alt: 'Outside' },
];

const ProjectGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white"> {/* Cambié el fondo para que resalte más */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-navy">Results That Speak for Themselves</h2>
        <p className="text-center text-lg mb-12 text-gray-500">Showcasing our work in Back Bay, Cambridge, Beacon Hill, and beyond.</p>
      </div>

      {/* 3. Implementa el componente Swiper */}
      <Swiper
        // Carga los módulos que vamos a usar
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30} // Espacio entre slides
        slidesPerView={1} // Muestra 1 slide a la vez en móviles
        centeredSlides={true}
        loop={true} // Para que el carrusel sea infinito
        autoplay={{
          delay: 3000, // Pasa a la siguiente imagen cada 3 segundos
          disableOnInteraction: false, // No se detiene si el usuario interactúa
        }}
        pagination={{
          clickable: true, // Permite hacer clic en los puntos de paginación
        }}
        navigation={true} // Muestra las flechas de navegación
        className="mySwiper w-full h-[60vh] max-h-[600px]" // Clase para estilos y tamaño
        breakpoints={{
            // Muestra más slides en pantallas grandes
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={image.src} 
                alt={image.alt}
                fill={true} // Reemplaza a layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ayuda a Next.js a cargar el tamaño correcto
                style={{ objectFit: 'cover' }} // Reemplaza a objectFit
                className="transform hover:scale-105 transition-transform duration-300"
              />
               {/* Opcional: Título sobre la imagen */}
               {/* <div className="absolute bottom-0 left-0 bg-navy bg-opacity-70 text-white p-4 w-full rounded-b-lg">
                 <p className="font-sans">{image.alt}</p>
               </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectGallery;