import { verse } from "../data/weddingData.js";

export default function Verse() {
  return (
    <section className="verse">
      <svg className="verse-cross" viewBox="0 0 24 32" width="22" height="30" aria-hidden="true">
        <path d="M10 0h4v9h8v4h-8v19h-4V13H2V9h8z" fill="currentColor" />
      </svg>
      <blockquote>
        <p>{verse.text}</p>
        <cite>{verse.ref}</cite>
      </blockquote>
      <p className="verse-note">{verse.note}</p>
    </section>
  );
}
