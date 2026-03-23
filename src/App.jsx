import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certification from "./components/Certification/Certification";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useState } from "react";

function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: certsRef, isVisible: certsVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  return (
    <div className={`app-wrapper ${introCompleted ? 'app-ready' : 'app-loading'}`}>
      <Navbar isReady={introCompleted} />
      <main className={`site-main ${introCompleted ? 'app-ready' : ''}`}>
        <section ref={heroRef} id="home" className={`app-section hero-section reveal ${heroVisible ? "is-visible" : ""}`}>
          <div className="section-content">
            <Title onIntroComplete={() => setIntroCompleted(true)} />
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
