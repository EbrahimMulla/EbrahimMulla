import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { EDUCATION } from "./constants";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-center"></div>
      <div className="relative z-10">
        <Navbar />
        
        <div className="py-8">
          <Hero />
        </div>

        <div className="py-8">
          <Projects />
        </div>
        
        <div className="py-8">
          <Skills />
        </div>
        <div className="py-8">
          <Experience />
        </div>

        <div className="py-8">
          <Education />
        </div>

        
        <div className="py-8">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default App;
