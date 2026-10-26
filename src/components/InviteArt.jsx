import ceremonyBg from "../assets/ceremony-bg.jpg";
import receptionBg from "../assets/reception-bg.jpg";
import { couple, events, venues, weddingWeekday, weddingDayShort } from "../data/weddingData.js";

/* The two printed invitation cards. Used as small thumbnails in the
   timeline and at full size in the lightbox (they scale with their container). */

export const ART_RATIO = { ceremony: 735 / 1029, reception: 736 / 1104 };

export function CeremonyArt() {
  const c = events.ceremony;
  return (
    <div className="art art-ceremony" style={{ backgroundImage: `url(${ceremonyBg})` }}>
      <div className="art-text">
        <p className="a-small">With joy, we invite you to</p>
        <p className="a-names">{couple.bride} <i>&amp;</i> {couple.groom}</p>
        <p className="a-title">{c.title}</p>
        <p className="a-small">{weddingWeekday}, {weddingDayShort}</p>
        <p className="a-small">{c.time} at {venues.ceremony.name}</p>
      </div>
    </div>
  );
}

export function ReceptionArt() {
  const r = events.reception;
  return (
    <div className="art art-reception" style={{ backgroundImage: `url(${receptionBg})` }}>
      <div className="mono">{couple.bride[0]}<i>&amp;</i>{couple.groom[0]}</div>
      <div className="art-text">
        <p className="a-small">Please join us for</p>
        <p className="a-script">the wedding reception</p>
        <p className="a-small">of</p>
        <p className="a-big">{couple.bride}</p>
        <p className="a-small a-and">and</p>
        <p className="a-big">{couple.groom}</p>
        <p className="a-date">{weddingWeekday}, {weddingDayShort}</p>
        <p className="a-small">{r.time} onwards</p>
        <p className="a-venue">{venues.reception.name}</p>
        <p className="a-small">{venues.reception.hall}, Bharathi Nagar</p>
        <p className="a-small a-bless">With love and blessings</p>
      </div>
    </div>
  );
}
