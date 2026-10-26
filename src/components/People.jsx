import { families, party, couple } from "../data/weddingData.js";

export default function People() {
  return (
    <section className="section people band" id="people">
      <h2 className="h2">The people we love</h2>
      <p className="lede">
        With the blessings of our parents, {couple.bride} and {couple.groom} are joined by the friends and family standing with them.
      </p>

      <div className="families">
        {families.map((f) => (
          <div key={f.side}>
            <h3>{f.side}</h3>
            <p className="fam-names">{f.names}</p>
            <p className="fam-note">{f.note}</p>
          </div>
        ))}
      </div>

      <ul className="party">
        {party.map((p) => (
          <li key={p.name}>
            <span className="p-arch" aria-hidden="true">{p.initials}</span>
            <h4>{p.name}</h4>
            <b>{p.role}</b>
            <p>{p.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
