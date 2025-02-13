import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul>
              <li>Email: <a href="mailto:info@praisewebsolutions.com" className="text-blue-400 hover:text-blue-300">info@praisewebsolutions.com</a></li>
              <li>Phone: <a href="tel:+256701234567" className="text-blue-400 hover:text-blue-300">+256 701 234 567</a></li>
              <li>Address: 1234 Main St, Kampala, Uganda</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com/praisewebsolutions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/praisewebsolutions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/praisewebsolutions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/about" className="text-blue-400 hover:text-blue-300">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-blue-400 hover:text-blue-300">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
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
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Praise Web Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;