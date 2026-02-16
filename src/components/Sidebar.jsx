export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://tiger365.pro/tiger365.pro/images/logo.png"
        alt="Logo"
        className="sidebar-logo"
      />

      <ul>
        <li>🏠 Home</li>
        <li>📊 Multi Markets</li>
        <li>💰 Profit & Loss</li>
        <li>📄 Statement</li>
        <li>🎯 Unsettled Bets</li>
        <li>👤 Profile</li>
        <li>🌗 Light Mode</li>
        <li className="logout">🚪 Logout</li>
      </ul>
    </aside>
  );
}
