import React from "react";
import { GraduationCap, Award, BookOpen, Star, User } from "lucide-react";
import { educationData } from "../data";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-surface-container-low px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Bio column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Section Heading */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tight pb-2 font-display">
              About Me
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-light font-poppins">
            I am a passionate student interested in technology, UI/UX design, and web development. I enjoy learning new skills, creating creative projects, and exploring modern digital tools. I am currently improving my design and development skills through academic and personal projects.
          </p>

          {/* Education glass card */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-outline-variant/40 shadow-sm space-y-4 animate-float-subtle">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base md:text-lg text-on-background">
                  {educationData.institution}
                </h3>
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {educationData.period}
                </p>
                <p className="text-sm text-outline font-medium">
                  {educationData.degree}
                </p>
              </div>
            </div>

            <p className="text-sm text-on-surface-variant/90 leading-relaxed pl-1">
              {educationData.description}
            </p>

            {educationData.highlights && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1 pt-2">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs text-on-surface-variant font-medium">
                    <Star className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Decorative glass portrait shape column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle colorful backing gradient glob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-[2.5rem] blur-2xl transform rotate-6 scale-95" />
          
          {/* Glass Card Portrait container mimicking image in user request */}
          <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-white/80 overflow-hidden flex flex-col items-center justify-center p-8 shadow-xl animate-float">
            <div className="w-32 h-32 rounded-full bg-surface-container-highest/60 flex items-center justify-center text-primary border border-outline-variant/30 mb-6 group-hover:scale-105 transition-transform duration-300">
              <User className="w-16 h-16 opacity-40 text-primary-container" />
            </div>
            
            <div className="text-center space-y-1">
              <h4 className="font-plus-jakarta font-bold text-lg text-on-surface">Sivapriya S V</h4>
              <p className="text-xs text-secondary font-semibold uppercase tracking-widest">UI/UX & Frontend Student</p>
            </div>

            {/* Micro aesthetic accent lines */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
