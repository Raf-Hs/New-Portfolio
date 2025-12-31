import Link from "next/link";

const items = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">

      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Portfolio
        </Link>
        <nav className="flex gap-4 text-sm">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="text-zinc-700 hover:text-zinc-900">
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
