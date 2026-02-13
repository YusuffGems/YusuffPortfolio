import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "services", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="font-heading text-xl font-bold">
          Yusuff<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`px-4 py-2 rounded-full font-heading text-sm tracking-wide transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass lg:hidden mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg font-heading text-sm transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
