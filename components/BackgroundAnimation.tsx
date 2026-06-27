"use client";

import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 20,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark" />
      
      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/5 rounded-full mix-blend-screen filter blur-3xl opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl opacity-40" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-primary/30 rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.duration * 0.1}s`,
            }}
          />
        ))}
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2563EB" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
