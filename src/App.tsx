import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-on-background relative select-none">
      {/* Universal Floating Blur Navigation */}
      <Navbar />

      <main className="relative">
        {/* Landing Hero Screen */}
        <Hero />

        {/* Professional About Me Section */}
        <About />

        {/* Skillset Powerpowers Grid Section */}
        <Skills />

        {/* Featured Case Studies Projects Section */}
        <Projects />

        {/* Multi-validation Contact Form Section */}
        <Contact />
      </main>

      {/* Global Brand footer */}
      <Footer />
    </div>
  );
}
