import { Download, FileText, ExternalLink } from 'lucide-react';
import { profile } from '../data/site';
import './Resume.css';

const Resume = () => (
  <div className="section">
    <div className="section-inner">
      <p className="section-kicker">Resume</p>
      <h1 className="section-title">Software engineering resume</h1>
      <p className="section-lede">Download the PDF or preview it below.</p>
      <div className="resume-actions">
        <a className="btn btn-primary" href={profile.resume} download={profile.resumeFileName}>
          <Download size={18} /> Download PDF
        </a>
        <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} /> Open in new tab
        </a>
      </div>
      <div className="resume-viewer card">
        <div className="viewer-header">
          <FileText size={16} />
          <span>{profile.resumeFileName}</span>
        </div>
        <iframe src={`${profile.resume}#toolbar=0`} title="Resume PDF preview" className="resume-iframe" />
      </div>
    </div>
  </div>
);

export default Resume;
