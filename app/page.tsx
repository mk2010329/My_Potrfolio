"use client";
import Head from "next/head";
import { NextPage } from "next";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { QuickStat, PreviewSection } from "@/app/types";
import Footer from "./components/footer";

const quickStats: QuickStat[] = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "15+" },
];

const previewSections: PreviewSection[] = [
  {
    title: "About Me",
    description:
      "Learn about my background, skills, and what drives my passion for development.",
    href: "/about",
    icon: "👨‍💼",
  },
  {
    title: "Education",
    description:
      "My academic journey and continuous learning in technology and development.",
    href: "/education",
    icon: "🎓",
  },
  {
    title: "Achievements",
    description:
      "Awards, certifications, and milestones that mark my professional growth.",
    href: "/achievements",
    icon: "🏆",
  },
  {
    title: "Projects",
    description:
      "A showcase of my best work and the technologies I've mastered.",
    href: "/projects",
    icon: "💼",
  },
];

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Head>
        <title>Your Name - Portfolio</title>
        <meta
          name="description"
          content="Portfolio showcasing my skills and projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar + Hero */}
      <Navbar />
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Quick Stats
            </h2>
            <p className="text-lg text-gray-600">
              A quick look at my professional journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat: QuickStat, index: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Discover more about my journey and work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {previewSections.map((section: PreviewSection, index: number) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{section.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <Link
                  href={section.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
           {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
