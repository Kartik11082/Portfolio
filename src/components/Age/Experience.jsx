import { useEffect, useState } from "react";

const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

// Industry roles only, matching the Experience section in Timeline.jsx.
// `end` is exclusive (first day after the last month worked); null means current.
const EXPERIENCE_PERIODS = [
  { role: "PyCray", start: Date.UTC(2023, 4, 1), end: Date.UTC(2024, 6, 1) },
  { role: "Kapi", start: Date.UTC(2026, 9, 1), end: null },
];

// Years worked so far; the open period keeps it ticking, like the live age
function getExperience() {
  const now = Date.now();
  const worked = EXPERIENCE_PERIODS.reduce(
    (total, { start, end }) => total + Math.max(0, Math.min(end ?? now, now) - start),
    0,
  );
  return (worked / MILLISECONDS_PER_YEAR).toFixed(9);
}

function Experience() {
  const [years, setYears] = useState(getExperience);

  useEffect(() => {
    const update = () => setYears(getExperience());
    update();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setInterval(update, reducedMotion ? 1000 : 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="t-age t-exp" title="My live industry experience in years">
      <span aria-hidden="true">{years}</span>
      <span className="t-age-readable">{Number(years).toFixed(1)}</span>
    </span>
  );
}

export default Experience;
