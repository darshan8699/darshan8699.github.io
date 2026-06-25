import React, { useState, useEffect, useRef } from 'react';

// Simple reveal hook
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Skill bar with animation on reveal
export function SkillBar({ name, level, category }) {
  const ref = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fill = fillRef.current;
    if (!el || !fill) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${level}%`;
          fill.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  const colorClass =
    category === 'Frontend' ? 'sky' :
    category === 'Backend' ? 'emerald' : '';

  return (
    <div className="g-card skill-card" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${colorClass}`}
          ref={fillRef}
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
}

// Navbar
export function Navbar({ logoSrc }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Update active link
      const sections = ['home','about','skills','experience','projects','education','contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
  ];

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <img src={logoSrc} alt="Logo" className="nav-logo" />
        </a>
        <ul className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`nav-cta${menuOpen ? ' mobile-open' : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          ✉ Let's Talk
        </a>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
