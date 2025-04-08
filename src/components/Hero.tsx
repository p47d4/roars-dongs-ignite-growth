
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white via-white to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">Driving Business Growth</span>
              <span className="block text-brand-navy mt-2">Through Expert Strategies</span>
            </h1>
            <p className="mt-6 text-lg text-brand-gray max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Roars & Dongs Limited is a business development service provider dedicated to helping companies 
              achieve sustainable growth and success in today's competitive market.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a 
                href="#services" 
                className="bg-brand-green hover:bg-brand-green/90 text-white px-6 py-3 rounded-md flex items-center transition-all"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-md transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png" 
                  alt="Roars & Dongs Symbol" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-navy pt-4">Our Commitment</h3>
              <p className="text-brand-gray mb-6">
                At Roars & Dongs, we understand that every business is unique, and there is no one-size-fits-all approach to development. 
                We offer tailored solutions designed to meet the specific needs and goals of each client.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-lightGray p-4 rounded-lg">
                  <p className="font-medium text-brand-navy">5+ Years</p>
                  <p className="text-sm text-brand-gray">Industry Experience</p>
                </div>
                <div className="bg-brand-lightGray p-4 rounded-lg">
                  <p className="font-medium text-brand-navy">100%</p>
                  <p className="text-sm text-brand-gray">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
