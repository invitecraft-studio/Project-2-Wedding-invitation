import { schedule } from "../data/weddingData.js";

function Column({ data }) {
  return (
    <div className="sch-col">
      <h3>{data.heading}</h3>
      <p className="sch-venue">{data.venue}</p>
      <ol>
        {data.items.map((it) => (
          <li key={it.time + it.what}>
            <time>{it.time}</time>
            <div>
              <strong>{it.what}</strong>
              {it.note && <p>{it.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="section schedule band" id="schedule">
      <h2 className="h2">How the day will go</h2>
      <div className="sch-grid">
        <Column data={schedule.morning} />
        <Column data={schedule.evening} />
      </div>
    </section>
  );
}
