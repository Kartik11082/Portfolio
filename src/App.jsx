import "./App.css";
// import Title from components folder
import Age from "./components/Age/Age";
import Title from "./components/Title/Title";
// import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certification from "./components/Certification/Certification";

function App() {
  return (
    <>
      <Title />
      <Age />
      <Footer />
      <Certification />
      <Projects />
      <Timeline />
    </>
  );
}

export default App;
