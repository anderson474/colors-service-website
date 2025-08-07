import Hero from '@/components/hero';
import WhyChooseUs from '@/components/whyChooseUs';
import OurServices from '@/components/ourServices';
import ProjectGallery from '@/components/projectGallery';
import Testimonials from '@/components/testimonials';
import ColorPalette from '@/components/colorPalette';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <ProjectGallery />
      <Testimonials />
      <ColorPalette />
      
    </main>
  );
}