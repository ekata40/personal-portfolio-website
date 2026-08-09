"use client";

import { useState } from "react";
import { services } from "@/content/services";

type State = { name:string; email:string; phone:string; company:string; service:string; budget:string; message:string; consent:boolean; website:string };
const initial:State = { name:"", email:"", phone:"", company:"", service:"", budget:"", message:"", consent:false, website:"" };

export function ContactForm() {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const set = (key:keyof State, value:string|boolean) => setV(x => ({ ...x, [key]:value }));
  async function submit(e:React.FormEvent) {
    e.preventDefault();
    const next:Record<string,string> = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) next.email = "Enter a valid email address.";
    if (!v.message.trim()) next.message = "Please share a short message.";
    if (!v.consent) next.consent = "Please confirm your consent.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const r = await fetch("https://formsubmit.co/ajax/meekata40@gmail.com", { method:"POST", headers:{ "Content-Type":"application/json", Accept:"application/json" }, body:JSON.stringify({ ...v, _subject:"New Digital Ekta consultation request", _template:"table", _honey:v.website }) });
      if (!r.ok) throw Error();
      setStatus("success");
      setV(initial);
    } catch { setStatus("error"); }
  }
  const field = "focus-ring mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white";
  return <form onSubmit={submit} noValidate className="surface rounded-3xl p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">{([['name','Full name *'],['email','Email address *'],['phone','Phone number'],['company','Company or brand']] as [keyof State,string][]).map(([k,l]) => <label key={k}>{l}<input name={k} type={k === "email" ? "email" : "text"} className={field} value={String(v[k])} onChange={e => set(k,e.target.value)} aria-invalid={!!errors[k]} />{errors[k] && <span className="mt-1 block text-sm text-red-300">{errors[k]}</span>}</label>)}</div>
    <div className="mt-5 grid gap-5 sm:grid-cols-2"><label>Service of interest<select name="service" className={field} value={v.service} onChange={e => set("service",e.target.value)}><option value="">Select a service</option>{services.map(s => <option className="bg-panel" key={s.slug}>{s.title}</option>)}</select></label><label>Budget range<select name="budget" className={field} value={v.budget} onChange={e => set("budget",e.target.value)}><option className="bg-panel">Select if helpful</option><option className="bg-panel">Under NPR 50,000</option><option className="bg-panel">NPR 50,000–100,000</option><option className="bg-panel">NPR 100,000+</option></select></label></div>
    <label className="mt-5 block">What would you like to work on? *<textarea name="message" className={field} rows={5} value={v.message} onChange={e => set("message",e.target.value)} aria-invalid={!!errors.message}/>{errors.message && <span className="mt-1 block text-sm text-red-300">{errors.message}</span>}</label>
    <label className="hidden">Leave this empty<input name="_honey" value={v.website} onChange={e => set("website",e.target.value)} /></label>
    <label className="mt-5 flex gap-3 text-sm text-slate-300"><input name="consent" type="checkbox" checked={v.consent} onChange={e => set("consent",e.target.checked)}/>I consent to Digital Ekta using these details to respond to my inquiry.</label>{errors.consent && <p className="mt-1 text-sm text-red-300">{errors.consent}</p>}
    <button disabled={status === "loading"} className="focus-ring mt-6 rounded-full bg-gradient-to-r from-violet to-cyan px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-60">{status === "loading" ? "Sending…" : "Send consultation request"}</button>
    <p aria-live="polite" className={`mt-4 text-sm ${status === "error" ? "text-red-300" : "text-cyan"}`}>{status === "success" ? "Thanks—your request was sent. Ekta will be in touch soon." : status === "error" ? "Something went wrong. Please email directly instead." : ""}</p>
  </form>;
}
