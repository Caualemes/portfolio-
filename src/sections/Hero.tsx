// src/sections/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center p-8 text-white"
    >
      {/* Container do Avatar */}
      <div className="">
        <img
          src="/src/assets/avatar.png"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título e Subtítulo */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
        Cauã Lemes
      </h1>
      <p className="text-xl sm:text-2xl text-gray-400 mb-8">Web Developer</p>

      {/* Links de Redes Sociais */}
      <div className="flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/caualemes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-80 transition-transform hover:scale-110"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/caua.cristallemes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/instagram.svg"
            alt="Instagram"
            className="w-8 h-8 hover:opacity-80 transition-transform hover:scale-110"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/caualemes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/github.svg"
            alt="GitHub"
            className="w-8 h-8 hover:opacity-80 transition-transform hover:scale-110"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
