import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:myusuff98@gmail.com?subject=${subject}&body=${body}`, "_blank");
    toast({ title: t("contact.toastTitle"), description: t("contact.toastDesc") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title1")} <span className="text-primary">{t("contact.title2")}</span>
          </h2>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">
            <a href="mailto:myusuff98@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={16} className="text-primary" /> myusuff98@gmail.com</a>
            <a href="tel:+918939736343" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} className="text-primary" /> +91 8939736343</a>
            <a
              href="https://wa.me/918939736343?text=Hi%20Mohammed%20Yusuff%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              <MessageCircle size={16} className="text-green-500" /> WhatsApp
            </a>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {t("contact.location")}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder={t("contact.name")}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder={t("contact.message")}
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> {t("contact.send")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
