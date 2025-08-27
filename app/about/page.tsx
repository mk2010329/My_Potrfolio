"use client"; 
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Skill } from "@/app/types";

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Database Design", level: 70 },
  { name: "UI/UX Design", level: 65 },
];

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a love for creating innovative
              solutions and beautiful user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 3 years of experience in web development, I specialize in
                  creating modern, responsive applications using cutting-edge technologies.
                </p>
                <p>
                  My journey began during college when I discovered my passion for coding.
                  Since then, I've worked on numerous projects ranging from small business
                  websites to large-scale applications.
                </p>
                <p>
                  I believe in writing clean, maintainable code and always staying updated
                  with the latest industry trends and best practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill: Skill, index: number) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
