import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock,
  Gauge,
  Library,
  Mic,
  SlidersHorizontal,
  Sparkles,
  Waves,
} from "lucide-react";
import type { HomepageContent } from "@/lib/content-schema";

type FeaturesData = HomepageContent["features"];

const iconMap: Record<FeaturesData["cards"][number]["icon"], LucideIcon> = {
  gauge: Gauge,
  waves: Waves,
  sparkles: Sparkles,
  library: Library,
  clock: Clock,
  sliders: SlidersHorizontal,
  mic: Mic,
  barChart: BarChart3,
};

const Features = ({ data }: { data: FeaturesData }) => {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-12 md:py-16 px-4 sm:px-6 lg:px-8"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3 md:mb-4 text-balance">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {data.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.article
                key={`${card.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 7) * 0.06 }}
                className="group  p-6 sm:p-7 text-center "
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-muted/30 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
