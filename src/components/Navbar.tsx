"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [showNavbar, setShowNavbar] = useState(true); // Track whether navbar is visible

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll behavior
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scroll up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run the effect when lastScrollY changes

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex flex-col justify-center items-center px-6 md:px-12 w-full transition-transform duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full", // Apply a translate effect to hide/show the navbar
        className
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-start justify-center mt-6"> {/* Adjusted margin-top */}
        <Menu setActive={setActive}>
          <HoveredLink href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </HoveredLink>

          <motion.button
            onClick={() => scrollToSection("#FeatureSection")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="Features" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#About")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="About" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#Team")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="Team" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#FAQ")}
            className="bg-transparent border-none cursor-pointer"
          >
            <MenuItem setActive={setActive} active={active} item="FAQ" />
          </motion.button>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
