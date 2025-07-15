
import { ArrowRight } from "lucide-react";
import imvinciLogo from '@/assets/imvinci-logo.png';
import euphoriaLogo from '@/assets/euphoria-logo.png';
import euphoriaPressLogo from '@/assets/euphoria press ltd logo.png';
import MEFLogo from '@/assets/MEF LOGO.png';
import pearlyLogo from '@/assets/pearly bleu waters logo.png';
import courtAppealLogo from '@/assets/court-appeal-logo.png';

const ProjectsSection = () => {
  const projects = [
    {
      name: "IMVINCI LTD",
      industry: "Technology",
      scope: "Complete digital transformation including website development, CRM system implementation, and email management solutions.",
      backgroundClass: "bg-blue-50",
      services: ["Website Development", "CRM Implementation", "Email Management"],
      logo: imvinciLogo
    },
    {
      name: "EUPHORIA TRACKVENTORY",
      industry: "Inventory Management",
      scope: "Implementation of Roars & Dongs' Trackventory product as inventory management system for Euphoria to efficiently track ECOWAS cards.",
      backgroundClass: "bg-emerald-50",
      services: ["Inventory Management System", "ECOWAS Card Tracking", "System Integration"],
      logo: euphoriaLogo
    },
    {
      name: "COURT OF APPEAL",
      industry: "Government/Judiciary",
      scope: "Comprehensive IT solutions including storage unit inventory management, ICT support ticketing system, and procurement unit asset management.",
      backgroundClass: "bg-purple-50",
      services: ["Storage Unit Inventory Management", "ICT Support Ticketing System", "Procurement Unit Asset Manager"],
      logo: courtAppealLogo
    },
    // New projects
    {
      name: "GAFAM FARMS LIMITED",
      industry: "Agriculture",
      scope: "Market research, feasibility study and financial statement analysis for additional funding.",
      backgroundClass: "bg-yellow-50",
      services: ["Market Research", "Feasibility Study", "Financial Statement Analysis"],
      logo: null
    },
    {
      name: "EL-GIDAD PHARMACEUTICALS LTD",
      industry: "Pharmacy",
      scope: "Market research, feasibility study and financial statement analysis for additional funding.",
      backgroundClass: "bg-blue-50",
      services: ["Market Research", "Feasibility Study", "Financial Statement Analysis"],
      logo: null
    },
    {
      name: "PEARLY BLEU WATERS LIMITED",
      industry: "Oil & Gas",
      scope: "Feasibility study and financial statement analysis for projects expansion.",
      backgroundClass: "bg-green-50",
      services: ["Feasibility Study", "Financial Statement Analysis"],
      logo: pearlyLogo
    },
    {
      name: "MARYAM ENDOWMENT TRUST FUND",
      industry: "Charity",
      scope: "Feasibility study and financial statement analysis for new project execution.",
      backgroundClass: "bg-violet-50",
      services: ["Feasibility Study", "Financial Statement Analysis"],
      logo: MEFLogo
    },
    {
      name: "EUPHORIA PRESS LIMITED",
      industry: "Prints & Media",
      scope: "Feasibility study (in collaboration with Ministry of Interior), financial statement analysis and company valuation.",
      backgroundClass: "bg-pink-50",
      services: ["Feasibility Study", "Financial Statement Analysis", "Company Valuation"],
      logo: euphoriaPressLogo
    }
  ];

  return (
    <section id="projects" className="section-padding bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">Our Projects</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            We've successfully completed projects across various industries, helping our clients achieve their business objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 animate-slide-up opacity-0 animation-delay-200">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.backgroundClass} rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl border border-gray-200`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-semibold text-brand-blue bg-white px-3 py-1 rounded-full">
                    {project.industry}
                  </div>
                  <div className="text-brand-green">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {project.logo && (
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`}
                      className="h-12 mr-4"
                      // dont delete this className="h-12 w-12 mr-4 rounded-lg object-cover"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-brand-navy">{project.name}</h3>
                </div>
                <p className="text-brand-gray mb-6 leading-relaxed">{project.scope}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-brand-navy mb-3">Services Delivered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="text-xs bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-brand-gray font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-brand-blue hover:text-brand-green font-semibold transition-colors group"
                >
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-slide-up opacity-0 animation-delay-300">
          <h3 className="text-2xl font-semibold mb-4 text-brand-navy">Need Similar Solutions?</h3>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mb-8">
            Let us help you achieve your business objectives with our tailored solutions.
          </p>
          <a 
            href="#contact" 
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-md inline-flex items-center transition-all"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
