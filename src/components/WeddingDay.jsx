import { events, venues } from "../data/weddingData.js";
import { downloadICS } from "../utils/ics.js";
import { CeremonyArt, ReceptionArt } from "./InviteArt.jsx";

function Item({ ev, venue, Art, label, onZoom }) {
  return (
    <article className="fest-item">
      <span className="fest-marker" aria-hidden="true" />
      <div className="fest-row">
        <div className="fest-text">
          <p className="fest-day">{ev.day}</p>
          <h3 className="fest-title">{ev.title}</h3>
          <p className="fest-time">{ev.time} &middot; {ev.venue}</p>
          <p className="fest-quote">&ldquo;{ev.quote}&rdquo;</p>
          <div className="fest-links">
            <button type="button" className="fest-cal" onClick={() => downloadICS(ev.key)}>
              + Add to calendar
            </button>
            <a
              className="fest-cal"
              href={`https://www.google.com/maps/search/?api=1&query=${venue.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
        <button
          type="button"
          className="fest-thumb"
          onClick={() => onZoom(ev.key)}
          aria-label={`View the ${label} invitation full screen`}
        >
          <Art />
          <span className="fest-thumb-hint">Tap to enlarge</span>
        </button>
      </div>
    </article>
  );
}

export default function WeddingDay({ onZoom }) {
  return (
    <section className="section band festivities" id="wedding">
      <p className="section-eyebrow">One Day, Two Celebrations</p>
      <h2 className="h2">The Festivities</h2>

      <div className="fest-timeline">
        <Item ev={events.ceremony} venue={venues.ceremony} Art={CeremonyArt} label="ceremony" onZoom={onZoom} />
        <Item ev={events.reception} venue={venues.reception} Art={ReceptionArt} label="reception" onZoom={onZoom} />
      </div>
    </section>
  );
}
