import { motion } from 'framer-motion';
import { FaSearch, FaHandshake, FaChalkboardTeacher, FaStar } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-5xl" />,
      title: "Browse Skills",
      description: "Explore a wide variety of skills offered by talented individuals in your local area.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Connect & Book",
      description: "Find the perfect match for your learning needs and book a session directly with the provider.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaChalkboardTeacher className="text-5xl" />,
      title: "Learn & Grow",
      description: "Attend your session, learn new skills, and expand your knowledge with expert guidance.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <FaStar className="text-5xl" />,
      title: "Rate & Review",
      description: "Share your experience by rating and reviewing to help others find quality skill providers.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slightly increased for smoother flow
        delayChildren: 0.2 // Added small delay for a more natural stagger
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced from 50 for subtler entrance
      scale: 0.95 // Adjusted for less dramatic scaling
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120, // Slightly increased for snappier response
        damping: 20, // Increased for smoother settling
        duration: 0.5 // Added to ensure consistency
      }
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 30, // Slowed down for less aggressive animation
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} // Reduced y movement
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }} // Smoother easing
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ scale: 0.9, opacity: 0 }} // Softer scale
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7,
              type: 'spring',
              stiffness: 120, // Adjusted for smoother spring
              damping: 20
            }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }} // Smoother delay
          >
            Getting started with SkillSwap is easy! Follow these simple steps to begin your learning journey.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={stepVariants}
            >
              {/* Step Number with pulse */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10"
                whileHover={{ scale: 1.15, rotate: 180 }} // Reduced rotation for smoother hover
                transition={{ duration: 0.4, ease: 'easeOut' }} // Smoother hover transition
              >
                {index + 1}
              </motion.div>

              {/* Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  borderColor: 'rgb(168, 85, 247)',
                  y: -8, // Slightly reduced for subtler lift
                  transition: { duration: 0.4, ease: 'easeOut' } // Smoother easing
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }} // Smoother hover
                />

                {/* Icon with rotation and scale */}
                <motion.div 
                  className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0 // Removed rotation for cleaner effect
                  }}
                  animate={{
                    y: [0, -8, 0] // Subtler bounce
                  }}
                  transition={{
                    duration: 2.5, // Slightly longer for smoother cycle
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3 // Slightly increased for better staggering
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Title with slide effect */}
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-purple-600 transition-colors relative z-10"
                  whileHover={{ scale: 1.03 }} // Subtler scale
                  transition={{ duration: 0.3, ease: 'easeOut' }} // Smoother transition
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-center text-sm leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }} // Smoother hover
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Animated Arrow for desktop */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0"
                  animate={{
                    x: [0, 8, 0], // Subtler movement
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2, // Slightly longer for smoother cycle
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }} // Subtler scale
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }} // Smoother easing
        >
          <motion.p 
            className="text-gray-700 text-lg mb-6"
            animate={{
              scale: [1, 1.015, 1] // Subtler pulse
            }}
            transition={{
              duration: 3, // Longer for smoother effect
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Ready to start your learning journey?
          </motion.p>
          <motion.button 
            className="btn-primary-custom text-lg px-8 py-4 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(139, 92, 246, 0.25)' // Softer shadow
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }} //  transition
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}  
            />
            <span className="relative z-10">Get Started Today →</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;