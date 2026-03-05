"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiFlag, FiMapPin, FiHash, FiShield, FiLayers } from "react-icons/fi";
import { BsMenuButtonWide } from "react-icons/bs";

export default function ReadinessSection() {
    return (
        <section className="py-24 bg-[#f0f9ff]/50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight"
                    >
                        Enterprise & Government Readiness
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 font-medium"
                    >
                        Cintara Inc. is structured for enterprise and public sector environments.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Corporate Identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white shadow-md">
                                <BsMenuButtonWide className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Corporate Identity</h3>
                        </div>

                        <div className="space-y-0 text-sm">
                            {/* Row 1 */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-slate-100 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium">
                                    <FiBriefcase className="w-4 h-4 text-sky-400" />
                                    <span>Entity Type</span>
                                </div>
                                <div className="font-bold text-slate-800">Delaware C Corporation</div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-slate-100 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium">
                                    <FiFlag className="w-4 h-4 text-sky-400" />
                                    <span>Jurisdiction</span>
                                </div>
                                <div className="font-bold text-slate-800">United States</div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium whitespace-nowrap">
                                    <FiMapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                    <span>Registered Address</span>
                                </div>
                                <div className="font-bold text-slate-800 sm:text-right">
                                    42638 Stratford Landing Dr Ashburn, VA 20148
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Procurement Identifiers */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white shadow-md">
                                <FiShield className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Procurement Identifiers</h3>
                        </div>

                        <div className="space-y-0 text-sm">
                            {/* Row 1 */}
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between py-5 border-b border-slate-100 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium">
                                    <FiHash className="w-4 h-4 text-sky-400" />
                                    <span>Unique Entity Identifier (UEI)</span>
                                </div>
                                <div className="font-bold text-slate-800">EAT5ZH6K4PX3</div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between py-5 border-b border-slate-100 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium">
                                    <span className="text-sky-400 font-bold opacity-80 tracking-widest text-[10px]">|||||</span>
                                    <span>Commercial and Government Entity (CAGE)</span>
                                </div>
                                <div className="font-bold text-slate-800">[Insert CAGE Code]</div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between py-5 gap-2">
                                <div className="flex items-center gap-3 text-slate-500 font-medium">
                                    <FiLayers className="w-4 h-4 text-sky-400" />
                                    <span>Primary NAICS</span>
                                </div>
                                <div className="font-bold text-slate-800 xl:text-right">
                                    541512 Computer Systems Design Services
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
