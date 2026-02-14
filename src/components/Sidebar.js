export default function Sidebar() {
  const menu = [
    "Home",
    "Multi Markets",
    "Profit Loss",
    "A/C Statement",
    "Un-Settled Bets",
    "Rules",
    "Edit Stakes",
  ];

  return (
    <aside className="sidebar">
      {menu.map((item) => (
        <div key={item} className="sidebar-item">
          {item}
        </div>
      ))}
      <div className="profile">PROFILE (DEMO123)</div>
    </aside>
  );
}
