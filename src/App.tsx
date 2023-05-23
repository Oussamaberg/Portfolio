import Navbar from "./components/Navbar"
import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import VerticalSlide from "./components/VerticalSlide"
import Specializations from "./components/Specializations"
import Tech from "./components/Tech"
import Projects from "./components/Porojects"
import Testimonials from "./components/Testimonials"


function App() {


  return (
    <>
    <div className="bg-darkgray h-full w-screen  text-slate-300">
      <Navbar />
      <Section><Hero/></Section>
      <Section><About/></Section>
      <Section><VerticalSlide/></Section>
      <Section><Specializations /></Section>
      <Section><Tech/></Section>
      <Section><Projects /></Section>
      <Section><Testimonials/></Section>
      <Section></Section>
    </div>
    </>
  )
}

export default App
