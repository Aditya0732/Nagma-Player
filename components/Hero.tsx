import { motion } from "framer-motion";
import type { HomepageContent } from "@/lib/content-schema";
import Image from "next/image";

type HeroData = HomepageContent["hero"];

const getStoreIcon = (icon: "apple" | "google") =>
  icon === "apple" ? "/apple.svg" : "/google.svg";

const Hero = ({ data }: { data: HeroData }) => {
  return (
    <section className="relative pt-12 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/features/features_background.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white/52"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
          <div className="relative w-full select-none">
            <div className="relative w-full aspect-square max-h-[78vh]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                className="block w-full h-full object-contain pointer-events-none"
                loading="lazy"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground"
            >
              {data.headlinePrefix}{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-accent font-black inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {data.headlineHighlight}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground text-balance leading-relaxed font-light max-w-xl"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-2.5"
            >
              <motion.a
                href={data.storeButtons[0].href}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="bg-black hover:bg-black/90 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
                  <Image
                    src={getStoreIcon(data.storeButtons[0].icon)}
                    alt={data.storeButtons[0].iconAlt}
                    className="w-7 h-7 invert"
                    width={28}
                    height={28}
                  />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-300 tracking-wide">
                      {data.storeButtons[0].preLabel}
                    </span>
                    <span className="text-base font-semibold text-white -mt-0.5">
                      {data.storeButtons[0].label}
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={data.storeButtons[1].href}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="bg-gray-100 hover:bg-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-200 border border-gray-200 shadow-lg hover:shadow-xl">
                  <Image
                    src={getStoreIcon(data.storeButtons[1].icon)}
                    alt={data.storeButtons[1].iconAlt}
                    className="w-7 h-7"
                    width={28}
                    height={28}
                  />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-800 tracking-wide uppercase">
                      {data.storeButtons[1].preLabel}
                    </span>
                    <span className="text-base font-semibold text-gray-800 -mt-0.5">
                      {data.storeButtons[1].label}
                    </span>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
