import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Learn New Skills From Local Experts",
      subtitle: "Connect with talented individuals in your community",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      cta: "Explore Skills",
      hoverCta: "Explore Skills →",
      gradient: "from-blue-600/90 via-blue-700/85 to-purple-600/90",
    },
    {
      id: 2,
      title: "Share Your Expertise & Earn",
      subtitle: "Turn your knowledge into opportunity",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      cta: "Become a Provider",
      hoverCta: "Become a Provider →",
      gradient: "from-purple-600/90 via-purple-700/85 to-pink-600/90",
    },
    {
      id: 3,
      title: "Build Your Community Network",
      subtitle: "Exchange skills and grow together",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80",
      cta: "Join Now",
      hoverCta: "Join Now →",
      gradient: "from-emerald-600/90 via-teal-600/85 to-cyan-600/90",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden mt-20 mb-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-2xl shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            loop
            className="h-full w-full hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-full w-full">
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center z-10">
                    <div className="w-full px-6 md:px-12">
                      <div className="max-w-3xl space-y-6">
                        <div className="inline-block animate-fade-in">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-lg">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            Join 10,000+ Learners
                          </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl animate-fade-in">
                          {slide.title}
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl drop-shadow-lg animate-fade-in">
                          {slide.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 animate-fade-in">
                          {/* Primary CTA with Hover Effect */}
                          <button type="button" className="cta-button cta-primary">
                            <span className="label">{slide.cta}</span>
                            <span className="arrow">{slide.hoverCta}</span>
                          </button>

                          {/* Secondary CTA with Hover Effect */}
                          <button type="button" className="cta-button cta-secondary">
                            <span className="label">Learn More</span>
                            <span className="arrow">Learn More →</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        /* Swiper Navigation */
        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          width: 28px;      /* Reduced from 48px */
          height: 28px;     /* Reduced from 48px */
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 12px;  /* Reduced from 20px */
          font-weight: bold;
        }

        /* Pagination */
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: white;
        }

        /* Smooth CTA Button Base Styles */
        .cta-button {
          position: relative;
          overflow: hidden;
          display: inline-block;
          padding: 14px 32px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          background: transparent;
          cursor: pointer;
          isolation: isolate;
        }

        /* Primary Button Gradient */
        .cta-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.4s ease, opacity 0.3s ease;
          z-index: 1;
          border-radius: 10px;
        }

        /* Secondary Button Gradient */
        .cta-secondary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.15);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.4s ease, opacity 0.3s ease;
          z-index: 1;
          border-radius: 10px;
        }

        .cta-button .label,
        .cta-button .arrow {
          position: relative;
          z-index: 2;
          display: inline-block;
          transition: all 0.4s ease;
        }

        .cta-button .arrow {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translateX(30px);
          opacity: 0;
          white-space: nowrap;
        }

        .cta-button:hover {
          border-color: rgba(255,255,255,0.6);
          transform: scale(1.05);
        }

        .cta-button:hover::before {
          opacity: 1;
          transform: scaleX(1);
        }

        .cta-button:hover .label {
          opacity: 0;
          transform: translateX(-30px);
        }

        .cta-button:hover .arrow {
          opacity: 1;
          transform: translate(-50%, -50%) translateX(0);
        }

        .cta-button:active {
          transform: scale(0.98);
        }

        /* Animations */
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        /* Performance Optimization */
        .hero-swiper *,
        .cta-button * {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;