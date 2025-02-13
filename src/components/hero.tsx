import { Github, Twitter, Linkedin } from "lucide-react"; // Import icons

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-16 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Hi, I'm <span className="text-blue-600">Egesa Michael</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          A passionate software engineer dedicated to building scalable and innovative solutions.  
          Let’s work together to create something amazing!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 py-5">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md text-lg font-medium hover:bg-blue-700 hover:shadow-xl transition-all duration-300 glow-button"
          >
            Let's Talk
          </a>
          <a
            href="#"
            className="bg-white border border-gray-300 px-6 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 transition-all duration-300 glow-button"
          >
            Download CV
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/egesamichael" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="text-gray-800 hover:text-blue-600 transition-all duration-200" />
          </a>
          <a href="https://x.com/egesamicheal" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} className="text-gray-800 hover:text-blue-600 transition-all duration-200" />
          </a>
          <a href="https://linkedin.com/in/egmich92" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} className="text-gray-800 hover:text-blue-600 transition-all duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}