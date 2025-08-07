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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="font-serif text-2xl text-navy">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;