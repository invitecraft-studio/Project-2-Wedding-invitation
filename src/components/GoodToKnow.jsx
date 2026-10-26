import { goodToKnow } from "../data/weddingData.js";

export default function GoodToKnow() {
  return (
    <section className="section know" id="know">
      <h2 className="h2">Before you come</h2>
      <div className="know-grid">
        {goodToKnow.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <p>{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
