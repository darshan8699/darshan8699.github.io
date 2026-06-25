import React, { useState, useEffect, useRef } from 'react';
import { resumeData } from './data/resumeData';
import { Navbar, SkillBar, useReveal } from './components/shared';

// Typewriter Subheading component for Hero section
function TypewriterSubheading() {
  const words = ["React Native Expert", "Mobile App Developer", "Cross-Platform Architect"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <span className="text-grad-violet">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  );
}

// Inline SVG Icon Helper components for maximum design flexibility and reliability
const AndroidIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3c-.15.22-.38.38-.65.46-.27.08-.56.07-.82-.04-.51-.23-1.07-.35-1.64-.35s-1.13.12-1.64.35c-.26.11-.55.12-.82.04-.27-.08-.5-.24-.65-.46-.71-1.02-1.1-2.24-1.1-3.5 0-1.26.39-2.48 1.1-3.5.15-.22.38-.38.65-.46.27-.08.56-.07.82.04.51.23 1.07.35 1.64.35s1.13-.12 1.64-.35c.26-.11.55-.12.82-.04.27.08.5.24.65.46.71 1.02 1.1 2.24 1.1 3.5 0 1.26-.39 2.48-1.1 3.5zm-5.11-8.58c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm5.18 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM20.37 8.3c-.34-.73-.85-1.37-1.48-1.89l1.24-2.15c.08-.14.03-.32-.11-.4l-.87-.5c-.14-.08-.32-.03-.4.11l-1.25 2.16c-1.12-.66-2.4-.1.3-3.69-.1L13.5 3.37c-.14-.08-.32-.03-.4.11L11.85 5.63c-.63-.52-1.35-.91-2.12-1.15L8.49 2.33c-.08-.14-.26-.19-.4-.11l-.87.5c-.14.08-.19.26-.11.4l1.24 2.15c-.63.52-1.14 1.16-1.48 1.89L3.5 8.3c-.14.08-.19.26-.11.4l.87.5c.08.14.26.19.4.11l3.37-1.95c.57.9 1.45 1.57 2.47 1.89V19.5c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5v-4.75h1.5V19.5c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5v-10.25c1.02-.32 1.9-.99 2.47-1.89l3.37 1.95c.14.08.32.03.4-.11l.87-.5c.08-.14.03-.32-.11-.4L20.37 8.3z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.58 2.98-1.43z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [backTopVisible, setBackTopVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reveals
  const heroReveal = useReveal();
  const aboutReveal = useReveal();
  const skillsReveal = useReveal();
  const expReveal = useReveal();
  const projReveal = useReveal();
  const eduReveal = useReveal();
  const contactReveal = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      setBackTopVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1200);
  };

  // Filter skills
  const filteredSkills = resumeData.skills.filter(
    (skill) => activeTab === 'All' || skill.category === activeTab
  );

  return (
    <>
      {/* Background decorations */}
      <div className="grid-bg" />
      <div className="glow-orb glow-orb--violet" />
      <div className="glow-orb glow-orb--emerald" />
      <div className="glow-orb glow-orb--sky" />

      {/* Navigation Header */}
      <Navbar logoSrc="/logo.png" />

      {/* Hero Section */}
      <section id="home" className="hero-section" ref={heroReveal}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              {resumeData.available && (
                <div className="hero-status">
                  <span className="pulse" />
                  Available for Remote & Hybrid Opportunities
                </div>
              )}
              <p className="hero-greeting">
                Hello, I'm <span>{resumeData.name}</span>
              </p>
              <h1 className="hero-title">
                <span className="line">I Design & Build</span>
                <TypewriterSubheading />
              </h1>
              <p className="hero-sub">{resumeData.summary}</p>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-ghost">
                  Let's Connect
                </a>
              </div>

              <div className="hero-metrics">
                {resumeData.metrics.map((metric, idx) => (
                  <div key={idx} className="hero-metric-item">
                    <div className="hero-metric-val text-grad-violet">{metric.value}</div>
                    <div className="hero-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-right">
              <div className="terminal-card">
                <div className="float-label">EXPERT</div>
                <div className="terminal-bar">
                  <div className="terminal-dot terminal-dot--r" />
                  <div className="terminal-dot terminal-dot--y" />
                  <div className="terminal-dot terminal-dot--g" />
                  <div className="terminal-file">darshan.config.ts</div>
                </div>
                <div className="terminal-body">
                  <div>
                    <span className="t-kw">const</span> <span className="t-prop">developer</span> <span className="t-op">=</span> <span className="t-op">&#123;</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">name</span><span className="t-op">:</span> <span className="t-str">"{resumeData.name}"</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">role</span><span className="t-op">:</span> <span className="t-str">"{resumeData.title}"</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">location</span><span className="t-op">:</span> <span className="t-str">"{resumeData.location}"</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">experience</span><span className="t-op">:</span> <span className="t-str">"6+ years"</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">platforms</span><span className="t-op">:</span> <span className="t-op">[</span>
                    <span className="t-str">"Android"</span><span className="t-op">,</span> <span className="t-str">"iOS"</span>
                    <span className="t-op">]</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">core_framework</span><span className="t-op">:</span> <span className="t-str">"React Native"</span><span className="t-op">,</span>
                  </div>
                  <div className="t-indent">
                    <span className="t-prop">available</span><span className="t-op">:</span> <span className="t-bool">true</span>
                  </div>
                  <div>
                    <span className="t-op">&#125;;</span>
                  </div>
                </div>
                <div className="terminal-tags">
                  <span className="terminal-tag">React Native</span>
                  <span className="terminal-tag">Android</span>
                  <span className="terminal-tag">iOS</span>
                  <span className="terminal-tag">Expo</span>
                  <span className="terminal-tag">TypeScript</span>
                  <span className="terminal-tag">JavaScript</span>
                </div>
                <div className="terminal-status">
                  <span className="pulse" />
                  <span>Config validated successfully!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" ref={aboutReveal}>
        <div className="container">
          <div className="section-label">About Me</div>
          <h2 className="section-heading">Crafting Mobile Experiences That Matter</h2>

          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-img-frame">
                <img src="/logo.png" alt="Darshan Rana Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
              </div>
              <div className="about-floating-card">
                <div className="badge-icon">📱</div>
                <div>
                  <h4 style={{ fontWeight: 700 }}>6+ Years</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Building Apps</p>
                </div>
              </div>
            </div>

            <div className="about-text">
              <p>
                I am a dedicated <strong>Mobile App Developer</strong> specializing in creating high-quality, pixel-perfect, and native-performing cross-platform mobile apps for Android and iOS using <strong>React Native</strong>.
              </p>
              <p>
                With over 6 years of professional industry experience, I have worked across diverse teams locally and remotely (including companies in Australia and India) to deliver robust mobile architectures, write modular/clean code, optimize memory usage, and build reusable UI components.
              </p>

              <div className="about-highlights">
                <div className="g-card highlight-card">
                  <div className="highlight-icon violet">📱</div>
                  <div className="highlight-info">
                    <h4>Cross-Platform Mobile</h4>
                    <p>React Native development for both Android & iOS with maximum performance.</p>
                  </div>
                </div>

                <div className="g-card highlight-card">
                  <div className="highlight-icon emerald">⚡</div>
                  <div className="highlight-info">
                    <h4>Performance Tuning</h4>
                    <p>Familiar with optimization, custom scripts, memory tracking, and profiling tools.</p>
                  </div>
                </div>

                <div className="g-card highlight-card">
                  <div className="highlight-icon sky">🛠️</div>
                  <div className="highlight-info">
                    <h4>SDKs & Integrations</h4>
                    <p>Experience with WebSockets, WebRTC, payment gateways, push notifications, and Maps.</p>
                  </div>
                </div>

                <div className="g-card highlight-card">
                  <div className="highlight-icon violet">📦</div>
                  <div className="highlight-info">
                    <h4>Component Libraries</h4>
                    <p>Establishing shared libraries, Expo configurations, and automated CI/CD workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" ref={skillsReveal}>
        <div className="container">
          <div className="section-label">Technical Expertise</div>
          <h2 className="section-heading">Skills & Technologies</h2>

          <div className="skills-categories">
            {['All', 'Mobile', 'Frontend', 'Databases'].map((cat) => (
              <button
                key={cat}
                className={`cat-btn${activeTab === cat ? ' active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                category={skill.category}
              />
            ))}
          </div>

          {/* Soft Skills Section */}
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>
              Core Strengths & Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {resumeData.softSkills.map((s, i) => (
                <span
                  key={i}
                  className="terminal-tag"
                  style={{
                    fontSize: '0.9rem',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-white)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section" ref={expReveal}>
        <div className="container">
          <div className="section-label">Professional Journey</div>
          <h2 className="section-heading">Work Experience</h2>

          <div className="exp-timeline">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="exp-item">
                <div className="exp-dot">{resumeData.experience.length - idx}</div>
                <div className="exp-body">
                  <div className="exp-meta">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" ref={projReveal}>
        <div className="container">
          <div className="section-label">Featured Work</div>
          <h2 className="section-heading">Mobile Products I've Built</h2>

          <div className="projects-grid">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="g-card project-card">
                <div className="project-header">
                  <div className="project-icon">{proj.icon || '📱'}</div>
                  <div className="project-links">
                    {proj.android && (
                      <a href={proj.android} className="project-link" title="Download for Android" target="_blank" rel="noreferrer">
                        <AndroidIcon />
                      </a>
                    )}
                    {proj.ios && (
                      <a href={proj.ios} className="project-link" title="Download for iOS" target="_blank" rel="noreferrer">
                        <AppleIcon />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section" ref={eduReveal}>
        <div className="container">
          <div className="section-label">Education</div>
          <h2 className="section-heading">Academic Foundations</h2>

          <div className="edu-grid">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="g-card edu-card">
                <div className="edu-icon">{edu.icon || '🎓'}</div>
                <div className="edu-info">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution}</div>
                  <div className="edu-meta">
                    <span className="edu-tag">📍 {edu.location}</span>
                    <span className="edu-tag">📅 {edu.period}</span>
                    <span className="edu-tag" style={{ color: 'var(--emerald)', fontWeight: 600 }}>📊 {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles/Find Me Online Section */}
      <section id="profiles" className="profiles-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-label">Find Me Online</div>
          <h2 className="section-heading">Connect With Me</h2>

          <div className="profiles-grid">
            <a href={resumeData.linkedin} className="g-card profile-card" target="_blank" rel="noreferrer">
              <div className="profile-icon" style={{ color: '#0077b5' }}>
                <LinkedInIcon />
              </div>
              <div className="profile-name">LinkedIn</div>
              <div className="profile-handle">@ranadarshan15</div>
            </a>

            <a href={resumeData.github} className="g-card profile-card" target="_blank" rel="noreferrer">
              <div className="profile-icon" style={{ color: '#ffffff' }}>
                <GitHubIcon />
              </div>
              <div className="profile-name">GitHub</div>
              <div className="profile-handle">@ranadarshan15</div>
            </a>

            <a href={`mailto:${resumeData.email}`} className="g-card profile-card">
              <div className="profile-icon" style={{ color: 'var(--violet-light)' }}>
                <MailIcon />
              </div>
              <div className="profile-name">Email Me</div>
              <div className="profile-handle">{resumeData.email}</div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" ref={contactReveal}>
        <div className="container">
          <div className="section-label">Contact</div>
          <h2 className="section-heading">Let's Build Something Great Together</h2>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p>
                Have an interesting remote app development contract, a full-time opening, or a freelance opportunity? Drop me a message, and let's explore how we can work together!
              </p>

              <div className="contact-item">
                <div className="contact-item-icon" style={{ color: 'var(--violet-light)' }}>
                  <MailIcon />
                </div>
                <div>
                  <div className="contact-item-label">Email Me</div>
                  <div className="contact-item-val">{resumeData.email}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" style={{ color: 'var(--emerald)' }}>
                  <PhoneIcon />
                </div>
                <div>
                  <div className="contact-item-label">Call / WhatsApp</div>
                  <div className="contact-item-val">{resumeData.phone}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" style={{ color: 'var(--sky)' }}>
                  <MapPinIcon />
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">{resumeData.location}</div>
                </div>
              </div>
            </div>

            <div>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                {formStatus && (
                  <div
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      color: 'var(--emerald)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginBottom: '10px'
                    }}
                  >
                    {formStatus.message}
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="Project Collaboration Opportunity"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="form-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <ul className="footer-nav">
            <li>
              <a href="#about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="footer-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="footer-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="footer-link">
                Education
              </a>
            </li>
          </ul>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved. Built with ❤️ in India.
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`back-top${backTopVisible ? ' visible' : ''}`}
        aria-label="Back to top"
      >
        ▲
      </button>
    </>
  );
}

export default App;
