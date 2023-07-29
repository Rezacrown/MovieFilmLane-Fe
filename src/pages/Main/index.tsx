
// component
import Ctasection from "../../components/Cta-section";
import FooterSection from "../../components/Footer-section";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/Service-section";
import Toprated from "../../components/Toprated";
import Tvseries from "../../components/Tv-series";
import Upcoming from "../../components/Upcoming";

export default function Main_pages() {
  return (
    <>
      <Header />
      {/* main */}
      <Hero />
      <Upcoming />
      <ServicesSection />
      <Toprated />
      <Tvseries />
      <Ctasection />
      {/* footer */}
      <FooterSection />
    </>
  );
}
