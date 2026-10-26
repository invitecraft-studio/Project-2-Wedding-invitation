import { useMemo } from "react";

export default function PetalField() {
  const petals = useMemo(() => {
    const count = typeof window !== "undefined" && window.innerWidth < 700 ? 10 : 18;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      blush: i % 3 === 0,
      left: Math.random() * 100,
      size: 7 + Math.random() * 9,
      duration: 14 + Math.random() * 14,
      delay: Math.random() * 16,
      opacity: 0.4 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={"petal" + (p.blush ? " petal--blush" : "")}
          style={{
            left: p.left + "vw",
            width: p.size,
            height: p.size * 1.3,
            animationDuration: p.duration + "s",
            animationDelay: p.delay + "s",
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
