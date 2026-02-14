import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SportsTabs from "../components/SportsTabs";
import CasinoSlider from "../components/CasinoSlider";
import RaceSection from "../components/RaceSection";
import FeaturedCricket from "../components/FeaturedCricket";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <SportsTabs />
          <CasinoSlider />
          <RaceSection type="horse" />
          <RaceSection type="greyhound" />
          <FeaturedCricket />
        </div>
      </div>
    </div>
  );
}
