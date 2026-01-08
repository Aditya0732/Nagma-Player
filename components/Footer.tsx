import { Music } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">
                Nagma <span className="text-primary">Player</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The most authentic Nagma Riyaz companion
            </p>
          </motion.div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Download"] },
            { title: "Company", links: ["About Us", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Support"] },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; 2026 Nagma Player. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
