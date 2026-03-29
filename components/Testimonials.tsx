import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { HomepageContent } from "@/lib/content-schema";

type TestimonialsData = HomepageContent["testimonials"];

const Testimonials = ({ data }: { data: TestimonialsData }) => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
        return;
      }
      if (window.innerWidth >= 768) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, data.items.length - cardsPerView),
    [data.items.length, cardsPerView],
  );

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const showControls = data.items.length > cardsPerView;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/features/features_background.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white/52"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:mb-4 md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {data.description}
          </p>
        </motion.div>

        <div className="relative">
          {showControls && (
            <>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/50 bg-white/90 p-2 shadow-md transition-colors hover:bg-white cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/50 bg-white/90 p-2 shadow-md transition-colors hover:bg-white cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="overflow-hidden px-8 py-2 sm:px-10">
            <motion.div
              className="flex"
              animate={{
                x: `-${activeIndex * (100 / cardsPerView)}%`,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              {data.items.map((artist, i) => (
                <div
                  key={`${artist.name}-${i}`}
                  className="px-2 sm:px-3"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i, 3) * 0.06,
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="h-full"
                  >
                    <article className="relative h-full overflow-hidden  p-4  sm:p-5">
                      <div className="pointer-events-none absolute right-3 top-3 opacity-[0.12]">
                        <Quote className="h-10 w-10 text-primary sm:h-11 sm:w-11" />
                      </div>

                      <div className="relative z-10 flex flex-col">
                        <div className="mb-2.5 flex gap-0.5">
                          {[...Array(artist.stars)].map((_, j) => (
                            <motion.div
                              key={j}
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.35 + j * 0.06,
                                type: "spring",
                              }}
                            >
                              <Star className="h-3.5 w-3.5 fill-primary text-primary sm:h-4 sm:w-4" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="mb-4 text-sm font-light italic leading-relaxed text-muted-foreground sm:mb-3.5 sm:text-[0.9375rem]">
                          &ldquo;{artist.quote}&rdquo;
                        </p>
                        <div className="mt-auto flex items-center gap-2.5 border-t border-border/30 pt-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary-fill to-accent text-sm font-bold text-primary-fill-foreground sm:h-10 sm:w-10 sm:text-base">
                            {artist.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-foreground sm:text-base">
                              {artist.name}
                            </p>
                            <p className="truncate text-xs text-muted-foreground sm:text-sm">
                              {artist.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {showControls && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial set ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-8 bg-primary-fill"
                      : "w-2.5 bg-primary-fill/35"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
