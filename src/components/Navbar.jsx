import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values based on scroll for glassy effect
  const navbarBg = useTransform(
    scrollY,
    [0, 150],
    ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.3)'] // Semi-transparent white for frosted glass
  );

  const navbarShadow = useTransform(
    scrollY,
    [0, 150],
    ['0 2px 4px rgba(0, 0, 0, 0.05)', '0 8px 12px rgba(0, 0, 0, 0.1)'] // Kept for depth
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder for auth – will be connected to Firebase later
  const user = null; // Replace with actual auth context
  const displayName = 'John Doe';

  const navLinks = (
    <>
      <motion.li
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-semibold'
              : 'hover:text-purple-600 transition-colors'
          }
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-semibold'
              : 'hover:text-purple-600 transition-colors'
          }
        >
          My Profile
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-lg" // Stronger blur for glassy effect
      style={{
        backgroundColor: navbarBg,
        boxShadow: navbarShadow,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
            </motion.div>
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              SkillSwap
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks}
          </ul>

          {/* Auth Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <FaUserCircle className="text-4xl text-purple-600 cursor-pointer" />
                  </motion.div>
                  <motion.div
                    className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg p-3 min-w-[200px]"
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{
                      opacity: isMenuOpen ? 1 : 0,
                      y: isMenuOpen ? 0 : -8,
                      scale: isMenuOpen ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {displayName}
                    </p>
                    <motion.button
                      className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      Logout
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <motion.button
                    className="px-6 py-2 rounded-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 focus:outline-none transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    className="relative px-6 py-2 rounded-lg font-semibold text-white overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none"
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                    <span className="relative z-10">Sign Up</span>
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-3xl text-purple-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <motion.ul
            className="flex flex-col space-y-3 pt-4 pb-4 border-t"
            variants={{
              open: {
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
              },
            }}
            initial="closed"
            animate={isMenuOpen ? 'open' : 'closed'}
          >
            <motion.div
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -15, opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {navLinks}
            </motion.div>
            {user ? (
              <motion.li
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: -15, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Logout
                </button>
              </motion.li>
            ) : (
              <>
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -15, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-2 rounded-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 transition-colors"
                  >
                    Login
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -15, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    to="/signup"
                    className="block w-full text-center relative px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                    <span className="relative z-10">Sign Up</span>
                  </Link>
                </motion.li>
              </>
            )}
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;