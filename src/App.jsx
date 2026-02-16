import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import CasinoSlider from "./components/CasinoSlider";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />

      <main className="main-content">
        <Tabs />
        <CasinoSlider />
      </main>
    </div>
  );
}
