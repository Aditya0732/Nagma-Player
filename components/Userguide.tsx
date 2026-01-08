import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { BarChart3, Headphones, Music, Music2 } from "lucide-react";

const Userguide = () => {
  const containerRef: any = useRef(null);
  const contentRef: any = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip horizontal scroll on mobile

    const updateScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const container = containerRef.current;
      const content = contentRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const scrollProgress =
          Math.abs(rect.top) / (containerHeight - viewportHeight);
        const maxScroll = content.scrollWidth - window.innerWidth;
        const scrollX = scrollProgress * maxScroll;

        content.style.transform = `translateX(-${Math.min(
          scrollX,
          maxScroll
        )}px)`;
      } else if (rect.top > 0) {
        content.style.transform = `translateX(0px)`;
      } else {
        const maxScroll = content.scrollWidth - window.innerWidth;
        content.style.transform = `translateX(-${maxScroll}px)`;
      }
    };

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [isMobile]);

  const features = [
    {
      icon: Headphones,
      title: "Never Practice Alone Again",
      description:
        "Experience the joy of real accompaniment anytime at tip of your finger. Record and compose your own nagmas, explore what others have uploaded, and be part of a creative community.",
      image: "/musician-with-headphones-practicing-classical-musi.jpg",
      alt: "Musician practicing with headphones",
    },
    {
      icon: Music2,
      title: "Experience the Wide Possibilities of Raags",
      description:
        "Access hundreds of nagmas, composed accordingly to the structure of taals. Build confidence in learning new compositions with precision-tuned accompaniment designed by masters.",
      image: "/indian-classical-musician-studying-music-notation-.jpg",
      alt: "Musician learning raags",
    },
    {
      icon: BarChart3,
      title: "Track Your Musical Growth",
      description:
        "Build daily practice streaks, monitor your progress, and celebrate milestones in your musical journey. Visual insights help you stay motivated and understand your improvement over time.",
      image: "/musician-recording-and-tracking-progress-analytics.jpg",
      alt: "Tracking musical progress",
    },
    {
      icon: Music,
      title: "Built for Your Instrument",
      description:
        "Specialised accompaniments for different instruments and playing styles. Find precisely what your instrument needs from tabla to harmonium, sarangi to sitar, and everything else.",
      image: "/classical-indian-instruments-tabla-harmonium-saran.jpg",
      alt: "Classical instruments",
    },
  ];

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        {/* Intro Section */}
        <section id="how-it-works" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Grind Your Skills to Perfection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Discover how musicians like you are transforming their practice
            </p>
          </div>
        </section>

        {/* Mobile Cards Layout */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="opacity-0 translate-y-8 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <style>{`
          @keyframes fade-in-up {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `}</style>
      </>
    );
  }

  // Desktop Layout (Horizontal Scroll)
  return (
    <>
      {/* Intro Section */}
      <section id="how-it-works" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance px-4">
            Grind Your Skills to Perfection
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover how musicians like you are transforming their practice
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={contentRef}
            className="flex h-screen"
            style={{
              willChange: "transform",
              transition: "transform 0.1s ease-out",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="min-w-full h-screen flex items-center justify-center px-6 lg:px-8 flex-shrink-0"
              >
                <div className="max-w-7xl w-full grid grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-6 transform transition-transform hover:scale-110">
                      <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed mb-6 sm:mb-8">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`group ${
                      index % 2 === 0 ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl group-hover:shadow-3xl group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Userguide;
