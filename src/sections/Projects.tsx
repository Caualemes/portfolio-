// src/sections/Projects.tsx
import React from 'react';
import ecoPowerImage from '../assets/eco-power-screenshot.png'; // Substitua pelo caminho da sua imagem

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center min-h-screen p-8 text-white">
      <h2 className="text-4xl font-bold mb-12">Meus Projetos</h2>
      
      {/* Container do Projeto */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Imagem do Projeto */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img 
            src={ecoPowerImage}
            alt="Screenshot do projeto EcoPower"
            className="rounded-lg shadow-md"
          />
        </div>
        
        {/* Conteúdo do Projeto */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-blue-400 mb-2">EcoPower</h3>
          <p className="text-gray-300 mb-4">
            Site institucional desenvolvido para a filial de Penápolis da maior empresa de energia solar do Brasil. O projeto destaca os serviços oferecidos, conta com design responsivo e formulário de contato, trazendo uma experiência moderna e intuitiva para os clientes.
          </p>
          
          {/* Tags de Tecnologia */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">HTML</span>
            <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">CSS</span>
            <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">JavaScript</span>
          </div>

          {/* Botões ou links para o projeto */}
          <a 
            href="https://seulinkdoprojeto.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Ver Projeto
          </a>
        </div>
      </div>
      
      <div className="text-xl text-gray-400 mt-12">
        Em breve...
      </div>
    </section>
  );
};

export default Projects;