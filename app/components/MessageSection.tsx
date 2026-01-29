'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const message = [
  "Dear Beautiful Soul,",
  "",
  "Another year around the sun, and what a radiant journey it's been watching you grow, laugh, dream, and shine.",
  "",
  "You have this incredible way of making everyone around you feel seen, heard, and loved. Your kindness is like sunshine – it brightens every room you enter and warms every heart you touch.",
  "",
  "I'm so grateful for your friendship, your laughter that's absolutely contagious, and the way you see magic in the ordinary moments. You remind me that life is meant to be celebrated, not just lived.",
  "",
  "As you step into this new year of life, I hope it brings you:",
  "• Adventures that make your heart race with excitement",
  "• Quiet moments that fill your soul with peace",
  "• Dreams that unfold exactly as they're meant to",
  "• Love that multiplies and returns to you tenfold",
  "",
  "You deserve all the happiness, all the success, and all the beautiful surprises this world has to offer.",
  "",
  "Happy Birthday, my wonderful friend! 🎉💖",
  "",
  "With all my love and best wishes,",
  "Your Friend"
];

export function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setVisibleLines(prev => {
          if (prev < message.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 200);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="glass-card p-8 md:p-12 relative"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 text-2xl opacity-50">💌</div>
          <div className="absolute top-4 right-4 text-2xl opacity-50">✨</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-50">🌸</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-50">💖</div>

          <div className="space-y-4">
            {message.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  index < visibleLines 
                    ? { opacity: 1, x: 0 } 
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`
                  ${line === "Dear Beautiful Soul," || line === "Happy Birthday, my wonderful friend! 🎉💖" 
                    ? "text-2xl font-serif text-gradient font-bold" 
                    : line.startsWith("•") 
                    ? "text-purple-700 ml-4" 
                    : line === "With all my love and best wishes," || line === "Your Friend"
                    ? "text-purple-800 italic text-right"
                    : "text-purple-800"
                  }
                  ${line === "" ? "h-4" : ""}
                `}
              >
                {line === "" ? <div className="h-4" /> : line}
              </motion.div>
            ))}
          </div>

          {/* Animated signature underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={visibleLines >= message.length ? { width: "200px" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 ml-auto mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}