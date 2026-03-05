"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiLock, FiEye, FiZap } from "react-icons/fi";

export default function UseCasesHero() {
    return (
        <section className="use-cases-hero">
            <div className="uch-container">
                {/* Left Side: Content */}
                <div className="uch-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="uch-badge"
                    >
                        <span className="uch-badge-dot"></span>
                        Use Cases
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="uch-headline"
                    >
                        Where Autonomous AI<br />
                        Must Be Governed Not<br />
                        Just Deployed
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="uch-subtitle"
                    >
                        Risk becomes real when agents handle transactions and sensitive data across core enterprise systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="uch-features"
                    >
                        <div className="uch-feature-pill">
                            <FiLock className="uch-feature-icon" />
                            Policy-Bound Execution
                        </div>
                        <div className="uch-feature-pill">
                            <FiEye className="uch-feature-icon" />
                            Full Visibility & Traceability
                        </div>
                        <div className="uch-feature-pill">
                            <FiZap className="uch-feature-icon" />
                            Controlled High-Velocity Automation
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Comparison Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="uch-card"
                >
                    <div className="uch-card-header">
                        <span>WHEN AGENTS RUN IN PRODUCTION</span>
                        <div className="uch-card-dots">
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                    </div>

                    <div className="uch-card-body">
                        {/* Unbounded Column */}
                        <div className="uch-col uch-col-unbounded">
                            <h3 className="uch-col-title">IF<br />UNBOUNDED</h3>
                            <ul className="uch-col-list">
                                <li>Silent policy violations</li>
                                <li>Unprovable decisions</li>
                                <li>Unbounded system access</li>
                            </ul>
                        </div>

                        {/* With Cintara Column */}
                        <div className="uch-col uch-col-cintara">
                            <h3 className="uch-col-title">WITH<br />CINTARA</h3>
                            <ul className="uch-col-list">
                                <li>Pre-execution guardrails</li>
                                <li>Cryptographic audit trails</li>
                                <li>Scoped, policy-aware access</li>
                            </ul>
                        </div>
                    </div>

                    <div className="uch-card-footer">
                        <p>Autonomy where it matters most without losing control.</p>
                        <div className="uch-status-badge">
                            <FiZap /> GOVERNED ACTIVE
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
