import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-green-400 to-emerald-500">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left side content */}
        <div className="lg:w-1/2 text-white pt-20 lg:pt-0">
          <h1 className="font-mono text-5xl lg:text-6xl font-bold mb-6">
            About SnipSnap
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-white/90">
            At SnipSnap, we believe that sharing should be simple and effective. Our URL shortening service transforms long links into concise, memorable URLs, making it easier for you to share content across platforms.
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg lg:text-xl mb-8 text-white/90">
            Our mission is to empower users with powerful tools to manage their links effectively. With advanced analytics and security features, we ensure that your data is safe while providing insights into your link performance.
          </p>
          <h2 className="text-3xl font-bold mb-4">Security First</h2>
          <p className="text-lg lg:text-xl mb-8 text-white/90">
            We utilize Spring Security and JWT tokens to protect your data and ensure secure transactions. Your privacy is our priority.
          </p>
        </div>

        {/* Right side images and features */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="flex flex-col gap-6">
            {/* Image 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/business-filled-outline-6/64/sharing-collaboration-teamwork-organization-employer-512.png"
                alt="Simple Sharing"
                className="rounded-md mb-4 w-16 h-16 object-contain"
              />
              <h3 className="font-bold text-lg">Simple Sharing</h3>
              <p className="text-gray-600 text-center">
                Easily share your shortened links across social media platforms.
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/235/235183.png"
                alt="Powerful Analytics"
                className="rounded-md mb-4 w-16 h-16 object-contain"
              />
              <h3 className="font-bold text-lg">Powerful Analytics</h3>
              <p className="text-gray-600 text-center">
                Track clicks, user engagement, and link performance with our analytics dashboard.
              </p>
            </div>

            {/* Image 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/394/752/original/3d-internet-padlock-cyber-security-icon-illustration-rendering-png.png"
                alt="Secure Links"
                className="rounded-md mb-4 w-16 h-16 object-contain"
              />
              <h3 className="font-bold text-lg">Secure Links</h3>
              <p className="text-gray-600 text-center">
                With Spring Security and JWT tokens, your data is protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
