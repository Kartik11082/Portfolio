import { useEffect, useState } from "react";

/**
 * Types `text` left to right over `durationMs` with a single caret.
 *
 * The full text is always rendered; untyped characters are only `visibility: hidden`.
 * That keeps the layout at its final width from the first frame, so nothing is clipped,
 * nothing shifts while typing, and the text sits exactly where the hero h1's text does.
 */
function IntroName({ text, durationMs }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            setProgress(t);
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [durationMs]);

    // ceil: the first character appears on the first frame, the last exactly at t = 1
    const typed = Math.ceil(progress * text.length);

    return (
        <p className={`hero-intro-text ${progress < 1 ? "is-typing" : ""}`}>
            {text.slice(0, typed)}
            <span className="hero-intro-caret" />
            <span className="hero-intro-rest">{text.slice(typed)}</span>
        </p>
    );
}

export default IntroName;
