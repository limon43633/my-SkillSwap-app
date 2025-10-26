import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { user } = useAuth();

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

      {user && (
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

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-lg"
      style={{ backgroundColor: navbarBg, boxShadow: navbarShadow }}
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

          {/* 🔹 Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <motion.button
                onClick={handleLogout}
                className="px-6 py-2 rounded-lg font-semibold border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Logout
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
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-3xl text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden flex flex-col space-y-3 pt-4 pb-4 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
          >
            {navLinks}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
