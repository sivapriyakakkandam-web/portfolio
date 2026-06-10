import React from "react";
import { ArrowDown, Code, Palette, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-surface via-surface/60 to-surface-container-low"
    >
      {/* Dynamic background colorful blurred spheres to mimic modern portfolios */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse duration-500" />
      
      <div className="relative z-10 text-center px-6 md:px-0 max-w-4xl mx-auto space-y-8">
        {/* Welcome Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block glass-card px-5 py-2 rounded-full text-primary font-bold text-xs md:text-sm shadow-sm"
        >
          Welcome to my portfolio
        </motion.div>

        {/* Headliner */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-background tracking-tight leading-none"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-float-subtle inline-block">
            Sivapriya
          </span>
        </motion.h1>

        {/* Roles/Capabilities Grid Pill representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 font-plus-jakarta"
        >
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-surface-container-high rounded-full text-xs md:text-sm text-on-surface font-semibold border border-outline-variant/30">
            <Palette className="w-4.5 h-4.5 text-primary" /> UI/UX Designer
          </span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-surface-container-high rounded-full text-xs md:text-sm text-on-surface font-semibold border border-outline-variant/30">
            <Code className="w-4.5 h-4.5 text-secondary" /> Web Development Enthusiast
          </span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-surface-container-high rounded-full text-xs md:text-sm text-on-surface font-semibold border border-outline-variant/30">
            <Briefcase className="w-4.5 h-4.5 text-purple-600" /> Student
          </span>
        </motion.div>

        {/* Bio Copywriting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-on-surface-variant font-poppins max-w-2xl mx-auto leading-relaxed font-light"
        >
          I am a passionate student interested in technology, UI/UX design, and web development. I enjoy learning new skills, creating creative projects, and exploring modern digital tools.
        </motion.p>

        {/* Dual Call-To-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 duration-200 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all active:scale-95 duration-200 text-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Down Chevron Scrolling Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-float cursor-pointer">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 opacity-80" />
        </a>
      </div>
    </section>
  );
}
