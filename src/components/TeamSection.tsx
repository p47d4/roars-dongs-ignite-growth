
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";

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
//     {
//       id: "director-administration",
//       name: "USMAN IDRIS",
//       position: "Director of Administration",
//       image: "/lovable-uploads/da img.png",
//       initials: "DA",
//       description: "Managing all administrative duties including registering, filing of applications, and proposals."
//     },
    {
      id: "suleiman-muhammad-aliyu-baqir",
      name: "SULEIMAN MUHAMMAD ALIYU BAQIR",
      position: "Director of Research & Development",
      image: "/lovable-uploads/crd img.png",
      initials: "SMAB",
      description: "Leading all research and development activities."
    },
    // {
    //   id: "director-operations",
    //   name: "MOHAMMED AZAD ABDULAZEEZ",
    //   position: "Director of Operations",
    //   image: "/lovable-uploads/do img.png",
    //   initials: "DO",
    //   description: "Overseeing office operations, staff employment, drafting of proposals, and operational oversight."
    // },
//     {
//       id: "muddathir-muhammed",
//       name: "MUDDATHIR DAHIRU MUHAMMAD",
//       position: "Director of Marketing",
//       image: "/lovable-uploads/cmo img.png",
//       initials: "MM",
//       description: "Leading all marketing, communications, and promotional activities."
//     }
  ];

  return (
    <section id="team" className="section-padding border-t border-border">
      <div className="container px-5 md:px-8">
        <div className="section-heading"><div><p className="eyebrow">05 / The people behind the progress</p><h2 className="section-title">Expert minds.<br /><span className="text-muted-foreground">Shared ambition.</span></h2><p className="section-subtitle">Meet the leadership team connecting expertise, innovation and excellence.</p></div></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => <Link key={member.id} to={`/team/${member.id}`} className="group border border-border rounded-lg overflow-hidden bg-card transition-colors hover:border-primary/50">
            <div className="bg-muted px-6 pt-6"><Avatar className="w-full h-auto aspect-[4/3] rounded-none"><AvatarImage src={member.image} alt={member.name} className="object-cover object-top" /><AvatarFallback className="rounded-none bg-muted text-primary text-4xl">{member.initials}</AvatarFallback></Avatar></div>
            <div className="p-6"><p className="text-primary text-xs mb-3">{member.position}</p><h3 className="text-lg leading-snug mb-3">{member.name}</h3>{member.qualifications && <p className="text-xs text-muted-foreground mb-3">{member.qualifications}</p>}<p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.description}</p><span className="inline-flex items-center gap-2 text-sm group-hover:text-primary">View profile <ArrowUpRight className="h-4 w-4" /></span></div>
          </Link>)}
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
