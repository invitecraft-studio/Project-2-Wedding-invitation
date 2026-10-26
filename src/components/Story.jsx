import { story } from "../data/weddingData.js";

export default function Story() {
  return (
    <section className="section story band" id="story">
      <h2 className="h2">How we got here</h2>
      <ol className="timeline">
        {story.map((s) => (
          <li key={s.year}>
            <span className="tl-year">{s.year}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
