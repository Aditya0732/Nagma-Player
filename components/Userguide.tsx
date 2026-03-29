import { useEffect, useRef, useState } from "react";
import { BarChart3, Headphones, Music, Music2 } from "lucide-react";
import type { HomepageContent } from "@/lib/content-schema";

type UserguideData = HomepageContent["userguide"];

const iconMap = {
  headphones: Headphones,
  music2: Music2,
  barchart3: BarChart3,
  music: Music,
} as const;

const Userguide = ({ data }: { data: UserguideData }) => {
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

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        {/* Intro Section */}
        <section id="how-it-works" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              {data.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {data.description}
            </p>
          </div>
        </section>

        {/* Mobile Cards Layout */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto space-y-12">
            {data.cards.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-fill to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
            })}
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
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {data.description}
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
            {data.cards.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
              <div
                key={index}
                className="min-w-full h-screen flex items-center justify-center px-6 lg:px-8 flex-shrink-0"
              >
                <div className="max-w-7xl w-full grid grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-primary-fill to-accent flex items-center justify-center mb-4 sm:mb-6 transform transition-transform hover:scale-110">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
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
            );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Userguide;
