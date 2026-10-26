import { useEffect, useState } from "react";
import { couple } from "../data/weddingData.js";

/* A leaf pair at each point along a stem. */
function Sprig({ points, flip }) {
  return (
    <g>
      <path
        d={"M" + points.map((p) => p.join(" ")).join(" L")}
        fill="none"
        stroke="#d6bf8e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      {points.map(([x, y], i) =>
        [-48, 48].map((a) => (
          <ellipse
            key={i + "_" + a}
            cx={x}
            cy={y + (flip ? 13 : -13)}
            rx="5"
            ry="13"
            transform={`rotate(${flip ? a + 180 : a} ${x} ${y})`}
            fill="#d6bf8e"
            opacity={0.45 + (i % 2) * 0.2}
          />
        ))
      )}
    </g>
  );
}

/* One half of the double door. The seam is at x = 300 on the left door;
   the right door is the same drawing mirrored, so the arch and the cross
   meet exactly in the middle when the doors are shut. */
function Door({ side }) {
  const right = side === "right";
  return (
    <div className={"splash-door splash-door--" + side}>
      <svg
        viewBox="0 0 300 800"
        preserveAspectRatio={right ? "xMinYMid slice" : "xMaxYMid slice"}
        aria-hidden="true"
      >
        <g transform={right ? "translate(300 0) scale(-1 1)" : undefined}>
          <path d="M128 760V332C128 204 198 96 300 96" fill="none" stroke="#d6bf8e" strokeWidth="1.6" />
          <path d="M144 744V336C144 214 206 114 300 114" fill="none" stroke="#d6bf8e" strokeWidth="1" opacity="0.5" />
          <path d="M128 760H300" fill="none" stroke="#d6bf8e" strokeWidth="1.6" />
          <path d="M144 744H300" fill="none" stroke="#d6bf8e" strokeWidth="1" opacity="0.5" />
          {/* half of the cross, split on the seam */}
          <rect x="294" y="30" width="6" height="118" fill="#d6bf8e" />
          <rect x="262" y="62" width="38" height="6" fill="#d6bf8e" />
          <Sprig points={[[164, 722], [170, 682], [168, 642], [178, 602], [190, 566], [206, 534]]} />
          <Sprig points={[[236, 722], [244, 690], [242, 656]]} />
        </g>
      </svg>
    </div>
  );
}

export default function IntroSplash({ onStart, onDone }) {
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleTap() {
    if (opening) return;
    setOpening(true);
    onStart();                              // mount the site underneath the doors
    window.setTimeout(onDone, 1300);        // remove the splash once the doors have parted
  }

  return (
    <div className={"splash" + (opening ? " is-opening" : "")}>
      <button
        type="button"
        className="splash-tap-target"
        onClick={handleTap}
        aria-label="Tap to open the invitation"
      />
      <Door side="left" />
      <Door side="right" />

      <div className="splash-center" aria-hidden="true">
        <svg className="splash-mono" viewBox="0 0 110 110" width="96" height="96">
          <circle cx="55" cy="55" r="52" fill="#3f4d3a" stroke="#d6bf8e" strokeWidth="1.2" />
          <circle cx="55" cy="55" r="46" fill="none" stroke="#d6bf8e" strokeWidth="0.6" opacity="0.6" />
          <text x="55" y="68" textAnchor="middle" fill="#d6bf8e">
            <tspan fontFamily="Pinyon Script, cursive" fontSize="38">{couple.bride[0]}</tspan>
            <tspan fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="20" dx="2" dy="-4">&amp;</tspan>
            <tspan fontFamily="Pinyon Script, cursive" fontSize="38" dx="2" dy="4">{couple.groom[0]}</tspan>
          </text>
        </svg>
        <span className="splash-rule" />
        <p className="splash-hint">Tap to open</p>
      </div>
    </div>
  );
}
