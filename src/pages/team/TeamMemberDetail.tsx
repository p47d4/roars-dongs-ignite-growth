import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TeamMemberDetail = () => {
  const { memberId } = useParams();

  const teamMembers = {
    "lukman-ahmed-khalifa": {
      name: "LUKMAN AHMED KHALIFA",
      position: "Chief Executive Officer",
      image: "/lovable-uploads/ceo img.png",
      initials: "LAK",
      email: "khalifa@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "#",
      bio: "Lukman Ahmed Khalifa serves as the Chief Executive Officer of Roars & Dongs Limited, bringing visionary leadership and strategic insight to drive the company's growth across multiple business verticals. With extensive experience in business development and strategic planning, he leads the organization towards achieving excellence in service delivery and sustainable growth.",
      expertise: [
        "Strategic Business Planning",
        "Corporate Leadership",
        "Business Development",
        "Market Expansion",
        "Organizational Growth"
      ],
      experience: "10+ years in executive leadership and business development",
      education: "MBA in Business Administration, Bachelor's in Business Management",
      qualifications: undefined,
      memberships: undefined
    },
    "adnan-baba-ahmed": {
      name: "ADNAN BABA-AHMED",
      position: "Chief Technology Officer",
      image: "/lovable-uploads/cto img.png",
      initials: "ABA",
      email: "adnan@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "https://ng.linkedin.com/in/adnan-baba-ahmed-a67101256",
      bio: "Adnan Baba-Ahmed leads our technology initiatives as Chief Technology Officer, driving digital transformation and innovative solutions development. His expertise spans across software development, cybersecurity, and emerging technologies, ensuring that our clients receive cutting-edge solutions that meet their evolving technological needs.",
      expertise: [
        "Software Development & Integration",
        "Cybersecurity Solutions",
        "Digital Transformation",
        "Technology Strategy",
        "System Architecture"
      ],
      experience: "8+ years in technology leadership and software development",
      education: "MSc in Computer Science, Bachelor's in Information Technology",
      qualifications: undefined,
      memberships: [
        "Google Cloud Certified - Cloud Digital Leader (2023)",
        "Certificate in Alternative Investments - iCapital (2023)",
        "SCRUM.ORG - Professional Scrum Master 1 (2022)",
        "Oracle Certified Professional - Java SE 17 Developer (2021)",
        "SCRUM.ORG - Professional Scrum Developer 1 (2021)",
        "Oracle Cloud Customer Support (2020)",
        "Generative AI LLMs - NVIDIA Certified Associate (2024)",
        "AI for All: From Basics to GenAI Practice - NVIDIA Academy (2024)",
        "Developing a Corporate Information Security Strategy & Roadmap that aligns with business (2023)",
        "Artificial Intelligence Foundation Certificate - GSDC (2024)"
      ]
    },
    "abdulkarim-zakari-sada": {
      name: "ABDULKARIM ZAKARI SADA",
      position: "Chief Financial Officer",
      image: "/lovable-uploads/cfo img.png",
      initials: "AZS",
      email: "abdulkarim@roarsanddongs.com.ng",
      phone: "+2348069030497",
      linkedin: "https://ng.linkedin.com/in/abdulkarim-zakari-sada",
      qualifications: "ACCA, ACA, MSc.",
      bio: "Abdulkarim Zakari Sada oversees operations as Chief Financial Officer, bringing extensive experience in audit, assurance, and strategic advisory services. With professional qualifications including ACCA, ACA, and MSc. in Professional Accountancy, he ensures operational excellence and regulatory compliance across all business functions.",
      expertise: [
        "Audit & Assurance Services",
        "Tax Advisory & Planning",
        "Financial Analysis & Modeling",
        "Operational Excellence",
        "Regulatory Compliance"
      ],
      experience: "5+ years in Audit & Assurance, Tax Advisory spanning across Oil and Gas, Real Estate, Information Technology, NGOs, Pension Fund Administrators, Banks, and other Financial Institutions",
      education: "MSc. in Professional Accountancy (University of London, Middlesex University)",
      memberships: [
        "Member, Institute of Chartered Accountants of Nigeria (ICAN)",
        "Member, Association of Certified Chartered Accountants (ACCA)",
        "Holder, Certificate of Finance, Accounting & Business (CFAB)"
      ]
    },
    "director-administration": {
      name: "DIRECTOR OF ADMINISTRATION",
      position: "Director of Administration",
      image: "/lovable-uploads/da img.png",
      initials: "DA",
      email: "usman@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "#",
      bio: "The Director of Administration manages all administrative duties at Roars & Dongs Limited, ensuring seamless operations through effective management of registrations, filing of applications, and proposals. This role is crucial in maintaining organizational efficiency and supporting all departments with administrative excellence.",
      expertise: [
        "Administrative Management",
        "Document Management",
        "Application Processing",
        "Proposal Development",
        "Office Coordination"
      ],
      experience: "Extensive experience in administrative management and operations",
      education: "Bachelor's degree in Business Administration or related field",
      qualifications: undefined,
      memberships: undefined
    },
    "director-operations": {
      name: "DIRECTOR OF OPERATIONS",
      position: "Director of Operations",
      image: "/lovable-uploads/do img.png",
      initials: "DO",
      email: "azad@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "#",
      bio: "The Director of Operations oversees all office operations and related activities at Roars & Dongs Limited. This includes staff employment, operational oversight, and the strategic drafting of proposals to ensure the company's operational excellence and efficiency across all business units.",
      expertise: [
        "Operations Management",
        "Staff Development",
        "Proposal Writing",
        "Process Optimization",
        "Strategic Planning"
      ],
      experience: "Proven track record in operations management and organizational development",
      education: "Bachelor's degree in Operations Management or related field",
      qualifications: undefined,
      memberships: undefined
    },
    "suleiman-muhammad-aliyu-baqir": {
      name: "SULEIMAN MUHAMMAD ALIYU BAQIR",
      position: "Director of Research & Development",
      image: "/lovable-uploads/crd img.png",
      initials: "SMAB",
      email: "suleiman@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "#",
      bio: "Suleiman Muhammad Aliyu Baqir leads all research and development activities at Roars & Dongs Limited. His focus on innovation and continuous improvement drives the development of cutting-edge solutions and products, ensuring the company remains at the forefront of technological advancement and service delivery.",
      expertise: [
        "Research & Development",
        "Innovation Management",
        "Product Development",
        "Technology Research",
        "Process Innovation"
      ],
      experience: "Proven expertise in R&D and innovation management",
      education: "Bachelor's degree in Engineering or related technical field",
      qualifications: undefined,
      memberships: undefined
    }
    "muddathir-muhammed": {
      name: "DAHIRU MUDDATHIR MUHAMMAD",
      position: "Director of Marketing",
      image: "/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png",
      initials: "MM",
      email: "muddathir@roarsanddongs.com.ng",
      phone: "+234-XXX-XXX-XXXX",
      linkedin: "#",
      bio: "Muddathir Dahiru Muhammad heads all marketing, communications, and promotional activities at Roars & Dongs Limited. With a strategic approach to brand development and market positioning, he drives the company's marketing initiatives to enhance visibility, engage target audiences, and promote our comprehensive range of services.",
      expertise: [
        "Marketing Strategy",
        "Brand Development",
        "Corporate Communications",
        "Digital Marketing",
        "Campaign Management"
      ],
      experience: "Extensive experience in marketing and brand management",
      education: "Bachelor's degree in Marketing or related field",
      qualifications: undefined,
      memberships: undefined
    }
  };

  const member = teamMembers[memberId as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy mb-4">Team Member Not Found</h1>
          <Link to="/team" className="text-brand-blue hover:text-brand-green">
            ← Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <Link 
            to="/team" 
            className="inline-flex items-center text-brand-blue hover:text-brand-green mb-8 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-35 h-35 mx-auto border-4 border-white shadow-lg mb-6">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-br from-brand-blue to-brand-green text-white text-2xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h1 className="text-2xl font-bold text-brand-navy mb-2">{member.name}</h1>
                  <p className="text-brand-blue font-semibold mb-4">{member.position}</p>
                  
                  {member.qualifications && (
                    <p className="text-brand-gray font-medium mb-6">{member.qualifications}</p>
                  )}

                  <div className="space-y-4">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="flex items-center justify-center gap-3 bg-brand-blue/10 hover:bg-brand-blue/20 p-3 rounded-lg transition-colors"
                    >
                      <Mail className="h-5 w-5 text-brand-blue" />
                      <span className="text-brand-navy">{member.email}</span>
                    </a>
                    
                    {/* <a 
                      href={`tel:${member.phone}`} 
                      className="flex items-center justify-center gap-3 bg-brand-green/10 hover:bg-brand-green/20 p-3 rounded-lg transition-colors"
                    >
                      <Phone className="h-5 w-5 text-brand-green" />
                      <span className="text-brand-navy">{member.phone}</span>
                    </a> */}
                    
                    <a 
                      href={member.linkedin} 
                      className="flex items-center justify-center gap-3 bg-brand-blue/10 hover:bg-brand-blue/20 p-3 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-brand-blue" />
                      <span className="text-brand-navy">LinkedIn Profile</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">About</h2>
                  <p className="text-brand-gray leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>

              {/* Expertise */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Areas of Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {member.expertise.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-brand-green/10 rounded-lg">
                        <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                        <span className="text-brand-navy font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience & Education */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Experience</h2>
                    <p className="text-brand-gray">{member.experience}</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Education</h2>
                    <p className="text-brand-gray">{member.education}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Professional Memberships (only for Abdulkarim) */}
              {member.memberships && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-brand-navy mb-4">Professional Memberships</h2>
                    <ul className="space-y-2">
                      {member.memberships.map((membership, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-blue rounded-full mt-2"></div>
                          <span className="text-brand-gray">{membership}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
