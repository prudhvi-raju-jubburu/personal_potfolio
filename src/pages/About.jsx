import './About.css';
import { 
  Briefcase, GraduationCap, Users, Heart, Target, 
  Layout, Terminal, Database, Cpu 
} from 'lucide-react';

const About = () => {
  return (
    <div className="about-container animate-fade-in">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <section className="about-main card">
          <div className="professional-summary">
            <h2>Professional Summary</h2>
            <p>
              I am a dedicated <strong>B.Tech Computer Science student</strong> at GMR Institute of Technology with a passion for building 
              impactful digital solutions. As a <strong>MERN Stack Developer</strong>, I specialize in creating 
              scalable, user-centric web applications using modern technologies like <strong>React, Node.js, and MongoDB</strong>.
            </p>
            <p>
              My journey is fueled by a strong foundation in <strong>JavaScript and Python</strong>, combined with hands-on project 
              experience in full-stack development and machine learning. Beyond technical skills, I am an active 
              <strong> NSS Volunteer</strong>, which has shaped my leadership and teamwork abilities through community service.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <Users className="highlight-icon" />
              <div>
                <h4>Teamwork & Leadership</h4>
                <p>NSS experience in leading group activities and community outreach.</p>
              </div>
            </div>
            <div className="highlight-item">
              <Target className="highlight-icon" />
              <div>
                <h4>Problem-Solver</h4>
                <p>Passionate about algorithmic challenges and system design.</p>
              </div>
            </div>
            <div className="highlight-item">
              <Heart className="highlight-icon" />
              <div>
                <h4>Continuous Learner</h4>
                <p>Eager to adopt new frameworks and industry best practices.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-overview card">
          <h2 className="sub-title"><Layout size={24} /> Skills</h2>
          <div className="skills-grid extended">
            <div className="skill-card">
              <div className="skill-header">
                <Layout className="skill-icon frontend" />
                <h3>Frontend</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">HTML5</span></li>
                <li><span className="skill-tag">CSS3</span></li>
                <li><span className="skill-tag">React.js</span></li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-header">
                <Cpu className="skill-icon languages" />
                <h3>Programming</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">C</span></li>
                <li><span className="skill-tag">C++</span></li>
                <li><span className="skill-tag">Python</span></li>
                <li><span className="skill-tag">JavaScript</span></li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <Terminal className="skill-icon backend" />
                <h3>Backend</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">Node.js</span></li>
                <li><span className="skill-tag">Express.js</span></li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <Database className="skill-icon database" />
                <h3>Database</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">MongoDB</span></li>
                <li><span className="skill-tag">SQL (MySQL)</span></li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <Briefcase className="skill-icon tools" />
                <h3>Tools</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">Git</span></li>
                <li><span className="skill-tag">GitHub</span></li>
                <li><span className="skill-tag">VS Code</span></li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <Heart className="skill-icon soft-skills" />
                <h3>Soft Skills</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">Teamwork</span></li>
                <li><span className="skill-tag">Adaptability</span></li>
                <li><span className="skill-tag">Problem Solving</span></li>
                <li><span className="skill-tag">Leadership</span></li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-header">
                <Users className="skill-icon languages-known" />
                <h3>Languages</h3>
              </div>
              <ul className="skill-tags">
                <li><span className="skill-tag">English</span></li>
                <li><span className="skill-tag">Telugu</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-details">
          <div className="education-column">
            <h2 className="sub-title"><GraduationCap size={24} /> Education Journey</h2>
            <div className="timeline-v2">
              <div className="timeline-box card">
                <span className="timeline-date">2023 - 2027</span>
                <h3>B.Tech (CSE)</h3>
                <p className="institution">GMR Institute of Technology, Rajam</p>
                <div className="grade-pill">CGPA: 9.0</div>
              </div>
              <div className="timeline-box card">
                <span className="timeline-date">2021 - 2023</span>
                <h3>Intermediate (MPC)</h3>
                <p className="institution">Vidya Vikas Junior College, Eluru</p>
                <div className="grade-pill">GPA: 9.6</div>
              </div>
              <div className="timeline-box card">
                <span className="timeline-date">2021</span>
                <h3>Secondary Education</h3>
                <p className="institution">ZPP High School, Raghavapuram</p>
                <div className="grade-pill">GPA: 9.7</div>
              </div>
            </div>
          </div>

          <div className="internship-column">
            <h2 className="sub-title"><Briefcase size={24} /> Experience Highlights</h2>
            <div className="experience-summary card">
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div>
                  <h4>MERN Stack Intern</h4>
                  <p className="exp-info">Codec Technologies Pvt. Ltd. (Oct 2025)</p>
                  <ul className="exp-bullets">
                    <li>Built responsive UI components using React.js and managed state effectively.</li>
                    <li>Developed RESTful APIs with Node.js and Express for data handling.</li>
                    <li>Integrated MongoDB for scalable and efficient database management.</li>
                  </ul>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-dot"></div>
                <div>
                  <h4>AI Technologies Intern</h4>
                  <p className="exp-info">EdyGrad One Pvt. Ltd. (June 2025)</p>
                  <ul className="exp-bullets">
                    <li>Explored core Artificial Intelligence and Machine Learning concepts.</li>
                    <li>Gained experience in data preprocessing and model evaluation metrics.</li>
                    <li>Studied neural network architectures and their real-world applications.</li>
                  </ul>
                </div>
              </div>
              <p className="exp-note">
                Gained solid exposure to full-stack workflows, component design, and AI/ML model integration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
