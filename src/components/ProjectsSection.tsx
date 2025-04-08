
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "GAFAM FARMS LIMITED",
      industry: "Agriculture",
      scope: "Market research, feasibility study and financial statement analysis for additional funding.",
      backgroundClass: "bg-amber-50"
    },
    {
      name: "EL-GIDAD PHARMACEUTICALS LTD",
      industry: "Pharmacy",
      scope: "Market research, feasibility study and financial statement analysis for additional funding.",
      backgroundClass: "bg-blue-50"
    },
    {
      name: "PEARLY BLUE WATERS LIMITED",
      industry: "Oil & Gas",
      scope: "Feasibility study and financial statement analysis for projects expansion.",
      backgroundClass: "bg-emerald-50"
    },
    {
      name: "MARYAM ENDOWMENT TRUST FUND",
      industry: "Charity",
      scope: "Feasibility study and financial statement analysis for new project execution.",
      backgroundClass: "bg-purple-50"
    },
    {
      name: "EUPHORIA PRESS LIMITED",
      industry: "Prints & Media",
      scope: "Feasibility study (in collaboration with Ministry of Interior), financial statement analysis and company valuation.",
      backgroundClass: "bg-pink-50"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up opacity-0 animation-delay-200">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.backgroundClass} rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-100`}
            >
              <div className="p-6">
                <div className="text-xs font-medium text-brand-gray mb-2">
                  {project.industry}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-navy">{project.name}</h3>
                <p className="text-brand-gray mb-4">{project.scope}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-brand-blue hover:text-brand-green font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
