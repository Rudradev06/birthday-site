'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { BirthdayCake } from './3D/BirthdayCake';
import { Confetti } from './Confetti';

export function FinalSurprise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [wishMade, setWishMade] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const makeWish = () => {
    setWishMade(true);
    setShowConfetti(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden flex items-center justify-center">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {!wishMade ? (
            <>
              <motion.h2 
                className="text-4xl md:text-6xl font-serif text-gradient mb-8"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Make a Wish ✨
              </motion.h2>
              
              <motion.p 
                className="text-xl text-purple-700 mb-12"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                Close your eyes, make a wish, and click the candle
              </motion.p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-8">
                Wish Granted! 🎉
              </h2>
              <p className="text-xl text-purple-700 mb-8">
                May this year give you everything you deserve — and more.
              </p>
            </motion.div>
          )}

          {/* 3D Cake */}
          <motion.div 
            className="h-96 w-full mb-12 cursor-pointer"
            initial={{ opacity: 0, rotateY: -30 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -30 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            onClick={!wishMade ? makeWish : undefined}
            whileHover={!wishMade ? { scale: 1.05 } : {}}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <pointLight position={[-10, -10, -10]} intensity={0.3} />
              <BirthdayCake wishMade={wishMade} />
            </Canvas>
          </motion.div>

          {wishMade && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 max-w-2xl mx-auto">
                <p className="text-lg text-purple-800 leading-relaxed">
                  "This site was made just for you — and only exists today 💖"
                </p>
                <p className="text-sm text-purple-600 mt-4 italic">
                  A little piece of magic, created with love, just for your special day.
                </p>
              </div>

              {/* Final floating elements */}
              <div className="relative">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 200}px`,
                    }}
                    animate={{
                      y: [0, -50, -100],
                      opacity: [1, 0.5, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    {['🎈', '🎉', '✨', '💖', '🌟', '🎊', '💫', '🦋', '🌸', '💕', '🎁', '🌈'][i]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}