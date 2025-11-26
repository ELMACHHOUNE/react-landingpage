
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/image.png')",height: '100vh' }} // الصورة من مجلد public
    >
      

      <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build a Greener Future <br />
          with <span className="text-green-300">EcoPlanet</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl">
          Join our mission to promote sustainability, protect the environment, and take meaningful action against climate change.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#get-started"
            className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-green-700 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="underline hover:text-green-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
