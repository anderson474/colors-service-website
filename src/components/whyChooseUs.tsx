import React from 'react';

// Iconos sencillos (puedes reemplazarlos por SVGs o una librería de iconos)
const icons = {
  '🎯': 'Precision in Every Stroke',
  '🕰️': 'On-Time, Every Time',
  '🧼': 'Clean, Disruption-Free Work',
  '💬': 'Personalized Service',
  '🌟': '100+ Satisfied Clients in Greater Boston'
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-navy font-serif text-4xl md:text-5xl mb-12">Why Choose Color Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {Object.entries(icons).map(([icon, text]) => (
            <div key={text} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{icon}</span>
              <h3 className="font-sans font-semibold text-lg text-gray-500">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;