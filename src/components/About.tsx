import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Heart } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, id: "partner" },
    { icon: GraduationCap, id: "harvard" },
    { icon: Users, id: "insta" },
    { icon: Heart, id: "family" },
  ];

  return (
    <section id="about" className="py-32 relative z-10 border-t border-white/10 bg-black/5 overflow-hidden">
      <div className="absolute -top-1/2 left-0 w-full h-[600px] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container px-4 max-w-6xl mx-auto relative z-20">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-3 block drop-shadow-md">WHY US</span>
            <motion.h2 
              className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg"
            >
              {t('about.title')}
            </motion.h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.5 } }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-black/10 p-8 rounded-3xl border border-white/20 hover:bg-black/20 hover:border-white/40 transition-colors group backdrop-blur-md shadow-xl relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:text-[#2A82C4] group-hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                <stat.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">{t(`about.stats.${stat.id}.title`)}</h3>
              <p className="text-white/80 text-[15px] leading-relaxed font-semibold">{t(`about.stats.${stat.id}.desc`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
