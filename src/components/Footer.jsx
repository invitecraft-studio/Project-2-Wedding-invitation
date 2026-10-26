import { couple, weddingDayShort, verse, credit } from "../data/weddingData.js";

export default function Footer() {
  const share = () => {
    const text = `You are invited to the wedding of ${couple.bride} & ${couple.groom} on ${weddingDayShort}.\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <footer className="footer">
      <p className="f-names">{couple.bride}<i>&amp;</i>{couple.groom}</p>
      <p className="f-line">{weddingDayShort} · {couple.hashtag}</p>
      <p className="f-verse">“{verse.text}” {verse.ref}</p>
      <button type="button" className="btn btn-ghost" onClick={share}>Share this invitation on WhatsApp</button>
      <p className="f-credit">{credit}</p>
    </footer>
  );
}
