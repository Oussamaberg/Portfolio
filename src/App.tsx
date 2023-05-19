import Navbar from "./components/Navbar"
import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import VerticalSlide from "./components/VerticalSlide"


function App() {


  return (
    <>
    <div className="bg-darkgray h-full w-screen  text-slate-300">
      <Navbar />
      <Section><Hero/></Section>
      <Section><About/></Section>
      <Section><VerticalSlide/></Section>
      <Section><div className="h-96"></div></Section>
      <Section></Section>
    </div>
    </>
  )
}

export default App
