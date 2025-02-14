"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/themebutton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">EM</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-gray-900 shadow-md dark:shadow-none lg:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-x-6 p-4 lg:p-0">
            {["Home", "About Me", "Let's Talk", "Blog"].map((item) => (
              <li key={item} className="w-full lg:w-auto">
                <a
                  href="#"
                  className="menu-item relative block text-base font-bold text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-black dark:bg-blue-600 px-5 py-2 rounded-md text-white shadow-md hover:bg-gray-700 dark:hover:bg-blue-500 hover:shadow-lg transition duration-200">
                Download CV
              </button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}