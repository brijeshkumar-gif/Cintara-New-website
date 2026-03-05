"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const flowSteps = [
    { title: "Agent proposes action", desc: "Example: move funds, modify configuration, access data." },
    { title: "Cintara applies policy", desc: "Validated against policy, identity and approval rules" },
    { title: "Action is approved or blocked", desc: "High-risk steps become explicit decisions" },
    { title: "Execution is written to signed proof", desc: "Recorded with cryptographically verifiable audit proof" }
];

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[calc(100vh-var(--header-height))] flex items-center">
            {/* Background Gradient - Matching Homepage exactly */}
            <div
                className="absolute inset-0 z-0"
                style={{ background: 'linear-gradient(180deg, #F0F9FF 0%, #A5F3FC 60%, #06B6D4 100%)' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side Content */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                            About Cintara
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight"
                        >
                            Governing Autonomous <br />
                            AI Before It Acts
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl"
                        >
                            Autonomous systems now operate inside real enterprise environments. Cintara ensures every action is controlled, attributable, and auditable before execution.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <FiCheckCircle className="text-sky-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">What We Do</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Execution Layer Governance For Autonomous Agents</p>
                                </div>
                            </div>
                            <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                <FiCheckCircle className="text-sky-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Where It Runs</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">High-Stakes, Production-Grade Enterprise Systems</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-[500px] bg-white/60 backdrop-blur-xl rounded-[40px] border border-white p-10 shadow-2xl relative"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-8 px-2 leading-tight">
                            What Cintara Actually Does in Your Stack
                        </h3>

                        <div className="space-y-4">
                            {/* Position */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-100/50 shadow-sm transition-transform hover:scale-[1.01]">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Position</span>
                                <p className="text-sm font-semibold text-slate-700">Control layer between agents & enterprise system</p>
                            </div>

                            {/* Guarantee */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-100/50 shadow-sm transition-transform hover:scale-[1.01]">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Guarantee</span>
                                <p className="text-sm font-semibold text-slate-700">High-impact actions are validated before execution</p>
                            </div>

                            {/* Flow Section */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100/50 shadow-sm mt-6">
                                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8 block">From Intent to Signed Proof</span>

                                <div className="space-y-8 relative">
                                    {/* Connector Line */}
                                    <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-slate-200 z-0" />

                                    {flowSteps.map((step, idx) => (
                                        <div key={idx} className="relative z-10 pl-6 group">
                                            <div className="absolute left-0 top-1.5 w-[7px] h-[7px] bg-sky-500 rounded-full" />
                                            <h4 className="text-xs font-bold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">{step.title}</h4>
                                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
