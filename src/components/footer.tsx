import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul>
              <li>Email: <a href="mailto:egesa@praisewebsolutions.com" className="text-blue-400 hover:text-blue-300">hello@egesamichael.dev</a></li>
              <li>Phone: <a href="tel:+256702485697" className="text-blue-400 hover:text-blue-300">+256 702 485 697</a></li>
              <li>Address: Kampala, Uganda</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://github.com/egesamichael" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/egmich92/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://x.com/egesamicheal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/about" className="text-blue-400 hover:text-blue-300">About Me</a>
              </li>
              <li>
                <a href="Egesa_CV.pdf" className="text-blue-400 hover:text-blue-300">CV</a>
              </li>
              <li>
                <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to My Newsletter</h4>
            <form action="#" method="POST" className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;