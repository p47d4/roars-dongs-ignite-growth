import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const ContactBanner = () => <section className="section-padding border-t border-border surface-gradient"><div className="container px-5 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"><div><p className="eyebrow">Your next chapter starts here</p><h2 className="text-3xl md:text-5xl mb-4">Let’s build what’s next.</h2><p className="text-muted-foreground max-w-xl leading-relaxed">Bring us your ambitions. Together, we’ll turn them into a practical path forward.</p></div><Button asChild size="lg"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button></div></section>;
export default ContactBanner;