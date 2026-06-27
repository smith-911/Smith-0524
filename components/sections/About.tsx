"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 relative">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          </motion.div>

          {/* Content Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Je suis étudiant en deuxième année de Génie Informatique à l'IUT de Douala et titulaire d'un BT en Maintenance et Installation des Systèmes Électroniques.
              </p>
              <p>
                Mon parcours m'a permis d'acquérir des compétences en maintenance électronique, installations de caméras et systèmes de sécurité, informatique, développement web et cybersécurité.
              </p>
              <p>
                Je suis passionné par les nouvelles technologies et j'aime résoudre des problèmes concrets grâce à l'innovation. Mon objectif est de créer des solutions technologiques qui facilitent la vie quotidienne et renforcent la sécurité des systèmes.
              </p>
            </div>

            {/* CV Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-8 btn-primary group"
            >
              <Download size={20} />
              Télécharger mon CV
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "Années d'exp.", value: "2+" },
              { label: "Projets", value: "10+" },
              { label: "Technologies", value: "15+" },
              { label: "Certifications", value: "3" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl text-center border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
