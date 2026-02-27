import React from "react";

export default function ExecutionSection() {
    return (
        <section className="exec-section">
            <div className="exec-container">
                {/* Header Side */}
                <div className="exec-header">
                    <div className="exec-badge">Execution-First Governance</div>
                    <h2 className="exec-title">From Intent to Controlled Execution</h2>
                    <p className="exec-subtitle">
                        Every agent action follows a repeatable governance loop from intent to signal proof.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="exec-content">
                    {/* Left Column Graphic */}
                    <div className="exec-graphic-card">
                        <div className="eg-content">
                            <h3>Governed<br />Execution</h3>
                            <p>Reason freely.<br />Execute under enforced policy.</p>
                        </div>
                        {/* Abstract background for the graphic card */}
                        <div className="eg-bg">
                            <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" className="eg-svg">
                                {/* Generating some radiating lines to mimic the image */}
                                <g transform="translate(0, 350)">
                                    {Array.from({ length: 40 }).map((_, i) => (
                                        <g key={i} transform={`rotate(${(i * 360) / 40})`}>
                                            <line x1="20" y1="0" x2={150 + Math.random() * 200} y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth={1 + Math.random() * 1.5} />
                                            <circle cx={150 + Math.random() * 200} cy="0" r={1.5 + Math.random() * 2} fill={Math.random() > 0.5 ? "rgba(255,255,255,0.4)" : "#ff5722"} opacity="0.6" />
                                        </g>
                                    ))}
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Right Timeline Card */}
                    <div className="exec-timeline-card">
                        <div className="et-line"></div>

                        {/* Step 1 */}
                        <div className="et-step">
                            <div className="et-node et-node-1">01</div>
                            <div className="et-step-content has-border">
                                <div className="et-step-left">
                                    <div className="et-pill">Agent Lane</div>
                                    <h4 className="et-step-title">Intent</h4>
                                    <p className="et-step-desc">AI systems determine what to do based on goals and context.</p>
                                </div>
                                <div className="et-step-right">
                                    <div className="et-info-box-gray">
                                        Unbounded reasoning is fine here but execution is still locked behind Cintara.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="et-step">
                            <div className="et-node et-node-2">02</div>
                            <div className="et-step-content has-border">
                                <div className="et-step-left">
                                    <div className="et-pill">Cintara Lane</div>
                                    <h4 className="et-step-title">Governance Check</h4>
                                    <p className="et-step-desc">Identity, policy, permissions, and risk are validated before execution.</p>
                                </div>
                                <div className="et-step-right et-badges-container">
                                    <span className="et-small-badge">Policy</span>
                                    <span className="et-small-badge">Identity</span>
                                    <span className="et-small-badge">Context</span>
                                    <span className="et-small-badge">Risk scoring</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="et-step">
                            <div className="et-node et-node-3">03</div>
                            <div className="et-step-content has-border">
                                <div className="et-step-left">
                                    <div className="et-pill">Human Lane (When Required)</div>
                                    <h4 className="et-step-title">Approval</h4>
                                    <p className="et-step-desc">Critical actions require human approval.</p>
                                </div>
                                <div className="et-step-right">
                                    <div className="et-info-box-dashed">
                                        Designed so 95% of actions never need to interrupt a human but the 5% that matter always do.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="et-step">
                            <div className="et-node et-node-4">04</div>
                            <div className="et-step-content">
                                <div className="et-step-left">
                                    <div className="et-pill">Execution + Proof</div>
                                    <h4 className="et-step-title">Controlled Run &amp; Audit</h4>
                                    <p className="et-step-desc">Actions execute through enforced gateways and are written to signed audit records.</p>
                                </div>
                                <div className="et-step-right et-badges-container">
                                    <span className="et-small-badge">Least-privilege tools</span>
                                    <span className="et-small-badge">Tamper-proof ledger</span>
                                    <span className="et-small-badge">Replayable history</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
