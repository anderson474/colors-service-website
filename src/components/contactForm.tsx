'use client';

import React, { useState, useRef } from 'react';
import { sendEmail } from '@/components/actions/sendEmail'; // Asegúrate que esta ruta es correcta para tu server action

// 1. Definimos un tipo para el estado del formulario.
//    Esto nos ayuda a evitar errores de tipeo y a que el código sea más claro.
type FormStatus = 'success' | 'error' | null;

const ContactForm: React.FC = () => {
  // 2. Aplicamos el tipo 'FormStatus' al estado.
  const [status, setStatus] = useState<FormStatus>(null);

  // 3. Tipamos la referencia para que TypeScript sepa que es un elemento de formulario HTML.
  const formRef = useRef<HTMLFormElement>(null);

  // 4. Tipamos el parámetro 'formData' que viene del formulario.
  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
      // Usamos optional chaining (?) para asegurarnos de que formRef.current no es nulo.
      formRef.current?.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div
      className="relative py-16 mt-52 md:py-96 px-4 sm:px-6 lg:px-8 bg-white"
      style={{
        backgroundImage: "url('/Imagen2.jpg')", // La imagen debe estar en la carpeta `public`
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Contact us
        </h2>
        <p className="mt-4 text-lg text-center text-gray-200">
          Ready to bring your ideas to life with color? Leave your details below, and we will get in touch.
        </p>
        <form ref={formRef} action={handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="nombre" className="sr-only">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-500 rounded-md"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="correo" className="sr-only">Correo</label>
            <input
              id="correo"
              name="correo"
              type="email"
              required
              autoComplete="email"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-500 rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="celular" className="sr-only">Celular</label>
            <input
              type="tel"
              name="celular"
              id="celular"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:placeholder-gray-500   focus:ring-indigo-500 focus:border-indigo-500 border border-gray-500 rounded-md"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-center text-green-400">
            Form submitted successfully! Thank you for contacting us.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-400">
            There was an error sending the form. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;