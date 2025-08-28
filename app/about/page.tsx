"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Skill } from "@/app/types";

import { IconType } from "react-icons"; // this is the proper type

const coreSkills: Array<{ name: string; level: number; Icon: IconType; color: string }> = [
  { name: "JavaScript", level: 90, Icon: FaJs, color: "text-yellow-400" },
  { name: "Python", level: 75, Icon: FaPython, color: "text-green-500" },
  { name: "Java", level: 80, Icon: FaJava, color: "text-red-600" },
  { name: "Database Design", level: 70, Icon: FaDatabase, color: "text-blue-600" },
];

const otherLanguages: Array<{ name: string; Icon: IconType; color: string }> = [
  { name: "C", Icon: SiGithub, color: "text-gray-600" },
  { name: "Dart", Icon: SiFlutter, color: "text-blue-500" },
  { name: "HTML/CSS", Icon: FaHtml5, color: "text-orange-500" },
  { name: "PL/SQL", Icon: FaDatabase, color: "text-blue-500" },
];

const frameworksTools: Array<{ name: string; Icon: IconType; color: string }> = [
  { name: "React.js", Icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black" },
  { name: "Flutter", Icon: SiFlutter, color: "text-blue-500" },
  { name: "Prisma", Icon: SiPrisma, color: "text-gray-700" },
  { name: "FastAPI", Icon: SiFastapi, color: "text-green-600" },
  { name: "Git/GitHub", Icon: FaGitAlt, color: "text-orange-500" },
  { name: "JUnit", Icon: SiJunit5, color: "text-green-600" },
  { name: "Gradle", Icon: SiGradle, color: "text-blue-600" },
];


import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaLinux 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiFlutter, 
  SiPrisma, 
  SiFastapi, 
  SiGithub, 
  SiJunit5, 
  SiGradle, 
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel
} from "react-icons/si";

// Enhanced floating icons with actual tech icons
const floatingIcons = [
 { Icon: FaReact, color: "text-[#61DAFB]" },
 { Icon: FaPython, color: "text-[#3776AB]" },
 { Icon: FaJava, color: "text-[#ED8B00]" },
 { Icon: FaJs, color: "text-[#F7DF1E]" },
 { Icon: SiNextdotjs, color: "text-[#000000]" },
 { Icon: SiFlutter, color: "text-[#02569B]" },
 { Icon: FaGitAlt, color: "text-[#F05032]" },
 { Icon: FaDatabase, color: "text-[#336791]" },
 { Icon: SiTailwindcss, color: "text-[#06B6D4]" },
 { Icon: SiTypescript, color: "text-[#3178C6]" },
 { Icon: SiMongodb, color: "text-[#47A248]" },
 { Icon: SiDocker, color: "text-[#2496ED]" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I&apos;m a passionate full-stack developer with a love for creating
              innovative solutions and beautiful user experiences.
            </motion.p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-white/20"
          >
            {/* Enhanced Floating Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {floatingIcons.map((item, idx) => {
                const startX = Math.random() * 800;
                const startY = Math.random() * 600;
                const moveRange = 100 + Math.random() * 150;
                const duration = 15 + Math.random() * 10;

                return (
                  <motion.div
                    key={idx}
                    className={`absolute text-4xl ${item.color} opacity-30 hover:opacity-70 transition-all duration-300`}
                    initial={{ x: startX, y: startY, rotate: 0, scale: 0.8 }}
                    animate={{
                      x: [startX, startX + moveRange, startX - moveRange, startX],
                      y: [startY, startY + moveRange, startY - moveRange, startY],
                      rotate: [0, 360],
                      scale: [0.8, 1.1, 0.9, 1],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.3, opacity: 0.8 }}
                  >
                    <item.Icon size={48} />
                  </motion.div>
                );
              })}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* My Story */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">My Story</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  With over 3 years of experience in web development, I specialize
                  in creating modern, responsive applications using cutting-edge
                  technologies. My journey began during college when I discovered
                  my passion for coding and building solutions that make a difference.
                </p>
                <div className="mt-4 text-sm text-blue-600 font-medium">
                  🚀 Always learning, always growing
                </div>
              </motion.div>

              {/* Core Skills */}
              <motion.div
                className="bg-gradient-to-br from-emerald-50 to-green-100/50 p-8 rounded-2xl border border-emerald-200/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Core Skills</h2>
                </div>
                {coreSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="mb-4 last:mb-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.Icon className={`${skill.color} text-lg`} />
                        <span className="text-sm font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-emerald-600 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.7 + index * 0.1,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 h-3 rounded-full shadow-sm"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Other Languages */}
              <motion.div
                className="bg-gradient-to-br from-amber-50 to-yellow-100/50 p-8 rounded-2xl border border-amber-200/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Other Languages</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {otherLanguages.map((lang, index) => (
                    <motion.span
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-amber-200 to-yellow-200 px-4 py-2 rounded-full text-sm font-semibold text-amber-800 shadow-sm hover:shadow-md transition-all cursor-default flex items-center space-x-2"
                    >
                      <lang.Icon className={`${lang.color} text-base`} />
                      <span>{lang.name}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Tools */}
              <motion.div
                className="bg-gradient-to-br from-violet-50 to-purple-100/50 p-8 rounded-2xl border border-violet-200/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Frameworks & Tools</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {frameworksTools.map((tool, index) => (
                    <motion.span
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gradient-to-r from-violet-200 to-purple-200 px-4 py-2 rounded-full text-sm font-semibold text-violet-800 shadow-sm hover:shadow-md transition-all cursor-default flex items-center space-x-2"
                    >
                      <tool.Icon className={`${tool.color} text-base`} />
                      <span>{tool.name}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 text-center"
            >
              
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}