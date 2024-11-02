'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id='Contact' className="bg-slate-900 text-gray-300 py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">YourCompany</h2>
            <p className="text-gray-400">
              We offer fast and reliable solutions to help you sell your property quickly and efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#Home" className="hover:text-indigo-500 transition duration-200">How It Works
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-indigo-500 transition duration-200">About Us</a>
              </li>
              <li>
                <a href="#Services" className="hover:text-indigo-500 transition duration-200">Services</a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-indigo-500 transition duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">
              Get the latest updates on our services and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                className="px-4 py-2 w-full bg-gray-700 text-gray-300 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter your email"
                required
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-500 transition duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
          <p className="text-gray-500 mt-2">
            <a href="/privacy" className="hover:text-indigo-500">Privacy Policy</a> | <a href="/terms" className="hover:text-indigo-500">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;