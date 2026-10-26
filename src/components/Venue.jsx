import { useState } from "react";
import { venues, travel } from "../data/weddingData.js";

const TABS = [
  ["ceremony", "Church"],
  ["reception", "Reception"],
];

export default function Venue() {
  const [tab, setTab] = useState("ceremony");
  const v = venues[tab];

  return (
    <section className="section venue" id="venue">
      <h2 className="h2">Finding us</h2>

      <div className="tabs" role="tablist" aria-label="Choose a venue">
        {TABS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={tab === key ? "is-on" : ""}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="venue-panel">
        <div className="venue-info">
          <h3>{v.name}</h3>
          {v.hall && <p className="venue-hall">{v.hall}</p>}
          <p>{v.address}</p>
          <a
            className="btn"
            href={`https://www.google.com/maps/search/?api=1&query=${v.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="venue-map">
          <iframe
            key={tab}
            title={`Map of ${v.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={v.mapsEmbed}
          />
        </div>
      </div>

      <div className="travel">
        {travel.map((t) => (
          <div key={t.title}>
            <h4>{t.title}</h4>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
