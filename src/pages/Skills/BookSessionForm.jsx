import { useState } from 'react';
import { FaUser, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const BookSessionForm = ({ skill, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email) {
      // Show success toast
      toast.success(`Session booked successfully with ${skill.providerName}!`, {
        duration: 4000,
        icon: '🎉'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: ''
      });
      
      // Close form after a delay
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mb-4">
          <FaCheckCircle className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold gradient-text mb-2">Book Your Session</h3>
        <p className="text-gray-600">
          Fill in your details to book a session for <span className="font-semibold">{skill.skillName}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Session Info */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-purple-200">
          <h4 className="font-semibold text-gray-800 mb-2">Session Details:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Skill:</strong> {skill.skillName}</li>
            <li><strong>Provider:</strong> {skill.providerName}</li>
            <li><strong>Price:</strong> ${skill.price} per session</li>
            <li><strong>Category:</strong> {skill.category}</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 btn-primary-custom"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSessionForm;
