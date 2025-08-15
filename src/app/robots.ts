// En /app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://colorsservicepainting.com/'; // REEMPLAZA CON TU DOMINIO REAL

  return {
    rules: {
      userAgent: '*', // Aplica a todos los robots (Google, Bing, etc.)
      allow: '/',     // Permite rastrear todo el sitio
      disallow: '/private/', // Ejemplo: si tuvieras una carpeta privada
    },
    sitemap: `${baseUrl}/sitemap.xml`, // ¡Muy importante! Indica dónde está tu sitemap
  };
}