"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import TiltCard from "./TiltCard";

const team = [
    {
        name: "Subodh Shetty",
        title: "Chief Technology Officer",
        desc: "With more than 25 years in distributed computing and blockchain architecture, Subodh has led large-scale AI infrastructure projects at Amazon and beyond. At Cintara, he is responsible for designing and delivering the technical architecture that powers the agentic internet."
    },
    {
        name: "Minhaj Arifin",
        title: "Chief Operating Officer",
        desc: "A serial entrepreneur and author in the Web3 space, Minhaj has co-founded startups across both AI and blockchain sectors. At Cintara, he oversees operations and execution, ensuring seamless coordination across teams while driving efficient processes and scalable organizational growth."
    },
    {
        name: "Greg Adams",
        title: "Chief Commercial Officer",
        desc: "With 25 years of expertise in global go-to-market strategy, platform monetization, and execution, Greg has led commercial expansion across technology companies. At Cintara, he drives adoption, partnerships, and revenue growth by aligning product innovation closely with evolving customer needs."
    },
    {
        name: "Rohit Kumar",
        title: "Head of AI & Research",
        desc: "Holding a Ph.D. in AI from Carnegie Mellon University, Rohit brings over two decades of experience in AI product development and leadership roles. At Cintara, he leads research into advanced agentic AI models and their integration with blockchain-powered enterprise systems."
    },
    {
        name: "Venkata RM Gongala",
        title: "Growth & Strategy Advisor",
        desc: "A seasoned executive and strategy advisor, he has led organizations as CEO across software, manufacturing, and construction sectors. At Cintara, he provides strategic guidance on growth, leadership alignment, and operational excellence to accelerate enterprise adoption of agentic technologies."
    }
];

export default function LeadershipSection() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Meet The Cintara Leadership Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium"
                    >
                        Cintara is built by leaders across AI research, large-scale infrastructure, web3, enterprise architecture, and go-to-market. Together they architect the trust and control layer for agentic AI.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <TiltCard className="bg-white rounded-[24px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden h-full" intensity={8}>
                                {/* Image Placeholder */}
                                <div className="aspect-[4/3] w-full bg-gradient-to-b from-[#0ea5e9] to-[#0284c7] relative flex items-center justify-center p-6">
                                    <div className="absolute inset-0 bg-white/5" />
                                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <FiUser className="w-10 h-10 text-white/50" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1">{member.name}</h4>
                                    <h5 className="text-[13px] font-bold text-[#0ea5e9] mb-4">{member.title}</h5>
                                    <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                                        {member.desc}
                                    </p>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
