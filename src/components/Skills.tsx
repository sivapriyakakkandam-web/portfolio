import React from "react";
import { Layers, Boxes, Users, Lightbulb, Brain, MessageSquare, Clock } from "lucide-react";
import { skillsData } from "../data";
import { motion } from "motion/react";

// Helper component to resolve Lucide Icon dynamically
function SkillIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Layers":
      return <Layers className={className} />;
    case "Boxes":
      return <Boxes className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Lightbulb":
      return <Lightbulb className={className} />;
    case "Brain":
      return <Brain className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Clock":
      return <Clock className={className} />;
    default:
      return <Layers className={className} />;
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6 md:px-16 bg-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tight font-display"
          >
            My Superpowers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-outline font-light leading-relaxed"
          >
            The tools and traits I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Bento/Glass Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            // Check if it's the last skill to apply the md:col-span-2 layout accent
            const isLast = index === skillsData.length - 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`glass-card p-6 md:p-8 rounded-2xl text-center shadow-sm cursor-default select-none border border-outline-variant/30 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group ${
                  isLast ? "col-span-2 md:col-span-2" : ""
                }`}
              >
                {/* Responsive container that lights up in primary colors on mouse-over */}
                <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:rotate-6 transition-all duration-300">
                  <SkillIcon 
                    name={skill.icon} 
                    className="w-7 h-7 text-primary transition-colors group-hover:text-on-primary-container" 
                  />
                </div>
                
                <h3 className="font-plus-jakarta font-bold text-sm md:text-base text-on-surface">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
