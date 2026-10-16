import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import businessDistrict from "@/assets/business-district.jpg";

const Hero = () => <section id="home" className="relative isolate overflow-hidden pt-20">
  <img src={businessDistrict} alt="Modern business district at dusk" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover object-right" fetchPriority="high" />
  <div className="absolute inset-0 hero-scrim" />
  <div className="absolute inset-x-0 bottom-0 h-40 hero-bottom" />
  <div className="container relative px-5 md:px-8 pt-12 pb-8 md:pt-28 md:pb-20">
    <div className="max-w-3xl animate-slide-up">
      <p className="eyebrow flex items-center gap-3"><span className="w-7 h-px bg-primary" /> Strategy. Technology. Progress.</p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-7">Roars & Dongs<span className="block text-primary mt-2">Limited.</span></h1>
      <p className="text-xl md:text-2xl font-medium mb-4 max-w-xl">Building stronger businesses.<br />Creating what comes next.</p>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">Business expertise and forward-thinking technology, working together to turn your ambitions into sustainable growth.</p>
      <div className="flex flex-wrap gap-3 mt-9"><Button asChild size="lg"><Link to="/services">Explore our services <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg" className="bg-background/30"><Link to="/contact">Start a conversation</Link></Button></div>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-5 mt-10 md:mt-24 pt-6 border-t border-foreground/15 text-xs text-muted-foreground"><span>Business development, built around you.</span><a href="#partners" className="flex items-center gap-3 hover:text-primary">Discover Roars & Dongs <ArrowDown className="h-4 w-4" /></a><span className="hidden md:block">Abuja, Nigeria · Thinking beyond boundaries</span></div>
  </div>
</section>;
export default Hero;