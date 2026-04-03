import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Camera, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

export function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <div className="container max-w-6xl px-4 z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold tracking-wide mb-8 shadow-sm backdrop-blur-md"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
          <span className="uppercase">{t('hero.badge')}</span>
        </motion.div>

        <div className="text-center space-y-4 mb-8">
          <motion.h1 
            className="text-7xl md:text-9xl font-black tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white drop-shadow-xl">{t('hero.title_primary')}</span>
            <span className="text-yellow-400 ml-4 font-light italic drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">{t('hero.title_secondary')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('hero.tagline')}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="w-full sm:w-auto gap-3 text-[15px] font-bold h-14 px-8 rounded-2xl bg-yellow-400 text-[#2A82C4] shadow-[0_10px_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300 border-none uppercase tracking-wide" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="w-full sm:w-auto gap-3 text-[15px] font-bold h-14 px-8 rounded-2xl bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-colors shadow-lg uppercase tracking-wide" onClick={() => window.open('https://www.instagram.com/simbas.school/', '_blank')}>
              <Camera className="w-4 h-4 text-yellow-400" />
              {t('hero.community')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
