"use client";

import { motion } from "framer-motion";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const points = [
    {
        num: "01",
        title: "Assumed Safeguards",
        desc: "Legacy processes assume human oversight, leaving agents dependent on fragile guardrails."
    },
    {
        num: "02",
        title: "Scattered Logic",
        desc: "Rules live across apps and workflows, making enforcement inconsistent at execution time."
    },
    {
        num: "03",
        title: "Post-Incident Reviews",
        desc: "Teams investigate after failure instead of preventing unsafe execution."
    }
];

export default function CoreBeliefSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#f0f9ff]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                    {/* Left side content */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8"
                        >
                            Our Core Belief
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight"
                        >
                            Autonomy Without Governance <br />
                            Does Not Scale
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 leading-relaxed font-medium"
                        >
                            Governance must be infrastructure, not an add on. AI intent must be evaluated and constrained before execution.
                        </motion.p>
                    </div>

                    {/* Middle: Numbered Blocks */}
                    <div className="lg:w-1/3 space-y-6">
                        {points.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-sm font-bold text-sky-400 mt-1">{point.num}</span>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 mb-2">{point.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed font-medium">{point.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Dark Comparison Card */}
                    <div className="lg:w-1/3 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#014c63] rounded-[40px] p-10 shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10 space-y-6">
                                {/* Autonomy without governance */}
                                <div className="bg-[#cc4a2f] rounded-2xl p-6 text-white border border-white/10 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                                        <div>
                                            <h4 className="text-sm font-bold mb-1">Autonomy without governance</h4>
                                            <p className="text-[11px] opacity-80 leading-relaxed font-medium">
                                                Agents act directly on production systems based on assumptions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Autonomy with Cintara */}
                                <div className="bg-[#10b981] rounded-2xl p-6 text-white border border-white/10 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                                        <div>
                                            <h4 className="text-sm font-bold mb-1">Autonomy with Cintara</h4>
                                            <p className="text-[11px] opacity-80 leading-relaxed font-medium">
                                                Actions are intercepted at the boundary, evaluated, governed and approved.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Quote */}
                                <div className="pt-8 border-t border-white/10">
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-[#0ea5e9] rounded-full flex-shrink-0" />
                                        <p className="text-lg font-bold text-white leading-relaxed italic">
                                            &quot;Execution must be governed before action not rationalized after.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/20 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
