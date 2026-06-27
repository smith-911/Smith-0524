"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl"
      />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-light rounded" />
            <span className="text-primary font-semibold">Bienvenue dans mon univers</span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Bonjour, je suis
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Karl Bryan
              </span>
              <span className="block bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Tchoupe Pembe
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl text-gray-300 font-semibold">
            Étudiant en Génie Informatique | Technicien en Systèmes Électroniques | Passionné par la Cybersécurité
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
            Je conçois, installe et maintiens des solutions technologiques fiables, allant des systèmes électroniques aux applications web modernes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="#projects" className="btn-primary group">
              Voir mes projets
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Me contacter
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: MessageCircle, href: "https://wa.me/237692860695", label: "WhatsApp" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors group glow-sm"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 60px rgba(37, 99, 235, 0.3)",
                "0 0 100px rgba(37, 99, 235, 0.5)",
                "0 0 60px rgba(37, 99, 235, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
          />

          {/* Profile Image Container */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/50 glass"
          >
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-300">Photo de profil</p>
              </div>
            </div>

            {/* Border animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary to-primary-light bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-20 h-20 border border-primary/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-32 h-32 border border-primary-light/20 rounded-full"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Découvrir plus</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
