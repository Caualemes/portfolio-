import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInOut } from "../animations/fade";
import Avatar from "../assets/perfil.png";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      animate={controls}
      variants={fadeInOut}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <div className="bg-white/5 rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-end text-white mb-8">
          um pouco sobre mim
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-500">
              <img src={Avatar} alt="Sua foto de perfil" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-white text-lg space-y-4 text-center md:text-justify">
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
              Fora do mundo do código, sou fã de boa música, automobilismo, ciências,
              videogames e, claro, algumas boas xícaras de café. Comunicativo e
              curioso, estou sempre em busca de aprender, evoluir e transformar ideias
              em soluções digitais de verdade.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
