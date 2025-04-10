
import { Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">Our Leadership</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            Meet our experienced management team that drives our success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up opacity-0 animation-delay-200">
            <div className="bg-brand-lightGray rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute -top-6 -left-6 bg-brand-green text-white p-3 rounded-lg">
                <span className="font-bold">MD</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                  <AvatarImage src="/lovable-uploads/a524de14-8f9f-4c78-9399-dfd33fc13e96.png" alt="ABDULKARIM ZAKARI SADA" />
                  <AvatarFallback>AZS</AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-brand-navy pt-2">ABDULKARIM ZAKARI SADA</h3>
                  <p className="text-brand-blue font-medium mb-4">ACCA, ACA, MSc.</p>
                </div>
              </div>
              
              <p className="text-brand-gray mb-6">
                Managing Director with extensive experience in Audit, Assurance, and Tax Advisory, leading Roars & Dongs Limited
                with a vision for excellence and client success.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="font-medium text-brand-navy min-w-[120px]">Qualifications:</span>
                  <span className="text-brand-gray">ACCA, ACA, MSc. in Professional Accountancy</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-brand-navy min-w-[120px]">Experience:</span>
                  <span className="text-brand-gray">5+ years in Audit & Assurance, Tax Advisory</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-brand-navy min-w-[120px]">Education:</span>
                  <span className="text-brand-gray">University of London, Middlesex University</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="mailto:abdyynani@gmail.com" 
                  className="bg-white p-2 rounded-full text-brand-blue hover:text-brand-green transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+2348069030497" 
                  className="bg-white p-2 rounded-full text-brand-blue hover:text-brand-green transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="#linkedin" 
                  className="bg-white p-2 rounded-full text-brand-blue hover:text-brand-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up opacity-0 animation-delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-brand-navy">Professional Expertise</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green">
                <h4 className="font-semibold text-lg text-brand-navy mb-2">AUDIT, ASSURANCE & ADVISORY</h4>
                <p className="text-brand-gray">
                  More than 5 years experience in Audit & Assurance, spanning across Oil and Gas, Real Estate, 
                  Information Technology, NGOs, Pension Fund Administrators, Banks, and other Financial Institutions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-blue">
                <h4 className="font-semibold text-lg text-brand-navy mb-2">TAX ADVISORY</h4>
                <p className="text-brand-gray">
                  Experienced Tax Consultant specializing in transfer pricing, tax planning, and compliance. 
                  Successfully implemented tax-efficient structures that yielded notable tax savings for clients.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green">
                <h4 className="font-semibold text-lg text-brand-navy mb-2">PROFESSIONAL MEMBERSHIPS</h4>
                <ul className="text-brand-gray space-y-2">
                  <li>• Member, Institute of Chartered Accountants of Nigeria (ICAN)</li>
                  <li>• Member, Association of Certified Chartered Accountants (ACCA)</li>
                  <li>• Holder, Certificate of Finance, Accounting & Business (CFAB)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
