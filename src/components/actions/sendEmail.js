// actions/sendEmail.js
'use server';

import { Resend } from 'resend';
import ClienteEmail from '@/components/emails/ClienteEmail'; // Asegúrate de que la ruta sea correcta

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const nombre = formData.get('nombre');
  const correo = formData.get('correo');
  const celular = formData.get('celular');

  try {
    // Enviar correo de notificación a la empresa (Outlook)
    await resend.emails.send({
      from: 'noreply@colorsservicepainting.com', 
      to: 'colorservicepainting@outlook.com', 
      subject: 'Nuevo prospecto desde la Landing Page',
      html: `
        <h1>Nueva solicitud de contacto</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Celular:</strong> ${celular}</p>
      `
    });

    // Enviar correo de confirmación al cliente
    await resend.emails.send({
      from: 'noreply@colorsservicepainting.com',
      to: correo,
      subject: 'Hemos recibido tu solicitud - Color Service Painting',
      react: <ClienteEmail nombre={nombre} />
    });

    return { success: true };
  } catch (error) {
    console.error('Error al enviar correos:', error);
    return { success: false, error: 'Hubo un problema al enviar el formulario.' };
  }
};