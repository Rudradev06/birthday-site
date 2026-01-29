'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for background music
    // Note: In a real implementation, you'd add an actual audio file
    const audio = new Audio();
    // audio.src = '/birthday-music.mp3'; // Add your music file here
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Simulate audio loading
    setTimeout(() => setIsLoaded(true), 1000);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current || !isLoaded) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 glass-card p-3 rounded-full hover:glow-effect transition-all duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={!isLoaded}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="pause"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-purple-600 rounded"></div>
              <div className="w-1 h-4 bg-purple-600 rounded"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="play"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading indicator */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-300 border-t-purple-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Music notes animation when playing */}
      <AnimatePresence>
        {isPlaying && (
          <div className="absolute -top-2 -right-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-purple-500 text-xs"
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-10, -20, -30],
                  x: [0, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                ♪
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}