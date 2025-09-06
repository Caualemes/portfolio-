import { motion } from "framer-motion";

const FadeSection = () => {
  return (
    <motion.div
      className="p-8 bg-white/5 rounded-2xl text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-bold">Seção com Fade</h2>
      <p>Esse texto aparece e some conforme o scroll.</p>
    </motion.div>
  );
};

export default FadeSection;
