import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-outline-variant/30 py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto font-plus-jakarta text-xs md:text-sm text-on-surface-variant">
        {/* Brand identity */}
        <div className="text-lg font-extrabold text-primary tracking-tight">
          Sivapriya S V
        </div>

        {/* Copywrite text with responsive align */}
        <p className="text-center text-outline font-light">
          © {currentYear} Sivapriya S V. All Rights Reserved. Designed with clarity and purpose.
        </p>

        {/* Social hyperlinks targeting standard addresses */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/sivapriya-s-v-382319389"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:underline font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:underline font-medium"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:underline font-medium"
          >
            Twitter
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:underline font-medium"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
