"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const HighStakesSection = () => {
    const industries = [
        { category: "Finance", name: "Financial Services" },
        { category: "Health", name: "Life Sciences" },
        { category: "Risk", name: "Insurance" },
        { category: "Legal", name: "Professional Services" },
        { category: "Tech", name: "Enterprise SaaS" },
        { category: "Systems", name: "Critical Infra" },
    ];

    const points = [
        "Compliance is mandatory.",
        "Auditability is non negotiable.",
        "Autonomy must be governed infrastructure.",
    ];

    return (
        <section className="high-stakes-wrapper">
            <div className="high-stakes-container">
                <div className="high-stakes-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="content-left"
                    >
                        <span className="badge">Critical Infrastructure</span>
                        <h2 className="title">Built for High Stakes Environments</h2>
                        <p className="description">
                            Cintara is built for organizations where autonomous AI must operate as governed infrastructure, not experimentation.
                        </p>
                        <ul className="points-list">
                            {points.map((point, index) => (
                                <li key={index} className="point-item">
                                    <FiCheckCircle className="check-icon" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="content-right">
                        <span className="section-label">Industries Served</span>
                        <div className="industries-grid">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="industry-card"
                                >
                                    <span className="industry-category">{industry.category}</span>
                                    <h4 className="industry-name">{industry.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .high-stakes-wrapper {
                    padding: 80px 20px;
                    background-color: #f0faff;
                    display: flex;
                    justify-content: center;
                    font-family: var(--font-family, sans-serif);
                }

                .high-stakes-container {
                    width: 100%;
                    max-width: 1200px;
                    background: linear-gradient(135deg, #e0faff 0%, #06b6d4 100%);
                    border-radius: 24px;
                    padding: 60px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
                }

                .high-stakes-container::after {
                    content: "";
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 80%;
                    height: 150%;
                    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
                    transform: rotate(-15deg);
                    pointer-events: none;
                }

                .high-stakes-content {
                    display: flex;
                    gap: 60px;
                    align-items: flex-start;
                    position: relative;
                    z-index: 1;
                }

                .content-left {
                    flex: 1;
                    max-width: 500px;
                }

                .badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 999px;
                    font-size: 13px;
                    font-weight: 500;
                    color: #444;
                    margin-bottom: 24px;
                }

                .title {
                    font-size: 48px;
                    line-height: 1.1;
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 24px;
                    letter-spacing: -0.02em;
                }

                .description {
                    font-size: 16px;
                    color: #444;
                    line-height: 1.6;
                    margin-bottom: 32px;
                    opacity: 0.9;
                }

                .points-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .point-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                    font-size: 15px;
                    color: #333;
                    font-weight: 500;
                }

                .check-icon {
                    color: #0891b2;
                    font-size: 18px;
                    flex-shrink: 0;
                }

                .content-right {
                    flex: 1.2;
                }

                .section-label {
                    display: block;
                    font-size: 24px;
                    font-weight: 500;
                    color: #111;
                    margin-bottom: 32px;
                    opacity: 0.9;
                    letter-spacing: -0.01em;
                }

                .industries-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }

                .industry-card {
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 1);
                    border-radius: 16px;
                    padding: 28px 28px;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 120px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
                }

                .industry-card:hover {
                    background: rgba(255, 255, 255, 1);
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(6, 182, 212, 0.08);
                    border-color: #ffffff;
                }

                .industry-category {
                    display: block;
                    font-size: 13px;
                    color: #0891b2;
                    margin-bottom: 8px;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                }

                .industry-name {
                    font-size: 22px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                    line-height: 1.2;
                }

                @media (max-width: 1024px) {
                    .high-stakes-content {
                        flex-direction: column;
                        gap: 40px;
                    }

                    .content-left {
                        max-width: 100%;
                    }

                    .title {
                        font-size: 36px;
                    }
                }

                @media (max-width: 640px) {
                    .high-stakes-container {
                        padding: 30px;
                        border-radius: 16px;
                    }

                    .industries-grid {
                        grid-template-columns: 1fr;
                    }

                    .title {
                        font-size: 32px;
                    }
                }
            `}</style>
        </section>
    );
};

export default HighStakesSection;
