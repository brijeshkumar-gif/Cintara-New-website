"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Helper component for the 3D Tilt Card effect
const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse positions
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for the rotation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]), { damping: 20, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to the center of the card
        // Values range from -0.5 to 0.5
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset to flat
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="problem-card relative overflow-hidden"
            // Ensure the transform pivot is the center of the card
            initial={{ perspective: 1000 }}
            whileHover={{ scale: 1.02 }}
        >
            {/* 3D Depth Content wrapper */}
            <div style={{ transform: "translateZ(40px)" }} className="h-full flex flex-col pointer-events-none">
                {children}
            </div>
            {/* Glossy glare effect on hover */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl bg-gradient-to-tr from-white/5 to-white/20 opacity-0"
                whileHover={{ opacity: 1 }}
                style={{
                    transform: "translateZ(1px)",
                }}
            />
        </motion.div>
    );
};

export default function ProblemSection() {
    return (
        <section className="problem-section" id="problem">
            {/* The outer container holds both left and right columns horizontally */}
            <div className="problem-content-container">

                {/* ── Left Column ── */}
                <div className="problem-left">
                    <div className="problem-label">The Problem</div>
                    <h2 className="problem-headline">
                        Autonomy Has Outpaced<br />
                        Trust and Control
                    </h2>
                    <p className="problem-subtitle">
                        Without enforceable answers, autonomy becomes risk.
                    </p>
                    <div className="problem-graphic">
                        <div className="cs-graphic">
                            <div className="cs-floor"></div>

                            {/* Left Robotic Arm */}
                            <div className="cs-arm">
                                <svg width="240" height="200" viewBox="0 0 240 200" style={{ overflow: 'visible' }}>
                                    <path d="M -60 40 L 90 90 L 120 120 L 80 140 L -60 60 Z" fill="#cbd5e1" />
                                    <path d="M -60 55 L 85 105 L 75 125 L -60 85 Z" fill="#94a3b8" />
                                    <circle cx="100" cy="110" r="18" fill="#94a3b8" />
                                    <circle cx="100" cy="110" r="8" fill="#475569" />
                                    <circle cx="150" cy="140" r="12" fill="#94a3b8" />
                                    <circle cx="150" cy="140" r="5" fill="#475569" />
                                    <path d="M 110 115 L 160 145 L 200 180 C 205 185, 200 190, 195 190 L 180 175 L 140 135 Z" fill="#94a3b8" />
                                    <path d="M 180 160 L 210 190 L 195 195 L 170 170" fill="#64748b" />
                                    <path d="M 90 125 L 120 160 L 110 170 L 80 135 Z" fill="#cbd5e1" />
                                </svg>
                            </div>

                            {/* Center Dominies */}
                            <div className="cs-dominos">
                                <div className="cs-domino d-1">High Autonomy &amp; Low Trust Surface</div>
                                <div className="cs-domino d-2">Unbounded Autonomy</div>
                                <div className="cs-domino d-3">Governed Control Plane</div>
                            </div>

                            {/* Pushing Robot */}
                            <div className="cs-robot">
                                <svg width="150" height="180" viewBox="0 0 150 180" style={{ overflow: 'visible' }}>
                                    <path d="M 90 110 L 130 170" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" />
                                    <path d="M 90 110 L 50 170" stroke="#64748b" strokeWidth="12" strokeLinecap="round" />
                                    <path d="M 40 170 L 60 170" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
                                    <path d="M 120 170 L 140 170" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
                                    <circle cx="90" cy="110" r="10" fill="#475569" />
                                    <path d="M 100 65 L 90 110" stroke="#cbd5e1" strokeWidth="22" strokeLinecap="round" />
                                    <rect x="85" y="65" width="10" height="20" rx="3" fill="#0ea5e9" transform="rotate(10 90 75)" />
                                    <path d="M 105 25 C 120 25, 125 40, 115 50 C 105 60, 90 55, 90 40 C 90 30, 95 25, 105 25 Z" fill="#475569" />
                                    <circle cx="98" cy="42" r="4" fill="#38bdf8" />
                                    <path d="M 100 70 L 50 85" stroke="#64748b" strokeWidth="10" strokeLinecap="round" />
                                    <path d="M 100 75 L 30 65" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
                                    <circle cx="100" cy="75" r="8" fill="#475569" />
                                    <circle cx="30" cy="65" r="6" fill="#cbd5e1" />
                                    <circle cx="50" cy="85" r="6" fill="#cbd5e1" />
                                </svg>
                            </div>

                            {/* Stop Pill */}
                            <div className="cs-gap-pill">
                                <span className="cs-stopper-text">Cintara closes this Gap</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Right Column ── */}
                <div className="problem-right perspective-[1000px]">
                    <h3 className="problem-right-title">
                        Three Questions Every<br />
                        Autonomous System<br />
                        Must Answer
                    </h3>

                    <div className="problem-cards-wrapper pb-6">
                        <TiltCard>
                            <div className="problem-card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                            </div>
                            <div className="problem-card-text">
                                <h4>Boundary Control</h4>
                                <p>Can this agent act only within clearly defined boundaries?</p>
                            </div>
                        </TiltCard>

                        <TiltCard>
                            <div className="problem-card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <div className="problem-card-text">
                                <h4>Pre-Execution Safeguards</h4>
                                <p>Can sensitive actions be validated or stopped before they execute?</p>
                            </div>
                        </TiltCard>

                        <TiltCard>
                            <div className="problem-card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="12" cy="10" r="2" />
                                    <path d="M12 16v-2" />
                                </svg>
                            </div>
                            <div className="problem-card-text">
                                <h4>Provable Audit Trail</h4>
                                <p>Can every decision be explained, audited, and proven later?</p>
                            </div>
                        </TiltCard>
                    </div>

                    <div className="problem-right-footer">
                        If the answer to any of these is no or it depends on logs, your agents are<br />
                        operating on trust, not control.
                    </div>
                </div>

            </div>
        </section>
    );
}

