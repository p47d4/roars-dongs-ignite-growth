import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Home;