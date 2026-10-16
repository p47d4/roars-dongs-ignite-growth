import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import PartnersSlider from '@/components/PartnersSlider';
import ProductsSection from '@/components/ProductsSection';
import ContactBanner from '@/components/ContactBanner';

const Home = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <PartnersSlider />
        <AboutSection preview />
        <ServicesSection preview />
        <ProductsSection />
        <ProjectsSection preview />
        <TeamSection />
        <ContactBanner />
      </main>
    </div>
  );
};

export default Home;