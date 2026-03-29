import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Music, Menu, X } from "lucide-react";
import { useState } from "react";
import type { HomepageContent } from "@/lib/content-schema";

type NavData = HomepageContent["nav"];

const getStoreIcon = (icon: "apple" | "google") =>
  icon === "apple" ? "/apple.svg" : "/google.svg";

const Nav = ({ data, brandByline }: { data: NavData; brandByline: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = data.items;
  const [primaryStoreButton, secondaryStoreButton] = data.storeButtons;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/90 shadow-lg shadow-primary/5 border-b border-primary/10"
            : "backdrop-blur-md bg-white/70 border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <motion.div
                className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded-xl bg-linear-to-br from-primary-fill via-primary-fill to-accent flex items-center justify-center shadow-md shadow-primary/15"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Music className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </motion.div>
              <span className="flex flex-col items-start leading-tight">
                <span className="font-bold tracking-tight">
                  {data.brandPrefix}{" "}
                  <span className="text-primary">{data.brandHighlight}</span>
                </span>
                <span className="mt-0.5 text-[12px] font-normal text-muted-foreground md:text-[13px]">
                  {brandByline}
                </span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative px-3 py-2 rounded-lg text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Desktop Download Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center gap-2"
            >
              <motion.a
                href={primaryStoreButton.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <div className="bg-black hover:bg-black/90 rounded-lg px-3 py-1.5 flex items-center gap-2 transition-all duration-200 border border-gray-700">
                  <img
                    src={getStoreIcon(primaryStoreButton.icon)}
                    alt={primaryStoreButton.iconAlt}
                    className="w-5 h-5 invert"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-gray-300">
                      {primaryStoreButton.preLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-white">
                      {primaryStoreButton.label}
                    </span>
                  </div>
                </div>
              </motion.a>
              <motion.a
                href={secondaryStoreButton.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <div className="bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2 transition-all duration-200 border border-gray-200">
                  <img
                    src={getStoreIcon(secondaryStoreButton.icon)}
                    alt={secondaryStoreButton.iconAlt}
                    className="w-5 h-5"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-gray-800">
                      {secondaryStoreButton.preLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-800">
                      {secondaryStoreButton.label}
                    </span>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-primary/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: 0.05 * i }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-3 border-t border-primary/10 flex gap-2">
              <a href={primaryStoreButton.href} className="flex-1">
                <div className="bg-black rounded-lg px-3 py-2 flex items-center justify-center gap-2 border border-gray-700">
                  <img
                    src={getStoreIcon(primaryStoreButton.icon)}
                    alt={primaryStoreButton.iconAlt}
                    className="w-5 h-5 invert"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-gray-300">
                      {primaryStoreButton.preLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-white">
                      {primaryStoreButton.label}
                    </span>
                  </div>
                </div>
              </a>
              <a href={secondaryStoreButton.href} className="flex-1">
                <div className="bg-black rounded-lg px-3 py-2 flex items-center justify-center gap-2 border border-gray-700">
                  <img
                    src={getStoreIcon(secondaryStoreButton.icon)}
                    alt={secondaryStoreButton.iconAlt}
                    className="w-5 h-5"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-gray-300">
                      {secondaryStoreButton.preLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-white">
                      {secondaryStoreButton.label}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;
