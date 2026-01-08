import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved & Trusted by Gurus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen what legends say about Nagma Player
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Pandit Arun Kumar",
              role: "Sarangi Maestro",
              quote:
                "Nagma Player brings authenticity to digital accompaniment like nothing I've experienced before.",
              stars: 5,
            },
            {
              name: "Tabla Expert Ritika",
              role: "International Percussionist",
              quote:
                "The precision and musical accuracy are exceptional. My students love practicing with it.",
              stars: 5,
            },
            {
              name: "Smita Devi",
              role: "Kathak Dancer & Musician",
              quote:
                "Finally, a tool that truly understands classical music. Highly recommended for any serious artist.",
              stars: 5,
            },
          ].map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="border-border/50 bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-md hover:shadow-lg h-full relative overflow-hidden">
                {/* Decorative quote icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <CardContent className="pt-8 flex flex-col relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(artist.stars)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + j * 0.1, type: "spring" }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic font-light flex-grow leading-relaxed text-lg">
                    "{artist.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {artist.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{artist.name}</p>
                      <p className="text-sm text-muted-foreground font-light">
                        {artist.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
