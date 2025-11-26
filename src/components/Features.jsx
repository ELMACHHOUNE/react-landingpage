
import React from "react";
import { FaLeaf, FaRecycle, FaTree, FaSolarPanel } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLeaf size={40} className="text-green-600" aria-label="Sustainable Practices icon" />,
    title: "Sustainable Practices",
    description: "Helping you adopt eco-friendly habits that reduce your carbon footprint.",
  },
  {
    icon: <FaRecycle size={40} className="text-green-600" aria-label="Waste Reduction icon" />,
    title: "Waste Reduction",
    description: "Learn how to minimize waste through recycling and responsible consumption.",
  },
  {
    icon: <FaTree size={40} className="text-green-600" aria-label="Tree Planting icon" />,
    title: "Tree Planting",
    description: "Join our mission to plant trees and restore natural habitats.",
  },
  {
    icon: <FaSolarPanel size={40} className="text-green-600" aria-label="Renewable Energy icon" />,
    title: "Renewable Energy", description: "Explore solar and other renewable energy solutions for a cleaner future.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {services.map(({ icon, title, description }) => (
            <motion.div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34,197,94,0.4)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
              <p className="text-green-700">{description}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Join Us
        </a>
      </div>
    </section>
  );
}
