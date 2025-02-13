'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiGit, SiNodedotjs, SiExpress, 
  SiBootstrap, SiTailwindcss, SiLaravel, SiMongodb, 
  SiSupabase, SiFirebase, SiExpo 
} from 'react-icons/si';

// Technology data with icons
const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React Native', icon: <SiReact /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Expo', icon: <SiExpo /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Laravel', icon: <SiLaravel /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'Firebase', icon: <SiFirebase /> },

];

export default function TechnologiesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-white to-white dark:from-black dark:to-black transition-all duration-300">
      <motion.div 
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
          TECH I LOVE ❤️
        </h3>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-blue-600 dark:text-blue-400 text-6xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg">
              {tech.icon}
            </div>
            <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}