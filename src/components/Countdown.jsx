import { useEffect, useState } from "react";
import { weddingTarget, weddingDayLong, events } from "../data/weddingData.js";
import { downloadICS } from "../utils/ics.js";

const pad = (n) => String(n).padStart(2, "0");

function remaining() {
  let diff = new Date(weddingTarget).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
  const mins = Math.floor(diff / 60000); diff -= mins * 60000;
  return { days, hours: pad(hours), mins: pad(mins), secs: pad(Math.floor(diff / 1000)) };
}

export default function Countdown() {
  const [t, setT] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown" id="countdown">
      {t ? (
        <>
          <h2 className="cd-title">Until we say “I do”</h2>
          <div className="cd-grid" role="timer" aria-live="off">
            <div><b>{t.days}</b><span>days</span></div>
            <div><b>{t.hours}</b><span>hours</span></div>
            <div><b>{t.mins}</b><span>minutes</span></div>
            <div><b>{t.secs}</b><span>seconds</span></div>
          </div>
          <p className="cd-note">{weddingDayLong}, 11:00 AM</p>
          <button type="button" className="btn btn-ghost" onClick={() => downloadICS("ceremony")}>
            Add the ceremony to your calendar
          </button>
        </>
      ) : (
        <>
          <h2 className="cd-title">We are married</h2>
          <p className="cd-note">Thank you for celebrating with us and for every prayer along the way.</p>
        </>
      )}
    </section>
  );
}
