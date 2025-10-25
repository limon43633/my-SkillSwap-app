// src/pages/Skills/SkillDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaStar,
  FaDollarSign,
  FaUsers,
  FaEnvelope,
  FaArrowLeft,
  FaTag, 
  FaClock,
  FaCalendarAlt,
  FaUserCircle 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills.json';

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const timer = setTimeout(() => {
      const foundSkill = skillsData.find((s) => s.skillId === parseInt(id));
      setSkill(foundSkill || null);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [id]);

  // ✅ Simple loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-700 font-medium">Loading skill details...</p>
        </motion.div>
      </div>
    );
  }

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Skill not found</h2>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  // --- Animation Variants ---
  const pageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const backButtonVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.2 } }
  };

  const contentBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.4 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.6 } }
  };
  // --- End Variants ---

  return (
    <motion.div
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
      // CHANGED: Setting the background to a light gray, professional gradient
      className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 py-10 md:py-16 overflow-hidden" 
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <motion.div variants={backButtonVariants} className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold group transition-all duration-300 text-lg"
          >
            <FaArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Back to Skills Home</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Right Content Section */}
          <motion.div
            variants={contentBlockVariants}
            className="lg:col-span-2 bg-white/90 backdrop-blur-3xl rounded-3xl p-6 md:p-10 border border-white/50"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6 leading-tight">
              {skill.skillName}
            </h1>

            <div className="flex items-center gap-4 mb-7 pb-6 border-b border-gray-200">
              <img
                src={`https://i.pravatar.cc/120?u=${skill.providerEmail}`}
                alt={skill.providerName}
                className="w-16 h-16 rounded-full border-4 border-purple-200 object-cover"
              />
              <div>
                <p className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                  <FaUserCircle className="text-indigo-500 text-lg" />
                  <span>{skill.providerName}</span>
                </p>
                <div className="flex items-center space-x-1 text-slate-500 text-sm mt-1">
                  <FaEnvelope className="text-xs" />
                  <span>{skill.providerEmail}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-7 pb-6 border-b border-gray-200">
              {[
                { icon: FaStar, value: skill.rating, label: 'Rating', color: 'text-yellow-500', bg: 'from-yellow-50 to-white' },
                { icon: FaDollarSign, value: `$${skill.price}`, label: 'Per Session', color: 'text-emerald-600', bg: 'from-emerald-50 to-white' },
                { icon: FaUsers, value: skill.slotsAvailable, label: 'Slots Left', color: 'text-indigo-600', bg: 'from-indigo-50 to-white' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center bg-gradient-to-br ${stat.bg} rounded-xl p-4 border border-gray-100`}
                >
                  <stat.icon className={`text-3xl mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center space-x-2">
                <FaClock className="text-purple-600" />
                <span>About This Skill</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-base tracking-wide border-l-4 border-purple-300/50 pl-4 py-1">
                {skill.description}
              </p>
            </div>

            <motion.button
              onClick={() => navigate(`/skill/${skill.skillId}/book`)}
              className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-lg py-4 rounded-xl transition-all duration-500 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <FaCalendarAlt className="text-xl group-hover:rotate-6 transition-transform" />
                <span className="tracking-wider">Book a Session</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Left Image Section - No Shadow */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-3 relative w-full mx-auto"
          >
            <div className="rounded-xl overflow-hidden bg-white/60 border border-white/50 transition-all duration-500">
              <motion.img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-[350px] md:h-[550px] object-cover rounded-xl"
                whileHover={{ scale: 1.03, filter: 'brightness(0.97)' }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-indigo-700 px-5 py-2 rounded-lg text-sm font-bold flex items-center space-x-2">
                <FaTag className="text-sm" />
                <span>{skill.category}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default SkillDetails;