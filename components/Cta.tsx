import { motion } from "framer-motion";
import type { HomepageContent } from "@/lib/content-schema";

type CtaData = HomepageContent["cta"];

const getStoreIcon = (icon: "apple" | "google") =>
  icon === "apple" ? "/apple.svg" : "/google.svg";

const Cta = ({ data }: { data: CtaData }) => {
  return (
    <section
      id="cta"
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <div className="sm:p-8 md:p-9">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            {data.description}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <motion.a
              href={data.storeButtons[0].href}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full max-w-[280px] sm:w-auto"
            >
              <div className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-black px-4 py-2.5 transition-colors hover:bg-black/90">
                <img
                  src={getStoreIcon(data.storeButtons[0].icon)}
                  alt={data.storeButtons[0].iconAlt}
                  className="h-7 w-7 invert"
                />
                <div className="flex flex-col items-start leading-tight text-left">
                  <span className="text-[9px] tracking-wide text-gray-300">
                    {data.storeButtons[0].preLabel}
                  </span>
                  <span className="-mt-0.5 text-base font-semibold text-white">
                    {data.storeButtons[0].label}
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              href={data.storeButtons[1].href}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full max-w-[280px] sm:w-auto"
            >
              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 transition-colors hover:bg-gray-200/90">
                <img
                  src={getStoreIcon(data.storeButtons[1].icon)}
                  alt={data.storeButtons[1].iconAlt}
                  className="h-7 w-7"
                />
                <div className="flex flex-col items-start leading-tight text-left">
                  <span className="text-[9px] tracking-wide text-gray-700 uppercase">
                    {data.storeButtons[1].preLabel}
                  </span>
                  <span className="-mt-0.5 text-base font-semibold text-gray-900">
                    {data.storeButtons[1].label}
                  </span>
                </div>
              </div>
            </motion.a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground sm:mt-6 sm:text-sm">
            {data.trustText}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
