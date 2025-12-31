import { site } from "@/lib/site";
import { projects } from "@/content/projects";

export default function sitemap() {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
  ];
}
