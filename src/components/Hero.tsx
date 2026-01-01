import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero({
  lang,
  title,
  subtitle,
  desc,
  ctaPrimary,
}: {
  lang: string;
  title: string;      // "Full-Stack Developer" (ES/EN)
  subtitle: string;   // tu nombre
  desc: string;       // tagline/desc
  ctaPrimary: string; // label para botón principal
}) {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="relative overflow-hidden card p-8 md:p-10">
        {/* glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-[rgba(57,255,182,.10)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[rgba(0,179,166,.10)] blur-3xl" />

        {/* top row like screenshot (mini identity + "Descargar CV") */}
       

        {/* headline */}
        <div className="relative z-10 mt-10 md:mt-12 text-center">
          <div className="text-[clamp(1.3rem,2.6vw,2.1rem)] font-semibold tracking-tight text-[rgba(57,255,182,.92)]">
            {title}
          </div>

          <h1 className="mt-2 text-[clamp(2.6rem,6vw,4.6rem)] font-semibold tracking-tight text-white">
            {subtitle}
          </h1>

          <div className="mt-3 text-base md:text-lg text-white/70">
            {desc}
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link className="btn btn-solid" href={`/${lang}#projects`}>
              {ctaPrimary}
            </Link>

            <a
            className="btn btn-ghost flex items-center gap-2"
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            >
            <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="object-contain"
            />
            LinkedIn
            </a>

            <a
            className="btn btn-ghost flex items-center gap-2"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            >
            <Image
                src="/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="object-contain"
            />
            GitHub
            </a>

                     <a
            className="btn btn-ghost"
            href="/Rafael_Hernandez_Silva_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Descargar CV
          </a>

          </div>

          {/* tech row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-95">
                <TechIconPill label="TypeScript" icon="/Typescript.png" />
                <TechIconPill label="React" icon="/React.png" />
                <TechIconPill label="Next.js" icon="/next.svg" />
                <TechIconPill label="Node.js" icon="/window.svg" />
                <TechIconPill label="Prisma" icon="/prisma-svgrepo-com.svg" />
                <TechIconPill label="Postgres" icon="/Postgresql.png" />
                <TechIconPill label="Docker" icon="/docker.svg" />
            </div>
        </div>
      </div>
    </section>
  );
}

function TechIconPill({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75">
      <Image
        src={icon}
        alt={label}
        width={16}
        height={16}
        className="object-contain"
      />
      {label}
    </span>
  );
}

