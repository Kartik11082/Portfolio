import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certification from "./components/Certification/Certification";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useState, useEffect, useRef, useCallback } from "react";

const INTRO_PHASES = {
  TYPING: "typing",
  MOVING: "moving",
  REVEALED: "revealed"
};

function App() {
  const [phase, setPhase] = useState(INTRO_PHASES.TYPING);
  const [introCompleted, setIntroCompleted] = useState(false);
  const introRef = useRef(null);
  const { ref: certsRef, isVisible: certsVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  const handleNameReady = useCallback((rect, fontSize) => {
    if (introRef.current) {
      introRef.current.style.top = `${rect.top + rect.height / 2}px`;
      introRef.current.style.left = `${rect.left + rect.width / 2}px`;
      const introText = introRef.current.querySelector(".hero-intro-text");
      if (introText) introText.style.fontSize = fontSize;
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setPhase(INTRO_PHASES.REVEALED);
      setIntroCompleted(true);
      return undefined;
    }

    const toMoving = window.setTimeout(() => setPhase(INTRO_PHASES.MOVING), 1700);
    const toRevealed = window.setTimeout(() => {
      setPhase(INTRO_PHASES.REVEALED);
      setIntroCompleted(true);
    }, 2550);

    return () => {
      window.clearTimeout(toMoving);
      window.clearTimeout(toRevealed);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div
        ref={introRef}
        className={`hero-intro ${phase !== INTRO_PHASES.TYPING ? "is-moving" : ""} ${phase === INTRO_PHASES.REVEALED ? "is-hidden" : ""}`}
        aria-hidden="true"
      >
        <p className="hero-intro-text">{"{ KARTIK KARKERA }"}</p>
      </div>

      <Navbar isReady={introCompleted} />
      <main className="site-main">
        <section id="home" className="app-section hero-section">
          <div className="section-content">
            <Title phase={phase} onNameReady={handleNameReady} />
          </div>
        </section>

        <section ref={certsRef} id="certifications" className={`app-section reveal ${certsVisible ? "is-visible" : ""}`}>
          <div className="section-content">
            <Certification />
          </div>
        </section>

        <section ref={projectsRef} id="projects" className={`app-section reveal ${projectsVisible ? "is-visible" : ""}`}>
          <div className="section-content">
            <Projects />
          </div>
        </section>

        <section ref={timelineRef} id="timeline" className={`app-section reveal ${timelineVisible ? "is-visible" : ""}`}>
          <div className="section-content">
            <Timeline />
          </div>
        </section>

        <section id="contact" className="app-section contact-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
