import React from 'react';
import Image from 'next/image';

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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-navy">Results That Speak for Themselves</h2>
        <p className="text-center text-lg mb-12 text-gray-500">Showcasing our work in Back Bay, Cambridge, Beacon Hill, and beyond.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map(image => (
            <div key={image.src} className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={image.src} 
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;