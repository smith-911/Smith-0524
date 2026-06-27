"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Kebelect",
    position: "Stage académique",
    period: "2023 - 2024",
    tasks: [
      "Maintenance électronique",
      "Installation des systèmes",
      "Support technique",
    ],
  },
  {
    company: "Afrilux S.A",
    position: "Technicien Informatique",
    period: "2022 - 2023",
    tasks: [
      "Support informatique",
      "Maintenance PC et serveurs",
      "Installation de caméras",
      "Configuration de systèmes de sécurité",
    ],
  },
  {
    company: "LK Renov & Deco",
    position: "Technicien Électronique",
    period: "2021 - 2022",
    tasks: [
      "Installation de systèmes électroniques",
      "Maintenance des équipements",
      "Support client",
    ],
  },
];

export default function Experience() {
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
          <h2 className="text-4xl font-bold mb-4">Expériences</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          <p className="text-gray-400 mt-4 text-lg">Mon parcours professionnel</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-light to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:ml-0" : "md:ml-auto"}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 w-6 h-6 bg-primary rounded-full border-4 border-dark transition-all duration-300 group-hover:scale-125" 
                     style={{
                       left: index % 2 === 0 ? "auto" : "auto",
                       right: index % 2 === 0 ? "-60px" : "auto",
                       left: index % 2 === 0 ? "auto" : "-60px",
                     }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Company & Position */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.position}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Tasks */}
                  <ul className="space-y-2">
                    {exp.tasks.map((task, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
