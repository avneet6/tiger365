import tabs from "../data/sportsTabs";

export default function SportsTabs() {
  return (
    <div className="sports-tabs">
      {tabs.map((tab) => (
        <button key={tab.name}>
          {tab.name} ({tab.count})
        </button>
      ))}
    </div>
  );
}
