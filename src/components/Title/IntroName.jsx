/* eslint-disable react/prop-types -- the repo does not use prop-types */
import { useEffect, useState } from "react";

/**
 * Types every part in parallel over `durationMs`, so they all finish together.
 *
 * The full text is always rendered; untyped characters are only `visibility: hidden`.
 * That keeps the layout at its final width from the first frame, so nothing is clipped,
 * nothing shifts while typing, and the text sits exactly where the hero h1's text does.
 */
function IntroName({ parts, durationMs }) {
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

    const isTyping = progress < 1;

    return (
        <p className={`hero-intro-text ${isTyping ? "is-typing" : ""}`}>
            {parts.map((part, index) => {
                // ceil: the first character appears on the first frame, the last exactly at t = 1
                const typed = Math.ceil(progress * part.length);
                return (
                    <span className="hero-intro-part" key={part}>
                        {index > 0 && " "}
                        {part.slice(0, typed)}
                        <span className="hero-intro-caret" />
                        <span className="hero-intro-rest">{part.slice(typed)}</span>
                    </span>
                );
            })}
        </p>
    );
}

export default IntroName;
