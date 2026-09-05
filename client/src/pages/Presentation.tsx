import { useEffect } from 'react';
import './Presentation.css';

export default function Presentation() {
  useEffect(() => {
    // Update active nav dot on scroll
    const sections = document.querySelectorAll('.scene');
    const navDots = document.querySelectorAll('.nav-dot');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target as Element);
          navDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="presentation-root">
      {/* Hero Scene */}
      <section className="scene hero" id="hero">
        <div className="hero-content">
          <div className="eyebrow">Egyptian Red Crescent • Emergency Operations Center</div>
          <h1>
            From Fragmented<br/>
            Spreadsheets to<br/>
            <span className="hero-accent">Unified Operations</span>
          </h1>
          <p className="hero-lead">
            A complete digital transformation of emergency operations management —
            replacing disconnected Excel workflows with a real-time, role-based,
            centralized command platform.
          </p>
          <a href="#problem" className="cta-primary">
            Explore the Transformation
            <span>→</span>
          </a>
        </div>
        <div className="scroll-hint">Scroll to explore ↓</div>
      </section>

      {/* Problem Scene */}
      <section className="scene problem-scene" id="problem">
        <div className="container">
          <div className="eyebrow">The Challenge</div>
          <h2>Fragmented Operations,<br/>Silent Failures</h2>

          <div className="split-container">
            <div className="split-panel before-panel">
              <span className="panel-label before-label">Before</span>
              <h3 style={{color: 'var(--accent)'}}>Disconnected Workflows</h3>
              <ul className="problem-list">
                <li>
                  <div className="problem-icon">📊</div>
                  <div>
                    <strong>12+ Excel files</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Tracking missions, volunteers, inventory</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">📞</div>
                  <div>
                    <strong>Manual status updates</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Via phone calls and messages</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">❓</div>
                  <div>
                    <strong>No audit trail</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Who changed what, when, why?</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">🔄</div>
                  <div>
                    <strong>Duplicate data entry</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Across multiple sheets</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">⏱️</div>
                  <div>
                    <strong>Delayed decision-making</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Missing real-time data</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">🔓</div>
                  <div>
                    <strong>No permission control</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Everyone sees everything</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="split-panel after-panel">
              <span className="panel-label after-label">After</span>
              <h3 style={{color: 'var(--ok)'}}>Connected Platform</h3>
              <ul className="problem-list">
                <li>
                  <div className="problem-icon">🎯</div>
                  <div>
                    <strong>ONE platform</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>For all operations data</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">⚡</div>
                  <div>
                    <strong>Real-time sync</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Changes visible instantly</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">📝</div>
                  <div>
                    <strong>Complete audit logs</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>For every action</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">✓</div>
                  <div>
                    <strong>Single source of truth</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>No duplication</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">📊</div>
                  <div>
                    <strong>Live dashboards</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Instant situational awareness</span>
                  </div>
                </li>
                <li>
                  <div className="problem-icon">🔒</div>
                  <div>
                    <strong>Role-based access</strong><br/>
                    <span style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Secure by design</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Scene */}
      <section className="scene stats-scene" id="stats">
        <div className="container" style={{textAlign: 'center'}}>
          <div className="eyebrow" style={{color: 'rgba(255,255,255,0.8)'}}>Measurable Impact</div>
          <h2 style={{color: 'white'}}>Transformation in Numbers</h2>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">8</div>
              <div className="stat-label">Operational Modules</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">Role Types</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">45+</div>
              <div className="stat-label">API Endpoints</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">∞</div>
              <div className="stat-label">Audit Trail</div>
            </div>
          </div>

          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginTop: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
            From scattered spreadsheets to a unified, real-time, permission-controlled
            operational command center — built for the Egyptian Red Crescent's emergency response operations.
          </p>
        </div>
      </section>

      {/* Architecture Scene */}
      <section className="scene" id="architecture">
        <div className="container">
          <div className="eyebrow">Technical Foundation</div>
          <h2>Built for Scale & Reliability</h2>

          <div className="arch-diagram">
            <div className="arch-layer arch-frontend">
              <h4>Frontend</h4>
              <div className="tech-stack">React 19 + Vite 8</div>
              <div className="tech-details">Real-time UI • Dark/Light themes<br/>RTL support • Mobile-first</div>
            </div>

            <div className="arch-arrow">⟷</div>

            <div className="arch-layer arch-backend">
              <h4>Backend</h4>
              <div className="tech-stack">FastAPI + Python</div>
              <div className="tech-details">OAuth2 JWT • Role-based permissions<br/>Idempotent APIs • Real-time events</div>
            </div>

            <div className="arch-arrow">⟷</div>

            <div className="arch-layer arch-database">
              <h4>Database</h4>
              <div className="tech-stack">PostgreSQL on Neon</div>
              <div className="tech-details">ACID transactions • Audit logs<br/>Foreign key constraints</div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h5>OAuth2 + JWT</h5>
              <p>Secure token-based authentication with role extraction</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h5>Idempotency Keys</h5>
              <p>Safe retries for all mutation endpoints</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h5>Real-time Events</h5>
              <p>Incremental polling with watermark tracking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h5>Audit Logging</h5>
              <p>Complete action history for compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Scene */}
      <section className="scene" id="modules">
        <div className="container">
          <div className="eyebrow">Complete Operations Coverage</div>
          <h2>8 Integrated Modules</h2>
          <p style={{color: 'var(--muted)', fontSize: '1.125rem', marginTop: '1rem', maxWidth: '700px'}}>
            Every critical aspect of emergency operations — unified in one platform.
          </p>

          <div className="modules-grid">
            {[
              { icon: '🏠', title: 'Operations Overview', desc: 'Live KPIs, active missions count, branch filtering, real-time clock, system status' },
              { icon: '🤖', title: 'AI News Monitor', desc: 'Automated news detection, governorate-level tracking, AI-powered classification' },
              { icon: '📋', title: 'Field Missions', desc: 'Full mission lifecycle, routes, vehicles, participants, beneficiaries, status tracking' },
              { icon: '👥', title: 'Human Resources', desc: 'Volunteer registration, mission history, hours tracking, branch assignment' },
              { icon: '📰', title: 'Local News', desc: 'Incident reporting, field response tracking, governorate coverage' },
              { icon: '🌍', title: 'Global Disasters', desc: 'Worldwide disaster monitoring, country-level tracking, severity classification' },
              { icon: '⚠️', title: 'Earthquake Center', desc: 'Global & Egypt-specific earthquake tracking, magnitude, depth, region data' },
              { icon: '🗺️', title: 'Branches & Inventory', desc: 'Geographic branch distribution, strategic inventory, capacity tracking' }
            ].map((module, i) => (
              <div key={i} className="module-card spotlight-card">
                <div className="module-icon">{module.icon}</div>
                <h4>{module.title}</h4>
                <p>{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="nav-dots">
        <button className="nav-dot active" onClick={() => scrollToSection('#hero')} aria-label="Hero"></button>
        <button className="nav-dot" onClick={() => scrollToSection('#problem')} aria-label="Problem"></button>
        <button className="nav-dot" onClick={() => scrollToSection('#stats')} aria-label="Stats"></button>
        <button className="nav-dot" onClick={() => scrollToSection('#architecture')} aria-label="Architecture"></button>
        <button className="nav-dot" onClick={() => scrollToSection('#modules')} aria-label="Modules"></button>
      </nav>
    </div>
  );
}
