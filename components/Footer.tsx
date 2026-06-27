"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dollarbrayan8@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-secondary/50 border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center font-bold text-white glow-sm">
              KB
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Karl Bryan Tchoupe Pembe. Tous droits réservés.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Liens rapides</h3>
            <div className="flex flex-col gap-2">
              {["À propos", "Projets", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Réseaux</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors glow-sm"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">Développé avec React, Next.js et Tailwind CSS</p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors glow-sm"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
