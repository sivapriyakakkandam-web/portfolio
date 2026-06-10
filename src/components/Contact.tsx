import React, { useState } from "react";
import { Mail, Share2, Check, Send, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UI Feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic fields validation
    if (!name.trim()) {
      setSubmitError("Please fill out your name so I know who is reaching out!");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError("Please enter a valid email address so I can get back to you.");
      return;
    }

    if (!message.trim() || message.length < 5) {
      setSubmitError("Please enter a short message (at least 5 characters).");
      return;
    }

    // Clear previous errors, begin simulated pipeline submission
    setSubmitError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(name);
      setIsSuccess(true);

      // Reset form variables
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 md:px-16 overflow-hidden bg-surface"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-background tracking-tight font-display">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>

          {/* Social credentials block */}
          <div className="space-y-4">
            {/* Mail Link */}
            <a
              href="mailto:sivapriyakakkandam@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="block text-xs text-outline font-semibold uppercase tracking-wider">Email Me</span>
                <span className="font-bold text-sm md:text-base text-on-surface truncate block">
                  sivapriyakakkandam@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/sivapriya-s-v-382319389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 flex-shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="block text-xs text-outline font-semibold uppercase tracking-wider">LinkedIn</span>
                <span className="font-bold text-sm md:text-base text-on-surface truncate block">
                  Sivapriya S V
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Form Column - Glassmorphic details block */}
        <div className="lg:col-span-7 relative">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative glass-card p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/30 shadow-xl space-y-6">
            {/* Header info */}
            <h3 className="text-xl font-bold text-on-surface tracking-tight">
              Send a Message
            </h3>

            {/* Feedback dialogs */}
            <AnimatePresence mode="wait">
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-error-container/40 border border-error/20 text-on-error-container text-xs md:text-sm rounded-xl flex items-start gap-2.5"
                >
                  <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <div className="flex-grow">
                    <span className="font-bold block">Please review details</span>
                    {submitError}
                  </div>
                  <button onClick={() => setSubmitError("")} className="text-error hover:scale-105 active:scale-95">
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl space-y-2 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm md:text-base">Inquiry Submitted Successfully!</h4>
                    <p className="text-xs md:text-sm text-emerald-800 leading-relaxed max-w-sm mt-1">
                      Thank you, <span className="font-bold text-emerald-900">{submittedName}</span>! I have received your message and will review it shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 text-xs font-bold text-emerald-850 bg-emerald-100 hover:bg-emerald-200 px-4 py-1.5 rounded-full"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!isSuccess && (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-3 rounded-full border border-outline-variant/30 bg-surface-container-low/60 focus:bg-white focus:ring-2 focus:ring-primary/20 text-on-background placeholder-outline/65 text-sm outline-none transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-5 py-3 rounded-full border border-outline-variant/30 bg-surface-container-low/60 focus:bg-white focus:ring-2 focus:ring-primary/20 text-on-background placeholder-outline/65 text-sm outline-none transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="w-full px-5 py-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low/60 focus:bg-white focus:ring-2 focus:ring-primary/20 text-on-background placeholder-outline/65 text-sm resize-none outline-none transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:brightness-105 active:scale-[0.98] transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
