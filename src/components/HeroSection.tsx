import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const tools = [
  { name: "Ae", label: "After Effects" },
  { name: "Bl", label: "Blender" },
  { name: "U", label: "Unity" },
  { name: "Flutter", label: "Flutter" },
  { name: "Fb", label: "Firebase" },
  { name: "Wp", label: "WordPress" },
  { name: "Figma", label: "Figma" },
  { name: "Ps", label: "Photoshop" },
  { name: "Ai", label: "Illustrator" },
  { name: "Xd", label: "Adobe XD" },
  { name: "Pr", label: "Premiere Pro" },
  { name: "Id", label: "InDesign" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-heading text-lg font-medium"
          >
            Hey, I am
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4"
          >
            D. Mohammed <span className="text-primary">Yusuff</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground mb-2"
          >
            <span className="text-primary font-semibold">Flutter Developer</span> · UI/UX Designer · E-commerce Specialist
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            I am a UI/UX designer and e-commerce specialist from Chennai with experience in WordPress, digital marketing, product management, and multimedia design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-primary text-primary font-heading font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-yusuff-b7835923b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Profile with floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Concentric circles */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-border/30" />
          <div className="absolute w-[22rem] md:w-[26rem] lg:w-[30rem] h-[22rem] md:h-[26rem] lg:h-[30rem] rounded-full border border-border/20" />
          <div className="absolute w-[28rem] md:w-[32rem] lg:w-[36rem] h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-full border border-border/10" />

          {/* Profile image */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/50 z-10">
            <img
              src={profilePhoto}
              alt="D. Mohammed Yusuff"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating tool icons */}
          {tools.map((tool, i) => {
            const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
            const r = typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 220;
            const isHighlight = tool.name === "Flutter" || tool.name === "Figma";
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="absolute animate-float z-20"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * r}px - 20px)`,
                  top: `calc(50% + ${Math.sin(angle) * r}px - 20px)`,
                  animationDelay: `${i * 0.4}s`,
                }}
                title={tool.label}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-heading font-semibold cursor-default transition-all duration-300 hover:scale-110 ${
                    isHighlight
                      ? "glass border-primary/50 text-primary"
                      : "glass text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tool.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
