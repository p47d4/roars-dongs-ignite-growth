import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clipboard, Download, Loader2, Square, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { readConsultationStream } from "@/lib/consultation-stream";

const Consultation = () => {
  const [challenge, setChallenge] = useState("");
  const [industry, setIndustry] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const controller = useRef<AbortController>();
  useEffect(() => () => controller.current?.abort(), []);
  const generate = async (event: React.FormEvent) => {
    event.preventDefault(); setLoading(true); setError(""); setResult(""); setCopied(false);
    const abort = new AbortController(); controller.current = abort;
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/consultation`, {
        method: "POST", signal: abort.signal,
        headers: { "Content-Type": "application/json", apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        body: JSON.stringify({ challenge, industry }),
      });
      await readConsultationStream(response, setResult);
    } catch (err) { setError(err instanceof Error && err.name === "AbortError" ? "Generation stopped. Your description has been kept." : err instanceof Error ? err.message : "Unable to create your consultation."); }
    finally { setLoading(false); controller.current = undefined; }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([result], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "roars-and-dongs-consultation.txt"; link.click(); URL.revokeObjectURL(url);
  };
  return <main className="page-shell"><section className="section-padding"><div className="container px-5 md:px-8 max-w-5xl"><p className="eyebrow flex items-center gap-2"><Compass className="h-4 w-4" /> AI-powered consultation</p><h1 className="mb-5">Your challenge.<br /><span className="text-primary">A clearer way forward.</span></h1><p className="section-subtitle max-w-2xl mb-10">Tell us what’s holding your business back.</p><form onSubmit={generate} className="space-y-6 max-w-3xl"><div><label htmlFor="industry" className="block text-sm font-medium mb-2">Industry or business type <span className="text-muted-foreground">(optional)</span></label><Input id="industry" value={industry} maxLength={150} onChange={e => setIndustry(e.target.value)} placeholder="e.g. Agriculture, retail, public institution" /></div><div><label htmlFor="challenge" className="block text-sm font-medium mb-2">Your business challenge</label><Textarea id="challenge" required minLength={20} maxLength={5000} value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="What are you trying to achieve? What problems are you facing?" className="min-h-44" /><p className="text-xs text-muted-foreground mt-2">Avoid confidential information. Your description is processed by AI and is not saved by this app.</p></div><div className="flex flex-wrap gap-3">{loading ? <><Button disabled><Loader2 className="animate-spin" /> Preparing consultation</Button><Button type="button" variant="outline" onClick={() => controller.current?.abort()}><Square /> Stop</Button></> : <Button type="submit">Recommend services <ArrowUpRight /></Button>}</div></form>{error && <p role="alert" className="mt-6 text-destructive">{error}</p>}{result && <section aria-label="Consultation recommendation" className="mt-12 pt-8 border-t border-border"><div className="flex flex-wrap justify-between gap-4 mb-6"><h2 className="text-2xl">Your consultation brief</h2>{!loading && !error && <div className="flex gap-2"><Button variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(result); setCopied(true); } catch { setError("Could not copy. Please download the brief instead."); } }}><Clipboard />{copied ? "Copied" : "Copy"}</Button><Button variant="outline" onClick={download}><Download /> Download</Button></div>}</div><div className="whitespace-pre-wrap leading-relaxed text-sm md:text-base" aria-live="polite">{result}</div>{!loading && !error && <><p className="text-xs text-muted-foreground mt-6">AI-generated guidance, not professional advice or a quotation. Our team will confirm the scope.</p><Button asChild className="mt-6"><Link to="/contact" state={{ consultationBrief: result }}>Discuss this brief <ArrowUpRight /></Link></Button></>}</section>}</div></section></main>;
};
export default Consultation;