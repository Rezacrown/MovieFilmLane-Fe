import DetailMovie from "../../components/Detail-movie";
import FooterSection from "../../components/Footer-section";
import Header from "../../components/Header";
import Tvseries from "../../components/Tv-series";

export default function Detail_pages() {
  return (
    <>
          <Header />
          {/* main */}
          <DetailMovie />
          <Tvseries />
          {/* footer */}
          <FooterSection />
    </>
  )
}
