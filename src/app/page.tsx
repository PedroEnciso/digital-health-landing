import Header from "@/components/header";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Team from "@/components/team";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <Process />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
