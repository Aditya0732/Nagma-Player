import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";
import { features } from "@/lib/constants";

const FeaturesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedFeatures = [...features, ...features];

  return (
    <section id="features" className="pt-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for authentic practice sessions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: "-100%",
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {duplicatedFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.1 }}
              >
                <Card className="border border-border/30 bg-card/40 backdrop-blur-sm hover:border-border/60 hover:bg-card/70 transition-all duration-500 shadow-sm hover:shadow-md h-full group overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <motion.img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Content section */}
                    <div className="pt-6 pb-6 px-6 md:px-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-cyan-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Subtle bottom accent */}
                      <motion.div
                        className="mt-6 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient fade overlays for visual polish */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
