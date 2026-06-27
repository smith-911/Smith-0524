"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Introduction à la cybersécurité",
    issuer: "Coursera / Cisco",
    date: "2024",
    icon: "🔐",
  },
];

export default function Certifications() {
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
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded" />
          <p className="text-gray-400 mt-4 text-lg">Mes certifications professionnelles</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 text-center"
            >
              {/* Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-4 inline-block"
              >
                {cert.icon}
              </motion.div>

              {/* Content */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Award size={18} />
                  {cert.issuer}
                </div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>

              {/* Action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/30 transition-all duration-300"
              >
                Voir le certificat
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
