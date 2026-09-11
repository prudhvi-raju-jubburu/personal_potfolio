import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Database, Layout, Server, Terminal, Sparkles, Zap, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { floatingSkills, languagesKnown, skillCategories, strengths } from '../data/site';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMedia';
import Reveal from './Reveal';
import SkillIcon from './SkillIcon';
import './SkillsSection.css';

const categoryIconMap = {
  Terminal,
  Layout,
  Server,
  Database,
};

const SkillsSection = () => {
  const stageRef = useRef(null);
  const [active, setActive] = useState(null);
  const [cardStyle, setCardStyle] = useState({});
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  const nodes = useMemo(
    () =>
      floatingSkills.map((skill, i) => {
        const angle = (i / floatingSkills.length) * Math.PI * 2;
        const radius = 28 + (i % 3) * 8;
        return {
          ...skill,
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * (radius * 0.62),
          delay: `${(i * 0.18).toFixed(2)}s`,
          depth: 0.7 + (i % 4) * 0.12,
        };
      }),
    []
  );

  const placeCard = (nodeEl) => {
    const stage = stageRef.current;
    if (!stage || !nodeEl) return;
    const s = stage.getBoundingClientRect();
    const n = nodeEl.getBoundingClientRect();
    const cardW = 260;
    const cardH = 130;
    let left = n.left - s.left + n.width / 2 - cardW / 2;
    let top = n.top - s.top - cardH - 12;
    left = Math.max(8, Math.min(left, s.width - cardW - 8));
    top = Math.max(8, Math.min(top, s.height - cardH - 8));
    setCardStyle({ left, top, width: cardW });
  };

  const activate = (skill, event) => {
    setActive(skill);
    placeCard(event.currentTarget);
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || mobile || reduced) return undefined;
    const onMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      stage.style.setProperty('--mx', `${x}px`);
      stage.style.setProperty('--my', `${y}px`);
    };
    stage.addEventListener('mousemove', onMove);
    return () => stage.removeEventListener('mousemove', onMove);
  }, [mobile, reduced]);

  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <Reveal>
          <p className="section-kicker">Technologies & Expertise</p>
          <h2 className="section-title">Tools & Skills I Build With</h2>
          <p className="section-lede">
            Explore my interactive tech orbit or review the structured skills breakdown below.
          </p>
        </Reveal>

        {/* 1. Interactive Floating 3D Stage (or Mobile Chip Grid) */}
        {mobile ? (
          <ul className="skills-mobile-grid">
            {floatingSkills.map((skill) => {
              const open = active?.id === skill.id;
              return (
                <li key={skill.id}>
                  <button
                    type="button"
                    className={`skill-chip ${open ? 'open' : ''}`}
                    onClick={() => setActive(open ? null : skill)}
                    aria-expanded={open}
                  >
                    <div className="skill-chip-header">
                      <SkillIcon skillId={skill.id} size={26} />
                      <span style={{ color: skill.color }}>{skill.name}</span>
                    </div>
                    {open && <p>{skill.blurb}</p>}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div
            className={`skills-stage ${reduced ? 'static' : ''}`}
            ref={stageRef}
            onMouseLeave={() => setActive(null)}
          >
            {nodes.map((skill) => (
              <button
                type="button"
                key={skill.id}
                className={`skill-node ${active?.id === skill.id ? 'is-active' : ''}`}
                style={{
                  '--x': `${skill.x}%`,
                  '--y': `${skill.y}%`,
                  '--delay': skill.delay,
                  '--depth': skill.depth,
                  '--tone': skill.color,
                }}
                onMouseEnter={(e) => activate(skill, e)}
                onFocus={(e) => activate(skill, e)}
                onClick={(e) => activate(skill, e)}
              >
                <SkillIcon skillId={skill.id} size={26} />
                <span>{skill.name}</span>
              </button>
            ))}

            {active && (
              <div className="skill-card" style={cardStyle} role="status">
                <div className="skill-card-header">
                  <SkillIcon skillId={active.id} size={28} />
                  <strong>{active.name}</strong>
                </div>
                <p>{active.blurb}</p>
              </div>
            )}
          </div>
        )}

        {/* 2. Structured 4-Card Panel Grid (Matching Image 2) */}
        <Reveal className="skills-grid-container">
          {skillCategories.map((cat) => {
            const IconComponent = categoryIconMap[cat.categoryIcon] || Terminal;
            return (
              <div key={cat.id} className="skills-card-panel">
                <div className="skills-card-header">
                  <div className="skills-card-icon-box">
                    <IconComponent size={18} className="skills-card-icon" />
                  </div>
                  <h3 className="skills-card-title">{cat.title}</h3>
                </div>

                <div className="skills-items-list">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item-pill"
                      whileHover={reduced ? {} : { scale: 1.03, x: 3 }}
                    >
                      <div className="skill-item-left">
                        <CheckCircle2 size={16} className="skill-check-icon" />
                        <span className="skill-item-name">{skill.name}</span>
                      </div>
                      {skill.subtext && <span className="skill-item-subtext">{skill.subtext}</span>}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>

        {/* 3. Animated Strengths & Languages Known */}
        <Reveal className="skills-extras-row">
          <motion.div
            className="skills-card-panel extra-panel"
            initial={reduced ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="extra-panel-header">
              <div className="extra-panel-icon-wrap">
                <Sparkles size={16} className="extra-panel-icon" />
              </div>
              <h4 className="extra-panel-title">Strengths</h4>
            </div>
            <div className="strengths-tags-wrap">
              {strengths.map((str, idx) => (
                <motion.span
                  key={str}
                  className="strength-chip"
                  initial={reduced ? false : { opacity: 0, scale: 0.9, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={reduced ? {} : { scale: 1.08, y: -3, transition: { duration: 0.2 } }}
                >
                  <Zap size={12} className="strength-spark-icon" />
                  <span>{str}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-card-panel extra-panel"
            initial={reduced ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="extra-panel-header">
              <div className="extra-panel-icon-wrap">
                <Globe2 size={16} className="extra-panel-icon" />
              </div>
              <h4 className="extra-panel-title">Languages Known</h4>
            </div>
            <div className="languages-list-wrap">
              {languagesKnown.map((lang, idx) => (
                <motion.div
                  key={lang.language}
                  className="language-badge"
                  initial={reduced ? false : { opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={reduced ? {} : { scale: 1.05, x: 4, transition: { duration: 0.2 } }}
                >
                  <span className="lang-name">{lang.language}</span>
                  <span className="lang-level">({lang.level})</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
