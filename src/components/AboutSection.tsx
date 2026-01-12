import { CheckCircle, Target, Award, Users, TrendingUp } from "lucide-react";

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

  const highlights = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "3+ Years",
      subtitle: "Of Excellence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "75+",
      subtitle: "Projects Delivered"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "99.9%",
      subtitle: "Client Satisfaction"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "100%",
      subtitle: "Growth Focus"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">About Roars & Dongs Limited</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            Our company was founded with a clear mission: to help businesses thrive and succeed in today's rapidly evolving market.
          </p>
        </div>

        {/* Highlights Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up opacity-0 animation-delay-150">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-brand-blue text-white mb-4 group-hover:scale-110 transition-transform">
                {highlight.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-navy mb-1">{highlight.title}</h4>
              <p className="text-sm text-brand-gray">{highlight.subtitle}</p>
            </div>
          ))}
        </div>
         */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="animate-slide-up opacity-0 animation-delay-200">
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-brand-blue text-white mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Who We Are</h3>
                <p className="text-brand-gray mb-4 leading-relaxed">
                  Roars and Dongs is a Business Development Service Provision company in Nigeria. We understand the unique challenges and 
                  opportunities that our clients face, and we leverage our expertise and industry insights to deliver tailored solutions 
                  that drive tangible results.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  We are not just service providers; we are strategic partners invested in the success of our clients. We are passionate 
                  about what we do, and we are driven by the desire to make a positive impact on businesses worldwide.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-3">Our Mission</h4>
                  <p className="text-sm text-brand-gray">
                    To empower businesses with innovative solutions, strategic insights, and exceptional service delivery that drives sustainable growth and success.
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-green opacity-20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-brand-green to-brand-blue opacity-20 rounded-2xl blur-xl"></div>
            </div>
          </div>
          
          <div className="animate-slide-up opacity-0 animation-delay-300">
            <h3 className="text-2xl font-bold mb-6 text-brand-navy">Our Core Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 text-brand-green group-hover:scale-110 transition-transform">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-navy mb-2">{value.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-8 md:p-12 text-white shadow-2xl animate-slide-up opacity-0 animation-delay-400">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Why Choose Roars & Dongs?</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              We bring together expertise, innovation, and dedication to deliver solutions that exceed expectations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="h-10 w-10 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Proven Track Record</h4>
              <p className="text-sm text-white/80">Years of successful project delivery across diverse industries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="h-10 w-10 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Tailored Solutions</h4>
              <p className="text-sm text-white/80">Customized strategies that align with your unique business goals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-10 w-10 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Results Driven</h4>
              <p className="text-sm text-white/80">Focus on measurable outcomes and continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
