import { motion } from "framer-motion";

const Users = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who is it For</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for passionate musicians across Indian classical traditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Tabla & Pakhwaj Players */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer"
          >
            <motion.img
              loading="lazy"
              src="/tabla-player-performing-indian-classical-drums-per.jpg"
              alt="Tabla and Pakhwaj Players"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Tabla & Pakhwaj Players
              </h3>
              <p className="text-white/80 text-sm">
                Master rhythm patterns and taal structures with authentic
                accompaniment
              </p>
            </motion.div>
          </motion.div>

          {/* Kathak Dancers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer"
          >
            <motion.img
              loading="lazy"
              src="/kathak-dancer-performing-indian-classical-dance.jpg"
              alt="Kathak Dancers"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">
                Kathak Dancers
              </h3>
              <p className="text-white/80 text-xs">
                Synchronize movement with traditional rhythm
              </p>
            </motion.div>
          </motion.div>

          {/* Percussion & Drummers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer"
          >
            <motion.img
              loading="lazy"
              src="/percussion-drummer-playing-drums-indian-classical.jpg"
              alt="Percussion Instrumentalists"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">
                Percussion Instrumentalists & Drummers
              </h3>
              <p className="text-white/80 text-xs">
                Expand percussive vocabulary with precision
              </p>
            </motion.div>
          </motion.div>

          {/* String Instrumentalists */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer"
          >
            <motion.img
              loading="lazy"
              src="/sarangi-player-string-instrument-indian-classical-.jpg"
              alt="String Instrumentalists"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">
                String Instrumentalists
              </h3>
              <p className="text-white/80 text-xs">
                Perfect for Harmonium, Sarangi, Sitar & more
              </p>
            </motion.div>
          </motion.div>

          {/* Vocalists */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer"
          >
            <motion.img
              loading="lazy"
              src="/indian-classical-singer-vocalist-performing-raag-m.jpg"
              alt="Vocalists"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">
                Vocalists & Raga Explorers
              </h3>
              <p className="text-white/80 text-xs">
                Master vocal techniques and raag nuances
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Users;
