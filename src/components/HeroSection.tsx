import { motion } from "framer-motion";

const tools = [
  { name: "Figma", emoji: "🎨" },
  { name: "Adobe CC", emoji: "🖌️" },
  { name: "Flutter", emoji: "📱" },
  { name: "Blender", emoji: "🧊" },
  { name: "Unity", emoji: "🎮" },
  { name: "WordPress", emoji: "🌐" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="container relative z-10 text-center">
      {/* Profile area */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto mb-8 w-40 h-40"
      >
        <div className="w-40 h-40 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-5xl">
          🎯
        </div>
        {/* Floating badges */}
        {tools.map((tool, i) => {
          const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
          const r = 110;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute animate-float"
              style={{
                left: `calc(50% + ${Math.cos(angle) * r}px - 18px)`,
                top: `calc(50% + ${Math.sin(angle) * r}px - 18px)`,
                animationDelay: `${i * 0.5}s`,
              }}
              title={tool.name}
            >
              <div className="w-9 h-9 rounded-full glass flex items-center justify-center text-sm cursor-default">
                {tool.emoji}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-primary">Yusuff</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
      >
        Multimedia Designer crafting immersive digital experiences — from UI/UX to VR content
      </motion.p>
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
      >
        View My Work
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
