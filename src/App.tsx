// src/App.tsx
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies"; // Adicione a seção Technologies

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      <Hero />
      <Technologies /> 
      <Projects />
      <About />
      
    </div>
  );
}

export default App;