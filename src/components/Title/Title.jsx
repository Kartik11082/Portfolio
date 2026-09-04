import { useEffect, useRef } from "react";
import Age from "../Age/Age";
import "./Title.css";

const Title = ({ phase = "revealed", onNameReady, onOpenResume }) => {
    const nameRef = useRef(null);

    useEffect(() => {
        if (phase === "moving" && nameRef.current && onNameReady) {
            const rect = nameRef.current.getBoundingClientRect();
            const fontSize = window.getComputedStyle(nameRef.current).fontSize;
            onNameReady(rect, fontSize);
        }
    }, [phase, onNameReady]);

    const isRevealed = phase === "revealed";

    return (
        <div className={`hero-terminal phase-${phase}`}>
            <div className={`terminal-content ${isRevealed ? "revealed" : ""}`}>
                <h1
                    ref={nameRef}
                    className="terminal-name"
                    style={{
                        opacity: isRevealed ? 1 : 0,
                        transform: "none",
                    }}
                >
                    {"{ KARTIK KARKERA }"}
                </h1>
                <p className="terminal-line">
                    I'm a <Age /> year-old developer
                </p>
                <p className="terminal-line">
                    who uses{" "}
                    <span className="t-python">Python</span>,{" "}
                    <span className="t-sql">SQL</span>,{" "}
                    <span className="t-spark">Apache Spark</span>, and{" "}
                    <span className="t-aws">AWS</span>.
                </p>
                <div className="terminal-gap" />
                <p className="terminal-line">
                    Check out my{" "}
                    <a href="https://github.com/Kartik11082" target="_blank" rel="noopener noreferrer" className="t-link">GitHub</a>,{" "}
                    <a href="https://www.linkedin.com/in/kartikkarkera/" target="_blank" rel="noopener noreferrer" className="t-link">LinkedIn</a>,{" "}
                    and{" "}
                    <button onClick={onOpenResume} className="t-link t-resume">Resume</button>.
                </p>
                <p className="terminal-line">
                    I was last seen working on{" "}
                    <a href="#projects" className="t-project">Traceline</a>.
                </p>
                <p className="terminal-line">
                    Looking for my next role &mdash;{" "}
                    <a href="mailto:karkerakartik27@gmail.com" className="t-email">Email me!</a>
                </p>
            </div>
            <button
                className={`scroll-cue ${isRevealed ? "revealed" : ""}`}
                onClick={() => {
                    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    document.querySelector("#projects")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
                }}
                aria-label="Scroll to projects"
                tabIndex={isRevealed ? 0 : -1}
            >
                <span className="scroll-cue-bar" aria-hidden="true" />
                <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
            </button>
        </div>
    );
};

export default Title;
