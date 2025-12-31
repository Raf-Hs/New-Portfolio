import { site } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-zinc-700">
        {site.role}. Enfocado en construir productos end-to-end con TypeScript, Next.js, Node.js, Prisma y Postgres.
      </p>
      <p className="text-zinc-700">
        Interés principal: sistemas de producción con despliegue real, observabilidad y diseño pragmático.
      </p>
    </div>
  );
}
