import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again or email me directly." });
    } finally {
      setSending(false);
    }
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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">Have a project in mind? Let's talk.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <div className="flex flex-wrap gap-6 mb-8 text-sm text-muted-foreground">
            <a href="mailto:myusuff98@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={16} className="text-primary" /> myusuff98@gmail.com</a>
            <a href="tel:+918939736343" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={16} className="text-primary" /> +91 8939736343</a>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Chennai, India</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
