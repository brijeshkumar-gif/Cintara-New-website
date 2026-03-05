"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLifeBuoy } from "react-icons/fi";

export default function ContactFormSection() {
    return (
        <section className="pt-32 pb-24 bg-[#f0f9ff]/30 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-[11px] font-bold text-slate-500 mb-6"
                    >
                        Contact Us
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Conversation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Share your current AI deployment context. We will follow up to assess how Cintara can enforce execution control within your environment.
                    </motion.p>
                </div>

                {/* Form Container */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/3 bg-[#0284c7] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl flex flex-col contact-info-shimmer"
                    >
                        {/* Decorative Background Element (Simulating the radial mesh) */}
                        <div className="absolute top-1/2 left-0 w-[150%] h-[150%] -translate-y-1/2 -translate-x-[20%] opacity-20 pointer-events-none">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-3xl rounded-full" />
                            {/* Simple line rays to mimic network */}
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white transform origin-left" style={{ transform: `rotate(${i * 30}deg)` }} />
                            ))}
                        </div>

                        <div className="relative z-10 flex-1">
                            <h2 className="text-4xl font-bold mb-6 leading-tight tracking-tight">
                                Contact<br />Information
                            </h2>
                            <p className="text-white/80 text-[15px] font-medium leading-relaxed mb-12">
                                We work with enterprises deploying AI in high-impact, production environments. Your inquiry will be routed to the appropriate governance and engineering lead.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-8 mt-auto">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-0.5">Sales Inquiries</h4>
                                    <p className="text-white/70 text-sm">Sales@Cintara.AI</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                    <FiLifeBuoy className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-0.5">Technical Support</h4>
                                    <p className="text-white/70 text-sm">Sales@Cintara.AI</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-0.5">Headquarters</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Ashburn, Virginia Located In The Northern Virginia Technology Corridor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:w-2/3 bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Tell Us About Your Deployment</h3>
                            <p className="text-sm text-slate-500 font-medium">
                                The more context you share, the better we can prepare for our first conversation.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 block">Full name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none transition-all text-sm placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 block">Work email</label>
                                    <input
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none transition-all text-sm placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 block">Company</label>
                                <input
                                    type="text"
                                    placeholder="Acme Corp"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none transition-all text-sm placeholder:text-slate-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 block">Current AI agents or workflows</label>
                                <textarea
                                    placeholder="Briefly describe where agents are running today and what they can access."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none transition-all text-sm placeholder:text-slate-400 resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 block">What would you like Cintara to help you govern?</label>
                                <textarea
                                    placeholder="For example: payments, infrastructure changes, data access, or cross-system workflows."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#0ea5e9]/20 focus:border-[#0ea5e9] outline-none transition-all text-sm placeholder:text-slate-400 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1e293b] hover:bg-black text-white font-bold rounded-xl transition-colors mt-4 text-sm shadow-lg shadow-slate-900/10"
                            >
                                Send Message
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
