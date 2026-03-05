"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function AboutCTASection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Extremely subtle background element pointing to footer */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0ea5e9]/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-500 mb-8"
                        >
                            Looking Forward
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
                        >
                            Ready To Govern What<br />Comes Next
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed mb-8"
                        >
                            Autonomy will continue to evolve. Its adoption depends not only on capability, but on control. Cintara ensures enterprises deploy AI confidently and at scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-3 mb-12"
                        >
                            {['Governed Before Execution.', 'Accountable By Design.', 'Production Ready'].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 shadow-sm">
                                    <FiCheckCircle className="w-4 h-4 text-[#0ea5e9]" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1c23] text-white font-bold rounded-[14px] hover:bg-black transition-colors shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Card / Snapshot */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 shadow-2xl shadow-slate-200/50"
                        >
                            {/* Inner Badge */}
                            <div className="inline-flex px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[10px] font-bold text-slate-500 mb-8 shadow-sm">
                                Execution Control Snapshot
                            </div>

                            {/* Terminal-ish header */}
                            <div className="text-center mb-6">
                                <h4 className="font-mono text-slate-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">With Cintara</h4>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed px-4">
                                    Every action undergoes evaluation and approval, then is recorded in a cryptographically provable audit trail before execution, ensuring transparency, accountability, and compliance across all automated operations.
                                </p>
                            </div>

                            <hr className="border-slate-200 border-dashed my-8" />

                            {/* Comparison Columns */}
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center space-y-4">
                                    <h5 className="font-mono text-[#0ea5e9] tracking-[0.1em] text-[11px] font-bold uppercase">You Define</h5>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">Boundaries</span>
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">Policies</span>
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">Approvals</span>
                                    </div>
                                </div>
                                <div className="text-center space-y-4">
                                    <h5 className="font-mono text-[#0ea5e9] tracking-[0.1em] text-[11px] font-bold uppercase">Cintara Ensures</h5>
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">Pre-execution enforcement</span>
                                        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">Least-privilege access</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
