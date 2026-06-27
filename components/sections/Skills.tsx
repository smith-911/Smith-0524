"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Développement",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "Git", level: 90 },
    ],
  },
  {
    category: "Informatique",
    skills: [
      { name: "Maintenance PC", level: 90 },
      { name: "Réseaux", level: 80 },
      { name: "Installation logiciels", level: 95 },
      { name: "Support utilisateur", level: 85 },
    ],
  },
  {
    category: "Systèmes électroniques",
    skills: [
      { name: "Caméras IP", level: 85 },
      { name: "Alarmes", level: 80 },
      { name: "Contrôle d'accès", level: 80 },
      { name: "Maintenance", level: 90 },
      { name: "Câblage", level: 85 },
    ],
  },
  {
    category: "Cybersécurité",
    skills: [
      { name: "Sécurité des systèmes", level: 75 },
      { name: "Analyse des risques", level: 80 },
      { name: "Bonnes pratiques", level: 85 },
      { name: "Intro cybersécurité", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-primary text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full glow-sm"
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
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
          <h2 className="text-4xl font-bold mb-4">Compétences</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          <p className="text-gray-400 mt-4 text-lg">Mes domaines de compétences et d'expertise</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary-light rounded-full" />
                </div>
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar key={skillIdx} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <h3 className="text-xl font-bold mb-6">Technologies & Outils</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Linux",
              "Windows Server",
              "Cisco Packet Tracer",
              "Wireshark",
            ].map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
