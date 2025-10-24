import { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from './HeroSection';
import PopularSkills from './PopularSkills';
import TopProviders from './TopProviders';
import HowItWorks from './HowItWorks';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <PopularSkills />
      <TopProviders />
      <HowItWorks />
      
      {/* Extra Section - Community Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div data-aos="zoom-in" data-aos-delay="0">
              <h3 className="text-5xl font-bold mb-2">500+</h3>
              <p className="text-xl text-blue-100">Active Members</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-xl text-blue-100">Skills Available</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-5xl font-bold mb-2">1000+</h3>
              <p className="text-xl text-blue-100">Sessions Completed</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-5xl font-bold mb-2">4.8★</h3>
              <p className="text-xl text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;