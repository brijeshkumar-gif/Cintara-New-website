"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiShield, FiClipboard, FiUser } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function HowItWorksHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[calc(100vh-var(--header-height))] flex items-center">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{ background: 'linear-gradient(180deg, #F0F9FF 0%, #A5F3FC 60%, #06B6D4 100%)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-xs font-medium text-slate-500 mb-8"
                        >
                            How Cintara Works - Control Plane Architecture
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
                        >
                            Governance Embedded <br />
                            Directly Into AI Execution
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl"
                        >
                            Cintara operates as a dedicated control plane between AI agents and enterprise systems, enforcing policy and validation before execution.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-100 bg-white shadow-sm text-sm font-medium text-slate-700">
                                <FiCheckCircle className="text-sky-500 w-5 h-5" />
                                Pre-Execution Control
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-100 bg-white shadow-sm text-sm font-medium text-slate-700">
                                <FiCheckCircle className="text-sky-500 w-5 h-5" />
                                Unified Policy And Approval Layer
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Execution Path Mantra Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-[540px] bg-white/40 backdrop-blur-md rounded-3xl border border-white p-10 shadow-2xl"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Execution Path Mantra</h3>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                                    Every request is taken from intent to governed action to provable record.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] font-bold text-slate-800 uppercase tracking-widest">
                                Intent <HiArrowNarrowRight className="text-slate-400" /> Governance <HiArrowNarrowRight className="text-slate-400" /> Proof
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { step: "01", icon: <FiUser />, title: "Identity Verified", desc: "Who is acting?", color: "bg-sky-500" },
                                { step: "02", icon: <FiShield />, title: "Policy Evaluated", desc: "Is this allowed?", color: "bg-sky-500" },
                                { step: "03", icon: <FiClipboard />, title: "Execution Attested", desc: "Is it provable?", color: "bg-sky-500" }
                            ].map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-50 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-slate-100">
                                        <div className="text-xs font-bold text-sky-500/60 w-6">{item.step}</div>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-0.5">{item.title}</h4>
                                            <p className="text-xs text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                    {idx < 2 && (
                                        <div className="absolute left-[106px] top-[100%] h-6 w-[2px] bg-slate-100 z-0" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center text-xs font-semibold">
                            <span className="text-slate-800">Autonomous AI generates Intent.</span>
                            <div className="text-sky-600 mt-2 flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300">
                                <HiArrowNarrowRight /> Cintara governs execution.
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
