
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-green-100 text-green-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Animated Logo Text */}
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent animate-gradient">
          EcoPlanet
        </h1>

        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-green-600 transition">Home</a>
          <a href="#about" className="hover:text-green-600 transition">About</a>
          <a href="#features" className="hover:text-green-600 transition">Features</a>
          <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
          <a href="#contact" className="hover:text-green-600 transition">Contact</a>
        </nav>

        
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }
      `}</style>
    </header>
  );
}
