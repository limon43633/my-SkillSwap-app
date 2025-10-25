// src/pages/Skills/BookSessionForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaClock,
  FaCommentDots,
  FaCheckCircle,
} from 'react-icons/fa';
import skillsData from '../../data/skills.json';

const BookSessionForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const skill = skillsData.find((s) => s.skillId === parseInt(id, 10));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Skill Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Please verify the skill link and try again.
          </p>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <FaArrowLeft /> Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate(`/skill/${skill.skillId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/30"
      >
        {/* Back Button */}
        <Link
          to={`/skill/${skill.skillId}`}
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-5 transition-colors duration-200"
        >
          <FaArrowLeft /> Back to {skill.skillName}
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Book a <span className="text-indigo-600">Session</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Master{' '}
            <span className="font-semibold text-indigo-600">
              {skill.skillName}
            </span>{' '}
            with{' '}
            <span className="font-semibold text-indigo-600">
              {skill.providerName}
            </span>
            .
          </p>
        </div>

        {/* Success Message */}
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600">
              Redirecting you back to the skill page...
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-indigo-500" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-indigo-500" /> Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaClock className="text-indigo-500" /> Preferred Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaCommentDots className="text-indigo-500" /> Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Any special requests or questions?"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            >
              Confirm Booking
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default BookSessionForm;
