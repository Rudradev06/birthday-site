'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { FloatingElements } from './3D/FloatingElements';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('memory-gallery');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/ghibli-image.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-purple-900/30 to-pink-900/40"></div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <FloatingElements mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif text-gradient mb-6 drop-shadow-lg font-bold tracking-wide"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Happy Birthday,
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-gradient mb-8 drop-shadow-lg font-semibold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Lipsa JJ! 🎉 
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 font-light drop-shadow-md tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            This little corner of the internet is just for you.
          </motion.p>
          
          <motion.button
            onClick={scrollToNext}
            className="glass-card px-8 py-4 text-lg font-medium text-white hover:glow-effect transition-all duration-300 transform hover:scale-105 border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Your Surprise 🎁
          </motion.button>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 6}px)`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeInOut",
            }}
          >
            {['✨', '💖', '🎈', '🌸', '💫', '🦋', '🎉', '🌟'][i]}
          </motion.div>
        ))}
      </div>
    </section>
  );
}