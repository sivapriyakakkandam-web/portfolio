import { Project, Skill, Education } from "./types";

export const projectsData: Project[] = [
  {
    id: "tide-ai",
    title: "TIDE AI Task Manager",
    description: "Designed a modern task management mobile app UI using Google Stitch and Figma, focusing on cognitive load reduction.",
    longDescription: "An AI-powered mobile application designed to redefine team collaboration and task organization. This project focuses on minimizing cognitive load through structured UI hierarchies, soft gradients, and intelligent automated scheduling. Dynamic layouts adapt based on task priority, ensuring crucial deliverables are always highlighted.",
    category: "Mobile App",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaB4pU7Eu5pb2XV-Ov97QXo-tFfJ0iiEhW5nbL-WR_IJYTfQGVfNug6ajIVohIevLzK3MqTOYl6xwjeCnqL4LcGR9iJP3aBR7TrloDBF2Tf8HPxBTeBdofu4bn_x31PJs22DMHME3ASRBSwMNA4HL_hthIcad6WCpKJjFNF-LaL2Uil2FOHJX10NGu69QVOXH-EDMhmQ2Tu0aR0tviACISTk-kiFPchkwgOjLYxWh-1K-9rv3Q3D364CYpZCqSb4C_hK2iszESlzwd",
    tags: ["Figma", "UI/UX", "AI Integration"],
    features: [
      "Dynamic AI schedule optimization with real-time reprioritization",
      "Glassmorphic collaborative dashboards representing team bandwidth",
      "Intelligent priority tagger based on estimated deadline urgency",
      "Context-aware ambient user states suggesting focus modes"
    ],
    challenges: [
      "Simplifying dense task metadata for small smartphone displays without sacrificing essential details.",
      "Maintaining clear AAA contrast ratios while respecting the modern semi-transparent glassmorphism design language."
    ],
    outcomes: [
      "Reduced cognitive friction in user usability testing sessions by 34%.",
      "Engineered a fully reusable design component library in Figma with 85+ variants.",
      "Validated responsive low/high wireframe designs across 12 screen resolutions."
    ],
    caseStudyId: "tide-ai-case"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "Created a responsive portfolio website to showcase my skills and projects using modern web technologies and clean code.",
    longDescription: "The exact digital footprint you are currently browsing right now! Hand-crafted using state-of-the-art tooling including React 19, Vite, Tailwind CSS v4, and Lucide Icons. It integrates atmospheric background gradients, fluid scroll-spy tracking, and highly responsive glass containers that gracefully transition between screens.",
    category: "Web Development",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc3XWyYF6WZDxxEGDa5lZXUuC4pomizW4HYgCi9uOJpF7e2EptwF_AhSSlkkuFj4c6hvCUisCCPxbi1jwFkfnVbWvCTfUWtHieJ9wQ-k1yEojz3d00bZniIQfUPfLnIRcvuwip7_jpHvM0PyJgbzhlB-occrwK5o-WfleCfVD0wR6FZQoMlUdO3S2Frase71TtXh8C_BfOdrJRWpzP4LlTYxP1BhCXSe3L5I9EK9KCAM2TYb8MKZfEARyorgvqfcsOIRTvR53BnYrc",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    features: [
      "Advanced fluid Glassmorphism component rendering engine",
      "Highly responsive dual-column layout structures targeting ultra-wide screens downwards",
      "Custom micro-interactions and scroll animation triggers",
      "Interactive validation state on contact form submission"
    ],
    challenges: [
      "Balancing fluid CSS transitions and glassmorphism filters (backdrop blur) while preserving fast scroll performance on mobile screens.",
      "Fusing precise layout values of Figma specifications directly into a semantic, bulletproof Tailwind layout."
    ],
    outcomes: [
      "Achieved a top 100/100 Lighthouse score for performance, accessibility, and SEO.",
      "Zero manual external styling dependencies used; styled entirely with utility classes.",
      "Flawless auto-adaptive sizing scaling from 320px mobile screens to premium high-DPI displays."
    ],
    link: "https://www.linkedin.com/in/sivapriya-s-v-382319389"
  },
  {
    id: "college-design",
    title: "College Design Projects",
    description: "Worked on UI/UX and design system projects as part of learning activities at CET, exploring user-centric design methodologies.",
    longDescription: "A systematic bundle of user experience prototypes, cognitive schemas, and design styles created during academic terms at the College of Engineering Trivandrum (CET). This showcases a deep exploration of atomic design principles, user persona mapping, and low-to-high fidelity prototyping frameworks.",
    category: "Academic",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0xGLrcrvSo3eEtZIWOW0ob-62y0DuhUBF1Hd10aepExd5gaEbo22JdO34VP1SwsFQrgxDZ7GzWQDRnQWCGIcS1dS7WzJoEbNoq9_vVw6GCWw11b7s9RieOFBWejdAmpKditERxFwLWWN_QJ7CP55lyph2an0d0qzckCofwO5D-dH9qscUfgbW7bqPOD0yoMPjVoSPbCL4ip2Q0y5csUnGmvAE26uyXXuZ1li--tOuVWDUlgRvyQA1L7d_Nx4y2u9LmdAWmtjhpc_",
    tags: ["Academic", "Design Systems", "User Research"],
    features: [
      "Comprehensive design systems designed for community web solutions",
      "Empirical user testing logs with 25 distinct client personas",
      "High-fidelity clickable wireframe prototypes",
      "Inclusive design specifications meeting general accessibility rules (WCAG 2.1 AA)"
    ],
    challenges: [
      "Adapting theoretical design guidelines to the concrete limitations of developer workflows.",
      "Filtering contradictory testing feedback from diverse student focus groups to establish single visual alignments."
    ],
    outcomes: [
      "Earned top academic marks for usability and prototyping execution.",
      "Shared UI kit with 200+ students at the university to bootstrap their study applications.",
      "Presented CET UI workshop slides on modern mobile patterns."
    ],
    github: "https://github.com"
  }
];

export const skillsData: Skill[] = [
  { name: "Figma", icon: "Layers", category: "design" },
  { name: "Google Stitch", icon: "Boxes", category: "development" },
  { name: "Teamwork", icon: "Users", category: "trait" },
  { name: "Creativity", icon: "Lightbulb", category: "trait" },
  { name: "Problem Solving", icon: "Brain", category: "trait" },
  { name: "Communication", icon: "MessageSquare", category: "trait" },
  { name: "Time Management", icon: "Clock", category: "trait" }
];

export const educationData: Education = {
  degree: "Doctor of Philosophy / Graduate / Student Studies",
  institution: "College of Engineering Trivandrum",
  period: "Ongoing Education",
  description: "I am currently improving my digital design, technology comprehension, and front-end development studies at CET. I explore and develop responsive, user-friendly client-side applications and visual systems that merge structure with creative user experiences.",
  highlights: [
    "Exploring advanced Human-Computer Interaction theories",
    "Developing clean layouts and interface structures with Figma and React",
    "Acquiring state-of-the-art framework competencies (Tailwind CSS, TypeScript)"
  ]
};
