"use client"; 
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/app/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration.',
    longDescription: 'Built a comprehensive e-commerce platform with user authentication, product management, shopping cart, and secure payment processing using Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/project1.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project1',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'Developed a team collaboration tool with real-time updates, drag-and-drop functionality, and project timeline management.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Express.js', 'PostgreSQL'],
    image: '/images/project2.jpg',
    demoUrl: 'https://demo2.example.com',
    githubUrl: 'https://github.com/yourusername/project2',
    featured: true,
    category: 'Web App'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts.',
    longDescription: 'Created a weather application that provides detailed forecasts, historical data, and weather maps using multiple APIs.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    image: '/images/project3.jpg',
    demoUrl: 'https://demo3.example.com',
    githubUrl: 'https://github.com/yourusername/project3',
    featured: false,
    category: 'Frontend'
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App', 'Mobile'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I have worked on, showcasing my skills
              in various technologies and frameworks.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category: string) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
