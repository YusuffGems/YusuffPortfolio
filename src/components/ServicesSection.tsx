import { motion } from "framer-motion";
import {
  Palette, Globe, ShoppingCart, Megaphone,
  Smartphone, Camera, Video, Mail,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { icon: Palette, key: "uiux" },
  { icon: Globe, key: "web" },
  { icon: ShoppingCart, key: "ecom" },
  { icon: Megaphone, key: "dm" },
  { icon: Smartphone, key: "sm" },
  { icon: Camera, key: "photo" },
  { icon: Video, key: "video" },
  { icon: Mail, key: "email" },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  return (
  <section id="services" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {t("services.title1")} <span className="text-primary">{t("services.title2")}</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors duration-300">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{t(`svc.${s.key}.title`)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(`svc.${s.key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
