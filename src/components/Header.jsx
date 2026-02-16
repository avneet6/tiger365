export default function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="balance">
          Balance : <span className="highlight">0</span> PTI
        </div>
        <div className="expose">
          Exp : <span className="highlight">0.00</span>
        </div>
      </div>

      <nav className="navbar">
        <button className="menu-btn">☰</button>
        <img
          src="https://tiger365.pro/tiger365.pro/images/logo-text.png"
          alt="Logo"
          className="logo"
        />
      </nav>

      <div className="marquee">
        We have launched 4500+ games in new I-casino (1 point = 100)
      </div>
    </>
  );
}
