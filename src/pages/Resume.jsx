import { Download, FileText, Code2, Terminal, Cpu } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container animate-fade-in">
      <div className="resume-header">
        <h1 className="page-title">Resume</h1>
        <div className="title-underline"></div>
        <div className="resume-actions">
          <a href="/Resume.pdf" download="Jubburu_Prudhvi_Raju_Resume.pdf" className="btn btn-primary download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="coding-profiles">
          <a href="https://leetcode.com/u/CS23341A05A7/" target="_blank" rel="noopener noreferrer" className="profile-link">
            <Code2 size={20} className="profile-icon leetcode" />
            <span>LeetCode</span>
          </a>
          <a href="https://www.codechef.com/users/cs23341a05a7" target="_blank" rel="noopener noreferrer" className="profile-link">
            <Terminal size={20} className="profile-icon codechef" />
            <span>CodeChef</span>
          </a>
          <a href="https://www.geeksforgeeks.org/profile/jubburuprum7md" target="_blank" rel="noopener noreferrer" className="profile-link">
            <Cpu size={20} className="profile-icon gfg" />
            <span>GeeksforGeeks</span>
          </a>
        </div>
      </div>

      <div className="resume-viewer-container card">
        <div className="resume-viewer-header">
          <FileText size={20} className="viewer-icon" />
          <span>Resume.pdf</span>
        </div>
        <div className="resume-pdf-wrapper">
          <iframe 
            src="/Resume.pdf" 
            title="Resume PDF" 
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
