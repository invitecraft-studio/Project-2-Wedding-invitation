import { useState } from "react";
import { couple, rsvp } from "../data/weddingData.js";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("yes");
  const [guests, setGuests] = useState(1);
  const [events, setEvents] = useState("both");
  const [meal, setMeal] = useState("Non-vegetarian");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name so the family knows who replied.");
      return;
    }
    setError("");
    const eventsText = { both: "church and reception", church: "the church ceremony only", reception: "the reception only" }[events];
    const body =
      answer === "yes"
        ? `Hello! This is ${name.trim()}. We joyfully accept ${couple.bride} & ${couple.groom}'s wedding invitation.\n` +
          `Guests: ${guests}\nAttending: ${eventsText}\nMeal: ${meal}`
        : `Hello! This is ${name.trim()}. We are sorry we cannot attend ${couple.bride} & ${couple.groom}'s wedding, but we will be praying for you both.`;
    const text = body + (msg.trim() ? `\n\n${msg.trim()}` : "");
    const base = rsvp.whatsapp ? `https://wa.me/${rsvp.whatsapp}` : "https://wa.me/";
    window.open(`${base}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section className="section rsvp band" id="rsvp">
      <h2 className="h2">Will you join us?</h2>
      <p className="lede">Please reply by {rsvp.deadline}. Your answer opens in WhatsApp, ready to send.</p>

      <form className="rsvp-form" onSubmit={submit} noValidate>
        <label>
          Your name
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>

        <fieldset>
          <legend>Can you come?</legend>
          <div className="choices">
            <label className={answer === "yes" ? "is-on" : ""}>
              <input type="radio" name="answer" checked={answer === "yes"} onChange={() => setAnswer("yes")} />
              Joyfully accept
            </label>
            <label className={answer === "no" ? "is-on" : ""}>
              <input type="radio" name="answer" checked={answer === "no"} onChange={() => setAnswer("no")} />
              Regretfully decline
            </label>
          </div>
        </fieldset>

        {answer === "yes" && (
          <>
            <div className="row">
              <label>
                Guests (including you)
                <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
              <label>
                Meal
                <select value={meal} onChange={(e) => setMeal(e.target.value)}>
                  <option>Non-vegetarian</option>
                  <option>Vegetarian</option>
                </select>
              </label>
            </div>
            <label>
              Which celebrations?
              <select value={events} onChange={(e) => setEvents(e.target.value)}>
                <option value="both">Church and reception</option>
                <option value="church">Church ceremony only</option>
                <option value="reception">Reception only</option>
              </select>
            </label>
          </>
        )}

        <label>
          A blessing or prayer for the couple (optional)
          <textarea rows="3" value={msg} onChange={(e) => setMsg(e.target.value)} />
        </label>

        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-solid">Send reply on WhatsApp</button>
      </form>
    </section>
  );
}
