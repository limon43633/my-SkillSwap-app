import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../../components/SkillCard';
import skillsData from '../../data/skills.json';

const ViewAllSkillPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20 max-sm:w-40 max-sm:h-40"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 max-sm:w-52 max-sm:h-52"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10 max-sm:px-3">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 max-sm:mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-4 max-sm:text-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            All Skills
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full max-sm:w-20"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto max-sm:text-base max-sm:max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore our full range of skills offered by talented providers.
            Find the perfect skill to learn and start your journey today.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.skillId} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ViewAllSkillPage;
