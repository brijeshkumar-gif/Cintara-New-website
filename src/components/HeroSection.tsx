import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="hero-outer" id="platform">
            {/* Main gradient container */}
            <div className="hero-container">
                {/* ── Upper content area ── */}
                <div className="hero-content">
                    {/* Badge pill */}
                    <div className="hero-badge">
                        <span className="hero-badge-icon">
                            {/* wifi/signal icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                <line x1="12" y1="20" x2="12.01" y2="20" />
                            </svg>
                        </span>
                        Control plane for autonomous AI
                    </div>

                    {/* Main Headline */}
                    <h1 className="hero-headline">
                        The Control Plane For<br />
                        Autonomous AI In The Enterprise
                    </h1>

                    {/* Sub-description */}
                    <div className="hero-desc">
                        <p>Governance infrastructure that enforces policy before AI actions reach production</p>
                        <p>Enables Enterprises to Deploy Autonomous Systems Safely &amp; Responsibly.</p>
                    </div>

                    {/* Feature pills */}
                    <div className="hero-pills">
                        <div className="hero-pill">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12l2.5 2.5L16 9" />
                            </svg>
                            Pre-execution control in real systems
                        </div>
                        <div className="hero-pill">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                            Cryptographically verifiable audit trails
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-ctas">
                        <Link href="/contact" className="btn-primary">Contact Us</Link>
                        <Link href="/how-it-works" className="btn-secondary">See How It Works</Link>
                    </div>
                </div>

                {/* ── Control Plane Diagram ── */}
                {/* ── Control Plane Diagram ── */}
                <div className="diagram-card">
                    <div className="diagram-flow">
                        {/* Source Box */}
                        <div className="diagram-endpoint">
                            <div className="diagram-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="7" width="18" height="12" rx="4" ry="4" />
                                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="2" y1="13" x2="3" y2="13" />
                                    <line x1="21" y1="13" x2="22" y2="13" />
                                    <line x1="9" y1="11" x2="9" y2="15" />
                                    <line x1="15" y1="11" x2="15" y2="15" />
                                </svg>
                            </div>
                            <span className="diagram-label-small">Source</span>
                            <span className="diagram-label-bold">AI Agent</span>
                            <span className="diagram-desc-small">Plans actions,<br />never touches<br />systems directly</span>
                        </div>

                        {/* Arrow */}
                        <div className="diagram-arrow">
                            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                                <line x1="0" y1="8" x2="26" y2="8" stroke="#38bdf8" strokeWidth="1.5" />
                                <polyline points="20,3 28,8 20,13" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Central control plane box */}
                        <div className="diagram-center">
                            <h2 className="diagram-title">Cintara Control Plane</h2>
                            <div className="diagram-badges">
                                <div className="diagram-badge">
                                    <div className="diagram-badge-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    Policy Gate
                                </div>
                                <div className="diagram-badge">
                                    <div className="diagram-badge-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            <line x1="11" y1="8" x2="11" y2="14" />
                                            <line x1="8" y1="11" x2="14" y2="11" />
                                        </svg>
                                    </div>
                                    Identity Verify
                                </div>
                                <div className="diagram-badge">
                                    <div className="diagram-badge-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 11l3 3L22 4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                    </div>
                                    Approval
                                </div>
                                <div className="diagram-badge">
                                    <div className="diagram-badge-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="8" y1="6" x2="21" y2="6" />
                                            <line x1="8" y1="12" x2="21" y2="12" />
                                            <line x1="8" y1="18" x2="21" y2="18" />
                                            <line x1="3" y1="6" x2="3.01" y2="6" />
                                            <line x1="3" y1="12" x2="3.01" y2="12" />
                                            <line x1="3" y1="18" x2="3.01" y2="18" />
                                        </svg>
                                    </div>
                                    Audit Proof
                                </div>
                            </div>
                            {/* Sub-note */}
                            <div className="diagram-note">
                                Every requested action is evaluated here before any execution path opens
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="diagram-arrow">
                            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                                <line x1="0" y1="8" x2="26" y2="8" stroke="#38bdf8" strokeWidth="1.5" />
                                <polyline points="20,3 28,8 20,13" stroke="#38bdf8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Destination Box */}
                        <div className="diagram-endpoint">
                            <div className="diagram-icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="4" y="4" width="16" height="6" rx="2" ry="2" />
                                    <rect x="4" y="14" width="16" height="6" rx="2" ry="2" />
                                    <line x1="8" y1="7" x2="8.01" y2="7" />
                                    <line x1="8" y1="17" x2="8.01" y2="17" />
                                </svg>
                            </div>
                            <span className="diagram-label-small">Destination</span>
                            <span className="diagram-label-bold">Core Systems</span>
                            <span className="diagram-desc-small">Databases, SaaS,<br />internal services,<br />production tools</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
