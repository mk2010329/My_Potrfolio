"use client"; 
import Navbar from '@/app/components/Navbar';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import type { Education } from '@/app/types';

const educationData: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'New York, NY',
    period: '2018 - 2022',
    gpa: '3.8/4.0',
    description: 'Focused on software engineering, algorithms, and web development. Completed multiple projects including a full-stack web application and mobile app development.',
    image: '/images/university1.jpg'
  },
  {
    id: '2',
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Tech Academy',
    location: 'Online',
    period: '2022',
    description: 'Intensive 6-month program covering modern web technologies including React, Node.js, databases, and deployment strategies.',
    image: '/images/bootcamp.jpg'
  },
  {
    id: '3',
    degree: 'High School Diploma',
    institution: 'Central High School',
    location: 'Boston, MA',
    period: '2014 - 2018',
    gpa: '3.9/4.0',
    description: 'Graduated with honors. President of Computer Club and participant in regional programming competitions.',
    image: '/images/highschool.jpg'
  }
];

const Education = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and continuous learning in technology and development.
            </p>
          </motion.div>

          <div className="space-y-12">
            {educationData.map((edu: Education, index: number) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                      <span className="text-4xl">🎓</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-blue-600 font-medium mb-4">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
