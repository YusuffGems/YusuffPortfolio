import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t("skills.cat.core"),
      skills: [
        "UI/UX Design", "Graphic Design", "Dashboard Design",
        "Website UI Design", "Mobile App UI Design",
        "Digital Marketing", "Social Media Creative Design",
        "Photography", "Videography", "Product Photography",
        "Prototyping & Wireframing",
      ],
    },
    {
      title: t("skills.cat.ecom"),
      skills: [
        "Product Listing & Catalog Management",
        "Customer Journey Optimization",
        "WooCommerce / WordPress",
        "SEO Basics",
        "Email Campaigns",
      ],
    },
    {
      title: t("skills.cat.tools"),
      skills: [
        "Figma", "Adobe XD", "Photoshop", "Illustrator",
        "InDesign", "Premiere Pro", "WordPress", "Flutter",
        "Firebase", "Blender", "Unity", "Mailchimp",
        "OBS Studio",
      ],
    },
  ];
  return (
  <section id="skills" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {t("skills.title1")} <span className="text-primary">{t("skills.title2")}</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
          >
            <h3 className="text-primary font-heading font-semibold text-lg mb-5">{cat.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3.5 py-2 rounded-full text-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SkillsSection;
