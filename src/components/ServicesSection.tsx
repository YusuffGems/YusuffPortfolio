import { motion } from "framer-motion";
import {
  Palette, Globe, ShoppingCart, Megaphone,
  Smartphone, Camera, Video, Mail,
} from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces with intuitive interactions and clean aesthetics." },
  { icon: Globe, title: "Website Design", desc: "Responsive WordPress websites built for performance and conversion." },
  { icon: ShoppingCart, title: "E-commerce Support", desc: "End-to-end e-commerce setup, product listing, and catalog management." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Creative campaigns and SEO strategies to grow your online presence." },
  { icon: Smartphone, title: "Social Media Design", desc: "Eye-catching social media creatives that boost engagement." },
  { icon: Camera, title: "Product Photography", desc: "Professional product shoots optimized for web and social media." },
  { icon: Video, title: "Videography", desc: "Video production and editing for brands and digital platforms." },
  { icon: Mail, title: "Email Campaigns", desc: "Newsletter design and email campaign creation with Mailchimp." },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
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
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
