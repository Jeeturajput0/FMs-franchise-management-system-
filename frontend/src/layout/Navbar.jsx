import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/Icon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav border-b border-gray-200/80 shadow-sm py-3' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              AIS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-gray-900 tracking-tight">AI Scholar</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-600 block -mt-1">
                Franchise Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-100/60 p-1.5 rounded-full border border-gray-200/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-gray-900 shadow-xs border border-gray-200/70 font-bold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
            >
              Login
            </Link>

            <Link
              to="/franchise"
              className="px-4 py-2 rounded-xl text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
            >
              Join as Franchise
            </Link>

            <Link
              to="/franchise"
              className="px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gray-900 hover:bg-amber-500 transition-all duration-200 shadow-sm flex items-center gap-1.5 group"
            >
              <span>Get Started</span>
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Dropdown Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-amber-800 font-bold border-l-4 border-amber-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  to="/login"
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/franchise"
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-amber-900 bg-amber-100 border border-amber-200 hover:bg-amber-200"
                >
                  Join as Franchise
                </Link>
                <Link
                  to="/franchise"
                  className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
