'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiGit, SiNodedotjs, SiExpress, 
  SiBootstrap, SiTailwindcss, SiLaravel, SiMongodb, 
  SiSupabase, SiFirebase 
} from 'react-icons/si';

// Technology data with icons
const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React Native', icon: <SiReact /> },
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
    <section className="py-16 bg-gradient-to-r from-white-100 to-white-50">
      <motion.div 
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Tools i like
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-blue-600 text-6xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 300 } }}
          >
            {tech.icon}
            <p className="text-lg mt-2 text-gray-700">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}