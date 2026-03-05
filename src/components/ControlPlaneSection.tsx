"use client";

import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { LuFingerprint, LuFileCheck } from "react-icons/lu";

export default function ControlPlaneSection() {
    return (
        <section className="py-24 bg-[#f0f9ff]/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        The Governance Control Plane
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Cintara sits between AI agents and enterprise systems as an execution control layer, determining what may run before anything reaches production.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Identity & Role Validation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-sky-900/5 flex flex-col"
                    >
                        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white mb-6">
                            <LuFingerprint className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Identity & Role Validation</h4>
                        <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                            Every action is tied to a verified identity and role. Autonomy is never anonymous.
                        </p>

                        <div className="mt-auto space-y-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400">
                                Who is acting
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Agent intent</span>
                                <p className="text-[11px] font-semibold text-slate-700 italic leading-tight">
                                    &quot;Update policy for region EU-West only.&quot;
                                </p>
                            </div>
                            <div className="bg-[#0299d8] rounded-xl p-4 text-white">
                                <h5 className="text-[10px] font-bold uppercase tracking-widest mb-1">Cintara Check</h5>
                                <p className="text-[11px] font-medium opacity-90">Identity verified. Scope applied.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Policy Evaluation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-sky-900/5 flex flex-col"
                    >
                        <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-white mb-6">
                            <FiFileText className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Policy Evaluation</h4>
                        <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                            Intent is evaluated against centralized policy before execution.
                        </p>

                        <div className="mt-auto space-y-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400">
                                What is allowed
                            </div>
                            <ul className="space-y-3 pt-2">
                                {['Thresholds', 'Jurisdictions', 'Approvals'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                                        <span className="text-xs font-bold text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 3: Scoped Access & Audit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-sky-900/5 flex flex-col"
                    >
                        <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white mb-6">
                            <LuFileCheck className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">Scoped Access & Audit</h4>
                        <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                            Execution is bounded to authorized systems and recorded with verifiable audit proof.
                        </p>

                        <div className="mt-auto space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400">
                                Where it runs & how it&apos;s proven
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest block">Systems</span>
                                    <div className="px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 text-[9px] font-bold text-slate-600 text-center">ERP-Finance</div>
                                    <div className="px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 text-[9px] font-bold text-slate-600 text-center">Billing API</div>
                                </div>
                                <div className="space-y-3 text-right">
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest block text-right">Status</span>
                                    <div className="px-3 py-1.5 bg-[#10b981] rounded-full text-[8.5px] font-bold text-white text-center">Approved & executed</div>
                                    <div className="px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 text-[9px] font-bold text-slate-400 text-center">Proof attached</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
