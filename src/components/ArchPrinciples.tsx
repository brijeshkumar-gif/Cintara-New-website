"use client";

import { motion } from "framer-motion";
import { FiShield, FiFileText, FiKey, FiCheckCircle } from "react-icons/fi";

const principles = [
    {
        num: "01",
        title: "Identity Before Action",
        desc: "No request executes without cryptographic identity verification.",
        icon: <FiShield />
    },
    {
        num: "02",
        title: "Policy Before Execution",
        desc: "All decisions are evaluated against centrally defined, deterministic policies.",
        icon: <FiFileText />
    },
    {
        num: "03",
        title: "Validation Before Permission",
        desc: "Inputs are structurally, contextually, and risk-validated before execution.",
        icon: <FiKey />
    },
    {
        num: "04",
        title: "Verifiable By Design",
        desc: "Every decision, approval, and execution step produces cryptographically verifiable proof.",
        icon: <FiCheckCircle />
    }
];

export default function ArchPrinciples() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-[48px] p-16 border border-sky-200/30 relative overflow-hidden"
                    style={{ background: "linear-gradient(180deg, #F0F9FF 0%, #A5F3FC 60%, #06B6D4 100%)" }}
                >
                    {/* Floating Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 blur-[120px] rounded-full -z-10" />

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">
                            Architectural Principles
                        </h2>
                        <p className="text-slate-500 font-medium">
                            Cintara operates according to four non-negotiable principles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((item, index) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm relative group hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="absolute top-6 right-8 text-[11px] font-bold text-slate-200">
                                    {item.num}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center text-xl mb-8 group-hover:shadow-lg group-hover:shadow-sky-500/25 transition-shadow duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
