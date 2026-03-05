"use client";

import { motion } from "framer-motion";

export default function ShiftSection() {
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-xl shadow-sky-900/5 flex flex-col lg:flex-row items-center gap-16"
                >

                    {/* Left: Comparison Card */}
                    <div className="w-full lg:w-[540px] flex-shrink-0">
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
                            {/* Card Header with Gradient */}
                            <div className="bg-gradient-to-r from-sky-500 to-sky-300 p-8 flex justify-between items-center text-white">
                                <h4 className="font-bold uppercase tracking-widest text-sm">The Shift We Saw</h4>
                                <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider border border-white/30">
                                    From after-the-fact → in-path control
                                </div>
                            </div>

                            {/* Comparison Columns */}
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* BEFORE */}
                                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Before Cintara</h5>
                                    <p className="text-sm font-bold text-slate-900 mb-4 leading-tight">
                                        Governance watched what had already happened.
                                    </p>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                        Controls lived at the edge of systems triggering alerts and reviews only after actions landed in production.
                                    </p>
                                </div>

                                {/* CINTARA'S MODEL */}
                                <div className="bg-white rounded-2xl p-6 border-2 border-sky-400 shadow-md">
                                    <h5 className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-4">Cintara&apos;s Model</h5>
                                    <p className="text-sm font-bold text-slate-900 mb-4 leading-tight">
                                        Governance is embedded at the moment of execution.
                                    </p>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                        Policy enforcement, identity validation, and audit proof all sit in-path before an action can touch critical systems.
                                    </p>
                                </div>
                            </div>

                            {/* Result Banner */}
                            <div className="px-8 pb-10 pt-4 border-t border-dashed border-slate-200 text-center">
                                <p className="text-[11px] font-bold text-slate-600 leading-relaxed max-w-sm mx-auto">
                                    <span className="text-slate-900">Result:</span> Autonomous AI remains powerful, but every decision is governed and provable by design.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Area */}
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                            Why Cintara Was Created
                        </div>

                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            From Reactive Monitoring to Pre-Execution Governance
                        </h2>

                        <div className="space-y-6">
                            <p className="text-base font-medium text-slate-500 leading-relaxed">
                                Cintara was created after years of building and deploying AI systems inside enterprise environments. Across industries, one pattern was consistent: governance frameworks were designed to monitor after execution, not enforce before it.
                            </p>
                            <p className="text-base font-medium text-slate-500 leading-relaxed">
                                Autonomous systems were becoming more capable, but the infrastructure around them remained reactive.
                            </p>
                            <p className="text-base font-medium text-slate-500 leading-relaxed">
                                Cintara was built to reverse that model by embedding policy enforcement, identity validation, and audit proof directly into the execution path.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
