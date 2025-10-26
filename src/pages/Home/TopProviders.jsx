import { useState, useEffect } from 'react';
import { FaStar, FaAward } from 'react-icons/fa';
import skillsData from '../../data/skills.json';

const TopProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Get unique top providers by rating
    const uniqueProviders = [];
    const providerEmails = new Set();
    
    [...skillsData]
      .sort((a, b) => b.rating - a.rating)
      .forEach(skill => {
        if (!providerEmails.has(skill.providerEmail) && uniqueProviders.length < 4) {
          providerEmails.add(skill.providerEmail);
          uniqueProviders.push({
            name: skill.providerName,
            email: skill.providerEmail,
            rating: skill.rating,
            skill: skill.skillName,
            category: skill.category,
            image: `https://i.pravatar.cc/300?u=${skill.providerEmail}`
          });
        }
      });
    
    setProviders(uniqueProviders);
  }, []);

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      
      {/* Smooth Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-purple-400 rounded-full animate-float-smooth"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="animate-spin-slow">
              <FaAward className="text-3xl md:text-5xl text-yellow-500" />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Top Rated <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Providers</span>
            </h2>
          </div>
          
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 md:mb-6 rounded-full"></div>
          
          <p className="text-gray-600 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto">
            Meet our exceptional skill providers who have earned the trust and appreciation of our community.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {providers.map((provider, index) => (
            <div 
              key={provider.email}
              className="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center group cursor-pointer relative animate-fade-in animate-float-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              {/* Smooth Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-blue-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 transition-all duration-700"></div>

              {/* Avatar with Smooth Rotation */}
              <div className="relative inline-block mb-3 md:mb-4">
                <div className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                  <img 
                    src={provider.image}
                    alt={provider.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-purple-200 group-hover:border-purple-400 transition-colors duration-500"
                  />
                </div>
                
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-yellow-500 text-white p-1.5 md:p-2 rounded-full shadow-lg animate-bounce-gentle">
                  <FaAward className="text-xs md:text-sm" />
                </div>
              </div>

              {/* Provider Info */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-purple-600 transition-all duration-500 relative z-10 group-hover:scale-105">
                {provider.name}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 relative z-10 transition-all duration-300">{provider.skill}</p>
              
              <div className="inline-block bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-semibold mb-2 md:mb-3 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
                {provider.category}
              </div>

              {/* Rating with Smooth Pulse */}
              <div className="flex items-center justify-center gap-1 md:gap-2 text-yellow-500 mb-3 md:mb-4 relative z-10">
                <FaStar className="text-base md:text-lg animate-pulse-smooth" />
                <span className="font-bold text-gray-700 text-base md:text-lg">{provider.rating}</span>
                <span className="text-gray-500 text-xs md:text-sm">/ 5.0</span>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 md:py-3 rounded-xl relative z-10 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95">
                <span className="relative z-10 transition-all duration-300 group-hover:text-white">View Profile</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Smooth Floating Animation for Particles */
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-60px) translateX(-10px);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
        }

        .animate-float-smooth {
          animation: float-smooth 8s ease-in-out infinite;
        }

        /* Smooth Card Float */
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }

        /* Smooth Spin */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        /* Smooth Bounce */
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        /* Smooth Pulse */
        @keyframes pulse-smooth {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-pulse-smooth {
          animation: pulse-smooth 2s ease-in-out infinite;
        }

        /* GPU Acceleration for Smooth Performance */
        .animate-float-smooth,
        .animate-float-card,
        .animate-spin-slow,
        .animate-bounce-gentle,
        .animate-pulse-smooth {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Responsive Adjustments */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .grid {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default TopProviders;