import React from "react";
import { Project } from "../types";
import { X, CheckCircle, ExternalLink, Github, Award, BookOpen, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-on-background/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-surface-container-lowest border border-outline-variant rounded-3xl shadow-2xl z-10 font-poppins"
        >
          {/* Header Image Cover */}
          <div className="relative h-48 md:h-72 w-full overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Soft dark overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 border border-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all active:scale-95 duration-200"
              aria-label="Close case study"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Display category badge on top-left of modal banner */}
            <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white ${
              project.category === "Mobile App" 
                ? "bg-primary" 
                : project.category === "Web Development" 
                ? "bg-secondary" 
                : "bg-tertiary-container"
            }`}>
              {project.category}
            </span>

            {/* Title integrated on bottom of the banner */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
                Case Study Discovery
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mt-1">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content layout */}
          <div className="p-6 md:p-10 space-y-8 text-left">
            {/* Overview & High-level details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 border-b border-surface-container py-1">
                  <Layers className="w-5 h-5 text-primary" /> Project Vision
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick statistics/parameters block */}
              <div className="bg-surface-container-low border border-outline-variant p-6 rounded-2xl space-y-4 self-start">
                <h4 className="font-bold text-sm text-on-background uppercase tracking-wider">
                  Quick Details
                </h4>
                <div className="space-y-3 text-sm text-on-surface-variant">
                  <div>
                    <span className="block text-xs text-outline font-semibold">ROLE</span>
                    <span className="font-bold text-on-surface">Lead UI/UX & Developer</span>
                  </div>
                  <div>
                    <span className="block text-xs text-outline font-semibold">CONTEXT</span>
                    <span className="font-bold text-on-surface">Personal / Academic Work</span>
                  </div>
                  {project.link || project.github ? (
                    <div className="pt-2">
                      <span className="block text-xs text-outline font-semibold mb-1">LINKS</span>
                      <div className="flex gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-secondary font-bold hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Link
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                          >
                            <Github className="w-3.5 h-3.5" /> Repository
                          </a>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Core Features */}
            {project.features && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 border-b border-surface-container py-1">
                  <CheckCircle className="w-5 h-5 text-secondary" /> Highlight Capabilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="inline-block mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Design & Tech Challenges */}
            {project.challenges && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 border-b border-surface-container py-1">
                    <BookOpen className="w-5 h-5 text-purple-600" /> Key Roadblocks
                  </h3>
                  <div className="space-y-3 text-sm text-on-surface-variant">
                    {project.challenges.map((challenge, idx) => (
                      <div key={idx} className="p-4 bg-error-container/20 border border-error/10 rounded-xl">
                        <p className="text-xs font-bold text-error uppercase tracking-wide mb-1">
                          Refined Challenge {idx + 1}
                        </p>
                        <p className="text-on-surface">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tangible Outcomes */}
                {project.outcomes && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-2 border-b border-surface-container py-1">
                      <Award className="w-5 h-5 text-emerald-600" /> Proven Outcomes
                    </h3>
                    <div className="space-y-3 text-sm text-on-surface-variant">
                      {project.outcomes.map((outcome, idx) => (
                        <div key={idx} className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                          <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
                            Result {idx + 1}
                          </p>
                          <p className="text-on-surface-variant italic font-medium">"{outcome}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Prompt footer action */}
            <div className="pt-6 border-t border-surface-container flex justify-between items-center text-xs text-outline">
              <span>Sivapriya S V Portfolio — Case Study Review</span>
              <button
                className="px-5 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all active:scale-95 inline-flex items-center gap-1.5 text-xs"
                onClick={onClose}
              >
                Done Reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
