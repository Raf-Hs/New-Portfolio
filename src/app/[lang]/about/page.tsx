import { getDictionary } from "@/i18n/get-dictionary";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        {t.about.title}
      </h1>

      <p className="text-white/70 max-w-2xl">
        Full-Stack Developer especializado en TypeScript, Next.js, Node.js,
        Prisma y Postgres. Enfoque en producto real, despliegue y sistemas
        mantenibles.
      </p>
    </div>
  );
}
