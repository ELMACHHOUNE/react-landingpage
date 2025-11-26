
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-6 text-center">
      <p>© {new Date().getFullYear()} Eco Green Solutions. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="#"
          className="hover:text-green-300 transition transform hover:scale-110"
          aria-label="Twitter"
        >
          <Twitter size={22} />
        </a>
        <a
          href="#"
          className="hover:text-green-300 transition transform hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook size={22} />
        </a>
        <a
          href="#"
          className="hover:text-green-300 transition transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </div>
    </footer>
  );
}
