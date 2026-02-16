export default function Tabs() {
  const tabs = [
    "In-Play",
    "Featured",
    "Cricket",
    "Football",
    "Tennis",
    "Kabaddi",
    "Politics",
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button key={tab} className="tab-btn">
          {tab}
        </button>
      ))}
    </div>
  );
}
