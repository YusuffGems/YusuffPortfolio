import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import vrPoster from "@/assets/vr-content-poster.jpg";
import thumbBuilder from "@/assets/thumb-builder.jpg";
import thumbScaleInd from "@/assets/thumb-scale-ind.jpg";
import thumbJobx from "@/assets/thumb-jobx.jpg";
import thumbIilf from "@/assets/thumb-iilf.jpg";
import thumbNewsletter from "@/assets/thumb-newsletter.jpg";

interface Project {
  key: string;
  tags: string[];
  thumbnail?: string;
  video?: string;
  poster?: string;
  link?: string;
  isPortrait?: boolean;
}

const projects: Project[] = [
  {
    key: "vr",
    tags: ["VR", "Unity", "3D", "Education"],
    video: "/videos/vr-content-project.mp4",
    poster: vrPoster,
    isPortrait: true,
  },
  {
    key: "builder",
    tags: ["WordPress", "Web Design", "Real Estate"],
    thumbnail: thumbBuilder,
    link: "https://srigowralayabuilders.in/",
  },
  {
    key: "scale",
    tags: ["UI/UX", "Figma", "IoT", "Dashboard"],
    thumbnail: thumbScaleInd,
    link: "https://www.figma.com/proto/fgFs79HtwZjLDk3rse0qiA/iot?node-id=0-1&t=8sJP801Oh24lanca-1",
  },
  {
    key: "jobx",
    tags: ["Hackathon", "UI/UX", "Mobile", "Web"],
    thumbnail: thumbJobx,
    link: "https://www.figma.com/proto/IWUjw9QUbZMjQsadstkKU7/Jobx?node-id=40-36&t=Edd0tmiIAjIgR3To-1",
  },
  {
    key: "iilf",
    tags: ["Branding", "Print", "Exhibition"],
    thumbnail: thumbIilf,
    link: "https://drive.google.com/file/d/1ZNq_bUrE-2q8BZZD25Shn93ZiBJDZmGk/view?usp=sharing",
  },
  {
    key: "news",
    tags: ["Editorial", "Publication", "Design"],
    thumbnail: thumbNewsletter,
    link: "https://drive.google.com/file/d/1rI76Z-BNKbjlGO3eNomfWT_uy793L6LG/view?usp=sharing",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useLanguage();
  const title = t(`proj.${project.key}.title`);
  const description = t(`proj.${project.key}.desc`);
  const ctaLabel = t(`proj.${project.key}.cta`);
  return (
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
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
    </div>

    {/* Info */}
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
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
          {ctaLabel} <ExternalLink size={14} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-primary font-heading font-medium">
          {project.video ? <Play size={14} /> : <ExternalLink size={14} />}
          {ctaLabel}
        </span>
      )}
    </div>
  </motion.div>
  );
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  return (
  <section id="projects" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {t("portfolio.title1")} <span className="text-primary">{t("portfolio.title2")}</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground max-w-lg">
          {t("portfolio.subtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.key} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default PortfolioSection;
