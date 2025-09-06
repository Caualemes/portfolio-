// src/App.tsx
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies"; // Adicione a seção Technologies

function App() {
  return (
    <div className="font-kumbh font-light text-gray-900 bg-gradient-to-r from-gray-700 via-gray-850 to-gray-950 ">
      <Hero />
      <Technologies /> 
      <Projects />
      <About />
      
    </div>
  );
}

export default App;