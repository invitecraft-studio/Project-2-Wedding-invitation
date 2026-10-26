import cover from "../assets/cover.jpg";
import { couple, weddingDayLong, place } from "../data/weddingData.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="cover-card" style={{ backgroundImage: `url(${cover})` }}>
        <div className="cover-text">
          <p className="cv-small">Together with their families</p>
          <h1 className="cv-mono" aria-label="The wedding invitation of E and D">
            <span aria-hidden="true">{couple.bride[0]}</span>
            <i aria-hidden="true">&amp;</i>
            <span aria-hidden="true">{couple.groom[0]}</span>
          </h1>
          <p className="cv-small">invite you to their wedding</p>
          <p className="cv-date">{weddingDayLong}</p>
          <p className="cv-small">{place}</p>
        </div>
      </div>
      <a className="scroll-hint" href="#countdown" aria-label="Scroll to the countdown">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </a>
    </section>
  );
}
