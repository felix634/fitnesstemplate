import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Gallery } from "@/components/Gallery";
import { Membership } from "@/components/Membership";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="rólunk">
        <Hero />
      </div>
      <Philosophy />
      <Gallery />
      <Membership />
      <Footer />
    </main>
  );
}
