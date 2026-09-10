import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ title, description, features, techStack, githubLink, liveLink, image, tag }) => {
  // 3D Tilt Motion Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const handleMouseMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="project-card-tilt-container"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="project-card card"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8 }}
      >
        {image && (
          <div className="project-image-wrapper">
            <img
              src={image}
              alt={title}
              className="project-image"
              loading="lazy"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x340?text=Project+Preview'; }}
            />
            <div className="image-overlay"></div>
            {tag && <span className="project-category-badge">{tag}</span>}
          </div>
        )}

        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>

          {features && features.length > 0 && (
            <ul className="project-features-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <span className="bullet-dot">•</span> {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="project-tech">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-card-footer">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm card-btn"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm card-btn"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
              <ArrowUpRight size={14} className="arrow-hover-icon" />
            </a>
          ) : (
            <span className="demo-unavailable-tag">Internal Platform</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
