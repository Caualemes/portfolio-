// src/App.tsx
import React, { useState } from 'react';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import SidebarNavigation from './components/SidebarNavigation';
import Logo from './assets/logo.png'; 

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="font-kumbh font-light text-gray-900 bg-gradient-to-r from-gray-700 via-gray-850 to-gray-950">
      <a href="#hero">
        {/* Adicionei as classes hidden e md:block aqui */}
        <div className="fixed top-0 left-0 p-8 z-50 hidden md:block">
          <img src={Logo} alt="Logo CL" className="w-20 h-20" />
        </div>
      </a>
      
      <SidebarNavigation activeSection={activeSection} />

      <Hero onInView={(id) => setActiveSection(id)} />
      <Technologies onInView={(id) => setActiveSection(id)} /> 
      <Projects onInView={(id) => setActiveSection(id)} />
      <About onInView={(id) => setActiveSection(id)} />
    </div>
  );
}

export default App;