import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certification from "./components/Certification/Certification";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import IntroName from "./components/Title/IntroName";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useState, useEffect, useRef, useCallback } from "react";

const INTRO_PHASES = {
  TYPING: "typing",
  MOVING: "moving",
  REVEALED: "revealed",
};

// Single source of truth for the intro timing.
// The name types over typeMs, holds, then glides into the hero heading.
const INTRO_TIMING = {
  typeMs: 1400,
  holdMs: 450,
  moveMs: 800,
};

// Must equal the hero h1 text so the overlay lands exactly on it.
const INTRO_NAME = "{ KARTIK KARKERA }";

function App() {
  const [phase, setPhase] = useState(INTRO_PHASES.TYPING);
  const [introCompleted, setIntroCompleted] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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

    const { typeMs, holdMs, moveMs } = INTRO_TIMING;
    const toMoving = window.setTimeout(() => setPhase(INTRO_PHASES.MOVING), typeMs + holdMs);
    const toRevealed = window.setTimeout(
      () => {
        setPhase(INTRO_PHASES.REVEALED);
        setIntroCompleted(true);
      },
      typeMs + holdMs + moveMs,
    );

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
        style={{
          "--intro-move-ms": `${INTRO_TIMING.moveMs}ms`,
        }}
        aria-hidden="true"
      >
        <IntroName text={INTRO_NAME} durationMs={INTRO_TIMING.typeMs} />
      </div>

      <Navbar isReady={introCompleted} onOpenResume={() => setIsResumeOpen(true)} />
      <main className="site-main">
        <section id="home" className="app-section hero-section">
          <div className="section-content">
            <Title
              phase={phase}
              onNameReady={handleNameReady}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </div>
        </section>

        <section
          ref={timelineRef}
          id="timeline"
          className={`app-section reveal ${timelineVisible ? "is-visible" : ""}`}
        >
          <div className="section-content">
            <Timeline />
          </div>
        </section>

        <section
          ref={projectsRef}
          id="projects"
          className={`app-section reveal ${projectsVisible ? "is-visible" : ""}`}
        >
          <div className="section-content">
            <Projects />
          </div>
        </section>

        <section
          ref={certsRef}
          id="certifications"
          className={`app-section reveal ${certsVisible ? "is-visible" : ""}`}
        >
          <div className="section-content">
            <Certification />
          </div>
        </section>

        <section id="contact" className="app-section contact-section">
          <Footer />
        </section>
      </main>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
