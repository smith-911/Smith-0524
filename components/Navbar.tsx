"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Certification", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeLink, setActiveLink] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center font-bold text-white glow-sm"
          >
            KB
          </motion.div>
          <span className="font-bold text-lg hidden sm:inline">Karl</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={`text-sm font-medium transition-colors ${
                activeLink === item.href
                  ? "text-primary"
                  : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {activeLink === item.href && (
                <motion.div
                  layoutId="underline"
                  className="h-1 bg-primary rounded-full mt-1"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-400" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden glass border-t border-white/10"
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveLink(item.href);
                setIsOpen(false);
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeLink === item.href
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
