import './App.css'
// import Title from components folder
import Title from "./components/Title/Title"
import Age from "./components/Age/Age"
// import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card"


function App() {

  return (
    <>
      <Title />
      <Age />
      <Footer />
      {/* <Projects /> */}
      <Card />
    </>
  )
}

export default App
