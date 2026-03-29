"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, Home, Mic } from "lucide-react";
import type { HomepageContent } from "@/lib/content-schema";

type AppUseData = HomepageContent["appUse"];

const iconMap: Record<AppUseData["tabs"][number]["icon"], LucideIcon> = {
  home: Home,
  barChart3: BarChart3,
  mic: Mic,
};

const arcBaseY = (index: number, total: number) => {
  if (total === 3) {
    if (index === 0) return -2;
    if (index === 1) return 8;
    return -2;
  }
  return 0;
};

const AppUse = ({ data }: { data: AppUseData }) => {
  const [active, setActive] = useState(0);
  const n = data.tabs.length;

  return (
    <section
      id="app-use"
      className="relative overflow-hidden px-3 pb-6 pt-6 sm:px-5 sm:pb-12 sm:pt-11 md:px-8 md:pb-14 md:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/features/features_background.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white/55"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center md:mb-5"
        >
          <h2 className="text-balance text-3xl font-bold tracking-[0.02em] text-foreground sm:text-4xl md:text-[2.5rem] md:leading-tight">
            {data.title}
          </h2>
          {data.description ? (
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-base">
              {data.description}
            </p>
          ) : null}
        </motion.div>

        <div
          className="relative mx-auto w-full sm:max-w-[min(100%,1120px)]"
          role="tabpanel"
          id="app-use-panel"
          aria-labelledby={`app-use-tab-${active}`}
          aria-live="polite"
        >
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-3 sm:left-auto sm:w-full sm:max-w-[min(100%,1120px)] sm:translate-x-0 sm:px-0">
            {/* KEY FIX: no min-h on mobile — image drives height naturally */}
            <div className="relative w-full sm:min-h-[min(64vh,720px)]">
              {data.tabs.map((tab, index) => {
                const isShown = active === index;
                return (
                  <motion.div
                    key={tab.image.src}
                    // KEY FIX: relative flow on mobile so image takes full natural size,
                    // absolute only on sm+ for the layered crossfade effect
                    className="flex items-center justify-center px-0.5 sm:absolute sm:inset-0 sm:px-0"
                    style={{
                      // on mobile: hide non-active by collapsing to absolute+inset-0
                      position: !isShown ? "absolute" : undefined,
                      inset: !isShown ? 0 : undefined,
                      zIndex: isShown ? 2 : 1,
                      pointerEvents: isShown ? "auto" : "none",
                    }}
                    initial={false}
                    animate={{ opacity: isShown ? 1 : 0 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={!isShown}
                  >
                    <Image
                      src={tab.image.src}
                      alt={tab.image.alt}
                      width={1200}
                      height={2130}
                      // KEY FIX: no max-h constraint on mobile — image fills full width naturally
                      className="h-auto w-full object-contain [image-rendering:auto] drop-shadow-[0_24px_60px_-16px_rgba(15,23,42,0.18)] sm:max-h-[min(92vh,1020px)]"
                      sizes="(max-width: 640px) calc(100vw - 1.5rem), (max-width: 1280px) 95vw, 1120px"
                      priority={index === 0}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FIX: mt-0 on mobile to close the gap */}
        <div className="relative mx-auto mt-0 w-full max-w-2xl md:mt-2">
          <svg
            className="pointer-events-none absolute left-1/2 top-0.5 z-0 h-12 w-[min(100%,24rem)] -translate-x-1/2 text-zinc-300/90 md:top-0 md:h-14 md:w-[min(100%,28rem)]"
            viewBox="0 0 420 52"
            fill="none"
            aria-hidden
          >
            <path
              d="M 28 44 Q 210 6 392 44"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="relative z-10 flex items-end justify-center gap-7 pt-1 sm:gap-10 sm:pt-0 md:gap-14"
            role="tablist"
            aria-label="App screens"
          >
            {data.tabs.map((tab, index) => {
              const Icon = iconMap[tab.icon];
              const isActive = active === index;
              const baseY = arcBaseY(index, n);
              const activeLift = isActive ? -10 : 0;
              const scale = isActive ? 1.08 : 1;

              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="app-use-panel"
                  id={`app-use-tab-${index}`}
                  onClick={() => setActive(index)}
                  className="flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  style={{
                    transform: `translateY(${baseY + activeLift}px) scale(${scale})`,
                    transition:
                      "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease",
                  }}
                >
                  <span
                    className={`flex items-center justify-center rounded-full transition-[box-shadow,background-color,border-color,color] duration-300 ${
                      isActive
                        ? "h-14 w-14 border-0 bg-primary-fill text-primary-fill-foreground shadow-[0_10px_22px_-4px_rgba(56,150,190,0.22)] sm:h-15 sm:w-15"
                        : "h-12 w-12 border border-zinc-300/95 bg-white text-zinc-800 shadow-[0_2px_8px_rgba(15,23,42,0.07),inset_0_1px_0_0_rgba(255,255,255,0.95)] sm:h-14 sm:w-14 hover:border-zinc-400/90"
                    }`}
                  >
                    <Icon
                      className={
                        isActive
                          ? "h-5 w-5 text-white sm:h-6 sm:w-6"
                          : "h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]"
                      }
                      strokeWidth={isActive ? 2.35 : 2}
                      aria-hidden
                    />
                  </span>
                  <span
                    className={`text-center font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] sm:text-[11px] sm:tracking-[0.17em] ${
                      isActive ? "text-primary" : "text-zinc-500"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppUse;
