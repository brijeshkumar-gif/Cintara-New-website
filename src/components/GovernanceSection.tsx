import React from "react";

export default function GovernanceSection() {
    return (
        <section className="gov-section">
            <div className="gov-container">
                {/* Header Side */}
                <div className="gov-header">
                    <div className="gov-badge">From Chaos to Control</div>
                    <h2 className="gov-title">Autonomy With and Without Governance</h2>
                    <p className="gov-subtitle">
                        Instead of another feature list, this is the trust profile of your agents before and after Cintara sits in the loop.
                    </p>
                    <div className="gov-badge-alt">At a Glance</div>
                    <p className="gov-subtitle">
                        Four capabilities that determine whether autonomous AI remains an experiment, or becomes<br />
                        production-grade infrastructure.
                    </p>
                </div>

                {/* Main Card */}
                <div className="gov-card">
                    {/* Header Row */}
                    <div className="gov-row gov-row-header">
                        <div className="gov-col-1 gov-header-text">Capability</div>
                        <div className="gov-col-2 gov-text-orange">Without Cintara</div>
                        <div className="gov-col-3">
                            <div className="gov-header-box">With Cintara Control Plane</div>
                        </div>
                    </div>

                    {/* Row 1 */}
                    <div className="gov-row">
                        <div className="gov-col-1 gov-label">Authorization</div>
                        <div className="gov-col-2">
                            <div className="gov-box gov-box-red">
                                Static API keys, broad permissions
                            </div>
                        </div>
                        <div className="gov-col-3">
                            <div className="gov-box gov-box-blue">
                                Dynamic, Context-Aware Identity Verification
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="gov-row">
                        <div className="gov-col-1 gov-label">Pre-Execution Enforcement</div>
                        <div className="gov-col-2">
                            <div className="gov-box gov-box-red">
                                None (reactive monitoring only)
                            </div>
                        </div>
                        <div className="gov-col-3">
                            <div className="gov-box gov-box-blue">
                                Real-time policy gate before execution
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="gov-row">
                        <div className="gov-col-1 gov-label">Provable Execution</div>
                        <div className="gov-col-2">
                            <div className="gov-box gov-box-red">
                                Messy, unstructured application logs
                            </div>
                        </div>
                        <div className="gov-col-3">
                            <div className="gov-box gov-box-blue">
                                Cryptographically signed audit ledger
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="gov-row">
                        <div className="gov-col-1 gov-label">Enterprise Trust Posture</div>
                        <div className="gov-col-2">
                            <div className="gov-box gov-box-red">
                                High risk / "Human- in-the-loop" required
                            </div>
                        </div>
                        <div className="gov-col-3">
                            <div className="gov-box gov-box-blue">
                                Autonomous-ready / "Human-on-the-loop"
                            </div>
                        </div>
                    </div>

                    <div className="gov-footer">
                        The farther you move to the right on this rail, the more your agents operate like governed infrastructure not unbounded experiments.
                    </div>
                </div>
            </div>
        </section>
    );
}
