export default function RaceSection({ type }) {
  return (
    <div className="race-section">
      <h4>Next {type === "horse" ? "Horse" : "Greyhound"} Race</h4>
      <div className="race-list">
        {[1, 2, 3, 4].map((r) => (
          <span key={r}>{r}:30 PM</span>
        ))}
      </div>
    </div>
  );
}
