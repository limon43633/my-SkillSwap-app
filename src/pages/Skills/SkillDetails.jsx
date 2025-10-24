import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDollarSign, FaUsers, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import skillsData from '../../data/skills.json';
import BookSessionForm from './BookSessionForm';

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const foundSkill = skillsData.find(s => s.skillId === parseInt(id));
    setSkill(foundSkill);
  }, [id]);

  if (!skill) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Skill not found</h2>
        <Link to="/" className="text-purple-600 hover:underline mt-4 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 group"
          data-aos="fade-right"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={skill.image} 
                alt={skill.skillName}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8" data-aos="fade-left">
            {/* Category Badge */}
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {skill.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {skill.skillName}
            </h1>

            {/* Provider Info */}
            <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
              <img 
                src={`https://i.pravatar.cc/100?u=${skill.providerEmail}`}
                alt={skill.providerName}
                className="w-16 h-16 rounded-full border-4 border-purple-200"
              />
              <div>
                <p className="text-lg font-bold text-gray-800">{skill.providerName}</p>
                <div className="flex items-center space-x-1 text-gray-600">
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm">{skill.providerEmail}</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
                  <FaStar className="text-2xl" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{skill.rating}</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-green-600 mb-1">
                  <FaDollarSign className="text-2xl" />
                </div>
                <p className="text-2xl font-bold text-gray-800">${skill.price}</p>
                <p className="text-sm text-gray-600">Per Session</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-blue-600 mb-1">
                  <FaUsers className="text-2xl" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{skill.slotsAvailable}</p>
                <p className="text-sm text-gray-600">Slots Left</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">About This Skill</h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Book Session Button */}
            <button
              onClick={() => setShowBookingForm(!showBookingForm)}
              className="w-full btn-primary-custom text-lg py-4"
            >
              {showBookingForm ? 'Hide Booking Form' : 'Book a Session'}
            </button>
          </div>
        </div>

        {/* Booking Form */}
        {showBookingForm && (
          <div className="mt-8" data-aos="fade-up">
            <BookSessionForm skill={skill} onClose={() => setShowBookingForm(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
