  "use client";
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import { Achievement } from '@/app/types';

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Innovation Award',
    organization: 'Tech Conference 2023',
    date: '2023-11-15',
    description: 'Received recognition for developing an innovative web application that streamlines project management workflows.',
    category: 'award',
    image: '/images/award1.jpg',
    link: 'https://example.com/award'
  },
  // ...rest of your achievements
];

const categoryIcons = {
  award: FaAward,
  certification: FaCertificate,
  publication: FaBook,
  other: FaAward
};

const categoryColors = {
  award: 'bg-yellow-100 text-yellow-800',
  certification: 'bg-blue-100 text-blue-800',
  publication: 'bg-green-100 text-green-800',
  other: 'bg-gray-100 text-gray-800'
};

const categories = ['All', 'award', 'certification', 'publication', 'other'];

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Achievements</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards, certifications, and milestones that mark my professional growth and recognition in the tech industry.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'All' ? 'All' : category}
              </motion.button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = categoryIcons[achievement.category];
              const categoryColor = categoryColors[achievement.category];
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-blue-600 text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-500 text-sm">{formatDate(achievement.date)}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${categoryColor}`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">{achievement.description}</p>
                  
                  {achievement.link && (
                    <div className="flex items-center">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                      >
                        <FaExternalLinkAlt size={14} />
                        View Details
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
