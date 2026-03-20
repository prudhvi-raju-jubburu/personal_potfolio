import './Experience.css';
import { Briefcase, Award, X } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <div className="experience-container animate-fade-in">
        <div className="experience-header">
          <h1 className="page-title">Experience & Certifications</h1>
          <div className="title-underline"></div>
          <p className="experience-intro">
            Here is a summary of my professional internship experience and the certifications I have earned to advance my skills.
          </p>
        </div>

        <div className="experience-grid">
          <section className="internship-section">
            <h2><Briefcase className="section-icon" /> Internship Experience</h2>
            
            <div className="experience-timeline">
              <div className="experience-card card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="role-title">MERN Stack Developer Intern</h3>
                    <h4 className="company-name">Codec Technologies Pvt. Ltd.</h4>
                  </div>
                  <div className="date-badge">Oct 2025</div>
                </div>
                <ul className="experience-details">
                  <li>Worked on full-stack web development using MongoDB, Express.js, React.js, and Node.js.</li>
                </ul>
              </div>

              <div className="experience-card card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="role-title">AI Technologies Intern</h3>
                    <h4 className="company-name">EdyGrad One Pvt. Ltd.</h4>
                  </div>
                  <div className="date-badge">June 2025</div>
                </div>
                <ul className="experience-details">
                  <li>Gained hands-on exposure to Artificial Intelligence and Machine Learning concepts.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="certifications-section">
            <h2><Award className="section-icon" /> Certifications</h2>
            
            <div className="certifications-list">
              <div className="certification-item card" onClick={() => openModal("/certifications/frontend.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/frontend.png" alt="Frontend Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Front End Web Developer Certification</h3>
                  <p>Infosys Springboard</p>
                </div>
              </div>
              
              <div className="certification-item card" onClick={() => openModal("/certifications/mern.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/mern.png" alt="MERN Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>MERN Stack Developer</h3>
                  <p>Codec Technologies</p>
                </div>
              </div>
              
              <div className="certification-item card" onClick={() => openModal("/certifications/java.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/java.png" alt="Java Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Object-Oriented Programming in Java</h3>
                  <p>Coursera</p>
                </div>
              </div>
              
              <div className="certification-item card" onClick={() => openModal("/certifications/javascript.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/javascript.png" alt="Javascript Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Javascript</h3>
                  <p>NPTEL</p>
                </div>
              </div>

              <div className="certification-item card" onClick={() => openModal("/certifications/problem.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/problem.png" alt="Problem Solving Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Problem Solving</h3>
                  <p>HackerRank</p>
                </div>
              </div>

              <div className="certification-item card" onClick={() => openModal("/certifications/python.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/python.png" alt="Python Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Joy of Computing in Python</h3>
                  <p>NPTEL</p>
                </div>
              </div>

              <div className="certification-item card" onClick={() => openModal("/certifications/L&T javascript.png")}>
                <div className="cert-img-wrapper">
                  <img src="/certifications/L&T javascript.png" alt="Javascript Essentials Certification" className="cert-image" />
                </div>
                <div className="cert-info">
                  <h3>Javascript Essentials</h3>
                  <p>L&T Edu Tech</p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {selectedImg && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={28} strokeWidth={2.5} />
            </button>
            <img src={selectedImg} alt="Certificate Enlarged" className="enlarged-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
