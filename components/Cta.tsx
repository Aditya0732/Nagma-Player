import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 -z-10"></div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Card container */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-primary/20 shadow-2xl shadow-primary/10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-light max-w-2xl mx-auto">
              Join thousands of musicians elevating their classical artistry
              with Nagma Player Premium
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <div className="bg-black hover:bg-black/90 rounded-xl px-6 py-3.5 flex items-center gap-3 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
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
                <div className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6 py-3.5 flex items-center gap-3 transition-all duration-200 border border-gray-200 shadow-lg hover:shadow-xl">
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
            </div>

            {/* Simple trust text */}
            <p className="mt-8 text-sm text-muted-foreground">
              Free to start • No ads • Cancel anytime
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
