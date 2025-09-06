// src/sections/About.tsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInOut } from "../animations/fade";
import Avatar from "../assets/perfil.png";

interface AboutProps {
  onInView: (id: string) => void;
}

const About: React.FC<AboutProps> = ({ onInView }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      onInView("about");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, onInView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      animate={controls}
      variants={fadeInOut}
      className="flex flex-col min-h-screen px-4 py-16 md:px-8 md:py-8"
    >
      <div className="bg-white/5 rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-5xl mx-auto mt-8 md:mt-20">
        <h2 className="font-semibold text-center md:text-end text-white mb-4 md:mb-8 text-2xl md:text-4xl">
          um pouco sobre mim
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="flex-shrink-0 order-last md:order-none">
            <div className="w-48 md:w-68 md:h-90 rounded-lg overflow-hidden">
              <img src={Avatar} alt="Foto de Perfil" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="text-white text-lg space-y-4 text-justify order-first md:order-none">
            <p>
              Natural do noroeste paulista, desde pequeno sempre fui um entusiasta da
              tecnologia — do tipo que adorava desmontar as coisas só pra entender
              como funcionavam. Com o tempo, essa curiosidade virou paixão e hoje é
              a minha escolha profissional.
            </p>
            <p>
              Sou aluno de Sistemas para Internet no Instituto Federal de São Paulo,
              focado em desenvolvimento web. Tenho maior afinidade com o front-end e design,
              onde posso unir criatividade e usabilidade, mas também flerto com o
              backend e bancos de dados para ter uma visão mais completa dos projetos.
            </p>
            <p>
              Fora do mundo do código, sou fã de uma boa música, automobilismo, ciências,
              videogames e, claro, algumas boas xícaras de café. Comunicativo e
              curioso, estou sempre em busca de aprender, evoluir e transformar ideias
              em soluções digitais de verdade.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mt-4 md:mt-8 text-center text-xs text-gray-400 mx-auto px-4">
        <p>© 2025 Cauã Cristal Lemes — Todos os direitos reservados.</p>
        <p>Powered by Café, Rock n' Roll and ChatGPT.</p>
      </div>
    </motion.section>
  );
};

export default About;
