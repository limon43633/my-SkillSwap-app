import { useNavigate } from 'react-router-dom';
import { FaStar, FaDollarSign, FaUsers } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; //  use AuthContext

const SkillCard = ({ skill, index = 0 }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleViewDetails = () => {
    if (user) {
      navigate(`/skill/${skill.skillId}`);
    } else {
      navigate('/login', { state: { from: `/skill/${skill.skillId}` } });
    }
  };

  return (
    <div
      className="group h-full animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
        <div className="relative overflow-hidden h-56 bg-gray-100">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-bold text-gray-800">{skill.rating}</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-600 shadow-lg">
              {skill.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
            {skill.skillName}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">{skill.description}</p>

          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {skill.providerName.charAt(0)}
            </div>
            <div>
              <p className="text-xs text-gray-500">Taught by</p>
              <p className="text-sm font-semibold text-gray-800">{skill.providerName}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1 text-green-600">
              <FaDollarSign className="text-lg" />
              <span className="text-lg font-bold">{skill.price}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <FaUsers className="text-sm" />
              <span className="text-sm font-medium">{skill.slotsAvailable} slots</span>
            </div>
          </div>

          <button
            onClick={handleViewDetails}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;