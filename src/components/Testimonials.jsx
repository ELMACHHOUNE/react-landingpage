
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sara",
    feedback: "This eco landing page really inspired me to live greener!",
    role: "Environmentalist",
  },
  {
    name: "John",
    feedback: "Great design and message. Love the color palette!",
    role: "Sustainability Expert",
  },
  {
    name: "Mona",
    feedback: "Easy to navigate and very informative. Highly recommend!",
    role: "Eco Blogger",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-green-50 py-12 px-6 text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">What People Are Saying</h2>
      <div className="relative">
        <AnimatePresence mode="wait">
            <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md text-green-900"
          >
            <p className="mb-4 italic">"{testimonials[index].feedback}"</p>
            <h3 className="font-bold text-lg">{testimonials[index].name}</h3>
            <p className="text-sm text-green-700">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-green-800 text-white rounded-full p-2"
        >
          ‹
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-green-800 text-white rounded-full p-2"
        >
          ›
        </button>
      </div>
    </section>
  );
}
