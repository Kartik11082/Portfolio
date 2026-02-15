import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certification from "./components/Certification/Certification";

function App() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <section id="home" className="app-section hero-section">
          <div className="section-content">
            <Title />
          </div>
        </section>

        <section id="certifications" className="app-section">
          <div className="section-content">
            <Certification />
          </div>
        </section>

        <section id="projects" className="app-section">
          <div className="section-content">
            <Projects />
          </div>
        </section>

        <section id="timeline" className="app-section">
          <div className="section-content">
            <Timeline />
          </div>
        </section>

        <section id="contact" className="app-section contact-section">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
