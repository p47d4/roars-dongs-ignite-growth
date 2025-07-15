
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png" 
                alt="Roars & Dongs Logo" 
                className="h-10 mr-3 bg-white p-1 rounded"
              />
              <span className="text-xl font-semibold whitespace-nowrap">
                Roars & Dongs
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              A business development service provider dedicated to helping companies achieve sustainable growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Software Design & Integration</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">I.T & Cybersecurity Services</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Tax & Audit Advisory</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Procurement & Contracting</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Training & Capacity Building</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Smart City Solutions</a></li>
              <li><a href="services" className="text-gray-300 hover:text-white transition-colors">Business Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-green" />
                <span className="text-gray-300">PLOT 1903, PEARL ESTATE, LIFECAMP, ABUJA, NIGERIA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-green" />
                <a href="tel:+2348069030497" className="text-gray-300 hover:text-white transition-colors">+234 806 903 0497</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-green" />
                <a href="mailto:info@roarsanddongs.com.ng" className="text-gray-300 hover:text-white transition-colors">info@roarsanddongs.com.ng</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Roars & Dongs Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
