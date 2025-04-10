
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Roars & Dongs Limited - Business Development Services";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gradient-to-br from-white via-amber-50 to-amber-100">
          <AboutSection />
        </div>
        <div className="bg-gradient-to-tr from-white via-emerald-50 to-green-100">
          <ServicesSection />
        </div>
        <ProjectsSection />
        <TeamSection />
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
