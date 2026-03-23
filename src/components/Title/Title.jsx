import { useEffect, useState } from "react";
import Age from "../Age/Age";
import "./Title.css";

const Title = ({ phase = "revealed" }) => {
    return (
        <div className={`hero phase-${phase}`}>
            <div className={`hero-content ${phase === "revealed" ? "revealed" : ""}`}>
                <h1 className="hero-name">Kartik Karkera</h1>
                <p className="hero-kicker">Backend Engineering | Data Systems | AWS</p>
                <Age />
                <p className="hero-role">Software Engineer Building Scalable Backend Products</p>
                <p className="hero-summary">
                    Technical Officer (Backend) at AWS Club at UTD and MSCS candidate graduating in May 2026.
                </p>
                <div className="hero-actions">
                    <a
                        href="https://drive.google.com/file/d/1o7eaKsKGiQn15TxzYwixJGSW9sZ8o5bF/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn hero-btn-primary"
                    >
                        Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kartikkarkera/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn"
                    >
                        LinkedIn
                    </a>
                    <a href="#projects" className="hero-btn">
                        View Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Title;
