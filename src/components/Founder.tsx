import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Camera, MapPin, Sparkles, Sprout, Heart, BookOpen } from "lucide-react";
import { Button } from "./ui/Button";

export function Founder() {
  const { t } = useTranslation();

  return (
    <section id="founder" className="py-32 relative text-white border-t border-white/10 relative overflow-hidden bg-black/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-3 block drop-shadow-md">PROFILE</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-lg uppercase"
          >
            {t('founder.section_title')}
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/10 border border-white/20 rounded-[3rem] shadow-2xl overflow-hidden backdrop-blur-md"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Massive Image Section */}
            <div className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-full bg-black/20 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A82C4]/90 via-[#2A82C4]/20 to-transparent z-10 opacity-70" />
              
              {/* Photo Stack Layout */}
              <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
                
                {/* Background Tilted Image - Brooklyn Bridge */}
                <div className="absolute left-4 top-10 w-[75%] aspect-[4/5] rounded-3xl overflow-hidden border-[8px] border-white/20 shadow-2xl -rotate-6 transform hover:rotate-0 hover:z-30 transition-all duration-700 z-10 filter grayscale-[0.2]">
                  <img src="/symbat1.jpg" alt="Symbat Traveling" className="w-full h-full object-cover" />
                </div>
                
                {/* Foreground Image - Podium */}
                <div className="absolute right-0 bottom-4 w-[85%] aspect-[4/5] rounded-3xl overflow-hidden border-[8px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.5)] rotate-3 transform hover:rotate-0 hover:z-30 transition-all duration-700 z-20">
                  <img src="/symbat2.png" alt={t('founder.name')} className="w-full h-full object-cover object-top" />
                  
                  {/* Floating Name Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 text-center">
                    <h3 className="text-3xl font-black text-[#2A82C4] drop-shadow-sm mb-1 uppercase tracking-tight">{t('founder.name')}</h3>
                    <p className="text-yellow-500 font-black tracking-widest text-xs uppercase">{t('founder.role')}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Stylized Bio & Achievements Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              
              {/* Quotation / Bio formatting */}
              <div className="relative z-20 mb-12">
                <blockquote className="text-2xl md:text-3xl text-white font-black leading-snug drop-shadow-lg mb-8 border-l-4 border-yellow-400 pl-6 italic">
                  "{t('founder.bio1')}"
                </blockquote>
                <p className="text-xl md:text-2xl text-yellow-400 font-bold leading-relaxed drop-shadow-sm font-light">
                  {t('founder.bio2')}
                </p>
              </div>

              <div className="border-t border-white/20 pt-8 mb-10 relative z-20">
                <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{t('founder.achievements.title')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all shadow-md">
                    <BookOpen className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-white leading-tight">{t('founder.achievements.a1')}</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all shadow-md">
                    <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-white leading-tight">{t('founder.achievements.a2')}</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all shadow-md">
                    <Sprout className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-white leading-tight">{t('founder.achievements.a3')}</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all shadow-md">
                    <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-white leading-tight">{t('founder.achievements.a4')}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-start gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all shadow-md max-w-lg">
                    <Heart className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-[15px] font-bold text-white leading-tight">{t('founder.achievements.a5')}</span>
                  </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative z-20">
                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-[15px] font-black bg-white/20 border-white/30 border hover:bg-white/30 text-white rounded-2xl shadow-xl transition-colors uppercase tracking-wide" onClick={() => window.open('https://www.instagram.com/symbatpn/', '_blank')}>
                  <Camera className="w-6 h-6 mr-3 text-yellow-400" />
                  {t('founder.insta_btn')}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
