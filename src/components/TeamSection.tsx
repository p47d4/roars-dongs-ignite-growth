
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      id: "lukman-ahmed-khalifa",
      name: "LUKMAN AHMED KHALIFA",
      position: "Chief Executive Officer",
      image: "/lovable-uploads/ceo img.png",
      initials: "LAK",
      description: "Visionary leader driving strategic growth and innovation across all business verticals."
    },
    {
      id: "adnan-baba-ahmed",
      name: "ADNAN BABA-AHMED",
      position: "Chief Technology Officer",
      image: "/lovable-uploads/cto img.png",
      initials: "ABA",
      description: "Technology expert leading digital transformation and innovative solutions development."
    },
    {
      id: "abdulkarim-zakari-sada",
      name: "ABDULKARIM ZAKARI SADA",
      position: "Chief Financial Officer",
      image: "/lovable-uploads/cfo img.png",
      initials: "AZS",
      description: "Financial specialist with extensive experience in audit, assurance, and strategic advisory.",
      qualifications: "ACCA, ACA, MSc."
    },
    {
      id: "director-administration",
      name: "USMAN IDRIS",
      position: "Director of Administration",
      image: "/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png",
      initials: "DA",
      description: "Managing all administrative duties including registering, filing of applications, and proposals."
    },
    {
      id: "director-operations",
      name: "MOHAMMED AZAD ABDULAZEEZ",
      position: "Director of Operations",
      image: "/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png",
      initials: "DO",
      description: "Overseeing office operations, staff employment, drafting of proposals, and operational oversight."
    },
    {
      id: "muddathir-muhammed",
      name: "MUDDATHIR MUHAMMED",
      position: "Director of Marketing",
      image: "/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png",
      initials: "MM",
      description: "Leading all marketing, communications, and promotional activities."
    },
    {
      id: "suleiman-muhammad-aliyu-baqir",
      name: "SULEIMAN MUHAMMAD ALIYU BAQIR",
      position: "Director of Research & Development",
      image: "/lovable-uploads/crd img.png",
      initials: "SMAB",
      description: "Leading all research and development activities."
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-slide-up opacity-0">Our Leadership Team</h2>
          <p className="section-subtitle animate-slide-up opacity-0 animation-delay-100">
            Meet our experienced leadership team driving innovation and excellence across all business domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up opacity-0 animation-delay-200">
          {teamMembers.map((member, index) => (
            <Link
              key={member.id}
              to={`/team/${member.id}`}
              className="group block"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-green text-white text-lg font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-brand-green text-white text-xs px-2 py-1 rounded-full font-medium">
                      {member.position.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-green transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-brand-blue font-semibold mb-2">
                    {member.position}
                  </p>
                  
                  {member.qualifications && (
                    <p className="text-sm text-brand-gray font-medium mb-3">
                      {member.qualifications}
                    </p>
                  )}
                  
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="mt-6 text-brand-blue group-hover:text-brand-green transition-colors">
                    <span className="text-sm font-medium">View Profile →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
