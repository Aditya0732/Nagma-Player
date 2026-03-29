import { motion } from "framer-motion";
import type { HomepageContent } from "@/lib/content-schema";

type UsersData = HomepageContent["users"];

const Users = ({ data }: { data: UsersData }) => {
  const getCardClass = (index: number) => {
    if (index === 0) {
      return "md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer";
    }
    return "group relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 cursor-pointer";
  };

  const getTitleClass = (index: number) =>
    index === 0 ? "text-2xl font-bold text-white mb-2" : "text-lg font-bold text-white mb-1";

  const getDescriptionClass = (index: number) =>
    index === 0 ? "text-white/80 text-sm" : "text-white/80 text-xs";

  const getContainerPadding = (index: number) => (index === 0 ? "p-6" : "p-4");

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {data.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={getCardClass(index)}
            >
              <motion.img
                loading="lazy"
                src={card.image.src}
                alt={card.image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <motion.div
                className={`absolute bottom-0 left-0 right-0 ${getContainerPadding(index)}`}
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={getTitleClass(index)}>{card.title}</h3>
                <p className={getDescriptionClass(index)}>{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
