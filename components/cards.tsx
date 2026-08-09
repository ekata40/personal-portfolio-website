import Link from "next/link";
import { Service } from "@/content/services";
import { Post } from "@/content/blog-posts";

export function ServiceCard({service}:{service:Service}) { return <Link href={`/services/${service.slug}`} className="surface lift focus-ring block rounded-2xl p-6"><span className="text-2xl text-cyan">{service.icon}</span><h3 className="mt-5 text-xl font-bold">{service.title}</h3><p className="mt-3 leading-6 text-slate-300">{service.summary}</p><span className="mt-5 inline-block text-sm font-bold text-cyan">Explore service →</span></Link>; }
export function BlogCard({post}:{post:Post}) { return <Link href={`/blog/${post.slug}`} className="surface lift focus-ring block overflow-hidden rounded-2xl"><img className="h-40 w-full object-cover" src={post.image} alt=""/><div className="p-6"><p className="eyebrow">{post.category} · {post.read}</p><h3 className="mt-3 text-xl font-bold">{post.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p><p className="mt-5 text-xs text-slate-400">{post.date}</p></div></Link>; }
