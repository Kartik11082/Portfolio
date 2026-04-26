import { useEffect, useRef } from "react";
import Age from "../Age/Age";
import "./Title.css";

const Title = ({ phase = "revealed", onNameReady }) => {
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
                    <a href="https://github.com/Kartik11082" target="_blank" rel="noopener noreferrer" className="t-link">GitHub</a>{" "}
                    and{" "}
                    <a href="https://www.linkedin.com/in/kartikkarkera/" target="_blank" rel="noopener noreferrer" className="t-link">LinkedIn</a>.
                </p>
                <p className="terminal-line">
                    I was last seen working on{" "}
                    <a href="#projects" className="t-project">Traceline</a>.
                </p>
                <p className="terminal-line">
                    Business inquiry?{" "}
                    <a href="mailto:karkerakartik27@gmail.com" className="t-email">Email me!</a>
                </p>
            </div>
        </div>
    );
};

export default Title;
