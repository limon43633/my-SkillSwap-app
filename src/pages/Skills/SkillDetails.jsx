// src/pages/Skills/SkillDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaDollarSign, FaUsers, FaEnvelope, FaArrowLeft, FaCheck, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills.json';
import BookSessionForm from './BookSessionForm';

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const foundSkill = skillsData.find(s => s.skillId === parseInt(id));
    setSkill(foundSkill);
  }, [id]);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Skill not found</h2>
          <Link to="/" className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-8 group transition-all duration-300"
          >
            <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section with Parallax-like Zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <motion.img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-[350px] md:h-[450px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              {/* Floating Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-indigo-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2"
              >
                <FaCheck className="text-xs" />
                <span>{skill.category}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Details Section with Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30"
          >
            {/* Title with Gradient Text */}
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {skill.skillName}
            </h1>

            {/* Provider Info with Hover Lift */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200/50"
            >
              <div className="relative">
                <img
                  src={`https://i.pravatar.cc/120?u=${skill.providerEmail}`}
                  alt={skill.providerName}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-indigo-100 shadow-md"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-slate-800">{skill.providerName}</p>
                <div className="flex items-center space-x-1 text-slate-600">
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm">{skill.providerEmail}</span>
                </div>
              </div>
            </motion.div>

            {/* Modern Stats Grid with Animated Counters */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200/50">
              {[
                { icon: FaStar, value: skill.rating, label: 'Rating', color: 'text-yellow-500' },
                { icon: FaDollarSign, value: `$${skill.price}`, label: 'Per Session', color: 'text-emerald-600' },
                { icon: FaUsers, value: skill.slotsAvailable, label: 'Slots Left', color: 'text-indigo-600' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-center bg-gradient-to-br from-white/50 to-white/30 rounded-2xl p-4 shadow-md backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, shadow: 'lg' }}
                >
                  <stat.icon className={`text-3xl mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Description with Read More */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center space-x-2">
                <FaClock className="text-indigo-600" />
                <span>About This Skill</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {skill.description}
              </p>
            </div>

            {/* Book Session Button now navigates to a separate page */}
            <motion.button
              onClick={() => navigate(`/skill/${skill.skillId}/book`)}
              className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-4 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <FaCalendarAlt />
                <span>Book a Session</span>
              </span>
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* NOTE: booking form is now a separate page at /skill/:id/book */}
      </div>
    </div>
  );
};

export default SkillDetails;
