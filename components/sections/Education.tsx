"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const educationItems = [
  {
    year: "2024",
    degree: "BT Maintenance et Installation des Systèmes Électroniques",
    school: "Lycée Technique de Douala Koumassi",
    description: "Formation complète en maintenance et installation de systèmes électroniques.",
  },
  {
    year: "2022 - Aujourd'hui",
    degree: "Génie Informatique (2ème année)",
    school: "IUT de Douala",
    description: "Formation en génie informatique avec spécialisation en développement et systèmes.",
  },
];

export default function Education() {
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
          <h2 className="text-4xl font-bold mb-4">Formation</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          <p className="text-gray-400 mt-4 text-lg">Mon parcours académique</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-dark" />

              {/* Card */}
              <motion.div
                whileHover={{ x: 10 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 ml-8"
              >
                {/* Year */}
                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                  <Calendar size={18} />
                  {item.year}
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>

                {/* School */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin size={18} />
                  {item.school}
                </div>

                {/* Description */}
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
