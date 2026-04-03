import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const WHATSAPP_LINK = "https://wa.me/77476645832?text=" + encodeURIComponent("Сәлеметсіз бе! Менің курсқа жазылғым келеді. / Hello! I want to enroll in the course.");

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const nextLang = lang === 'kz' ? 'ru' : lang === 'ru' ? 'en' : 'kz';
    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isHome = location.pathname === "/";

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full z-50 top-6 left-0 px-4 flex justify-center"
    >
      <div className="w-full max-w-6xl relative">
        <div className="w-full h-16 px-6 flex items-center justify-between glass rounded-full shadow-2xl relative z-20">
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center flex-col leading-none">
              <span className="text-xl font-black text-white tracking-widest uppercase">SIMBA'S</span>
              <span className="text-[10px] font-bold text-white tracking-[0.3em] uppercase">school</span>
            </motion.div>
          </Link>
          
          <div className="hidden lg:flex gap-8 items-center justify-center">
            {['about', 'courses', 'branches'].map((item) => (
              <a 
                key={item}
                href={isHome ? `#${item}` : `/#${item}`} 
                className="text-sm font-bold text-white/80 hover:text-yellow-400 transition-colors uppercase tracking-wider block"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <Link 
              to="/founder"
              className={`text-sm font-bold transition-colors uppercase tracking-wider block ${!isHome ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"}`}
            >
              {t(`nav.founder`)}
            </Link>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30"
            >
              <Globe className="w-3.5 h-3.5 text-yellow-400" />
              <span className="uppercase text-xs font-bold tracking-wider">{lang}</span>
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
              <Button className="bg-yellow-400 text-[#2A82C4] font-black hover:bg-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] rounded-full px-6 text-sm h-10 uppercase tracking-wide border-none" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
                {t('hero.cta')}
              </Button>
            </motion.div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden glass rounded-full w-10 h-10 border border-white/20 p-0 flex items-center justify-center overflow-hidden"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-[72px] left-0 w-full glass rounded-3xl p-6 shadow-2xl border border-white/10 z-10 flex flex-col gap-6 backdrop-blur-xl bg-black/40"
            >
              <div className="flex flex-col gap-4 text-center">
                {['about', 'courses', 'branches'].map((item) => (
                  <a 
                    key={item}
                    href={isHome ? `#${item}` : `/#${item}`} 
                    onClick={closeMenu}
                    className="text-lg font-bold text-white hover:text-yellow-400 transition-colors uppercase tracking-wider block py-2 border-b border-white/5"
                  >
                    {t(`nav.${item}`)}
                  </a>
                ))}
                <Link 
                  to="/founder"
                  onClick={closeMenu}
                  className={`text-lg font-bold transition-colors uppercase tracking-wider block py-2 border-b border-white/5 ${!isHome ? "text-yellow-400" : "text-white hover:text-yellow-400"}`}
                >
                  {t(`nav.founder`)}
                </Link>
              </div>
              <div className="pt-2">
                <Button 
                  className="w-full bg-yellow-400 text-[#2A82C4] font-black hover:bg-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] rounded-2xl h-14 text-sm uppercase tracking-wide border-none" 
                  onClick={() => {
                    closeMenu();
                    window.open(WHATSAPP_LINK, '_blank');
                  }}
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
