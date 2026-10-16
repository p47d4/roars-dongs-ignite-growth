import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const PartnersSlider = () => {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!api || !playing || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => api.scrollNext(), 3000);
    return () => window.clearInterval(interval);
  }, [api, playing, hovered]);
  return <section id="partners" aria-label="Companies from our projects" className="border-b border-border py-9 md:py-12">
    <div className="container px-5 md:px-8"><div className="flex items-center justify-between gap-4 mb-7"><p className="text-xs text-muted-foreground uppercase tracking-widest">Our work. Their progress.</p><div className="flex gap-1"><Button variant="ghost" size="icon" aria-label="Previous company" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button><Button variant="ghost" size="icon" aria-label={playing ? "Pause logo slider" : "Play logo slider"} onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play />}</Button><Button variant="ghost" size="icon" aria-label="Next company" onClick={() => api?.scrollNext()}><ArrowRight /></Button></div></div>
      <div ref={ref} className="overflow-hidden" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={() => setHovered(false)}><div className="flex touch-pan-y">{projects.filter(project => project.logo).map(project => <div key={project.name} className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/4 lg:basis-1/5 px-3"><div className="logo-surface h-20 rounded-md flex items-center justify-center px-5"><img src={project.logo ?? undefined} alt={project.name} className="max-h-12 max-w-full object-contain" loading="lazy" /></div><p className="text-[9px] text-muted-foreground text-center mt-3 tracking-wider">{project.name}</p></div>)}</div></div>
    </div>
  </section>;
};
export default PartnersSlider;