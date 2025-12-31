import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className="min-h-screen">
        <Navbar lang={params.lang as any} />
        <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
