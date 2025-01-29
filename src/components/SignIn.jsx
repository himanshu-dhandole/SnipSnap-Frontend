import React, { useState } from 'react';

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with:', { name, password });
    // Implement actual sign-in logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
      <div className="bg-gradient-to-br from-green-100 to-white  rounded-2xl shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 font-mono">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition-all">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-600 font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
