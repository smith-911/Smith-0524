"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Clock } from "lucide-react";

interface TimeZoneData {
  timezone: string;
  label: string;
  offset: number;
  currentTime: string;
  date: string;
}

const TIMEZONES = [
  { timezone: "UTC", label: "UTC (Temps universel)", offset: 0 },
  { timezone: "America/New_York", label: "🗽 New York", offset: -5 },
  { timezone: "Europe/London", label: "🇬🇧 Londres", offset: 0 },
  { timezone: "Europe/Paris", label: "🇫🇷 Paris", offset: 1 },
  { timezone: "Africa/Johannesburg", label: "🇿🇦 Johannesburg", offset: 2 },
  { timezone: "Africa/Douala", label: "🇨🇲 Douala (Cameroun)", offset: 1 },
  { timezone: "Asia/Tokyo", label: "🗾 Tokyo", offset: 9 },
  { timezone: "Asia/Dubai", label: "🇦🇪 Dubaï", offset: 4 },
  { timezone: "Asia/Shanghai", label: "🇨🇳 Shanghai", offset: 8 },
  { timezone: "Australia/Sydney", label: "🇦🇺 Sydney", offset: 11 },
];

export default function WorldClock() {
  const [times, setTimes] = useState<TimeZoneData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const updated = TIMEZONES.map((tz) => {
        const formatter = new Intl.DateTimeFormat("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: tz.timezone,
          hour12: false,
        });

        const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: tz.timezone,
        });

        return {
          ...tz,
          currentTime: formatter.format(now),
          date: dateFormatter.format(now),
        };
      });

      setTimes(updated);
      setLoading(false);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <Clock size={40} className="text-primary" />
          </div>
          <p className="mt-4 text-gray-400">Chargement des fuseaux horaires...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Horloge Mondiale</h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light rounded mx-auto" />
          <p className="text-gray-400 mt-4 text-lg">
            L'heure actuelle dans différents fuseaux horaires
          </p>
        </motion.div>

        {/* Clock Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {times.map((tz, index) => (
            <motion.div
              key={tz.timezone}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass h-full p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Label */}
                <h3 className="text-sm font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                  {tz.label}
                </h3>

                {/* Digital Time Display */}
                <div className="mb-4 font-mono text-center">
                  <motion.div
                    key={tz.currentTime}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-3xl font-bold text-primary-light glow-sm tracking-wider"
                  >
                    {tz.currentTime}
                  </motion.div>

                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-3" />

                  {/* Date */}
                  <p className="text-xs text-gray-400 capitalize">{tz.date}</p>
                </div>

                {/* Offset Badge */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                    UTC{tz.offset > 0 ? "+" : ""}{tz.offset}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-lg font-bold text-primary mb-3">ℹ️ À Propos de cette horloge</h3>
          <p className="text-gray-400 leading-relaxed">
            Cette horloge affiche l'heure actuelle dans différents fuseaux horaires à travers le monde. 
            Elle se met à jour en temps réel chaque seconde et utilise les normes internationales pour les décalages horaires. 
            Douala, au Cameroun, se trouve en UTC+1 (heure d'Afrique centrale).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
