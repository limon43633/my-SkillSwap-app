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
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
      cta: "Explore Skills",
      hoverCta: "Explore Skills →",
      gradient: "from-indigo-600/80 via-sky-500/70 to-blue-600/80",
    },
    {
      id: 2,
      title: "Share Your Expertise & Earn",
      subtitle: "Turn your knowledge into opportunity",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
      cta: "Become a Provider",
      hoverCta: "Become a Provider →",
      gradient: "from-fuchsia-600/80 via-pink-600/75 to-rose-600/80",
    },
    {
      id: 3,
      title: "Build Your Community Network",
      subtitle: "Exchange skills and grow together",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&q=80",
      cta: "Join Now",
      hoverCta: "Join Now →",
      gradient: "from-emerald-600/80 via-teal-600/70 to-cyan-600/80",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden mt-20 mb-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[520px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-2xl md:rounded-[2rem] ">
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
                    className="absolute inset-0 bg-cover bg-center brightness-[0.85] transition-transform duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 70%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25), transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-16 z-10 text-center">
                    <div className="w-full max-w-md sm:max-w-2xl md:max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.15)] animate-fade-in">
                      <div className="mb-5 sm:mb-6">
                        <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-medium shadow-md backdrop-blur-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                          Join 10,000+ Learners
                        </span>
                      </div>

                      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-snug tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] mb-3 sm:mb-4">
                        {slide.title}
                      </h1>

                      <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg sm:max-w-2xl mx-auto mb-8">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Primary CTA */}
                        <button type="button" className="cta-button cta-primary w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4">
                          <span className="label">{slide.cta}</span>
                          <span className="arrow">{slide.hoverCta}</span>
                        </button>

                        {/* Secondary CTA */}
                        <button type="button" className="cta-button cta-secondary w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4">
                          <span className="label">Learn More</span>
                          <span className="arrow">Learn More →</span>
                        </button>
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
        /* Navigation */
        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: white;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
        }
        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 14px;
          font-weight: 700;
        }

        /* Pagination */
        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 6px;
          background: white;
          box-shadow: 0 0 12px rgba(255,255,255,0.6);
        }

        /* CTA Buttons */
        .cta-button {
          position: relative;
          overflow: hidden;
          display: inline-block;
          padding: 12px 28px;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          background: transparent;
          cursor: pointer;
          transition: all 0.4s ease;
          isolation: isolate;
        }

        .cta-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          transform: scaleX(0);
          transform-origin: left center;
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.3s ease;
          z-index: 1;
          border-radius: inherit;
        }

        .cta-secondary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: scaleX(0);
          transform-origin: left center;
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.3s ease;
          z-index: 1;
          border-radius: inherit;
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
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        .cta-button:hover::before {
          transform: scaleX(1);
          opacity: 1;
        }

        .cta-button:hover .label {
          opacity: 0;
          transform: translateX(-20px);
        }

        .cta-button:hover .arrow {
          opacity: 1;
          transform: translate(-50%, -50%) translateX(0);
        }

        .cta-button:active {
          transform: scale(0.97);
        }

        /* Fade */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Tweaks (Dynamic & Bold) */
        @media (max-width: 640px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            display: none;
          }
          .hero-swiper {
            height: 520px;
          }
          .cta-button {
            width: 100%;
            text-align: center;
            font-size: 0.95rem;
            padding: 14px 0;
            border-width: 1.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
