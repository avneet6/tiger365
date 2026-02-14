import React from "react";

const images = [
  "cricket.png",
  "football.png",
  "tennis.png",
  "casino.png",
  "indian_casino.png",
  "teenpatti.png",
];

export default function Thumbnails() {
  return (
    <section className="thumbnails">
      <div className="container">
        <h2 className="text-center mb-4">
          Enjoy fastest odds with live dealers
        </h2>

        <div className="row">
          {images.map((img) => (
            <div key={img} className="col-md-4 col-6 mb-3">
              <img
                src={`https://tiger365.pro/assets/tiger/assets/img/${img}`}
                className="img-fluid"
                alt={img}
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
