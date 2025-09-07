"use client";
import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaCertificate, FaExternalLinkAlt, FaTimes, FaExpand } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import React from "react";
import { IconType } from 'react-icons';

// Type definitions
interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'award' | 'certification';
  image?: string;
  link?: string;
}

interface ImageModalProps {
  image?: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

type CategoryType = 'all' | 'award' | 'certification';

// Mock Navbar component
// const Navbar = () => (
//   <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-lg">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center h-16">
//         <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           Portfolio
//         </div>
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
//           <a href="#" className="text-blue-600 font-medium">Achievements</a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Innovation Award',
    organization: 'Tech Conference 2023',
    date: '2023-11-15',
    description: 'Received recognition for developing an innovative web application that streamlines project management workflows.',
    category: 'award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
    link: 'https://example.com/award'
  },
  {
    id: '2',
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: '2023-09-20',
    description: 'Certified in AWS cloud fundamentals, demonstrating knowledge of cloud computing concepts and AWS services.',
    category: 'certification',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    link: 'https://example.com/cert'
  },
  {
    id: '3',
    title: 'Outstanding Developer Award',
    organization: 'Company Annual Awards',
    date: '2023-12-10',
    description: 'Recognized for exceptional coding skills and contribution to multiple high-impact projects throughout the year.',
    category: 'award',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    link: 'https://example.com/developer-award'
  },
  {
    id: '4',
    title: 'React Developer Certification',
    organization: 'Meta',
    date: '2023-08-15',
    description: 'Advanced certification in React development, covering hooks, state management, and modern React patterns.',
    category: 'certification',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    link: 'https://example.com/react-cert'
  },
];

const categoryIcons: Record<Achievement['category'], IconType> = {
  award: FaAward,
  certification: FaCertificate,
};
const categoryColors: Record<Achievement['category'], string> = {
  award: 'from-yellow-400 to-orange-500',
  certification: 'from-blue-400 to-indigo-500',
};

const categoryBadgeColors: Record<Achievement['category'], string> = {
  award: 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800',
  certification: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800',
};

const categories: CategoryType[] = ['all', 'award', 'certification'];

// Image Modal Component
const ImageModal: React.FC<ImageModalProps> = ({ image, title, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
          >
            <FaTimes size={20} />
          </button>
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="p-6 bg-gradient-to-t from-white to-gray-50">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Achievements(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [modalImage, setModalImage] = useState<{ image: string; title: string } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const closeImageModal = (): void => {
    setModalImage(null);
  };

  const openImageModal = (image: string, title: string): void => {
    setModalImage({ image, title });
  };

  const handleCategoryChange = (category: CategoryType): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false);
    }, 150);
  };

  const shouldShowAchievement = (achievement: Achievement) => {
    return selectedCategory === 'all' || achievement.category === selectedCategory;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Achievements
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of awards, certifications, and milestones that highlight my journey and expertise in technology
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 capitalize shadow-lg hover:shadow-xl relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-gray-200/50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="relative z-10">{category === 'all' ? 'All' : category}</span>
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    style={{ borderRadius: '9999px' }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <AnimatePresence>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {achievements.map((achievement) => {
                const IconComponent = categoryIcons[achievement.category];
                const gradientColor = categoryColors[achievement.category];
                const badgeColor = categoryBadgeColors[achievement.category];
                const isVisible = shouldShowAchievement(achievement);
                
                return (
                  <motion.div
                    key={achievement.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8,
                      y: isVisible ? 0 : 20,
                      display: isVisible ? "block" : "none"
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                    whileHover={isVisible ? { y: -8, scale: 1.02 } : {}}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/50 overflow-hidden transition-all duration-300"
                  >
                    {/* Gradient Border Animation */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                      <div className="h-full w-full bg-white/90 backdrop-blur-sm rounded-2xl"></div>
                    </div>

                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div 
                          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${gradientColor} rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="text-white text-2xl" />
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {achievement.title}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-2 text-lg">
                            {achievement.organization}
                          </p>
                          <p className="text-gray-500 font-medium">{formatDate(achievement.date)}</p>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="mb-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold capitalize shadow-md ${badgeColor}`}>
                          <IconComponent className="mr-2" />
                          {achievement.category}
                        </span>
                      </div>

                      {/* Image */}
                      {achievement.image && (
                        <motion.div 
                          className="relative mb-6 group/image cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => openImageModal(achievement.image!, achievement.title)}
                        >
                          <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                              >
                                <FaExpand className="text-white text-xl" />
                              </motion.div>
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover/image:opacity-100 transition-opacity">
                            <FaExpand className="text-white text-sm" />
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{achievement.description}</p>
                      
                      {/* Link */}
                      {achievement.link && (
                        <motion.div className="flex items-center">
                          <motion.a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt />
                            View Certificate
                          </motion.a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal 
        image={modalImage?.image}
        title={modalImage?.title}
        isOpen={!!modalImage}
        onClose={closeImageModal}
      />
    </div>
  );
}
