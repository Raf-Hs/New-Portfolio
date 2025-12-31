import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="min-h-screen">
        <Navbar lang={lang} />
        <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
