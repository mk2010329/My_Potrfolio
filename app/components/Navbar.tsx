  "use client";

  import { useState } from "react";
  import { useRouter } from "next/navigation";
  import { motion } from "framer-motion";
  import { FaBars, FaTimes } from "react-icons/fa";
  import { NavItem } from "@/app/types";

  const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    const navItems: NavItem[] = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Education", path: "/education" },
      { name: "Achievements", path: "/achievements" },
      { name: "Projects", path: "/projects" },
    ];

    return (
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50" style={{
        background: `linear-gradient(135deg, 
          #0A369D 0%, 
          #4472CA 20%, 
          #5E7CE2 40%, 
          #92B4F4 60%, 
          #CFDEE7 80%, 
          #001233 100%
        )`,
          backgroundSize: '400% 400%',
  animation: 'gradientMove 10s ease infinite'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
          <div className="flex justify-between items-center h-16" >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-blue-600 cursor-pointer" style={{ color: '#e9e9e9ff' }}
              onClick={() => router.push("/")}
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item: NavItem, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                    onClick={() => router.push(item.path)}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item: NavItem) => (
                  <button
                    key={item.name}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      router.push(item.path);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      
    );
  };

  export default Navbar;
