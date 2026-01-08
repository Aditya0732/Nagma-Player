import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent"
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
            Simple Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose what works for your musical journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="border-border/50 bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-md hover:shadow-lg h-full">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect to get started
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "1 Instrument Only",
                    "1 Taal",
                    "2 Raags Available",
                    "Mobile Practice",
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-muted text-foreground hover:bg-muted/80 py-6 text-base font-semibold">
                    Start Now
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Tier */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative"
          >
            {/* Popular badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
            >
              <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                Most Popular
              </div>
            </motion.div>

            <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-accent/5 hover:from-primary/20 hover:to-accent/10 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground mb-6">
                  For serious musicians
                </p>
                <div className="text-4xl font-bold text-primary mb-2">
                  ₹499 <span className="text-lg font-semibold">/year</span>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "500+ All Nagmas",
                    "100+ All Raags & Taals",
                    "Recording & Saves",
                    "BPM Range 30-300",
                    "Community Sharing",
                    "Daily Practice Goals",
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 py-6 text-base font-semibold">
                    Upgrade to Premium
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
