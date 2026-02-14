import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Thumbnails from "./components/Thumbnails";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
 // import "./assets/style.css";

function App() {
  return (
    <div className="landing_body">
      <Header />
      <Hero />
      <Thumbnails />
      <Footer />
      <LoginModal />
    </div>
  );
}

export default App;
