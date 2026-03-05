"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import TiltCard from "./TiltCard";

const advisors = [
    {
        name: "Katherine Tarbox",
        title: "Fund Raise",
        desc: "A Wharton MBA and former award-winning journalist at The New York Times, Katherine is a tech investment banker turned early-stage investor. As Founder & Managing Director of Outside the Box Investments, she provides strategic guidance on fundraising and investor relations for Cintara."
    },
    {
        name: "Ranajoy Sarkar",
        title: "Head of Growth & Strategy Development",
        desc: "Ranajoy, a Wharton MBA, brings expertise in business growth and fundraising. He has successfully raised capital in the healthcare sector and forged strategic partnerships. At Cintara, he advises on scaling and growth strategies."
    },
    {
        name: "Aaron Jacob",
        title: "Regulatory & Compliance Advisor",
        desc: "A Wharton Palmer Scholar with deep fintech and regulatory expertise, Aaron helped lead TaxBit to a $235M raise. He advises Cintara on aligning blockchain solutions with institutional and regulatory standards, ensuring compliance in global markets."
    }
];

export default function AdvisorySection() {
    return (
        <section className="py-24 bg-[#f0f9ff]/50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Intro (Takes up first cell in a 2x2 logical grid, but spans visually) */}
                    <div className="lg:pr-12 pt-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
                        >
                            Meet The Cintara<br />Advisory Board
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed"
                        >
                            Operators, investors, and regulatory experts helping steer Cintara through complex enterprise and public-sector environments.
                        </motion.p>
                    </div>

                    {/* Top Right Card (Katherine) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-full"
                    >
                        <TiltCard className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full" intensity={10}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-[14px] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                    <FiUser className="w-6 h-6 opacity-70" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg">{advisors[0].name}</h4>
                                    <h5 className="text-[#0ea5e9] font-bold text-sm">{advisors[0].title}</h5>
                                </div>
                            </div>
                            <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                                {advisors[0].desc}
                            </p>
                        </TiltCard>
                    </motion.div>
                </div>

                {/* Bottom Row (Ranajoy and Aaron) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {advisors.slice(1).map((advisor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="h-full"
                        >
                            <TiltCard className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full" intensity={10}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-[14px] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                        <FiUser className="w-6 h-6 opacity-70" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg">{advisor.name}</h4>
                                        <h5 className="text-[#0ea5e9] font-bold text-sm">{advisor.title}</h5>
                                    </div>
                                </div>
                                <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                                    {advisor.desc}
                                </p>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
