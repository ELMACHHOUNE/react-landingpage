
import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Who We Are</h2>
          <p className="text-green-800 text-lg leading-relaxed">
            EcoPlanet is a platform dedicated to raising awareness about environmental issues and promoting sustainable living. 
            Our mission is to inspire individuals and communities to adopt eco-friendly practices, reduce waste, and protect our planet for future generations.
          </p>
          <p className="mt-4 text-green-700">
            We believe small changes lead to big impacts. Whether it's reducing plastic use, planting trees, or learning about green technologies — every action matters.
          </p>
        </div>
        <div>
          <img 
            src="public/image-4.jpg" 
            alt="About EcoPlanet" 
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
