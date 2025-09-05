// src/sections/Technologies.tsx
import React from 'react';
import figmaLogo from '../assets/figma.svg';
import nestLogo from '../assets/nest.svg';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.svg';
import typescriptLogo from '../assets/typescript.svg';
// Certifique-se de que os nomes dos arquivos importados correspondem exatamente aos da sua pasta assets

const Technologies = () => {
  return (
    <section id="technologies" className="flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <h2 className="text-4xl font-bold mb-12">Tecnologias</h2>
      
      <div className="flex flex-wrap justify-center gap-12 max-w-3xl">
        <img src={nestLogo} alt="GitHub" className="w-16 h-16 sm:w-24 sm:h-24 opacity-50 transition-transform hover:scale-110 hover:opacity-100" />
        <img src={reactLogo} alt="React" className="w-16 h-16 sm:w-24 sm:h-24 opacity-50 transition-transform hover:scale-110 hover:opacity-100" />
        <img src={typescriptLogo} alt="TypeScript" className="w-16 h-16 sm:w-24 sm:h-24 opacity-50 transition-transform hover:scale-110 hover:opacity-100" />
        <img src={tailwindLogo} alt="Tailwind CSS" className="w-16 h-16 sm:w-24 sm:h-24 opacity-50 transition-transform hover:scale-110 hover:opacity-100" />
        <img src={figmaLogo} alt="Figma" className="w-16 h-16 sm:w-24 sm:h-24 opacity-50 transition-transform hover:scale-110 hover:opacity-100" />
      </div>
    </section>
  );
};

export default Technologies;