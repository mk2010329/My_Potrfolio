import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SocialLink } from '@/app/types';

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    // { platform: 'GitHub', url: 'https://github.com/yourusername', icon: FaGithub },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammad-hassam-tahir-khaili-88551a1b4/', icon: FaLinkedin },
    { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: FaWhatsapp },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center pt-16" style={{}}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 right-10 w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center"
            >
              <span className="text-xl">🚀</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{' '}
              <span className="text-blue-600">Mohammad Hassam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I&apos;m a passionate developer creating amazing digital experiences.
              Welcome to my portfolio where you can explore my journey,
              education, achievements, and projects.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>

            </div>

            <div className="flex space-x-6">
              {socialLinks.map((link: SocialLink) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-600 hover:text-blue-600 text-2xl"
                    aria-label={`Visit my ${link.platform} profile`}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;