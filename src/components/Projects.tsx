import React, { useState } from "react";
import { ArrowRight, ExternalLink, FolderOpen, SlidersHorizontal } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamic lists of unique categories
  const categories = ["All", "Mobile App", "Web Development", "Academic"];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === "All") return true;
    return proj.category === filter;
  });

  const handleCTAAction = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-surface-container-low px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-outline-variant/30 pb-6 text-left">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tight font-display">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-outline font-light leading-relaxed">
              Selected works that showcase my design and development path.
            </p>
          </div>

          {/* Interactive Filter Pill Container */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-200 outline-none active:scale-95 ${
                  filter === cat
                    ? "bg-primary text-on-primary shadow-sm shadow-primary/20"
                    : "bg-surface-container-high/60 text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-3 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
              >
                {/* Responsive banner aspect wrapper */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full text-white ${
                    project.category === "Mobile App" 
                      ? "bg-primary/95" 
                      : project.category === "Web Development" 
                      ? "bg-secondary/95" 
                      : "bg-tertiary-container/95"
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Information Layout Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-left space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-plus-jakarta font-bold text-xl text-on-surface leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-on-surface-variant/90 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Chips Tag Panel */}
                  <div className="flex flex-wrap gap-1.5 py-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link triggers case-study Modal */}
                  <div className="pt-2">
                    <button
                      onClick={(e) => handleCTAAction(e, project)}
                      className={`inline-flex items-center gap-2 font-bold text-sm tracking-wide transition-all group-hover:gap-3 cursor-pointer ${
                        project.category === "Mobile App"
                          ? "text-primary"
                          : project.category === "Web Development"
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    >
                      {project.category === "Mobile App" && (
                        <>
                          View Case Study <ArrowRight className="w-4.5 h-4.5" />
                        </>
                      )}
                      {project.category === "Web Development" && (
                        <>
                          Live Demo <ExternalLink className="w-4.5 h-4.5" />
                        </>
                      )}
                      {project.category === "Academic" && (
                        <>
                          View Collection <FolderOpen className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Injection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
