
import { useState } from "react";
import { 
  BarChart3, Search, Calculator, FileText, TrendingUp, Settings
} from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      title: "Audit, Assurance & Advisory",
      icon: <FileText className="h-10 w-10 text-brand-green" />,
      description: "Our audit and assurance services provide an objective and independent examination of financial records and business operations. We help identify areas of risk and opportunity, ensuring compliance with regulatory requirements and industry standards.",
      points: [
        "Financial Statement Audits",
        "Internal Audit Services",
        "Compliance Audits",
        "Strategic Business Advisory"
      ]
    },
    {
      title: "Due Diligence & Forensics",
      icon: <Search className="h-10 w-10 text-brand-green" />,
      description: "Our due diligence services provide a comprehensive evaluation of a business's financial, operational, and legal aspects. We help clients make informed decisions by identifying potential risks and opportunities associated with business transactions.",
      points: [
        "Financial Due Diligence",
        "Operational Due Diligence",
        "Fraud Investigation",
        "Digital Forensics"
      ]
    },
    {
      title: "Financial Modelling",
      icon: <Calculator className="h-10 w-10 text-brand-green" />,
      description: "We develop sophisticated financial models tailored to your business needs. These models help forecast future performance, assess investment opportunities, and evaluate financing options, providing a solid foundation for strategic decision-making.",
      points: [
        "Financial Forecasting",
        "Investment Analysis",
        "Cash Flow Projections",
        "Funding Assistance"
      ]
    },
    {
      title: "Market Research & Strategic Planning",
      icon: <BarChart3 className="h-10 w-10 text-brand-green" />,
      description: "Our market research services provide actionable insights into market trends, customer behavior, and competitive landscapes. We help businesses identify untapped opportunities, understand consumer needs, and develop effective strategies to gain a competitive edge.",
      points: [
        "Market Trend Analysis",
        "Competitive Landscape Evaluation",
        "Consumer Behavior Studies",
        "Strategic Business Planning"
      ]
    },
    {
      title: "Tax Advisory",
      icon: <TrendingUp className="h-10 w-10 text-brand-green" />,
      description: "Our tax advisory services help businesses navigate the complex tax landscape. We provide strategic tax planning, compliance assistance, and advisory services to minimize tax liabilities while ensuring compliance with relevant regulations.",
      points: [
        "Tax Planning & Optimization",
        "Transfer Pricing",
        "Tax Compliance",
        "Tax Dispute Resolution"
      ]
    },
    {
      title: "Operational Optimization",
      icon: <Settings className="h-10 w-10 text-brand-green" />,
      description: "We help businesses streamline operations, improve efficiency, and enhance productivity. Our operational optimization services identify bottlenecks, implement best practices, and develop sustainable processes that drive business performance.",
      points: [
        "Process Mapping & Analysis",
        "Efficiency Improvement",
        "Supply Chain Optimization",
        "Performance Metrics Development"
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
                <ul className="space-y-2">
                  {services[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
