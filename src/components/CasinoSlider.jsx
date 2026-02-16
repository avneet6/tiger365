export default function CasinoSlider() {
  const images = [
    "https://cdn.dreamcasino.live/sbe_aviator.webp",
    "https://cdn.dreamcasino.live/evo_crazytime.webp",
    "https://cdn.dreamcasino.live/evo_funkytime.webp",
    "https://cdn.dreamcasino.live/evo_lightningroulette.webp",
  ];

  return (
    <div className="casino-slider">
      {images.map((img, i) => (
        <img key={i} src={img} alt="casino" />
      ))}
    </div>
  );
}
