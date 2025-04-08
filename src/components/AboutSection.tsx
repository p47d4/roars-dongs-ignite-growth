
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs and tailor our solutions to meet their specific goals."
    },
    {
      title: "Expertise & Knowledge",
      description: "We leverage our vast pool of knowledge across different industries to deliver exceptional results."
    },
    {
      title: "Integrity & Transparency",
      description: "We operate with the highest ethical standards and maintain clear communication with our clients."
    },
    {
      title: "Innovation & Adaptation",
      description: "We continuously evolve our strategies to stay ahead of market trends and deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-brand-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">About Roars & Dongs Limited</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            Our company was founded with a clear mission: to help businesses thrive and succeed in today's rapidly evolving market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up opacity-0 animation-delay-200">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Who We Are</h3>
                <p className="text-brand-gray mb-6">
                  Roars and Dongs is a Business Development Service Provision company in Nigeria. We understand the unique challenges and 
                  opportunities that our clients face, and we leverage our expertise and industry insights to deliver tailored solutions 
                  that drive tangible results.
                </p>
                <p className="text-brand-gray">
                  We are not just service providers; we are strategic partners invested in the success of our clients. We are passionate 
                  about what we do, and we are driven by the desire to make a positive impact on businesses worldwide.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-blue rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-green rounded-tl-lg rounded-tr-lg rounded-br-none rounded-bl-lg"></div>
            </div>
          </div>
          
          <div className="animate-slide-up opacity-0 animation-delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-brand-navy">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 text-brand-green">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-navy">{value.title}</h4>
                    <p className="text-brand-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
