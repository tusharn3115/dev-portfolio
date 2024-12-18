"use client";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState<string>("home");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <div className="hover:scale-105 duration-200">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <button
            className={`nav-item ${
              active === "home"
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => handleScroll("home")}
          >
            Home
          </button>
          <button
            className={`nav-item ${
              active === "project"
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => handleScroll("project")}
          >
            Project
          </button>
          <button
            className={`nav-item ${
              active === "about"
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => handleScroll("about")}
          >
            About
          </button>
          <button
            className={`nav-item ${
              active === "contact"
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
