"use client";

import { motion } from "framer-motion";
import { FiShield, FiServer, FiShare2 } from "react-icons/fi";
import TiltCard from "./TiltCard";

const principles = [
    {
        icon: FiShield,
        title: "Trust and Accountability",
        desc: "Every action must be attributable, enforceable and provable. Clear actors and explicit decisions across every execution path.",
        number: "01"
    },
    {
        icon: FiServer,
        title: "Enterprise-Grade Reliability",
        desc: "Governance infrastructure must be deterministic and resilient. The same decision, every time, under the same conditions even as agents and systems evolve.",
        number: "02"
    },
    {
        icon: FiShare2,
        title: "Responsible Autonomy",
        desc: "Autonomy operates within defined policy boundaries. Explicit approval is required when actions exceed scope.",
        number: "03"
    }
];

export default function PrinciplesSection() {
    return (
        <section className="py-24 bg-[#fafcff]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-16">
                    {/* Left Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-500 mb-6"
                        >
                            Our Commitment
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
                        >
                            Cintara Is Built On Three Principles
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium"
                        >
                            The principles that ensure autonomous AI operates within defined policy boundaries.
                        </motion.p>
                    </div>

                    {/* Right Column */}
                    <div className="lg:pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-4"
                        >
                            <span className="text-[11px] font-bold text-slate-800 mr-1">Applies To:</span>
                            <span className="text-[11px] font-medium text-slate-500">Every agent, every tool, every execution</span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium max-w-md"
                        >
                            Every action is evaluated before execution and written to a provable audit trail.
                        </motion.p>
                    </div>
                </div>

                {/* Gradient Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[40px] p-8 md:p-12 relative overflow-hidden"
                    style={{ background: "linear-gradient(180deg, #F0F9FF 0%, #A5F3FC 60%, #06B6D4 100%)" }}
                >
                    {/* Inner glowing effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {principles.map((principle, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="h-full"
                            >
                                <TiltCard className="bg-white rounded-3xl p-8 shadow-xl shadow-cyan-900/10 flex flex-col relative overflow-hidden min-h-[320px]">
                                    <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white mb-6 relative z-10 shadow-md">
                                        <principle.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                                        {principle.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed relative z-10">
                                        {principle.desc}
                                    </p>

                                    {/* Large Watermark Background Text */}
                                    <div className="absolute bottom-4 left-6 text-5xl sm:text-6xl font-black text-slate-50/80 tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
                                        Principle {principle.number}
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
