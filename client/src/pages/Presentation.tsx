<title>EOC System — Operational Transformation</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--light);
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ===== SLIDE SYSTEM ===== */
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

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4 {
  font-family: 'Tajawal', 'Inter', sans-serif;
  font-weight: 800;
  line-height: 1.1;
  text-wrap: balance;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  letter-spacing: -0.03em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.02em;
}

h3 {
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

.mono {
  font-family: 'JetBrains Mono', monospace;
}

/* ===== LAYOUT UTILITIES ===== */
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
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 0.5rem; }
.gap-2 { gap: 1rem; }
.gap-3 { gap: 1.5rem; }
.gap-4 { gap: 2rem; }

/* ===== COMPONENTS ===== */
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

.metric {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  font-family: 'Tajawal', sans-serif;
  color: var(--brand);
  line-height: 1;
}

.metric-light {
  color: var(--accent);
}

.metric-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-top: 0.5rem;
}

.metric-label-light {
  color: rgba(255,255,255,0.6);
}

/* ===== SPECIAL ELEMENTS ===== */
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

.icon-box {
  width: 48px;
  height: 48px;
  background: var(--brand);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.icon-box-outline {
  background: transparent;
  border: 2px solid var(--brand);
  color: var(--brand);
}

/* ===== BEFORE/AFTER COMPARISON ===== */
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

/* ===== FLOW DIAGRAM ===== */
.flow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.flow-step {
  padding: 1.5rem 2rem;
  background: var(--light-card);
  border-radius: 1rem;
  border: 2px solid var(--border);
  text-align: center;
  min-width: 180px;
  transition: all 0.3s ease;
}

.flow-step:hover {
  border-color: var(--brand);
  transform: scale(1.05);
}

.flow-step-brand {
  background: var(--brand);
  color: white;
  border-color: var(--brand);
}

.flow-arrow {
  font-size: 2rem;
  color: var(--muted);
}

/* ===== FEATURE GRID (BENTO) ===== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 1.5rem;
  margin-top: 3rem;
}

.bento-item {
  background: var(--light-card);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bento-dark {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.1);
}

.bento-large {
  grid-column: span 6;
}

.bento-medium {
  grid-column: span 4;
}

.bento-small {
  grid-column: span 3;
}

@media (max-width: 1024px) {
  .bento-large, .bento-medium, .bento-small {
    grid-column: span 12;
  }
}

/* ===== STATS BAR ===== */
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

/* ===== DASHBOARD MODULES ===== */
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

/* ===== ROLE BADGES ===== */
.role-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.role-badge {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.role-owner {
  background: var(--brand);
  color: white;
}

.role-supervisor {
  background: var(--info);
  color: white;
}

.role-joker {
  background: #8B5CF6;
  color: white;
}

.role-volunteer {
  background: var(--success);
  color: white;
}

/* ===== ARCHITECTURE DIAGRAM ===== */
.arch-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 2rem;
  align-items: center;
  margin: 3rem 0;
}

@media (max-width: 1024px) {
  .arch-container {
    grid-template-columns: 1fr;
  }
}

.arch-layer {
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
}

.arch-frontend {
  background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
  color: white;
}

.arch-backend {
  background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
  color: white;
  padding: 3rem 2rem;
}

.arch-database {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
}

.arch-arrow {
  font-size: 3rem;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 1024px) {
  .arch-arrow {
    transform: rotate(90deg);
  }
}

/* ===== TIMELINE ===== */
.timeline {
  position: relative;
  padding-left: 3rem;
  margin-top: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -3rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: var(--brand);
  border-radius: 50%;
  border: 2px solid var(--light);
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand);
  margin-bottom: 0.25rem;
}

.timeline-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-desc {
  font-size: 0.9375rem;
  color: var(--muted);
}

/* ===== CTA SECTION ===== */
.cta-box {
  background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
  border-radius: 1.5rem;
  padding: 4rem;
  text-align: center;
  margin-top: 3rem;
}

.cta-box h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta-box p {
  color: rgba(255,255,255,0.8);
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
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

/* ===== NAVIGATION ===== */
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
}

.slide-nav-dot:hover {
  background: var(--brand);
  transform: scale(1.3);
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  :root {
    --slide-padding: 1.5rem;
  }

  .slide-nav {
    display: none;
  }
}

/* ===== RTL SUPPORT ===== */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .timeline {
  padding-left: 0;
  padding-right: 3rem;
}

[dir="rtl"] .timeline::before {
  left: auto;
  right: 0;
}

[dir="rtl"] .timeline-item::before {
  left: auto;
  right: -3rem;
}
</style>

<!-- ===== SLIDE 1: HERO ===== -->
<section class="slide slide-dark" id="hero">
  <div class="container">
    <div class="brand-logo">
      <svg viewBox="0 0 100 100">
        <path d="M 70 15 A 40 40 0 1 0 70 85 A 30 30 0 1 1 70 15 Z" fill="currentColor"/>
      </svg>
    </div>

    <p class="eyebrow eyebrow-light">Egyptian Red Crescent • Emergency Operations Center</p>

    <h1>From Fragmented<br>Spreadsheets to<br><span style="color: #FFD700;">Unified Operations</span></h1>

    <div class="divider divider-light"></div>

    <p class="lead lead-light" style="max-width: 55ch;">
      A complete digital transformation of emergency operations management —
      replacing disconnected Excel workflows with a real-time, role-based,
      centralized command platform.
    </p>

    <div style="margin-top: 3rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="#problem" class="cta-button">
        Explore the Transformation
        <span>→</span>
      </a>
    </div>
  </div>

  <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.4); font-size: 0.875rem;">
    Scroll to explore
  </div>
</section>

<!-- ===== SLIDE 2: THE PROBLEM ===== -->
<section class="slide slide-light" id="problem">
  <div class="container">
    <p class="eyebrow">The Challenge</p>
    <h2>Fragmented Operations,<br>Silent Failures</h2>

    <div class="comparison-grid">
      <div class="comparison-card comparison-before">
        <span class="comparison-label">Before</span>
        <h3 style="color: #991B1B; margin-bottom: 1rem;">Disconnected Workflows</h3>
        <ul style="list-style: none; color: #7F1D1D;">
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #FCA5A5;">
            <strong>12+ Excel files</strong> tracking missions, volunteers, inventory
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #FCA5A5;">
            <strong>Manual status updates</strong> via phone calls and messages
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #FCA5A5;">
            <strong>No audit trail</strong> — who changed what, when, why?
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #FCA5A5;">
            <strong>Duplicate data entry</strong> across multiple sheets
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #FCA5A5;">
            <strong>Delayed decision-making</strong> due to missing real-time data
          </li>
          <li style="padding: 0.75rem 0;">
            <strong>No permission control</strong> — everyone sees everything
          </li>
        </ul>
      </div>

      <div class="comparison-card comparison-after">
        <span class="comparison-label">After</span>
        <h3 style="color: #065F46; margin-bottom: 1rem;">Connected Platform</h3>
        <ul style="list-style: none; color: #065F46;">
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #6EE7B7;">
            <strong>ONE platform</strong> for all operations data
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #6EE7B7;">
            <strong>Real-time sync</strong> — changes visible instantly
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #6EE7B7;">
            <strong>Complete audit logs</strong> for every action
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #6EE7B7;">
            <strong>Single source of truth</strong> — no duplication
          </li>
          <li style="padding: 0.75rem 0; border-bottom: 1px dashed #6EE7B7;">
            <strong>Live dashboards</strong> for instant situational awareness
          </li>
          <li style="padding: 0.75rem 0;">
            <strong>Role-based access</strong> — secure by design
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 3: IMPACT NUMBERS ===== -->
<section class="slide slide-brand" id="impact">
  <div class="container">
    <p class="eyebrow eyebrow-light">Measurable Impact</p>
    <h2 style="color: white;">Transformation in Numbers</h2>

    <div class="stats-bar">
      <div class="stat-item">
        <div class="stat-value">8</div>
        <div class="stat-label">Operational Modules</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">4</div>
        <div class="stat-label">Role Types</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">45+</div>
        <div class="stat-label">API Endpoints</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">∞</div>
        <div class="stat-label">Audit Trail</div>
      </div>
    </div>

    <p class="lead lead-light" style="text-align: center; margin: 0 auto;">
      From scattered spreadsheets to a unified, real-time, permission-controlled
      operational command center — built for the Egyptian Red Crescent's emergency response operations.
    </p>
  </div>
</section>

<!-- ===== SLIDE 4: SYSTEM ARCHITECTURE ===== -->
<section class="slide slide-light" id="architecture">
  <div class="container">
    <p class="eyebrow">Technical Foundation</p>
    <h2>Built for Scale &amp; Reliability</h2>

    <div class="arch-container">
      <div class="arch-layer arch-frontend">
        <h3 style="color: white; margin-bottom: 0.5rem;">Frontend</h3>
        <p style="font-size: 0.9375rem; opacity: 0.9;">React 19 + Vite 8</p>
        <p style="font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">Real-time UI • Dark/Light themes • RTL support • Mobile-first</p>
      </div>

      <div class="arch-arrow">⟷</div>

      <div class="arch-layer arch-backend">
        <h3 style="color: white; margin-bottom: 0.5rem;">Backend</h3>
        <p style="font-size: 0.9375rem; opacity: 0.9;">FastAPI + Python</p>
        <p style="font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">OAuth2 JWT • Role-based permissions • Idempotent APIs • Real-time events</p>
      </div>

      <div class="arch-arrow">⟷</div>

      <div class="arch-layer arch-database">
        <h3 style="color: white; margin-bottom: 0.5rem;">Database</h3>
        <p style="font-size: 0.9375rem; opacity: 0.9;">PostgreSQL on Neon</p>
        <p style="font-size: 0.875rem; opacity: 0.7; margin-top: 0.5rem;">ACID transactions • Audit logs • Foreign key constraints</p>
      </div>
    </div>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-small">
        <div class="icon-box" style="background: #3B82F6;">🔒</div>
        <h4>OAuth2 + JWT</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">Secure token-based authentication with role extraction</p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box" style="background: #8B5CF6;">⚡</div>
        <h4>Idempotency Keys</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">Safe retries for all mutation endpoints</p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box" style="background: #10B981;">📡</div>
        <h4>Real-time Events</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">Incremental polling with watermark tracking</p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box" style="background: var(--brand);">📝</div>
        <h4>Audit Logging</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">Complete action history for compliance</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 5: 8 OPERATIONAL MODULES ===== -->
<section class="slide slide-dark" id="modules">
  <div class="container">
    <p class="eyebrow eyebrow-light">Complete Operations Coverage</p>
    <h2 style="color: white;">8 Integrated Modules</h2>
    <p class="lead lead-light" style="margin-bottom: 1rem;">
      Every critical aspect of emergency operations — unified in one platform.
    </p>

    <div class="modules-grid">
      <div class="module-card card-dark">
        <div class="module-icon">🏠</div>
        <div class="module-content">
          <h4 style="color: white;">Operations Overview</h4>
          <p>Live KPIs, active missions count, branch filtering, real-time clock, system status</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">🤖</div>
        <div class="module-content">
          <h4 style="color: white;">AI News Monitor</h4>
          <p>Automated news detection, governorate-level tracking, AI-powered classification</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">📋</div>
        <div class="module-content">
          <h4 style="color: white;">Field Missions</h4>
          <p>Full mission lifecycle, routes, vehicles, participants, beneficiaries, status tracking</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">👥</div>
        <div class="module-content">
          <h4 style="color: white;">Human Resources</h4>
          <p>Volunteer registration, mission history, hours tracking, branch assignment</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">📰</div>
        <div class="module-content">
          <h4 style="color: white;">Local News</h4>
          <p>Incident reporting, field response tracking, governorate coverage</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">🌍</div>
        <div class="module-content">
          <h4 style="color: white;">Global Disasters</h4>
          <p>Worldwide disaster monitoring, country-level tracking, severity classification</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">⚠️</div>
        <div class="module-content">
          <h4 style="color: white;">Earthquake Center</h4>
          <p>Global &amp; Egypt-specific earthquake tracking, magnitude, depth, region data</p>
        </div>
      </div>

      <div class="module-card card-dark">
        <div class="module-icon">🗺️</div>
        <div class="module-content">
          <h4 style="color: white;">Branches &amp; Inventory</h4>
          <p>Geographic branch distribution, strategic inventory, capacity tracking</p>
        </div>
      </div>
    </div>

    <div class="module-card card-dark" style="margin-top: 1.5rem;">
      <div class="module-icon" style="background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);">🛡️</div>
      <div class="module-content">
        <h4 style="color: white;">System Audit (Supervisors Only)</h4>
        <p>Complete action log, user attribution, entity-level filtering, Excel export capability</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 6: MISSION LIFECYCLE ===== -->
<section class="slide slide-light" id="missions">
  <div class="container">
    <p class="eyebrow">Core Workflow</p>
    <h2>Mission Lifecycle Management</h2>

    <div class="flow-container">
      <div class="flow-step">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
        <strong>Create</strong>
        <p style="font-size: 0.875rem; color: var(--muted); margin-top: 0.25rem;">Mission details, team, routes</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚐</div>
        <strong>Deploy</strong>
        <p style="font-size: 0.875rem; color: var(--muted); margin-top: 0.25rem;">Vehicles, participants, itineraries</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step flow-step-brand">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📍</div>
        <strong>Track</strong>
        <p style="font-size: 0.875rem; opacity: 0.9; margin-top: 0.25rem;">Real-time status updates</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
        <strong>Complete</strong>
        <p style="font-size: 0.875rem; color: var(--muted); margin-top: 0.25rem;">Review, close, archive</p>
      </div>
    </div>

    <div class="bento-grid">
      <div class="bento-item bento-large">
        <h3 style="margin-bottom: 1rem;">Mission Data Capture</h3>
        <div class="grid grid-2">
          <div>
            <p style="font-weight: 600; margin-bottom: 0.5rem;">Planning</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0;">Mission name &amp; code</li>
              <li style="padding: 0.5rem 0;">Classification (عادية / مفتوحة)</li>
              <li style="padding: 0.5rem 0;">Mission type &amp; source</li>
              <li style="padding: 0.5rem 0;">Responsible person</li>
            </ul>
          </div>
          <div>
            <p style="font-weight: 600; margin-bottom: 0.5rem;">Execution</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0;">Multiple routes per mission</li>
              <li style="padding: 0.5rem 0;">Vehicles with codes</li>
              <li style="padding: 0.5rem 0;">Participants with roles</li>
              <li style="padding: 0.5rem 0;">Beneficiaries with details</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bento-item bento-medium">
        <h3 style="margin-bottom: 1rem;">Real-time Sync</h3>
        <p style="color: var(--muted); font-size: 0.9375rem;">
          When any supervisor updates a mission, all connected users see the change
          instantly via incremental event polling. No page refresh needed.
        </p>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(199,0,0,0.1); border-radius: 0.5rem; border-left: 3px solid var(--brand);">
          <p style="font-size: 0.875rem; font-weight: 600;">Live notification toasts show who changed what, in real-time.</p>
        </div>
      </div>

      <div class="bento-item bento-small">
        <h3 style="margin-bottom: 1rem;">Status Tracking</h3>
        <div class="role-badges" style="flex-direction: column; align-items: flex-start;">
          <span class="role-badge" style="background: var(--brand);">In Progress</span>
          <span class="role-badge" style="background: var(--success);">Completed</span>
          <span class="role-badge" style="background: var(--warning); color: var(--text-dark);">Cancelled</span>
          <span class="role-badge" style="background: var(--info);">Open Mission</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 7: ROLE-BASED PERMISSIONS ===== -->
<section class="slide slide-light" id="permissions">
  <div class="container">
    <p class="eyebrow">Security &amp; Access Control</p>
    <h2>Role-Based Permissions</h2>
    <p class="lead">Not everyone needs access to everything. The system enforces strict permission boundaries based on operational roles.</p>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-medium">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="width: 56px; height: 56px; background: var(--brand); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">O</div>
          <div>
            <h3 style="margin: 0;">Owner</h3>
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;">Full system control</p>
          </div>
        </div>
        <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted); padding-left: 1rem; border-left: 3px solid var(--brand);">
          <li style="padding: 0.5rem 0;">✓ All Supervisor permissions</li>
          <li style="padding: 0.5rem 0;">✓ Clear all data (with confirmation)</li>
          <li style="padding: 0.5rem 0;">✓ Manage users &amp; branches</li>
          <li style="padding: 0.5rem 0;">✓ Change passwords</li>
          <li style="padding: 0.5rem 0;">✓ Export audit logs</li>
        </ul>
      </div>

      <div class="bento-item bento-medium">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="width: 56px; height: 56px; background: var(--info); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">S</div>
          <div>
            <h3 style="margin: 0;">Supervisor</h3>
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;">Operations management</p>
          </div>
        </div>
        <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted); padding-left: 1rem; border-left: 3px solid var(--info);">
          <li style="padding: 0.5rem 0;">✓ All Joker permissions</li>
          <li style="padding: 0.5rem 0;">✓ View audit logs</li>
          <li style="padding: 0.5rem 0;">✓ View branches &amp; inventory</li>
          <li style="padding: 0.5rem 0;">✓ Create/update/delete all records</li>
          <li style="padding: 0.5rem 0;">✓ Access all dashboards</li>
        </ul>
      </div>

      <div class="bento-item bento-medium">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="width: 56px; height: 56px; background: #8B5CF6; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">J</div>
          <div>
            <h3 style="margin: 0;">Joker</h3>
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;">Data entry specialist</p>
          </div>
        </div>
        <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted); padding-left: 1rem; border-left: 3px solid #8B5CF6;">
          <li style="padding: 0.5rem 0;">✓ All Volunteer permissions</li>
          <li style="padding: 0.5rem 0;">✓ Create/update missions</li>
          <li style="padding: 0.5rem 0;">✓ Create/update news</li>
          <li style="padding: 0.5rem 0;">✓ Create/update disasters</li>
          <li style="padding: 0.5rem 0;">✓ View HR module</li>
        </ul>
      </div>

      <div class="bento-item bento-medium">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="width: 56px; height: 56px; background: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">V</div>
          <div>
            <h3 style="margin: 0;">Volunteer</h3>
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;">Field operations</p>
          </div>
        </div>
        <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted); padding-left: 1rem; border-left: 3px solid var(--success);">
          <li style="padding: 0.5rem 0;">✓ View missions dashboard</li>
          <li style="padding: 0.5rem 0;">✓ View news &amp; disasters</li>
          <li style="padding: 0.5rem 0;">✓ View earthquakes</li>
          <li style="padding: 0.5rem 0;">✓ Update own missions (field status)</li>
          <li style="padding: 0.5rem 0;">✗ No access to audit logs</li>
        </ul>
      </div>
    </div>

    <div style="margin-top: 3rem; padding: 2rem; background: rgba(199,0,0,0.05); border-radius: 1rem; border: 1px solid rgba(199,0,0,0.2);">
      <h4 style="color: var(--brand); margin-bottom: 0.5rem;">💡 Permission Implementation</h4>
      <p style="color: var(--muted); font-size: 0.9375rem;">
        Permissions are enforced at <strong>two levels</strong>: Frontend UI (hides restricted elements) and
        Backend API (returns 403 Forbidden for unauthorized actions). Even if someone bypasses the UI,
        the backend rejects unauthorized requests.
      </p>
    </div>
  </div>
</section>

<!-- ===== SLIDE 8: REAL-TIME FEATURES ===== -->
<section class="slide slide-dark" id="realtime">
  <div class="container">
    <p class="eyebrow eyebrow-light">Live Operations</p>
    <h2 style="color: white;">Real-time Command Center</h2>
    <p class="lead lead-light">
      When seconds matter, the system delivers instant visibility across all operations.
    </p>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-large bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">📡 Incremental Event Streaming</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem; margin-bottom: 1rem;">
          Instead of polling entire datasets, the system streams only <strong>new events</strong>
          since the last check — using a watermark (event_id) to track position.
        </p>
        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
          <div style="color: var(--success);">GET /api/realtime/events?since=12345</div>
          <div style="margin-top: 0.5rem;">→ Returns only events with event_id > 12345</div>
        </div>
      </div>

      <div class="bento-item bento-medium bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">🔔 Live Notifications</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
          Toast notifications appear instantly when:
        </p>
        <ul style="list-style: none; font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 0.5rem;">
          <li style="padding: 0.25rem 0;">• Mission status changes</li>
          <li style="padding: 0.25rem 0;">• New mission created</li>
          <li style="padding: 0.25rem 0;">• AI detects news</li>
          <li style="padding: 0.25rem 0;">• Earthquake recorded</li>
        </ul>
      </div>

      <div class="bento-item bento-small bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">🟢 Live Badge</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
          Header shows real-time connection status with animated indicator.
        </p>
        <div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="width: 8px; height: 8px; background: var(--success); border-radius: 50%; animation: pulse 2s infinite;"></span>
          <span style="font-size: 0.875rem; color: var(--success); font-weight: 600;">متصل لحظياً</span>
        </div>
      </div>

      <div class="bento-item bento-small bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">📱 Offline Detection</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
          Banner alerts when connection is lost, with auto-reconnect message.
        </p>
        <div style="margin-top: 1rem; padding: 0.75rem; background: var(--brand); border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600;">
          ⚠️ انقطع الاتصال — سيُعاود تلقائياً
        </div>
      </div>
    </div>

    <div style="margin-top: 2rem; padding: 2rem; background: rgba(255,255,255,0.05); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1);">
      <h4 style="color: white; margin-bottom: 1rem;">🎯 Command Palette (⌘K)</h4>
      <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
        Press <kbd style="background: rgba(255,255,255,0.1); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-family: 'JetBrains Mono', monospace;">⌘K</kbd> or
        <kbd style="background: rgba(255,255,255,0.1); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-family: 'JetBrains Mono', monospace;">Ctrl+K</kbd> to instantly
        jump between modules, switch themes, change language, or sign out — without touching the mouse.
      </p>
    </div>
  </div>
</section>

<!-- ===== SLIDE 9: AUDIT & COMPLIANCE ===== -->
<section class="slide slide-light" id="audit">
  <div class="container">
    <p class="eyebrow">Accountability</p>
    <h2>Complete Audit Trail</h2>
    <p class="lead">
      Every action is logged with user attribution, timestamp, and detailed context —
      enabling accountability, compliance, and operational analysis.
    </p>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-large">
        <h3 style="margin-bottom: 1rem;">What Gets Logged</h3>
        <div class="grid grid-2" style="gap: 1.5rem;">
          <div>
            <p style="font-weight: 600; color: var(--brand); margin-bottom: 0.75rem;">Mission Actions</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">إنشاء مهمة</li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">تحديث/مراجعة</li>
              <li style="padding: 0.5rem 0;">حذف مهمة</li>
            </ul>
          </div>
          <div>
            <p style="font-weight: 600; color: var(--info); margin-bottom: 0.75rem;">News &amp; Disasters</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">إنشاء خبر / رصد كارثة</li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">تحديث خبر / كارثة</li>
              <li style="padding: 0.5rem 0;">حذف خبر / كارثة</li>
            </ul>
          </div>
          <div>
            <p style="font-weight: 600; color: #8B5CF6; margin-bottom: 0.75rem;">Earthquakes</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">إضافة زلزال</li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">تعديل زلزال</li>
              <li style="padding: 0.5rem 0;">رفع سجل زلازل</li>
            </ul>
          </div>
          <div>
            <p style="font-weight: 600; color: var(--success); margin-bottom: 0.75rem;">AI Operations</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: var(--muted);">
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">رصد خبر آلي</li>
              <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border);">تحديث خبر آلي</li>
              <li style="padding: 0.5rem 0;">حذف خبر آلي</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bento-item bento-medium">
        <h3 style="margin-bottom: 1rem;">Log Details</h3>
        <div style="background: var(--navy); padding: 1rem; border-radius: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: rgba(255,255,255,0.8);">
          <div style="color: var(--accent);">log_id: 4521</div>
          <div>user_id: 3</div>
          <div>full_name: "أحمد محمد"</div>
          <div style="color: var(--success);">action: "إنشاء مهمة"</div>
          <div>details: "قام بإنشاء استمارة جديدة..."</div>
          <div>entity_type: "mission"</div>
          <div style="color: rgba(255,255,255,0.5);">created_at: "2026-09-05 14:32:00"</div>
        </div>
      </div>

      <div class="bento-item bento-small">
        <h3 style="margin-bottom: 1rem;">Export</h3>
        <p style="color: var(--muted); font-size: 0.9375rem;">
          Supervisors can export all logs to Excel for external analysis and compliance reporting.
        </p>
        <div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem; color: var(--success); font-weight: 600; font-size: 0.875rem;">
          <span>📥</span> Excel Export
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 10: AI INTEGRATION ===== -->
<section class="slide slide-dark" id="ai">
  <div class="container">
    <p class="eyebrow eyebrow-light">Intelligence Layer</p>
    <h2 style="color: white;">AI-Powered News Detection</h2>
    <p class="lead lead-light">
      Automated news monitoring powered by AI — reducing manual scanning time and
      increasing situational awareness.
    </p>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-large bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">🤖 AI Radar Capabilities</h3>
        <div class="grid grid-2" style="gap: 1.5rem;">
          <div>
            <p style="font-weight: 600; color: var(--accent); margin-bottom: 0.75rem;">Detection</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: rgba(255,255,255,0.7);">
              <li style="padding: 0.5rem 0;">Automatic news classification</li>
              <li style="padding: 0.5rem 0;">Governorate-level localization</li>
              <li style="padding: 0.5rem 0;">News type categorization</li>
              <li style="padding: 0.5rem 0;">Source attribution</li>
            </ul>
          </div>
          <div>
            <p style="font-weight: 600; color: var(--info); margin-bottom: 0.75rem;">Workflow</p>
            <ul style="list-style: none; font-size: 0.9375rem; color: rgba(255,255,255,0.7);">
              <li style="padding: 0.5rem 0;">Triggered via API endpoint</li>
              <li style="padding: 0.5rem 0;">Logs to audit trail</li>
              <li style="padding: 0.5rem 0;">Notifies connected users</li>
              <li style="padding: 0.5rem 0;">Visible in AI Monitor tab</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bento-item bento-medium bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">Endpoint</h3>
        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
          <div style="color: var(--success);">POST /api/trigger-ai-radar</div>
          <div style="margin-top: 0.5rem; color: rgba(255,255,255,0.5);">→ Initiates AI scan</div>
          <div style="margin-top: 0.5rem; color: rgba(255,255,255,0.5);">→ Returns detected items</div>
        </div>
      </div>

      <div class="bento-item bento-small bento-dark">
        <h3 style="color: white; margin-bottom: 1rem;">Purple Indicator</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
          AI-detected news items are visually distinguished with purple styling throughout the UI.
        </p>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(139, 92, 246, 0.2); border-left: 3px solid #8B5CF6; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600; color: #8B5CF6;">
          🤖 رصد آلي جديد
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 11: UX HIGHLIGHTS ===== -->
<section class="slide slide-light" id="ux">
  <div class="container">
    <p class="eyebrow">User Experience</p>
    <h2>Premium Operational Interface</h2>
    <p class="lead">
      Built for operators in high-stress environments — clear, fast, and accessible.
    </p>

    <div class="bento-grid" style="margin-top: 2rem;">
      <div class="bento-item bento-small">
        <div class="icon-box">🌙</div>
        <h4>Dark/Light Themes</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Automatic system preference detection with manual toggle. No flash on load.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">🔄</div>
        <h4>RTL/LTR Support</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Full Arabic interface with logical CSS properties. Language persists across sessions.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">📱</div>
        <h4>Mobile-First</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Responsive layouts adapt from desktop command center to field tablet.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">⚡</div>
        <h4>Animated KPIs</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          CountUp animations with brand-color pop on value changes. 3D tilt cards on hover.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">🗺️</div>
        <h4>Interactive Map</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Leaflet-powered branch visualization with click-to-filter by region.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">🔒</div>
        <h4>Secure by Default</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          JWT tokens stored in localStorage, cleared on logout. All API calls authenticated.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">📊</div>
        <h4>Data Export</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Excel export for missions, HR data, and audit logs via XLSX library.
        </p>
      </div>

      <div class="bento-item bento-small">
        <div class="icon-box">✨</div>
        <h4>Smooth Motion</h4>
        <p style="font-size: 0.875rem; color: var(--muted);">
          Spring physics, staggered nav animations, spotlight glow — premium feel throughout.
        </p>
      </div>
    </div>

    <div style="margin-top: 3rem; padding: 2rem; background: var(--navy); border-radius: 1rem; color: white;">
      <h3 style="color: white; margin-bottom: 1rem;">🎯 Design Philosophy</h3>
      <p style="color: rgba(255,255,255,0.8); font-size: 1rem; line-height: 1.8;">
        Inspired by <strong>Lightswind</strong> design language: glass surfaces, spotlight glow,
        3D tilt interactions, and motion that serves clarity. The primary brand color
        <span style="display: inline-block; width: 16px; height: 16px; background: #C70000; border-radius: 4px; vertical-align: middle; margin: 0 0.25rem;"></span>
        <code style="font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; color: var(--accent);">#C70000</code>
        is enforced across all states, actions, and emphasis elements.
      </p>
    </div>
  </div>
</section>

<!-- ===== SLIDE 12: DATABASE STRUCTURE ===== -->
<section class="slide slide-dark" id="database">
  <div class="container">
    <p class="eyebrow eyebrow-light">Data Architecture</p>
    <h2 style="color: white;">Relational Data Model</h2>
    <p class="lead lead-light">
      PostgreSQL database with foreign key constraints, ACID transactions, and optimized queries.
    </p>

    <div class="grid grid-3" style="margin-top: 2rem;">
      <div class="card card-dark">
        <h4 style="color: var(--accent); margin-bottom: 1rem;">Core Entities</h4>
        <ul style="list-style: none; font-size: 0.875rem; color: rgba(255,255,255,0.7);">
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">users</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">missions</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">branches</li>
          <li style="padding: 0.5rem 0;">volunteers</li>
        </ul>
      </div>

      <div class="card card-dark">
        <h4 style="color: var(--info); margin-bottom: 1rem;">Monitoring</h4>
        <ul style="list-style: none; font-size: 0.875rem; color: rgba(255,255,255,0.7);">
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">local_news</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">global_disasters</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">earthquakes_global</li>
          <li style="padding: 0.5rem 0;">earthquakes_egypt</li>
        </ul>
      </div>

      <div class="card card-dark">
        <h4 style="color: var(--success); margin-bottom: 1rem;">System</h4>
        <ul style="list-style: none; font-size: 0.875rem; color: rgba(255,255,255,0.7);">
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">audit_logs</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">idempotency_keys</li>
          <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">live_updates</li>
          <li style="padding: 0.5rem 0;">ai_news</li>
        </ul>
      </div>
    </div>

    <div style="margin-top: 2rem; padding: 2rem; background: rgba(255,255,255,0.05); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1);">
      <h4 style="color: white; margin-bottom: 1rem;">Mission-Related Tables</h4>
      <p style="color: rgba(255,255,255,0.7); font-size: 0.9375rem;">
        Each mission connects to: <strong>routes</strong>, <strong>vehicles</strong>,
        <strong>participants</strong>, <strong>beneficiaries</strong>, <strong>custom itineraries</strong>,
        and <strong>EOC staff</strong> — all with foreign key relationships ensuring data integrity.
      </p>
    </div>
  </div>
</section>

<!-- ===== SLIDE 13: FUTURE POTENTIAL ===== -->
<section class="slide slide-light" id="future">
  <div class="container">
    <p class="eyebrow">What's Next</p>
    <h2>Future Potential</h2>
    <p class="lead">
      The platform is architected for expansion — ready for advanced capabilities.
    </p>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">Phase 2</div>
        <div class="timeline-title">Mobile App</div>
        <div class="timeline-desc">Native iOS/Android app for field operators with offline sync, push notifications, and GPS tracking.</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">Phase 3</div>
        <div class="timeline-title">Advanced Analytics</div>
        <div class="timeline-desc">Response time metrics, resource utilization dashboards, predictive modeling for disaster preparedness.</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">Phase 4</div>
        <div class="timeline-title">Integration APIs</div>
        <div class="timeline-desc">Connect with external systems: weather APIs, government databases, international relief coordination platforms.</div>
      </div>

      <div class="timeline-item">
        <div class="timeline-date">Phase 5</div>
        <div class="timeline-title">AI Enhancement</div>
        <div class="timeline-desc">Predictive resource allocation, automated mission prioritization, natural language query interface.</div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SLIDE 14: CTA ===== -->
<section class="slide slide-brand" id="cta">
  <div class="container" style="text-align: center;">
    <h1 style="color: white; margin-bottom: 1rem;">One Platform.<br>Complete Control.</h1>
    <p class="lead lead-light" style="max-width: 50ch; margin: 0 auto 3rem;">
      From fragmented spreadsheets to unified operations —
      the EOC System transforms how the Egyptian Red Crescent
      responds to emergencies.
    </p>

    <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 3rem;">
      <div style="text-align: center;">
        <div class="stat-value">8</div>
        <div class="stat-label">Modules</div>
      </div>
      <div style="text-align: center;">
        <div class="stat-value">45+</div>
        <div class="stat-label">Endpoints</div>
      </div>
      <div style="text-align: center;">
        <div class="stat-value">4</div>
        <div class="stat-label">Roles</div>
      </div>
      <div style="text-align: center;">
        <div class="stat-value">∞</div>
        <div class="stat-label">Audit Trail</div>
      </div>
    </div>

    <div style="padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 1rem; backdrop-filter: blur(10px); display: inline-block;">
      <p style="color: rgba(255,255,255,0.9); font-size: 1.125rem; margin: 0;">
        <strong>埃及红新月会</strong><br>
        Emergency Operations Center<br>
        <span style="opacity: 0.7;">Digital Transformation Initiative</span>
      </p>
    </div>
  </div>
</section>

<!-- ===== NAVIGATION ===== -->
<nav class="slide-nav">
  <a href="#hero" class="slide-nav-dot" title="Hero"></a>
  <a href="#problem" class="slide-nav-dot" title="Problem"></a>
  <a href="#impact" class="slide-nav-dot" title="Impact"></a>
  <a href="#architecture" class="slide-nav-dot" title="Architecture"></a>
  <a href="#modules" class="slide-nav-dot" title="Modules"></a>
  <a href="#missions" class="slide-nav-dot" title="Missions"></a>
  <a href="#permissions" class="slide-nav-dot" title="Permissions"></a>
  <a href="#realtime" class="slide-nav-dot" title="Real-time"></a>
  <a href="#audit" class="slide-nav-dot" title="Audit"></a>
  <a href="#ai" class="slide-nav-dot" title="AI"></a>
  <a href="#ux" class="slide-nav-dot" title="UX"></a>
  <a href="#database" class="slide-nav-dot" title="Database"></a>
  <a href="#future" class="slide-nav-dot" title="Future"></a>
  <a href="#cta" class="slide-nav-dot" title="CTA"></a>
</nav>

<script>
  // Smooth scroll navigation
  document.querySelectorAll('.slide-nav-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(dot.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
</script>
