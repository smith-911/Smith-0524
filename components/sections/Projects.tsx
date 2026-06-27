"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Plateforme de gestion d'événements",
    description: "Application web complète pour gérer, planifier et suivre des événements avec interface utilisateur intuitive.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "🎉",
    link: "#",
    github: "#",
  },
  {
    title: "Installation complète de vidéosurveillance",
    description: "Projet de déploiement complet de système de surveillance avec caméras IP, enregistrement et monitoring.",
    technologies: ["Caméras IP", "NVR", "Réseaux", "Sécurité"],
    image: "📹",
    link: "#",
    github: "#",
  },
  {
    title: "Site web vitrine",
    description: "Site web moderne et responsive pour présenter une entreprise avec optimisation SEO et performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    image: "🌐",
    link: "#",
    github: "#",
  },
  {
    title: "Projet cybersécurité",
    description: "Analyse de vulnérabilités et mise en place de bonnes pratiques de sécurité informatique.",
    technologies: ["Sécurité", "Analyse des risques", "Pentesting", "Linux"],
    image: "🔒",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projets</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          <p className="text-gray-400 mt-4 text-lg">Découvrez quelques-uns de mes meilleurs travaux</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Card */}
              <div className="glass h-full p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Image/Icon */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center mb-6 text-7xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {project.image}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary text-center justify-center group"
                  >
                    <ExternalLink size={18} />
                    Voir le projet
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-secondary text-center justify-center"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
