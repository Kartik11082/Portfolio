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
                    I'm a <Age /> year-old software engineer building software.
                </p>
                <p className="terminal-line">
                    Procurement optimization at <a href="#timeline" className="t-link">Kapi</a>. Building APIs and data pipelines at PyCray.
                </p>
                <p className="terminal-line terminal-awards">
                    <a href="#projects" className="t-project">1st at TidalHack · 3rd in the 3LC × AWS AI challenge</a>
                </p>
                <div className="terminal-gap" />
                <button onClick={onOpenResume} className="t-resume">View Resume</button>
                <p className="terminal-line">
                    <a href="https://github.com/Kartik11082" target="_blank" rel="noopener noreferrer" className="t-link">GitHub</a> · {" "}
                    <a href="https://www.linkedin.com/in/kartikkarkera/" target="_blank" rel="noopener noreferrer" className="t-link">LinkedIn</a>
                </p>
                <p className="terminal-line">
                    Open to backend and data engineering roles. {" "}
                    <a href="mailto:karkerakartik27@gmail.com" className="t-email">Let's talk.</a>
                </p>
            </div>
            <button
                className={`scroll-cue ${isRevealed ? "revealed" : ""}`}
                onClick={() => {
                    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    document.querySelector("#timeline")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
                }}
                aria-label="Scroll to experience"
                tabIndex={isRevealed ? 0 : -1}
            >
                <span className="scroll-cue-bar" aria-hidden="true" />
                <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
            </button>
        </div>
    );
};

export default Title;
