"use client";

import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CallToActionSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="contact">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6"
                >
                    Deploy Autonomous AI Without Losing Control
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto"
                >
                    Bring AI systems under pre-execution governance with policy, identity, and signed audit proof.
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                        className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm transition-shadow duration-300 cursor-default"
                    >
                        <FiCheckCircle className="text-[#0ea5e9] w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-600">
                            Pre-execution governance across agents, models, and environments.
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                        className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm transition-shadow duration-300 cursor-default"
                    >
                        <FiCheckCircle className="text-[#0ea5e9] w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-600">
                            Built for CTOs, CISOs, and AI governance leaders in regulated enterprises.
                        </span>
                    </motion.div>
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#1a1c23] hover:bg-black text-white font-medium py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                    Contact Us
                </motion.button>
            </div>
        </section>
    );
}
