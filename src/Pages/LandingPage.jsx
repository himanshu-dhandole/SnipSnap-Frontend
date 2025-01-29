import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-green-400 to-emerald-500 ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left side content */}
        <div className="lg:w-1/2 text-white pt-20 lg:pt-0">
          <h1 className="font-mono text-5xl lg:text-6xl font-bold mb-6">
            Short links,
            <br />
            big impact
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-white/90">
            Transform your long URLs into memorable, powerful links. Our platform makes sharing easier than ever, with powerful analytics to track every click.
          </p>
          <div className="flex gap-4">
            <Link to={'/signup'}>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </button></Link>
            <Link to={'/about'}>
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Learn More
            </button></Link>
          </div>
        </div>

        {/* Right side demo card */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-600 text-sm mb-1">Original URL</p>
                <p className="text-gray-800 truncate font-mono">https://www.example.com/very/long/url/that/needs/shortening</p>
              </div>
              <div className="bg-emerald-100 rounded-lg p-4">
                <p className="text-emerald-600 text-sm mb-1">Shortened URL</p>
                <p className="text-emerald-800 font-mono">short.ly/x8Yd2</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-gray-100 rounded-lg p-3 flex-1">
                  <p className="text-gray-600 text-sm">Clicks</p>
                  <p className="text-2xl font-bold text-gray-800">1,234</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex-1">
                  <p className="text-gray-600 text-sm">Created</p>
                  <p className="text-2xl font-bold text-gray-800">2d ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;