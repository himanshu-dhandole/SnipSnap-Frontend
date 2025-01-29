import React from 'react';
import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-100 to-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <Scissors className="h-5 w-5 text-emerald-600 transform -rotate-45" />
              <span className="text-emerald-700 font-bold text-lg"> SnipSnap</span>
            </div>
            <p className="mt-2 text-emerald-600 text-sm max-w-md">
              Transform your long URLs into memorable, powerful links. Track, analyze, and optimize your links with our powerful platform.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-emerald-700 font-medium mb-2 text-sm">Product</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Analytics</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-emerald-700 font-medium mb-2 text-sm">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-emerald-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-600 text-xs">
              © 2025 SnipSnap. All rights reserved to me 🤟🏼.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-emerald-600 hover:text-emerald-800 transition-colors text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
