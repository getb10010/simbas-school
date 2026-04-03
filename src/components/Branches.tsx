import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Camera, ExternalLink } from "lucide-react";
import { WHATSAPP_LINK } from "./Navbar";

const branchIds = ["b1", "b2", "b3"];
const mapUrls = [
  "https://2gis.kz/turkestan/firm/70000001085301956",
  "https://2gis.kz/turkestan/firm/70000001066967929",
  "https://2gis.kz/turkestan/firm/70000001105022309"
];

// Using explicit Google Maps coordinates for each branch
const embedUrls = [
  "https://maps.google.com/maps?q=43.273744,68.343341&z=16&output=embed",
  "https://maps.google.com/maps?q=43.288349,68.296794&z=16&output=embed",
  "https://maps.google.com/maps?q=43.301441,68.257568&z=16&output=embed"
];

export function Branches() {
  const { t } = useTranslation();
  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <section id="branches" className="py-32 relative text-white border-t border-white/20 bg-black/5">
      
      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-3 block drop-shadow-md">{t('branches.label')}</span>
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight drop-shadow-lg">{t('branches.title')}</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {branchIds.map((bid, i) => (
              <button 
                key={bid}
                onClick={() => setActiveBranch(i)}
                className={`px-8 py-3.5 rounded-full text-[15px] font-black uppercase tracking-wide transition-all duration-300 ${
                  activeBranch === i 
                    ? "bg-yellow-400 text-[#2A82C4] shadow-[0_0_20px_rgba(250,204,21,0.5)] transform scale-105" 
                    : "bg-black/10 border border-white/20 text-white hover:bg-black/20 hover:border-white/40 hover:shadow-xl"
                }`}
              >
                {t(`branches.names.${i}`)}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/10 border border-white/20 p-8 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeBranch}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-10"
            >
              <div className="w-full lg:w-5/12 space-y-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-5 group">
                    <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-colors border border-white/30 group-hover:bg-white/30 group-hover:scale-110 group-hover:text-yellow-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 font-black tracking-[0.2em] mb-1.5 uppercase">{t('branches.address_label')}</p>
                      <p className="text-[16px] font-bold text-white leading-tight drop-shadow-sm">{t(`branches.addresses.${activeBranch}`)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-colors border border-white/30 group-hover:bg-white/30 group-hover:scale-110 group-hover:text-yellow-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 font-black tracking-[0.2em] mb-1.5 uppercase">{t('branches.phone_label')}</p>
                      <p className="text-[16px] font-bold text-white leading-tight drop-shadow-sm">+7 747 664 5832</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-colors border border-white/30 group-hover:bg-white/30 group-hover:scale-110 group-hover:text-yellow-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 font-black tracking-[0.2em] mb-1.5 uppercase">{t('branches.hours_label')}</p>
                      <p className="text-[16px] font-bold text-white leading-tight drop-shadow-sm">{t('branches.hours_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-white transition-colors border border-white/30 group-hover:bg-white/30 group-hover:scale-110 group-hover:text-yellow-400">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/70 font-black tracking-[0.2em] mb-1.5 uppercase">{t('branches.insta_label')}</p>
                      <p className="text-[16px] font-bold text-white leading-tight drop-shadow-sm">@simbas.school</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-black text-[15px] shadow-[0_5px_20px_rgba(37,211,102,0.4)] transition-colors uppercase tracking-wide border-none"
                  >
                    <MessageCircle className="w-5 h-5" /> {t('branches.whatsapp_btn')}
                  </motion.button>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('tel:+77476645832')}
                      className="w-full flex items-center justify-center py-4 bg-black/20 border-white/30 border hover:bg-black/30 hover:border-yellow-400 text-white rounded-2xl font-bold uppercase tracking-wide text-[14px] transition-colors"
                    >
                      {t('branches.phone_btn')}
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(mapUrls[activeBranch], '_blank')}
                      className="w-full flex items-center justify-center py-4 bg-black/20 border-white/30 border hover:bg-black/30 hover:border-yellow-400 text-white rounded-2xl font-bold uppercase tracking-wide text-[14px] transition-all"
                    >
                      {t('branches.map_btn')}
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12 h-[450px] lg:h-auto min-h-[450px] rounded-[2rem] overflow-hidden relative border border-white/30 p-2 bg-black/10 shadow-inner group">
                <iframe 
                  src={embedUrls[activeBranch]}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover rounded-[1.5rem] grayscale-[0.2] contrast-125 opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Fallback open in 2gis just in case */}
                <a 
                  href={mapUrls[activeBranch]}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-6 left-6 flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-[14px] font-bold text-xs hover:bg-yellow-400 hover:text-[#2A82C4] hover:border-none transition-colors shadow-lg"
                >
                  {t('branches.map_btn')} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-24 text-center max-w-2xl mx-auto">
           <h3 className="text-2xl font-black mb-4 drop-shadow-md">{t('branches.remote_title')}</h3>
           <p className="text-white/90 mb-8 leading-relaxed font-semibold drop-shadow-sm">{t('branches.remote_desc')}</p>
           <div className="inline-flex items-center px-6 py-2 bg-black/20 border border-white/30 rounded-full text-white tracking-wide uppercase text-sm font-bold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-3 animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></span>
              {t('branches.remote_btn')}
           </div>
        </div>
      </div>
    </section>
  );
}
