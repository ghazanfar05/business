'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const typingText = ''; // Text to type out

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  // Typewriter Effect
  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setText(text + typingText[index]);
        setIndex(index + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    
    <nav className="bg-gradient-to-r from-slate-950 via-slate-500 to-neutral-900 textx-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8 transition-all duration-300">
        {/* Logo with Typewriter Effect */}
        <div className="text-3xl font-extrabold">
          <a href="/" className="hover:opacity-50 transition-opacity">
            <span className="typewriter">{text}</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-md px-4 py-2 rounded-lg  bg-white text-black focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Search..."
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center text-lg font-medium text-white">
          <li>
            <a href="#Home" className="hover:text-gray-200 transition-all duration-200">
            How It Works
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-gray-200 transition-all duration-200">
              About us
            </a>
          </li>
          <li>
            <a href="#Services" className="hover:text-gray-200 transition-all duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-gray-200 transition-all duration-200">
              Contact
            </a>
          </li>
          {/* Login and Signup Buttons */}
          <li>
            <a href="/login" className="bg-gradient-to-r from-gray-900 to-yellow-800 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105  duration-300 ease-in-out cursor-pointer transition-all">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="bg-gradient-to-r from-gray-900 to-yellow-800 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              Signup
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none mr-4">
            <Search size={24} />
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-slate-950 text-white shadow-lg py-4 space-y-4 rounded-b-lg transition-transform duration-300">
          <li>
            <a href="#home" className="hover:text-gray-500 transition-all duration-200">
            How It Works

            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-gray-500 transition-all duration-200">
              About us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-500 transition-all duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-gray-500 transition-all duration-200">
              Contact
            </a>
          </li>
          {/* Login and Signup Buttons for Mobile */}
          <li>
            <a href="/login" className="text-gray-100 bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" className="text-gray-100 bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition-all">
              Signup
            </a>
          </li>
          {/* Mobile Search Bar */}
          <li>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full max-w-xs px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Search..."
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
