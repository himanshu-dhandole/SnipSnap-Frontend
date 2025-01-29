import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/10 border-b border-white/18">
      <div className="container mx-auto px-4 h-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-white transform -rotate-45" />
              <Link to={'/'}>
              <span className="text-white font-bold text-xl ml-2">SnipSnap</span></Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white/90 hover:text-white transition-colors ${isActive(item.path) ? 'border-b-2 border-teal-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/signin">
              <button className={`bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all ${isActive('/signin') ? 'bg-opacity-70' : ''}`}>
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
            
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-white/90 hover:text-white transition-colors ${isActive(item.path) ? 'bg-teal-600 rounded-md' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/signin" onClick={() => setIsOpen(false)}>
                <button className={`w-full mt-2 bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all ${isActive('/signin') ? 'bg-opacity-70' : ''}`}>
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
