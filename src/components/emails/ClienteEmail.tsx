import { Button, Container, Heading, Html, Img, Section, Text } from '@react-email/components';
import * as React from 'react';

interface ClientEmailProps {
  name: string;
}

// Vercel proporciona automáticamente esta variable de entorno con la URL de tu despliegue.
const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'http://localhost:3000';

// Asegúrate de que el nombre del archivo coincida con el que tienes en tu carpeta `public`
const logoUrl = `${baseUrl}/Imagen1.jpg`; 

export const ClientEmail: React.FC<ClientEmailProps> = ({ name }) => (
  <Html>
    <Section style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <Container style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '5px', padding: '20px', textAlign: 'center' }}>
        
        

        <Heading style={{ color: '#333' }}>Thank you for contacting us, {name}!</Heading>
        <Text style={{ color: '#555', fontSize: '16px' }}>
          We have received your request and will get back to you as soon as possible to discuss your painting project.
        </Text>
        <Text style={{ color: '#555', fontSize: '16px' }}>
          At Color Service Painting, we are committed to transforming your spaces with quality and professionalism.
        </Text>
        <Button
          href="https://colorsservicepainting.com" // Tu sitio web
          style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '12px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}
        >
          Visit Our Website
        </Button>
      </Container>
    </Section>
  </Html>
);

export default ClientEmail;