"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "./ui";

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    addEventListener("keydown", close);
    return () => removeEventListener("keydown", close);
  }, []);

  return <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090b12]/85 backdrop-blur"><div className="wrap flex h-18 items-center justify-between gap-6 py-3"><Link className="focus-ring shrink-0 rounded" href="/" aria-label="The Unity home"><img className="h-auto w-32 sm:w-40" src="/ekta-unity-logo%20-%20Copy.png" alt="The Unity" /></Link><div className="flex items-center gap-6"><nav className="hidden gap-6 md:flex" aria-label="Main navigation">{site.nav.map(n => <Link className={`focus-ring text-sm ${path === n.href ? "text-cyan" : "text-slate-300 hover:text-white"}`} href={n.href} key={n.href}>{n.label}</Link>)}</nav><div className="hidden md:block"><Button href="/contact">Book a Consultation</Button></div><button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="focus-ring rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav className="wrap border-t border-white/10 py-4 md:hidden" aria-label="Mobile navigation">{site.nav.map(n => <Link onClick={() => setOpen(false)} className="focus-ring block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5" href={n.href} key={n.href}>{n.label}</Link>)}<div className="px-3 pt-3"><Button href="/contact">Book a Consultation</Button></div></nav>}</header>;
}
