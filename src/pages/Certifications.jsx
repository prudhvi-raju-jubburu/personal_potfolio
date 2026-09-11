import { certifications, achievements } from '../data/site';
import './Home.css';

const Certifications = () => (
  <div className="section">
    <div className="section-inner">
      <p className="section-kicker">Credentials</p>
      <h1 className="section-title">Certifications & achievements</h1>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="cert-mini card">
            <h2>{cert.title}</h2>
            <p>{cert.platform}</p>
            <span className="tech-pill">{cert.tech}</span>
          </article>
        ))}
      </div>
      <div className="achieve-row">
        {achievements.map((item) => (
          <p key={item.title}><strong>{item.title}.</strong> {item.detail}</p>
        ))}
      </div>
    </div>
  </div>
);

export default Certifications;
