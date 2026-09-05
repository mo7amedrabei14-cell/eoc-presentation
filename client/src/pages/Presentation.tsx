export default function Presentation() {
  return (
    <div className="presentation-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .presentation-wrapper {
          --brand: #C70000;
          --brand-dark: #9A0000;
          --navy: #1A1A2E;
          --navy-deep: #0F0F1A;
          --light: #F8F9FA;
          --light-card: #FFFFFF;
          --accent: #FFD700;
          --success: #10B981;
          --warning: #F59E0B;
          --info: #3B82F6;
          --text-dark: #1F2937;
          --text-light: #F9FAFB;
          --muted: #6B7280;
          --border: #E5E7EB;
          --border-dark: #374151;
          --slide-height: 100vh;
          --slide-padding: clamp(2rem, 5vw, 6rem);
        }

        .presentation-wrapper * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .presentation-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--light);
          color: var(--text-dark);
          line-height: 1.6;
          overflow-x: hidden;
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }

        .slide {
          min-height: var(--slide-height);
          scroll-snap-align: start;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--slide-padding);
          overflow: hidden;
        }

        .slide-dark {
          background: var(--navy-deep);
          color: var(--text-light);
        }

        .slide-brand {
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
          color: var(--text-light);
        }

        .slide-light {
          background: var(--light);
          color: var(--text-dark);
        }

        .presentation-wrapper h1,
        .presentation-wrapper h2,
        .presentation-wrapper h3,
        .presentation-wrapper h4 {
          font-family: 'Tajawal', 'Inter', sans-serif;
          font-weight: 800;
          line-height: 1.1;
          text-wrap: balance;
        }

        .presentation-wrapper h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          letter-spacing: -0.03em;
        }

        .presentation-wrapper h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: -0.02em;
        }

        .presentation-wrapper h3 {
          font-size: clamp(1.5rem, 3vw, 2rem);
        }

        .eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 1rem;
        }

        .eyebrow-light {
          color: rgba(255,255,255,0.7);
        }

        .lead {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          font-weight: 400;
          color: var(--muted);
          max-width: 65ch;
          line-height: 1.7;
        }

        .lead-light {
          color: rgba(255,255,255,0.8);
        }

        .container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          gap: 2rem;
        }

        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        .card {
          background: var(--light-card);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.15);
        }

        .card-dark {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .brand-logo {
          width: 80px;
          height: 80px;
          background: var(--brand);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          box-shadow: 0 10px 40px -10px rgba(199,0,0,0.5);
        }

        .brand-logo svg {
          width: 50px;
          height: 50px;
          fill: white;
        }

        .divider {
          width: 60px;
          height: 4px;
          background: var(--brand);
          border-radius: 2px;
          margin: 2rem 0;
        }

        .divider-light {
          background: rgba(255,255,255,0.3);
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .comparison-card {
          padding: 2rem;
          border-radius: 1rem;
          position: relative;
        }

        .comparison-before {
          background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
          border: 2px dashed #EF4444;
        }

        .comparison-after {
          background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
          border: 2px solid #10B981;
        }

        .comparison-label {
          position: absolute;
          top: -12px;
          left: 2rem;
          padding: 0.25rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .comparison-before .comparison-label {
          background: #EF4444;
          color: white;
        }

        .comparison-after .comparison-label {
          background: #10B981;
          color: white;
        }

        .stats-bar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 3rem 2rem;
          background: var(--navy);
          border-radius: 1rem;
          flex-wrap: wrap;
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          font-family: 'Tajawal', sans-serif;
          color: var(--accent);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.6);
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: white;
          color: var(--brand);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.3);
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .module-card {
          background: var(--light-card);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .module-card:hover {
          border-color: var(--brand);
          box-shadow: 0 10px 30px -10px rgba(199,0,0,0.2);
        }

        .module-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          font-size: 1.5rem;
        }

        .module-content h4 {
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }

        .module-content p {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .slide-nav {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 100;
        }

        .slide-nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--border);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .slide-nav-dot:hover {
          background: var(--brand);
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .presentation-wrapper {
            --slide-padding: 1.5rem;
          }
          .slide-nav {
            display: none;
          }
        }
      `}</style>

      {/* Slide 1: Hero */}
      <section className="slide slide-dark" id="hero">
        <div className="container">
          <div className="brand-logo">
            <svg viewBox="0 0 100 100">
              <path d="M 70 15 A 40 40 0 1 0 70 85 A 30 30 0 1 1 70 15 Z" fill="currentColor"/>
            </svg>
          </div>

          <p className="eyebrow eyebrow-light">Egyptian Red Crescent • Emergency Operations Center</p>

          <h1>From Fragmented<br/>Spreadsheets to<br/><span style={{color: '#FFD700'}}>Unified Operations</span></h1>

          <div className="divider divider-light"></div>

          <p className="lead lead-light" style={{maxWidth: '55ch'}}>
            A complete digital transformation of emergency operations management —
            replacing disconnected Excel workflows with a real-time, role-based,
            centralized command platform.
          </p>

          <div style={{marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="#problem" className="cta-button">
              Explore the Transformation
              <span>→</span>
            </a>
          </div>
        </div>

        <div style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem'}}>
          Scroll to explore
        </div>
      </section>

      {/* Slide 2: Problem */}
      <section className="slide slide-light" id="problem">
        <div className="container">
          <p className="eyebrow">The Challenge</p>
          <h2>Fragmented Operations,<br/>Silent Failures</h2>

          <div className="comparison-grid">
            <div className="comparison-card comparison-before">
              <span className="comparison-label">Before</span>
              <h3 style={{color: '#991B1B', marginBottom: '1rem'}}>Disconnected Workflows</h3>
              <ul style={{listStyle: 'none', color: '#7F1D1D'}}>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #FCA5A5'}}>
                  <strong>12+ Excel files</strong> tracking missions, volunteers, inventory
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #FCA5A5'}}>
                  <strong>Manual status updates</strong> via phone calls and messages
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #FCA5A5'}}>
                  <strong>No audit trail</strong> — who changed what, when, why?
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #FCA5A5'}}>
                  <strong>Duplicate data entry</strong> across multiple sheets
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #FCA5A5'}}>
                  <strong>Delayed decision-making</strong> due to missing real-time data
                </li>
                <li style={{padding: '0.75rem 0'}}>
                  <strong>No permission control</strong> — everyone sees everything
                </li>
              </ul>
            </div>

            <div className="comparison-card comparison-after">
              <span className="comparison-label">After</span>
              <h3 style={{color: '#065F46', marginBottom: '1rem'}}>Connected Platform</h3>
              <ul style={{listStyle: 'none', color: '#065F46'}}>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #6EE7B7'}}>
                  <strong>ONE platform</strong> for all operations data
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #6EE7B7'}}>
                  <strong>Real-time sync</strong> — changes visible instantly
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #6EE7B7'}}>
                  <strong>Complete audit logs</strong> for every action
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #6EE7B7'}}>
                  <strong>Single source of truth</strong> — no duplication
                </li>
                <li style={{padding: '0.75rem 0', borderBottom: '1px dashed #6EE7B7'}}>
                  <strong>Live dashboards</strong> for instant situational awareness
                </li>
                <li style={{padding: '0.75rem 0'}}>
                  <strong>Role-based access</strong> — secure by design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Impact */}
      <section className="slide slide-brand" id="impact">
        <div className="container">
          <p className="eyebrow eyebrow-light">Measurable Impact</p>
          <h2 style={{color: 'white'}}>Transformation in Numbers</h2>

          <div className="stats-bar">
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

          <p className="lead lead-light" style={{textAlign: 'center', margin: '0 auto'}}>
            From scattered spreadsheets to a unified, real-time, permission-controlled
            operational command center — built for the Egyptian Red Crescent's emergency response operations.
          </p>
        </div>
      </section>

      {/* Slide 4: Modules */}
      <section className="slide slide-dark" id="modules">
        <div className="container">
          <p className="eyebrow eyebrow-light">Complete Operations Coverage</p>
          <h2 style={{color: 'white'}}>8 Integrated Modules</h2>
          <p className="lead lead-light" style={{marginBottom: '1rem'}}>
            Every critical aspect of emergency operations — unified in one platform.
          </p>

          <div className="modules-grid">
            <div className="module-card card-dark">
              <div className="module-icon">🏠</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Operations Overview</h4>
                <p>Live KPIs, active missions count, branch filtering, real-time clock, system status</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">🤖</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>AI News Monitor</h4>
                <p>Automated news detection, governorate-level tracking, AI-powered classification</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">📋</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Field Missions</h4>
                <p>Full mission lifecycle, routes, vehicles, participants, beneficiaries, status tracking</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">👥</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Human Resources</h4>
                <p>Volunteer registration, mission history, hours tracking, branch assignment</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">📰</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Local News</h4>
                <p>Incident reporting, field response tracking, governorate coverage</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">🌍</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Global Disasters</h4>
                <p>Worldwide disaster monitoring, country-level tracking, severity classification</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">⚠️</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Earthquake Center</h4>
                <p>Global &amp; Egypt-specific earthquake tracking, magnitude, depth, region data</p>
              </div>
            </div>

            <div className="module-card card-dark">
              <div className="module-icon">🗺️</div>
              <div className="module-content">
                <h4 style={{color: 'white'}}>Branches &amp; Inventory</h4>
                <p>Geographic branch distribution, strategic inventory, capacity tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="slide-nav">
        <a href="#hero" className="slide-nav-dot" title="Hero"></a>
        <a href="#problem" className="slide-nav-dot" title="Problem"></a>
        <a href="#impact" className="slide-nav-dot" title="Impact"></a>
        <a href="#modules" className="slide-nav-dot" title="Modules"></a>
      </nav>
    </div>
  );
}
