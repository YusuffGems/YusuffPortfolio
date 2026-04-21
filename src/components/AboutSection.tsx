import { motion } from "framer-motion";
import { GraduationCap, Building2, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: GraduationCap,
      title: t("about.education"),
      line1: t("about.eduLine1"),
      line2: t("about.eduLine2"),
    },
    {
      icon: Building2,
      title: t("about.experience"),
      line1: t("about.expLine1"),
      line2: t("about.expLine2"),
    },
    {
      icon: Languages,
      title: t("about.languages"),
      line1: t("about.langLine1"),
      line2: t("about.langLine2"),
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("about.title1")} <span className="text-primary">{t("about.title2")}</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          </motion.div>

          <div className="space-y-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <card.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.line1}</p>
                  {card.line2 && <p className="text-sm text-muted-foreground">{card.line2}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
