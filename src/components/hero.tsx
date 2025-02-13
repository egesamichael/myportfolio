"use client";

import { Github, Twitter, Linkedin } from "lucide-react"; // Import icons

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-16 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Egesa Michael</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A passionate software engineer dedicated to building scalable and innovative solutions.  
          Let’s work together to create something amazing!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 py-5">
        <a
        href="#contact"
         className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-md shadow-md text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-400 ring-2 ring-blue-400 hover:ring-4 transition-all duration-300 glow-button"
        >
         Let's Talk
        </a>
        <a
        href="#"
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-md text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 glow-button"
        >
         Download CV
        </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/egesamichael" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200" />
          </a>
          <a href="https://x.com/egesamicheal" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200" />
          </a>
          <a href="https://linkedin.com/in/egmich92" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}