import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return <footer className="border-t border-white/10 py-12 text-sm text-slate-400"><div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><p className="leading-6">AI-powered strategy and thoughtful growth for modern brands.</p></div><div><p className="font-bold text-white">Explore</p>{site.nav.map(x => <Link className="mt-2 block hover:text-cyan" key={x.href} href={x.href}>{x.label}</Link>)}</div><div><p className="font-bold text-white">Contact</p><a className="mt-2 block hover:text-cyan" href={`mailto:${site.email}`}>{site.email}</a><a className="mt-2 block hover:text-cyan" href={`tel:${site.phone}`}>{site.phone}</a><p className="mt-2">{site.address}</p></div><div><p className="font-bold text-white">Connect</p><p className="mt-2">LinkedIn · Instagram · Facebook</p></div></div><p className="wrap mt-10 border-t border-white/10 pt-6">© {new Date().getFullYear()} Digital Ekta. All rights reserved.</p></footer>;
}
