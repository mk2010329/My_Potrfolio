"use client";
import { useEffect, useRef, useState, PropsWithChildren } from "react";
import Navbar from "@/app/components/Navbar";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";
import { Project } from "@/app/types";

// -------------------------
// Helper: Reveal-once wrapper
// -------------------------
type RevealProps = PropsWithChildren<{
  delay?: number;
  dir?: "up" | "left" | "right" | "none";
  className?: string;
}>;

const Reveal = ({ children, delay = 0, dir = "up", className }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Trigger once -> stays visible after entering view
  const inView = useInView(ref, { amount: 0.25, margin: "-10% 0px", once: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: dir === "up" ? 20 : 0,
      x: dir === "left" ? -60 : dir === "right" ? 60 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration.",
    longDescription:
      "Built a comprehensive e-commerce platform with user authentication, product management, shopping cart, and secure payment processing using Stripe. Features include real-time inventory management, advanced search capabilities, user reviews and ratings, admin dashboard, and responsive design optimized for all devices.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project1.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    longDescription:
      "Developed a team collaboration tool with real-time updates, drag-and-drop functionality, and project timeline management. The application includes team member assignment, priority levels, deadline tracking, progress visualization, and integration with popular calendar applications.",
    technologies: ["React", "TypeScript", "Socket.io", "Express.js", "PostgreSQL"],
    image: "/images/project2.jpg",
    demoUrl: "https://demo2.example.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true,
    category: "Web App",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts.",
    longDescription:
      "Created a weather application that provides detailed forecasts, historical data, and weather maps using multiple APIs. Features include 7-day forecasts, hourly updates, severe weather alerts, interactive maps, and personalized weather recommendations based on user preferences.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    image: "/images/project3.jpg",
    demoUrl: "https://demo3.example.com",
    githubUrl: "https://github.com/yourusername/project3",
    featured: false,
    category: "Frontend",
  },
];

const Experience = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      // clamp to last valid section index
      setCurrentSection(Math.max(0, Math.min(sectionIndex, projects.length - 1)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = Math.min(currentSection + 1, projects.length);
    window.scrollTo({
      top: nextSection * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />

    {/* Hero Section */}
    <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center z-10">
        <Reveal dir="up">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">My Projects</h1>
        </Reveal>

        <Reveal delay={0.15} dir="up" className="text-center">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Showcasing innovative solutions and creative implementations
          </p>
        </Reveal>
      </div>

      {/* Arrow fixed at bottom */}
      <Reveal delay={0.3} className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="animate-bounce text-white hover:text-blue-400 transition-colors"
        >
          <FaArrowDown size={32} />
        </button>
      </Reveal>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>

      {/* Project Sections */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section key={project.id} className="min-h-screen relative">
            {/* Background with gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                isEven
                  ? "from-blue-50 via-white to-indigo-50"
                  : "from-purple-50 via-white to-pink-50"
              }`}
            />

            {/* Desktop Layout */}
            <div className="hidden md:flex h-screen relative">
              {/* Inclined divider */}
              <div
                className={`absolute inset-0 ${
                  isEven
                    ? "bg-gradient-to-r from-transparent via-white to-transparent"
                    : "bg-gradient-to-l from-transparent via-white to-transparent"
                }`}
              >
                <div
                  className={`h-full w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent absolute top-0 ${
                    isEven ? "left-1/2" : "right-1/2"
                  } transform ${
                    isEven ? "-translate-x-1/2 rotate-12" : "translate-x-1/2 -rotate-12"
                  }`}
                />
              </div>

              {/* Image Section - Desktop */}
              <Reveal dir={isEven ? "left" : "right"} className={`w-1/2 h-full relative flex items-center justify-center ${isEven ? "order-1 pr-8" : "order-2 pl-8"}`}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative w-full max-w-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[8rem] xl:h-[26rem] object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </motion.div>
              </Reveal>

              {/* Content Section - Desktop */}
              <Reveal dir={isEven ? "right" : "left"} delay={0.1} className={`w-1/2 h-full relative flex items-center justify-center ${isEven ? "order-2 pl-8" : "order-1 pr-8"}`}>
                <div className="max-w-lg">
                  <Reveal dir="up">
                    <span
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        isEven ? "text-blue-600" : "text-purple-600"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
                      {project.title}
                    </h2>
                  </Reveal>

                  <Reveal dir="up" delay={0.1}>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.longDescription}</p>
                  </Reveal>

                  <Reveal dir="up" delay={0.2}>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            isEven ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal dir="up" delay={0.3}>
                    <div className="flex gap-6">
                      {project.demoUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                            isEven ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
                          }`}
                        >
                          <FaExternalLinkAlt size={16} />
                          View Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all"
                        >
                          <FaGithub size={16} />
                          View Code
                        </motion.a>
                      )}
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden py-20 px-4">
              <div className="max-w-lg mx-auto space-y-8">
                {/* Image Section - Mobile */}
                <Reveal className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </Reveal>

                {/* Content Section - Mobile */}
                <Reveal delay={0.1} className="text-center space-y-6">
                  <div>
                    <span
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        isEven ? "text-blue-600" : "text-purple-600"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 mt-2">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          isEven ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold transition-all text-sm ${
                          isEven ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
                        }`}
                      >
                        <FaExternalLinkAlt size={14} />
                        View Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all text-sm"
                      >
                        <FaGithub size={14} />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Scroll indicator */}
            {index < projects.length - 1 && (
              <Reveal delay={0.4} className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={scrollToNext}
                  className="animate-bounce text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <FaArrowDown size={20} />
                </button>
              </Reveal>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Experience;
