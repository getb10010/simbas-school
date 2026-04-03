import { useTranslation } from "react-i18next";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "./Navbar";

export function PricingCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-32 relative overflow-hidden text-white border-t border-white/20 bg-black/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 text-center relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-black/10 border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight drop-shadow-lg">
            {t('pricing.title_primary')} <span className="text-yellow-400 italic font-light drop-shadow-md">{t('pricing.title_secondary')}</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 font-semibold max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t('pricing.desc')}
          </p>
          
          <ul className="text-left space-y-5 mb-14 max-w-sm mx-auto">
            {["p1", "p2", "p3"].map((key, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-4 text-white font-bold text-[17px] drop-shadow-sm"
              >
                <CheckCircle2 className="text-yellow-400 w-5 h-5 flex-shrink-0" /> 
                {t(`pricing.${key}`)}
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-[15px] font-black bg-yellow-400 text-[#2A82C4] uppercase rounded-2xl shadow-[0_10px_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300 transition-colors tracking-wide border-none" onClick={() => window.open(WHATSAPP_LINK, '_blank')}>
              <MessageCircle className="w-5 h-5 mr-3" />
              {t('pricing.btn')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
