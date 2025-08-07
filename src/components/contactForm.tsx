import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="bg-navy text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Transform your space with Color Service.</h2>
        <form className="mt-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-100 text-gray-800 placeholder-gray-500"/>
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-100 text-gray-800 placeholder-gray-500"/>
          </div>
          <textarea placeholder="Tell us about your project..." rows={5} className="p-3 rounded bg-gray-100 text-gray-800 placeholder-gray-500"></textarea>
          <button type="submit" className="bg-gold text-navy font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all self-center mt-4">
            Request a Quote Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;