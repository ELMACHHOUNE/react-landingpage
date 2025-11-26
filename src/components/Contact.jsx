
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}!`);
    // هنا يمكنك إضافة منطق الإرسال أو التكامل مع API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-green-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 mb-6 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
