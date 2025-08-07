import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">What Our Clients Say</h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
          <p className="font-sans text-xl italic mb-6">
            “Color Service helped us completely transform our storefront. On time, meticulous, and extremely professional.”
          </p>
          <p className="font-semibold text-navy">— Carlos R., South End</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;