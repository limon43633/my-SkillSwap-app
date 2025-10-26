import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Transform values based on scroll for glassy effect
  const navbarBg = useTransform(
    scrollY,
    [0, 150],
    ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.3)']
  );
  const navbarShadow = useTransform(
    scrollY,
    [0, 150],
    ['0 2px 4px rgba(0, 0, 0, 0.05)', '0 8px 12px rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Logout Handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  const navLinks = (
    <>
      <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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

      {user && !loading && (
        <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
      )}
    </>
  );

  // 🌀 Shimmer animation placeholder for auth buttons
  const AuthLoadingPlaceholder = () => (
    <div className="h-9 w-24 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
  );

  // Animation variants for navbar entrance
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Animation variants for auth buttons transition
  const authButtonVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } },
  };

  // ✅ MOBILE MENU TRANSITION REVISION (Max-Height for smooth slide)
  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      maxHeight: 0, // Animate from 0 height
      paddingTop: 0,
      paddingBottom: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        when: "afterChildren" // Let children fade out first
      } 
    },
    open: {
      opacity: 1,
      maxHeight: '500px', // Use a generous max-height for a smooth slide
      paddingTop: '1.5rem', // pt-6
      paddingBottom: '1rem', // pb-4
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.7,
        when: 'beforeChildren', // Container animates before children
      },
    },
  };

  const mobileButtonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-lg"
      style={{ backgroundColor: navbarBg, boxShadow: navbarShadow }}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)' }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
            </motion.div>
            <motion.span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              SkillSwap
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks}
          </ul>

          {/* 🔹 Auth Section (Desktop) */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            variants={authButtonVariants}
            initial="initial"
            animate={loading ? "initial" : user ? "enter" : "enter"}
            exit="exit"
          >
            {loading ? (
              <AuthLoadingPlaceholder />
            ) : user ? (
              <motion.button
                onClick={handleLogout}
                className="relative px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Logout</span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </motion.button>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    className="px-6 py-2 rounded-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-3xl text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={mobileButtonVariants}
            initial="initial"
            animate="animate"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu (Using framer-motion's 'animate' to drive open/closed) */}
        <motion.div
          className="md:hidden flex flex-col space-y-4 border-t bg-white/10 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden" // ✅ Added overflow-hidden
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"} // ✅ Explicit control
        >
          {/* Menu Links */}
          <motion.ul
            className="flex flex-col space-y-4 px-4"
          >
            {navLinks}
          </motion.ul>

          {/* Mobile Auth Section */}
          {loading ? (
            <div className="h-12 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse mx-4" />
          ) : user ? (
            <motion.div
              className="px-4"
              variants={mobileButtonVariants}
            >
              <motion.button
                onClick={handleLogout}
                className="relative w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Logout</span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              className="px-4 space-y-3"
              variants={mobileButtonVariants}
            >
              <Link
                to="/login"
                className="block text-center px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-center px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;