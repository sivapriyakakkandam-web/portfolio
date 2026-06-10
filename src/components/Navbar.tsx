import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track window scroll to shrink navbar and change background blur intensity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Read current section in scroll spy
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((sect) => {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset to recognize active section beautifully
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", key: "home" },
    { name: "About", href: "#about", key: "about" },
    { name: "Skills", href: "#skills", key: "skills" },
    { name: "Projects", href: "#projects", key: "projects" },
    { name: "Contact", href: "#contact", key: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled
            ? "py-3 bg-surface/85 backdrop-blur-xl border-outline-variant/30 shadow-[0_10px_30px_rgba(124,58,237,0.06)]"
            : "py-5 bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="text-xl md:text-2xl font-headline-md font-extrabold text-primary tracking-tight"
          >
            Sivapriya S V
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center font-plus-jakarta text-sm">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.key)}
                className={`transition-colors py-1 duration-200 decoration-secondary decoration-2 font-medium relative ${
                  activeSection === link.key
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.key && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold inline-flex items-center gap-1 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-nav-toggle"
            className="md:hidden text-primary p-2 focus:outline-none transition-transform duration-200 active:scale-90"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu Cover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-surface/95 border-b border-outline-variant/40 backdrop-blur-2xl z-35 md:hidden flex flex-col p-6 space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.key)}
                className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${
                  activeSection === link.key
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="bg-primary text-on-primary py-3 px-4 rounded-full font-bold text-center flex justify-center items-center gap-1.5 shadow-lg shadow-primary/20 hover:bg-primary-container transition-all"
            >
              Hire Me
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
