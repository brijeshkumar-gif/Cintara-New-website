"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function UseCasesCTA() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-600 mb-8"
                >
                    <span className="font-medium">Ready for Governed Autonomy</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-8"
                >
                    Deploy Autonomy Without Losing Control
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-slate-500 max-w-4xl mx-auto mb-12 leading-relaxed"
                >
                    Autonomy delivers the most value inside enterprise systems. Cintara ensures that value never comes at the expense of governance or accountability.
                </motion.p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    {[
                        "Define clear execution boundaries.",
                        "Enforce policy before execution.",
                        "Prove every action with audit and traceability."
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                            className="flex items-center gap-2 pl-4 pr-6 py-3 rounded-full border border-slate-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
                        >
                            <FiCheckCircle className="text-[#0ea5e9] w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-medium text-slate-600">
                                {text}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link
                        href="/contact"
                        className="inline-block bg-[#1a1c23] hover:bg-black text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
