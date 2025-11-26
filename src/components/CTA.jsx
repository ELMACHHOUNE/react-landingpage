
import React from "react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 px-6 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/image-5.jpg')", // Replace with your image path
      }}
    >
      

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg mb-8">
          Join our mission to build a greener, cleaner, and more sustainable planet for future generations.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-100 transition"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
}
