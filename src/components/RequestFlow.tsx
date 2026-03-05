"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        label: "Where Intent Originates",
        title: "Client Layer",
        desc: "Requests originate from users, systems or agents through authenticated interfaces.",
        subDesc: "All API pathways route through the control plane.",
        tags: ["Accessing Enterprise Data", "Executing Workflows", "Triggering Transactions"]
    },
    {
        num: "02",
        label: "Verifying Who Is Acting",
        title: "Identity & Authorization Layer",
        desc: "Identity is cryptographically verified before any action proceeds.",
        subDesc: "Only authenticated and authorized principals may continue.",
        tags: ["Agent Verification", "Role Mapping", "Credential Validation", "Key Checks"]
    },
    {
        num: "03",
        label: "Deterministic Governance",
        title: "Policy Engine",
        desc: "Every request is evaluated against centrally defined policies.",
        subDesc: "Governance is consistent across agents, users, and systems.",
        tags: ["Role-Based Access", "Transaction Thresholds", "Jurisdictional Constraints"]
    },
    {
        num: "04",
        label: "Risk & Parameter Enforcement",
        title: "Validation Layer",
        desc: "Inputs are checked for correctness, scope, and risk.",
        subDesc: "Permitted actions remain bounded.",
        tags: ["Parameter Validation", "Schema Checks", "Risk Evaluation"]
    },
    {
        num: "05",
        label: "Structured Approval Where Required",
        title: "Human-in-the-Loop Control",
        desc: "High-risk or threshold-bound actions require structured approval.",
        subDesc: "Oversight is embedded by design.",
        tags: ["Single/Multi-Party", "Role-Restricted", "Time-Bound"]
    },
    {
        num: "06",
        label: "Controlled and Scoped Action",
        title: "Execution Engine",
        desc: "Approved actions execute within a managed runtime.",
        subDesc: "No direct or unrestricted system access is allowed.",
        tags: ["Scoped Permissions", "Least-Privilege", "Bounded Runtime"]
    },
    {
        num: "07",
        label: "Governed Agent Operation",
        title: "Agent Runtime Environment",
        desc: "Agents operate within enforced boundaries.",
        subDesc: "All interactions route through governed controls.",
        tags: ["Agent State Management", "Enforcement Wrappers", "Controlled Containers"]
    },
    {
        num: "08",
        label: "Secure Integration",
        title: "Tool Integration Layer",
        desc: "External systems are accessed via controlled adapters.",
        subDesc: "Credentials and permissions remain secured.",
        tags: ["CRM", "Cloud Storage", "Databases"]
    },
    {
        num: "09",
        label: "From Logging to Verifiable Proof",
        title: "Persistence & Audit Layer",
        desc: "All decisions and actions are immutably recorded.",
        subDesc: "Every step is attributable and provable.",
        tags: ["Regulatory Compliance", "Forensic Investigation", "Cross-System Verification"]
    },
    {
        num: "10",
        label: "Continuous Visibility",
        title: "Observability & Monitoring",
        desc: "Real-time telemetry provides visibility into activity and enforcement.",
        subDesc: "Governance remains transparent at scale.",
        tags: ["Telemetry", "Async Logging", "Metrics Dashboards", "System Health"]
    }
];

export default function RequestFlow() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                        End-To-End Execution Path
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
                        How a request flows through Cintara
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto text-lg">
                        From first intent to audited outcome, each stage adds identity, policy, validation, and control before anything touches enterprise systems.
                    </p>
                </div>

                {/* 10-Step Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 bg-slate-50/30 p-8 rounded-[48px] border border-slate-100">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex gap-8 group hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="text-5xl font-bold text-slate-100 group-hover:text-sky-50 transition-colors duration-300 select-none">
                                {step.num}
                            </div>

                            <div className="flex-1">
                                <div className="text-sky-600 text-[10px] font-bold uppercase tracking-widest mb-2">
                                    {step.label}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-2 leading-relaxed">
                                    {step.desc}
                                </p>
                                <p className="text-[13px] font-medium text-slate-700 mb-6">
                                    {step.subDesc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 bg-slate-50 rounded-md text-[10px] font-semibold text-slate-500 border border-slate-100 transition-colors group-hover:border-sky-100 group-hover:bg-sky-50 group-hover:text-sky-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
