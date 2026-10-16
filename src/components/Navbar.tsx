import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const links = [{ title: "Home", href: "/" }, { title: "About", href: "/about" }, { title: "Services", href: "/services" }, { title: "Projects", href: "/projects" }, { title: "Team", href: "/team" }];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
    <nav aria-label="Main navigation" className="container flex h-20 items-center justify-between gap-6 px-5 md:px-8">
      <Link to="/" aria-label="Roars & Dongs home" className="flex items-center gap-3 shrink-0">
        <img src="/lovable-uploads/e754def4-306b-4407-abec-5504e0acc654.png" alt="" className="h-10 w-10 object-contain" />
        <span className="text-base md:text-lg font-semibold">Roars & Dongs<span className="block text-[9px] text-muted-foreground uppercase tracking-widest">Limited · Nigeria</span></span>
      </Link>
      <div className="hidden lg:flex items-center gap-1">{links.map(link => <Button key={link.href} asChild variant="ghost" className={pathname === link.href || (link.href === "/" && pathname === "/index") ? "text-primary" : "text-muted-foreground"}><Link to={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.title}</Link></Button>)}</div>
      <div className="flex items-center gap-1"><ThemeToggle /><Button asChild className="hidden lg:inline-flex"><Link to="/consultation">Find your solution <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </nav>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-border bg-background px-5 py-5 animate-slide-down"><div className="container flex flex-col items-stretch gap-2 p-0">{[...links, { title: "AI consultation", href: "/consultation" }, { title: "Contact", href: "/contact" }].map(link => <Button asChild key={link.href} variant="ghost" className="justify-start h-12"><Link to={link.href}>{link.title}</Link></Button>)}</div></nav>}
  </header>;
};
export default Navbar;