import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-foreground"
            >
              The most authentic{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent font-black inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Nagma Riyaz companion
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed font-light max-w-xl"
            >
              Practise and innovate with 500+ authentic Nagmas across 100+
              Raags. Crafted for Tabla, Pakhawaj, Kathak, Vocalists, String
              Instrumentalists, and Percussionists.
            </motion.p>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="bg-black hover:bg-black/90 rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
                  <img
                    src="/apple.svg"
                    alt="Apple"
                    className="w-8 h-8 invert"
                  />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-300 tracking-wide">
                      Download on the
                    </span>
                    <span className="text-lg font-semibold text-white -mt-0.5">
                      App Store
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="bg-gray-100 hover:bg-gray-200 rounded-xl px-5 py-3 flex items-center gap-3 transition-all duration-200 border border-gray-200 shadow-lg hover:shadow-xl">
                  <img
                    src="/google.svg"
                    alt="Google Play"
                    className="w-8 h-8"
                  />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-800 tracking-wide uppercase">
                      Get it on
                    </span>
                    <span className="text-lg font-semibold text-gray-800 -mt-0.5">
                      Google Play
                    </span>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main image */}
              <motion.img
                loading="lazy"
                src="/indian-classical-musician-playing-tabla-in-concert.jpg"
                alt="Nagma Player App Interface"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
