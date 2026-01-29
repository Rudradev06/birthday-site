'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const memories = [
  {
    id: 1,
    image: '/placeholder-memory-1.jpg',
    caption: 'That time we laughed until our stomachs hurt',
    alt: 'Happy memory together'
  },
  {
    id: 2,
    image: '/placeholder-memory-2.jpg',
    caption: 'Adventures and spontaneous road trips',
    alt: 'Adventure memory'
  },
  {
    id: 3,
    image: '/placeholder-memory-3.jpg',
    caption: 'Celebrating your achievements',
    alt: 'Celebration memory'
  },
  {
    id: 4,
    image: '/placeholder-memory-4.jpg',
    caption: 'Quiet moments and deep conversations',
    alt: 'Peaceful memory'
  },
  {
    id: 5,
    image: '/placeholder-memory-5.jpg',
    caption: 'Being absolutely ridiculous together',
    alt: 'Silly memory'
  },
  {
    id: 6,
    image: '/placeholder-memory-6.jpg',
    caption: 'Supporting each other through everything',
    alt: 'Support memory'
  },
];

export function MemoryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="memory-gallery" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gradient mb-6">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Every moment with you has been a gift. Here are some of my favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                {/* Placeholder for actual images */}
                <div className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {['📸', '🌟', '💕', '🎉', '😄', '🤗'][index]}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <motion.p 
                className="text-purple-800 text-center font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {memory.caption}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-purple-600 italic">
            "The best memories are made with the best people" ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}