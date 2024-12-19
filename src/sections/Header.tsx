"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState<string>("home");

  const sections = ["home", "project", "about", "contact"];

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight / 3; // Trigger when the section is in view by ~1/3 of the viewport
          if (rect.top >= 0 && rect.top < window.innerHeight - offset) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [sections]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <div className="hover:scale-105 duration-300">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-item ${
                active === section
                  ? "bg-white text-gray-900"
                  : "hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => handleScroll(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
