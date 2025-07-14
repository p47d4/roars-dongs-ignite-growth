
import { useState } from "react";
import { 
  Code, Shield, Calculator, ShoppingCart, GraduationCap, Building2, Users
} from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      title: "Software Design & Integration",
      icon: <Code className="h-10 w-10 text-brand-green" />,
      description: "We design, develop, and integrate custom software solutions that streamline your business operations. From web applications to mobile apps and system integrations, we deliver scalable and robust solutions tailored to your specific requirements.",
      points: [
        "Custom Web Application Development",
        "Mobile App Development",
        "System Integration & API Development",
        "Database Design & Management"
      ]
    },
    {
      title: "I.T & Cybersecurity Services",
      icon: <Shield className="h-10 w-10 text-brand-green" />,
      description: "Protect your digital assets with our comprehensive cybersecurity solutions. We provide IT infrastructure management, security assessments, and implementation of robust security measures to safeguard your business from cyber threats.",
      points: [
        "IT Infrastructure Management",
        "Cybersecurity Assessment & Implementation",
        "Network Security & Monitoring",
        "Data Protection & Recovery Solutions"
      ]
    },
    {
      title: "Tax & Audit Advisory",
      icon: <Calculator className="h-10 w-10 text-brand-green" />,
      description: "Our comprehensive tax and audit services ensure regulatory compliance while optimizing your financial performance. We provide strategic tax planning, audit services, and financial advisory to help you make informed business decisions.",
      points: [
        "Financial Statement Audits",
        "Tax Planning & Compliance",
        "Due Diligence & Forensics",
        "Financial Modeling & Analysis",
        "Audit & Advisory Services",
        "Market Research & Analysis",
        "Operational Optimization",
        "Risk Assessment & Management"
      ]
    },
    {
      title: "Procurement & Contracting",
      icon: <ShoppingCart className="h-10 w-10 text-brand-green" />,
      description: "Streamline your procurement processes with our expert procurement and contracting services. We help optimize your supply chain, manage vendor relationships, and ensure cost-effective procurement strategies.",
      points: [
        "Procurement Strategy Development",
        "Vendor Management & Selection",
        "Contract Negotiation & Management",
        "Supply Chain Optimization"
      ]
    },
    {
      title: "Training & Capacity Building",
      icon: <GraduationCap className="h-10 w-10 text-brand-green" />,
      description: "Empower your team with our comprehensive training and capacity building programs. We offer customized training solutions across various domains to enhance skills, improve productivity, and drive organizational growth.",
      points: [
        "Professional Skills Development",
        "Technology Training Programs",
        "Leadership & Management Training",
        "Organizational Development"
      ]
    },
    {
      title: "Smart City Solutions",
      icon: <Building2 className="h-10 w-10 text-brand-green" />,
      description: "Transform urban environments with our innovative smart city solutions. We design and implement technology-driven solutions that enhance urban planning, improve public services, and create sustainable city ecosystems.",
      points: [
        "Urban Planning & Development",
        "Smart Infrastructure Solutions",
        "IoT Implementation for Cities",
        "Sustainable Technology Integration"
      ]
    },
    {
      title: "Business Consultation",
      icon: <Users className="h-10 w-10 text-brand-green" />,
      description: "Get expert guidance to navigate complex business challenges and identify growth opportunities. Our business consultation services provide strategic insights, operational improvements, and market analysis to drive your business forward.",
      points: [
        "Strategic Business Planning",
        "Market Research & Analysis",
        "Operational Efficiency Consulting",
        "Business Process Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">Our Services</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            We offer comprehensive business development services tailored to meet the specific needs and goals of each client.
          </p>
        </div>
        
        {/* Services Tabs */}
        <div className="animate-slide-up opacity-0 animation-delay-200">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {services.map((service, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm md:text-base transition-all ${
                  activeTab === index
                    ? "bg-brand-green text-white"
                    : "bg-gray-100 text-brand-navy hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Active Service Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">{services[activeTab].icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-brand-navy">{services[activeTab].title}</h3>
                <p className="text-brand-gray mb-6">{services[activeTab].description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {services[activeTab].points.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-green to-brand-blue hidden md:flex items-center justify-center text-white p-10">
                <div className="max-w-md">
                  <h4 className="text-2xl font-bold mb-4">Why Choose Our {services[activeTab].title} Services?</h4>
                  <p className="mb-6">
                    With our deep industry knowledge and experienced team, we provide tailored solutions that deliver tangible results.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <p className="font-medium">Expert Team</p>
                      <p className="text-sm opacity-80">Industry professionals with proven expertise</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <p className="font-medium">Tailored Approach</p>
                      <p className="text-sm opacity-80">Customized strategies for your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Service Sections */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-brand-navy">{service.title}</h4>
                <p className="text-sm text-brand-gray mb-4">{service.description}</p>
                <button 
                  onClick={() => setActiveTab(index)}
                  className="text-brand-blue hover:text-brand-green transition-colors text-sm font-medium"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
