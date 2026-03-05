"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function InfrastructureSection() {
    return (
        <section className="py-24 bg-[#f8fbff] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6"
                        >
                            Responsible Autonomy Engineered
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] mb-8"
                        >
                            Infrastructure for Responsible Autonomy
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 mb-10 leading-relaxed"
                        >
                            Cintara embeds identity, policy, validation, approval, and audit directly into the execution path.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            {["Not Middleware", "Not Monitoring", "Governance As Infrastructure"].map((pill, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-sky-100 bg-white shadow-sm text-sm font-medium text-slate-600">
                                    <FiCheckCircle className="text-sky-500" />
                                    {pill}
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link href="/contact" className="inline-block bg-[#1a1c23] hover:bg-black text-white px-10 py-4 rounded-xl font-semibold shadow-xl transition-all duration-300">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Snapshot Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 p-1 bg-white rounded-[40px] shadow-2xl shadow-sky-200/20 border border-slate-100"
                    >
                        <div className="p-10 bg-slate-50/50 rounded-[38px]">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    Execution Control Snapshot
                                </div>
                            </div>

                            <div className="space-y-12">
                                {/* TODAY */}
                                <div>
                                    <h4 className="text-center font-mono text-[11px] font-bold text-slate-400 tracking-[0.2em] mb-6 uppercase">Today</h4>
                                    <p className="text-center text-sm font-medium text-slate-500 leading-relaxed italic">
                                        &quot;Autonomous agents already move capital, modify systems, and interact with regulated data in production environments.&quot;
                                    </p>
                                </div>

                                <div className="h-px bg-slate-200 w-full" />

                                {/* WITH CINTARA */}
                                <div>
                                    <h4 className="text-center font-mono text-[11px] font-bold text-slate-800 tracking-[0.2em] mb-6 uppercase">With Cintara</h4>
                                    <p className="text-center text-sm font-semibold text-slate-700 leading-relaxed mb-10">
                                        Every action is evaluated, approved when required, and recorded in a cryptographically verifiable audit trail before execution.
                                    </p>

                                    {/* Action Pills */}
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                        <div>
                                            <div className="text-center text-sky-600 font-mono text-[9px] font-bold uppercase tracking-widest mb-4">You Define</div>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {["Boundaries", "Policies", "Approvals"].map((s, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 shadow-sm">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-center text-sky-600 font-mono text-[9px] font-bold uppercase tracking-widest mb-4">Cintara Ensures</div>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                {["Pre-execution enforcement", "Least-privilege access", "Verifiable proof"].map((s, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 shadow-sm">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
