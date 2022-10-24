import Typewriter from "../Typewriter/Typewriter";
import Age from "../Age/Age";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Typewriter />
      <div className="home">
        <Age />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Home;
