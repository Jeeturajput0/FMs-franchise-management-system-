import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogIn, Menu, X, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import LoginModal from '../components/LoginModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
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
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Brand Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg text-slate-900 tracking-tight">AI Scholar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block -mt-1">
                  Franchise & LMS Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200/70 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Quick Admin Dashboard Icon Button */}
              <Link
                to="/admin/dashboard"
                title="Go to Admin Dashboard"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500 text-amber-900 hover:text-slate-950 border border-amber-500/30 transition-all duration-200 shadow-xs group cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-amber-700 group-hover:text-slate-950 transition-colors" />
                <span>Dashboard</span>
              </Link>

              {/* Login Button */}
              <button
                type="button"
                onClick={() => setLoginModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-colors cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-slate-400" />
                <span>Login</span>
              </button>

              <Link
                to="/franchise"
                className="px-4.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-amber-500 hover:text-slate-950 transition-all duration-200 shadow-sm flex items-center gap-1.5 group"
              >
                <span>Join Franchise</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/admin/dashboard"
                className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200"
                title="Dashboard"
              >
                <LayoutDashboard className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 font-bold border-l-4 border-amber-500'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/admin/dashboard"
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Go to Admin Dashboard</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
}
