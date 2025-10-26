import { Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  // Wait for Firebase to finish restoring user session
  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 relative overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        {/* Glassy Loader Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-10 flex flex-col items-center"
        >
          {/* Spinner */}
          <motion.div
            className="w-14 h-14 border-4 border-indigo-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            }}
          />

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-700 font-medium tracking-wide"
          >
            Checking authentication...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // If user not logged in → redirect to Login
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Authenticated → allow access
  return children;
};

export default ProtectedRoute;
