"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">EM</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-x-6 p-4 lg:p-0">
            {["Home", "About Me", "Let's Talk"].map((item) => (
              <li key={item} className="w-full lg:w-auto">
                <a
                  href="#"
                  className="menu-item relative block text-base font-bold text-gray-800 hover:text-blue-700 bg-transparent hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200"
                >
                  {item}
                  {/* Border animation on hover */}
                  <span className="absolute inset-0 border-2 border-transparent rounded-md transition-all duration-300 group-hover:border-blue-600"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="bg-black px-5 py-2 rounded-md text-white shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-200">
                Download CV
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}