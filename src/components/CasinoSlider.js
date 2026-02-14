import games from "../data/casinoGames";

export default function CasinoSlider() {
  return (
    <div className="casino-slider">
      {games.map((game) => (
        <img
          key={game.name}
          src={`/images/${game.img}`}
          alt={game.name}
        />
      ))}
    </div>
  );
}
