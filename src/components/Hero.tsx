
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh]">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                🚀 Business Development Experts
              </div>
              
              <h1 className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
                <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
                  Driving Business
                </span>
                <span className="block text-5xl md:text-7xl font-bold text-foreground mt-2">
                  Growth Through
                </span>
                <span className="block text-3xl md:text-5xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mt-2">
                  Expert Strategies
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
                Roars & Dongs Limited is a premier business development service provider dedicated to helping companies 
                achieve sustainable growth and success in today's competitive market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
                <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Explore Our Services 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="flex items-center space-x-8 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">75+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-border/50 relative z-20">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <img 
                    src="/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png" 
                    alt="Roars & Dongs Symbol" 
                    className="h-12 w-12 filter brightness-0 invert"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground pt-6">Our Commitment to Excellence</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  At Roars & Dongs, we understand that every business is unique. Our tailored solutions are designed to meet the specific needs and goals of each client, ensuring maximum impact and sustainable growth.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">Strategic Business Planning</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="font-medium text-foreground">Market Research & Analysis</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">Financial Optimization</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl rotate-45 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl rotate-12 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
