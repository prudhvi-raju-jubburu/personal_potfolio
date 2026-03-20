import './Experience.css';
import { Briefcase, Award, X } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="experience-container animate-fade-in">
        <div className="experience-header">
          <h1 className="page-title">Certifications</h1>
          <div className="title-underline"></div>
          <p className="experience-intro">
            A comprehensive collection of my professional certifications and academic achievements in software development and emerging technologies.
          </p>
        </div>

        <section className="certifications-section full-width">
          <div className="certifications-list gallery">
            <div className="certification-item card" onClick={() => openModal("/certifications/frontend.png")}>
              <div className="cert-img-wrapper">
                <img src="/certifications/frontend.png" alt="Frontend Certification" className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>Front End Web Developer</h3>
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

            <div className="certification-item card" onClick={() => openModal("/certifications/problem.png")}>
              <div className="cert-img-wrapper">
                <img src="/certifications/problem.png" alt="Problem Solving Certification" className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>Problem Solving</h3>
                <p>HackerRank</p>
              </div>
            </div>

            <div className="certification-item card" onClick={() => openModal("/certifications/java.png")}>
              <div className="cert-img-wrapper">
                <img src="/certifications/java.png" alt="Java Certification" className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>OOP in Java</h3>
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

            <div className="certification-item card" onClick={() => openModal("/certifications/nss.jpg")}>
              <div className="cert-img-wrapper">
                <img src="/certifications/nss.jpg" alt="NSS Certificate" className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>NSS Volunteer Certificate</h3>
                <p>National Service Scheme (NSS)</p>
              </div>
            </div>

            <div className="certification-item card" onClick={() => openModal("/certifications/vibe.jpeg")}>
              <div className="cert-img-wrapper">
                <img src="/certifications/vibe.jpeg" alt="Hackathon Certificate" className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>Hackathon Achievement</h3>
                <p>Technical Fest / Competition</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {selectedImg && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={28} />
            </button>
            <img src={selectedImg} alt="Certificate Enlarged" className="enlarged-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
