import './About.css';
import { BookOpen, Monitor, Award, Lightbulb, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="about-container animate-fade-in">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
        <div className="title-underline"></div>
      </div>

      <section className="about-intro">
        <p>
          I am a B.Tech Computer Science student with a strong interest in Web Development and Software Engineering. 
          I enjoy building real-world applications that solve practical problems and improve user experience.
        </p>
        <p>
          I have hands-on experience with Javascript,React.js,Node.js Express.js and Python, and have developed multiple projects. 
          My internship experience helped me understand real-world workflows and teamwork. 
          I am always eager to learn new technologies and build efficient, scalable applications.
        </p>
      </section>

      <div className="about-grid">
        <section className="skills-section">
          <h2><BookOpen className="section-icon" /> Skills & Languages</h2>
          <div className="skills-container">
            <div className="skill-category card">
              <div className="category-header">
                <Monitor className="category-icon" />
                <h3>Technical Skills</h3>
              </div>
              <ul className="skill-list">
                <li><span className="skill-tag">C</span></li>
                <li><span className="skill-tag">C++</span></li>
                <li><span className="skill-tag">HTML</span></li>
                <li><span className="skill-tag">CSS</span></li>
                <li><span className="skill-tag">JavaScript</span></li>
                <li><span className="skill-tag">React.js</span></li>
                <li><span className="skill-tag">Node.js</span></li>
                <li><span className="skill-tag">Express.js</span></li>
                <li><span className="skill-tag">MongoDB</span></li>
                <li><span className="skill-tag">Python</span></li>
                <li><span className="skill-tag">Flask</span></li>
              </ul>
            </div>

            <div className="skill-category card">
              <div className="category-header">
                <Lightbulb className="category-icon" />
                <h3>Soft Skills</h3>
              </div>
              <ul className="skill-list">
                <li><span className="skill-tag">Teamwork</span></li>
                <li><span className="skill-tag">Adaptability</span></li>
                <li><span className="skill-tag">Problem Solving</span></li>
                <li><span className="skill-tag">Time Management</span></li>
              </ul>
            </div>

            <div className="skill-category card">
              <div className="category-header">
                <Award className="category-icon" />
                <h3>Languages Known</h3>
              </div>
              <ul className="skill-list">
                <li><span className="skill-tag">English</span></li>
                <li><span className="skill-tag">Telugu</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2><GraduationCap className="section-icon" /> Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3>B.Tech — CSE</h3>
                <h4 className="institution">GMR Institute of Technology, Rajam</h4>
                <p className="timeline-date">2023 - 2027</p>
                <div className="grade-badge">CGPA: 9.0</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3>Intermediate — MPC</h3>
                <h4 className="institution">Vidya Vikas Junior College, Eluru</h4>
                <p className="timeline-date">2021 - 2023</p>
                <div className="grade-badge">GPA: 9.6</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <h3>Secondary Education</h3>
                <h4 className="institution">ZPP High School, Raghavapuram</h4>
                <p className="timeline-date">Graduated: 2021</p>
                <div className="grade-badge">GPA: 9.7</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
