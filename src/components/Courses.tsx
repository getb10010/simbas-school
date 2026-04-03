import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function Courses() {
  const { t, i18n } = useTranslation();

  const coursesArray = [0, 1, 2, 3, 4, 5];

  const handleExplore = (courseTitle: string) => {
    let msg = "";
    if (i18n.language === "ru") {
      msg = `Здравствуйте! Я хочу узнать подробнее про курс: "${courseTitle}".`;
    } else if (i18n.language === "en") {
      msg = `Hello! I would like to explore the course: "${courseTitle}".`;
    } else {
      msg = `Сәлеметсіз бе! Мен мына курс туралы көбірек білгім келеді: "${courseTitle}".`;
    }
    
    const url = `https://wa.me/77476645832?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="courses" className="py-32 relative text-white border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-3 block drop-shadow-md">PROGRAMS</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-lg"
          >
            {t('courses.title')}
          </motion.h2>
          <p className="text-white/90 text-xl font-semibold drop-shadow-md">{t('courses.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesArray.map((i) => {
            const courseTitle = t(`courses.items.${i}.title`);
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleExplore(courseTitle)}
              className="p-8 rounded-[2rem] bg-black/10 border border-white/20 hover:border-white/40 hover:bg-black/20 hover:shadow-2xl transition-all group flex flex-col h-full backdrop-blur-md cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              <div className="flex-1 relative z-10 pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">{courseTitle}</h3>
                <p className="text-white/80 leading-relaxed font-semibold">{t(`courses.items.${i}.desc`)}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center text-xs font-black text-white/50 uppercase tracking-wider group-hover:text-yellow-400 transition-colors relative z-10 pointer-events-none">
                Explore <MoveRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-black" />
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
