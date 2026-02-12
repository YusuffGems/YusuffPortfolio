import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

import vrPoster from "@/assets/vr-content-poster.jpg";
import thumbBuilder from "@/assets/thumb-builder.jpg";
import thumbScaleInd from "@/assets/thumb-scale-ind.jpg";
import thumbJobx from "@/assets/thumb-jobx.jpg";
import thumbIilf from "@/assets/thumb-iilf.jpg";
import thumbNewsletter from "@/assets/thumb-newsletter.jpg";

interface Project {
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  video?: string;
  poster?: string;
  link?: string;
  ctaLabel: string;
  isPortrait?: boolean;
}

const projects: Project[] = [
  {
    title: "VR Immersive Learning Content",
    description: "Interactive VR educational experience designed for immersive learning environments.",
    tags: ["VR", "Unity", "3D", "Education"],
    video: "/videos/vr-content-project.mp4",
    poster: vrPoster,
    ctaLabel: "Watch Demo",
    isPortrait: true,
  },
  {
    title: "Sri Gowralaya Builders",
    description: "WordPress real estate website with property listings, search, and CMS integration.",
    tags: ["WordPress", "Web Design", "Real Estate"],
    thumbnail: thumbBuilder,
    link: "https://srigowralayabuilders.in/",
    ctaLabel: "Visit Website",
  },
  {
    title: "Scale Ind 4.0 – IoT Dashboard",
    description: "UI/UX prototype for an industrial IoT monitoring dashboard with real-time analytics.",
    tags: ["UI/UX", "Figma", "IoT", "Dashboard"],
    thumbnail: thumbScaleInd,
    link: "https://www.figma.com/proto/fgFs79HtwZjLDk3rse0qiA/iot?node-id=0-1&t=8sJP801Oh24lanca-1",
    ctaLabel: "View Prototype",
  },
  {
    title: "JobX – NSDC Hackathon",
    description: "24-hour design sprint creating a job portal concept for web and mobile platforms.",
    tags: ["Hackathon", "UI/UX", "Mobile", "Web"],
    thumbnail: thumbJobx,
    link: "https://www.figma.com/proto/IWUjw9QUbZMjQsadstkKU7/Jobx?node-id=40-36&t=Edd0tmiIAjIgR3To-1",
    ctaLabel: "View Project",
  },
  {
    title: "IILF 39th India International Leather Fair",
    description: "Complete branding and print design for India's premier leather industry exhibition.",
    tags: ["Branding", "Print", "Exhibition"],
    thumbnail: thumbIilf,
    ctaLabel: "View Designs",
  },
  {
    title: "LSSC Newsletter",
    description: "Digital publication design with modern editorial layouts and visual storytelling.",
    tags: ["Editorial", "Publication", "Design"],
    thumbnail: thumbNewsletter,
    link: "https://drive.google.com/file/d/1rI76Z-BNKbjlGO3eNomfWT_uy793L6LG/view?usp=sharing",
    ctaLabel: "Preview Newsletter",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group glass rounded-xl overflow-hidden ${
      project.isPortrait ? "row-span-2" : ""
    }`}
  >
    {/* Media */}
    <div className={`relative overflow-hidden ${project.isPortrait ? "aspect-[9/16]" : "aspect-video"}`}>
      {project.video ? (
        <video
          src={project.video}
          poster={project.poster}
          className="w-full h-full object-contain bg-black"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
    </div>

    {/* Info */}
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity font-heading font-medium"
        >
          {project.ctaLabel} <ExternalLink size={14} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-primary font-heading font-medium">
          {project.video ? <Play size={14} /> : <ExternalLink size={14} />}
          {project.ctaLabel}
        </span>
      )}
    </div>
  </motion.div>
);

const PortfolioSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground max-w-lg">
          A selection of my work across multimedia design, branding, and interactive experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
