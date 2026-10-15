import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Benefits from "@/components/Benefits";
import ClinicGallery from "@/components/ClinicGallery";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { AppointmentProvider } from "@/components/appointment/AppointmentProvider";

export default function Home() {
  return (
    <AppointmentProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand focus:shadow-soft"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Benefits />
        <ClinicGallery />
        <Team />
      </main>
      <Footer />
    </AppointmentProvider>
  );
}
