// src/sections/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gray-900 text-white">
      
      {/* Container do Avatar */}
      <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-500 mb-8">
        {/*
          Aqui você vai colocar sua imagem.
          Certifique-se de que a imagem está na pasta `src/assets` ou em outra pasta que você criou.
          Exemplo: <img src="/caminho/para/sua-imagem.png" alt="Seu Avatar" className="w-full h-full object-cover" />
        */}
        <img
          src="/src/assets/avatar.png" // Exemplo: ajuste o caminho para sua imagem
          alt="Avatar de Cauã Lemes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título e Subtítulo */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
        Cauã Lemes
      </h1>
      <p className="text-xl sm:text-2xl text-gray-400 mb-8">
        Web Developer
      </p>

      {/* Links de Redes Sociais */}
      <div className="flex space-x-6">
        {/* Ícone do LinkedIn */}
        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Ícone SVG do LinkedIn */}
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.111-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* Ícone do Instagram */}
        <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Ícone SVG do Instagram */}
            <path d="M12 2.163c3.204 0 3.584.013 4.85.068 1.487.086 2.052.33 2.585.545a4.91 4.91 0 0 1 1.832 1.2A4.91 4.91 0 0 1 21.374 4.89c.216.533.459 1.098.545 2.585.055 1.266.068 1.646.068 4.85s-.013 3.584-.068 4.85c-.086 1.487-.33 2.052-.545 2.585a4.91 4.91 0 0 1-1.2 1.832c-.533.216-1.098.459-2.585.545-1.266.055-1.646.068-4.85.068s-3.584-.013-4.85-.068c-1.487-.086-2.052-.33-2.585-.545a4.91 4.91 0 0 1-1.832-1.2c-.216-.533-.459-1.098-.545-2.585-.055-1.266-.068-1.646-.068-4.85s.013-3.584.068-4.85c.086-1.487.33-2.052.545-2.585a4.91 4.91 0 0 1 1.2-1.832c.533-.216 1.098-.459 2.585-.545 1.266-.055 1.646-.068 4.85-.068zm0-2.163c-3.259 0-3.667.014-4.947.07c-1.603.099-2.569.349-3.232.617a6.91 6.91 0 0 0-2.56 1.638c-.628.59-.974 1.34-1.127 2.19-.153.85-.296 1.68-.45 3.32-.154 1.64-.282 2.68-.282 5.08s.128 3.44.282 5.08c.154 1.64.297 2.47.45 3.32.153.85.499 1.6 1.127 2.19a6.91 6.91 0 0 0 2.56 1.638c.663.268 1.629.518 3.232.617 1.28.056 1.688.07 4.947.07s3.667-.014 4.947-.07c1.603-.099 2.569-.349 3.232-.617a6.91 6.91 0 0 0 2.56-1.638c.628-.59.974-1.34 1.127-2.19.153-.85.296-1.68.45-3.32.154-1.64.282-2.68.282-5.08s-.128-3.44-.282-5.08c-.154-1.64-.297-2.47-.45-3.32-.153-.85-.499-1.6-1.127-2.19a6.91 6.91 0 0 0-2.56-1.638c-.663-.268-1.629-.518-3.232-.617-1.28-.056-1.688-.07-4.947-.07zM12 9.07c-1.616 0-2.93 1.314-2.93 2.93s1.314 2.93 2.93 2.93 2.93-1.314 2.93-2.93-1.314-2.93-2.93-2.93zm0 4.88c-1.077 0-1.95-.873-1.95-1.95s.873-1.95 1.95-1.95 1.95.873 1.95 1.95-.873 1.95-1.95 1.95zM18.15 6.55c-.482 0-.872.39-.872.872s.39.872.872.872.872-.39.872-.872-.39-.872-.872-.872z" />
          </svg>
        </a>

        {/* Ícone do GitHub */}
        <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Ícone SVG do GitHub */}
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.886 8.207 11.414.597.108.79-.258.79-.577 0-.285-.011-1.042-.017-2.043-3.335.724-4.04-1.61-4.04-1.61-.546-1.387-1.332-1.758-1.332-1.758-1.088-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.777.419-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.312.469-2.383 1.236-3.221-.124-.303-.535-1.52-.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.004-.403 1.021.004 2.047.137 3.004.403 2.292-1.553 3.3-1.23 3.3-1.23.418 1.656.007 2.873-.118 3.176.77.838 1.233 1.909 1.233 3.221 0 4.609-2.806 5.624-5.474 5.923.431.373.823 1.102.823 2.222 0 1.607-.015 2.899-.015 3.284 0 .319.192.694.793.575C20.564 21.897 24 17.313 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;