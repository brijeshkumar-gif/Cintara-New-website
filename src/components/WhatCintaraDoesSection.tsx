import React from "react";

export default function WhatCintaraDoesSection() {
    return (
        <section className="cintara-does-section" id="how-it-works">
            <div className="cintara-does-container">

                {/* ── Top Header Row ── */}
                <div className="cintara-does-header">
                    <div className="cd-title-area">
                        <div className="cd-badge">Control Plane, Not Another Agent</div>
                        <h2 className="cd-title">What Cintara Does</h2>
                        <p className="cd-desc">
                            Cintara is the decision layer between AI agents and your systems. Every requested<br />
                            action is inspected, governed, and either allowed, escalated, or stopped before<br />
                            anything touches production.
                        </p>
                    </div>
                    {/* Compact Right Diagram */}
                    <div className="cd-compact-diagram">
                        <div className="cd-dot-label">
                            <span className="cd-dot cd-dot-blue"></span>
                            Agent
                        </div>
                        <div className="cd-line"></div>
                        <div className="cd-center-pill">
                            <div className="cd-center-icon">
                                <img src="/logo.png" alt="" className="cd-mini-logo" />
                            </div>
                            Cintara Control Plane
                        </div>
                        <div className="cd-line"></div>
                        <div className="cd-dot-label">
                            <span className="cd-dot cd-dot-blue"></span>
                            Core Systems
                        </div>
                    </div>
                </div>

                {/* ── Three Cards Row ── */}
                <div className="cd-cards-grid">

                    {/* Card 1 */}
                    <div className="cd-card-wrapper">
                        <div className="cd-card-bg"></div>
                        <div className="cd-card">
                            <div className="cd-card-graphic">
                                {/* SVG abstract workflow for Card 1 */}
                                <svg width="100%" height="100%" viewBox="0 0 320 180" className="cd-svg-graphic">
                                    <rect x="0" y="0" width="320" height="180" rx="16" fill="#F8FAFC" />

                                    {/* Nodes */}
                                    <rect x="30" y="30" width="100" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="80" y="48" fontSize="12" fill="#64748b" textAnchor="middle">AI Agents</text>

                                    <rect x="190" y="30" width="100" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="240" y="48" fontSize="12" fill="#64748b" textAnchor="middle">Core Systems</text>

                                    <rect x="30" y="120" width="100" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="80" y="138" fontSize="12" fill="#64748b" textAnchor="middle">AI Systems</text>

                                    <rect x="190" y="120" width="100" height="28" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="240" y="138" fontSize="12" fill="#64748b" textAnchor="middle">Core Systems</text>

                                    {/* Central cintara pill */}
                                    <rect x="90" y="70" width="140" height="34" rx="17" fill="#0ea5e9" />
                                    <text x="160" y="91" fontSize="12" fill="#ffffff" fontWeight="600" textAnchor="middle">Cintara Control Plane</text>

                                    {/* Connecting lines */}
                                    <line x1="80" y1="58" x2="80" y2="87" stroke="#cbd5e1" strokeDasharray="3 3" />
                                    <line x1="80" y1="87" x2="90" y2="87" stroke="#cbd5e1" strokeDasharray="3 3" />
                                    <line x1="230" y1="87" x2="240" y2="87" stroke="#cbd5e1" />
                                    <line x1="240" y1="87" x2="240" y2="120" stroke="#cbd5e1" />

                                    {/* Straight bottom line */}
                                    <line x1="130" y1="134" x2="190" y2="134" stroke="#cbd5e1" />
                                    <circle cx="160" cy="134" r="3" fill="#cbd5e1" />
                                </svg>
                            </div>
                            <div className="cd-card-content">
                                <div className="cd-card-pill">Layer 0</div>
                                <h3 className="cd-card-title">A Control Plane for<br />Autonomous AI</h3>
                                <p className="cd-card-desc">Cintara sits between AI systems and production. It governs execution before impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="cd-card-wrapper">
                        <div className="cd-card-bg"></div>
                        <div className="cd-card">
                            <div className="cd-card-graphic">
                                {/* SVG abstract workflow for Card 2 */}
                                <svg width="100%" height="100%" viewBox="0 0 320 180" className="cd-svg-graphic">
                                    <rect x="-10" y="10" width="340" height="150" rx="20" fill="#ffffff" stroke="#f1f5f9" />

                                    {/* Top Row Nodes */}
                                    <rect x="25" y="30" width="70" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="60" y="46" fontSize="10" fill="#475569" textAnchor="middle">Request</text>

                                    <rect x="125" y="30" width="80" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="165" y="46" fontSize="10" fill="#475569" textAnchor="middle">Policy Check</text>

                                    <rect x="230" y="30" width="70" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="265" y="46" fontSize="10" fill="#475569" textAnchor="middle">Outcome</text>

                                    {/* Lines Top */}
                                    <line x1="95" y1="42" x2="125" y2="42" stroke="#cbd5e1" />
                                    <line x1="205" y1="42" x2="230" y2="42" stroke="#cbd5e1" />

                                    {/* Middle Row Nodes */}
                                    <rect x="25" y="75" width="70" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="60" y="91" fontSize="10" fill="#475569" textAnchor="middle">Request</text>

                                    <rect x="130" y="75" width="70" height="24" rx="12" fill="#f0fdf4" stroke="#bbf7d0" />
                                    <text x="165" y="91" fontSize="10" fill="#166534" fontWeight="600" textAnchor="middle">✓ Approve</text>

                                    <rect x="225" y="75" width="80" height="26" rx="13" fill="#0ea5e9" />
                                    <text x="265" y="92" fontSize="10" fill="#ffffff" fontWeight="600" textAnchor="middle">Policy Check</text>

                                    {/* Lines Middle */}
                                    <line x1="95" y1="87" x2="130" y2="87" stroke="#cbd5e1" strokeDasharray="2 2" />
                                    <line x1="200" y1="87" x2="225" y2="87" stroke="#cbd5e1" />

                                    {/* Bottom Info line */}
                                    <rect x="20" y="120" width="280" height="30" rx="15" fill="#f8fafc" stroke="#e2e8f0" strokeDasharray="3 3" />
                                    <text x="90" y="140" fontSize="10" fill="#64748b" textAnchor="middle">Requests Governed Before Impact</text>

                                    <text x="195" y="140" fontSize="10" fill="#ef4444" fontWeight="600" textAnchor="middle">✕ Block→</text>
                                    <rect x="235" y="125" width="50" height="20" rx="10" fill="#fff1f2" stroke="#fecdd3" />
                                    <text x="260" y="139" fontSize="10" fill="#ef4444" textAnchor="middle">Stop</text>

                                </svg>
                            </div>
                            <div className="cd-card-content">
                                <div className="cd-card-pill">Gatekeeping Logic</div>
                                <h3 className="cd-card-title">Pre-Execution Policy<br />Enforcement</h3>
                                <p className="cd-card-desc">No action executes without policy validation. High-risk requests are escalated before impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="cd-card-wrapper">
                        <div className="cd-card-bg"></div>
                        <div className="cd-card">
                            <div className="cd-card-graphic">
                                {/* SVG abstract workflow for Card 3 */}
                                <svg width="100%" height="100%" viewBox="0 0 320 180" className="cd-svg-graphic">
                                    <rect x="5" y="15" width="310" height="150" rx="16" fill="#F8FAFC" stroke="#e2e8f0" />

                                    <rect x="20" y="40" width="70" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="55" y="56" fontSize="10" fill="#475569" textAnchor="middle">Request</text>

                                    {/* Risk Diamond */}
                                    <path d="M 140 30 L 165 52 L 140 74 L 115 52 Z" fill="#0ea5e9" />
                                    <text x="140" y="49" fontSize="9" fill="#ffffff" fontWeight="bold" textAnchor="middle">Risk</text>
                                    <text x="140" y="60" fontSize="9" fill="#ffffff" fontWeight="bold" textAnchor="middle">Level</text>

                                    {/* Action Flow */}
                                    <rect x="220" y="40" width="75" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="257" y="56" fontSize="10" fill="#475569" textAnchor="middle">Auto Execute</text>

                                    {/* High Risk Flow */}
                                    <rect x="180" y="80" width="70" height="22" rx="11" fill="#fff1f2" stroke="#fecdd3" />
                                    <text x="215" y="94" fontSize="9" fill="#ef4444" fontWeight="bold" textAnchor="middle">⚠ High Risk</text>

                                    <rect x="55" y="115" width="105" height="26" rx="13" fill="#0ea5e9" />
                                    <text x="107" y="132" fontSize="10" fill="#ffffff" fontWeight="600" textAnchor="middle">Human Approval</text>

                                    <rect x="230" y="115" width="60" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" />
                                    <text x="260" y="131" fontSize="10" fill="#475569" textAnchor="middle">Execute</text>

                                    {/* Connectors */}
                                    <line x1="90" y1="52" x2="115" y2="52" stroke="#cbd5e1" markerEnd="url(#arrow)" />
                                    <line x1="165" y1="52" x2="220" y2="52" stroke="#cbd5e1" strokeDasharray="3 3" />

                                    <line x1="140" y1="74" x2="140" y2="85" stroke="#cbd5e1" />
                                    <line x1="140" y1="85" x2="180" y2="85" stroke="#cbd5e1" />
                                    <line x1="180" y1="91" x2="140" y2="115" stroke="#cbd5e1" strokeDasharray="2 2" />

                                    <line x1="160" y1="128" x2="230" y2="128" stroke="#cbd5e1" />

                                    <defs>
                                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                            <div className="cd-card-content">
                                <div className="cd-card-pill">Human On-The-Loop</div>
                                <h3 className="cd-card-title">Human Oversight Where<br />It Matters</h3>
                                <p className="cd-card-desc">Critical actions require approval. Routine actions run under enforced guardrails.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── Footer ── */}
                <div className="cd-footer-wrapper">
                    <div className="cd-footer-pill">
                        <em>Controlled execution. Never blind automation.</em>
                    </div>
                </div>

            </div>
        </section>
    );
}
