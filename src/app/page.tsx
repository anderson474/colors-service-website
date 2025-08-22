import Hero from '@/components/hero';
import WhyChooseUs from '@/components/whyChooseUs';
import OurServices from '@/components/ourServices';
import ProjectGallery from '@/components/projectGallery';
import Testimonials from '@/components/testimonials';
import ColorPalette from '@/components/colorPalette';
import ContactForm from '@/components/contactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Painting Services in Boston, MA', // Este será el título principal
  description: 'Color Service Painting offers expert interior and exterior painting for homes and businesses in Boston. Precision, style, and trust guaranteed. Contact us for a free estimate.',
}

export default function Home() {
  return (
    <main className='bg-white -z-50'>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <ProjectGallery />
      <Testimonials />
      <ContactForm/>
      <ColorPalette />
      
    </main>
  );
}