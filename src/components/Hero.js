import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {["b1", "b2", "b3"].map((img, index) => (
            <div key={img} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                className="img-fluid"
                src={`https://tiger365.pro/assets/tiger/tiger/${img}.jpg`}
                alt="Banner"
                data-bs-toggle="modal"
                data-bs-target="#LoginHome"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
