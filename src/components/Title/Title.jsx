import { useEffect, useRef } from "react";
import Age from "../Age/Age";
import "./Title.css";

// The keywords recruiters scan for, drawn from the experience and project sections.
const STACK = ["Python", "SQL", "PostgreSQL", "AWS", "FastAPI", "LangGraph", "Spark", "React"];

const AWARDS = [
    { rank: "1st", event: "TidalHack" },
    { rank: "3rd", event: "3LC × AWS AI challenge" },
];

const Title = ({ phase = "revealed", onNameReady, onOpenResume }) => {
    const nameRef = useRef(null);

    useEffect(() => {
        if (phase === "moving" && nameRef.current && onNameReady) {
            const rect = nameRef.current.getBoundingClientRect();
            const fontSize = window.getComputedStyle(nameRef.current).fontSize;
            onNameReady(rect, fontSize);
        }
    }, [phase, onNameReady]);

    // The h1 appears only when the overlay lands on it (a seamless swap),
    // but everything else starts fading in as soon as the name begins to glide.
    const isRevealed = phase === "revealed";
    const showContent = phase !== "typing";

    return (
        <div className={`hero-terminal phase-${phase}`}>
            <div className={`terminal-content ${showContent ? "revealed" : ""}`}>
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
                <p className="hero-role" style={{ "--i": 1 }}>
                    <span className="hero-role-item">ML Engineer Intern <span className="hero-at">@</span> <a href="#timeline">Kapi</a></span>
                    <span className="hero-sep" aria-hidden="true">·</span>
                    <span className="hero-role-item">Former SDE <span className="hero-at">@</span> <a href="#timeline">PyCray</a></span>
                </p>
                <p className="hero-age" style={{ "--i": 2 }}>
                    I&apos;m a <Age /> year-old software engineer.
                </p>
                <a href="#project-duo" className="hero-now" style={{ "--i": 3 }}>
                    <span className="hero-now-dot" aria-hidden="true" />
                    <span>Now building <strong>Duo</strong>, a long-running AI agent</span>
                    <span className="hero-now-arrow" aria-hidden="true">→</span>
                </a>
                <ul className="hero-awards" style={{ "--i": 4 }} aria-label="Hackathon awards">
                    {AWARDS.map((award) => (
                        <li key={award.event}>
                            <a href="#projects">
                                <span className="hero-award-rank">{award.rank}</span>
                                {award.event}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="hero-stack" style={{ "--i": 5 }} aria-label="Core stack">
                    {STACK.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="hero-actions" style={{ "--i": 6 }}>
                    <button onClick={onOpenResume} className="t-resume" data-umami-event="resume-open" data-umami-event-from="hero">View Resume</button>
                    <p className="hero-links">
                        <a href="https://github.com/Kartik11082" target="_blank" rel="noopener noreferrer" data-umami-event="profile-click" data-umami-event-to="github">GitHub</a>
                        <a href="https://www.linkedin.com/in/kartikkarkera/" target="_blank" rel="noopener noreferrer" data-umami-event="profile-click" data-umami-event-to="linkedin">LinkedIn</a>
                        <a href="mailto:karkerakartik27@gmail.com" data-umami-event="email-click" data-umami-event-from="hero">Email</a>
                    </p>
                </div>
            </div>
            <button
                className={`scroll-cue ${showContent ? "revealed" : ""}`}
                onClick={() => {
                    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    document.querySelector("#timeline")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
                }}
                aria-label="Scroll to experience"
                tabIndex={showContent ? 0 : -1}
            >
                <span className="scroll-cue-bar" aria-hidden="true" />
                <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
            </button>
        </div>
    );
};

export default Title;
