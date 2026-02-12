import { motion } from "framer-motion";
import { GraduationCap, Building2, Languages } from "lucide-react";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    line1: "Diploma in Automobile Engineering",
    line2: "Aalim Muhammed Salegh Polytechnic College · 2012–2015",
  },
  {
    icon: Building2,
    title: "Experience",
    line1: "Multiple years in UI/UX, e-commerce operations, and digital marketing",
    line2: "",
  },
  {
    icon: Languages,
    title: "Languages",
    line1: "English · Tamil · Hindi",
    line2: "",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            A passionate UI/UX designer and e-commerce executive with extensive experience in digital operations, WordPress development, product management, and multimedia design. I bring creative vision and strategic thinking to every project, helping brands build strong digital identities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in Chennai, I specialize in crafting user-centric digital experiences that drive engagement and conversions. My multidisciplinary background allows me to bridge the gap between design, technology, and business strategy.
          </p>
        </motion.div>

        {/* Right cards */}
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

export default AboutSection;
