"use client";

import { motion } from "framer-motion";
import {
    FiUser, FiLayout, FiDatabase, FiKey, FiLock,
    FiTarget, FiShield, FiCheck, FiSettings,
    FiSearch, FiAlertTriangle, FiZap, FiActivity,
    FiBox, FiCpu, FiServer, FiShare2, FiLayers, FiArchive
} from "react-icons/fi";

export default function ControlPlaneArch() {
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                        System Architecture
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight">
                        Control Plane Architecture
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A layered control plane that evaluates every agent intent before it reaches tools, data, or infrastructure.
                    </p>
                </div>

                {/* Main Architecture Diagram Container */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-x-12 gap-y-16 relative">

                        {/* 1. Client Layer & Registry */}
                        <div className="space-y-12">
                            {/* Client Layer Tier */}
                            <div className="bg-sky-50/50 rounded-2xl p-6 border border-sky-100/50">
                                <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Client Layer</h4>
                                <div className="space-y-4">
                                    <ArchItem icon={<FiUser />} title="Principal" desc="Human or system actor" />
                                    <ArchItem icon={<FiLayout />} title="Interfaces" desc="Applications, portals, automation clients" />
                                </div>
                            </div>

                            {/* Registry & Identity Tier */}
                            <div className="bg-sky-50/50 rounded-2xl p-6 border border-sky-100/50">
                                <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Registry & Identity</h4>
                                <div className="space-y-4">
                                    <ArchItem icon={<FiShare2 />} title="Identity Registry" desc="Agents and principals" />
                                    <ArchItem icon={<FiKey />} title="Key Management" desc="Key lifecycle and rotation" />
                                    <ArchItem icon={<FiLock />} title="Credential Store" desc="Secrets and access tokens" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Cintara Control Plane (Center Hub) */}
                        <div className="relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-widest z-10">
                                Cintara Control Plane
                            </div>
                            <div className="bg-white rounded-2xl p-8 pt-10 border-2 border-sky-400/20 shadow-xl space-y-10">

                                {/* Intent & Authorization */}
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-900 mb-4">Intent & Authorization</h4>
                                    <div className="space-y-3">
                                        <ArchItemSmall icon={<FiTarget />} title="Intent Classification" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiShield />} title="Identity Verification" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiCheck />} title="Permission Enforcement" color="text-sky-500" bgColor="bg-sky-50" />
                                    </div>
                                </div>

                                {/* Policy Engine */}
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-900 mb-4">Policy Engine</h4>
                                    <div className="space-y-3">
                                        <ArchItemSmall icon={<FiLayers />} title="Policy Definition" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiShield />} title="Policy Evaluation" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiSettings />} title="Tool and Action Constraints" color="text-sky-500" bgColor="bg-sky-50" />
                                    </div>
                                </div>

                                {/* Validation */}
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-900 mb-4">Validation</h4>
                                    <div className="space-y-3">
                                        <ArchItemSmall icon={<FiSearch />} title="Parameter Validation" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiBox />} title="Schema Enforcement" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiAlertTriangle />} title="Risk Assessment" color="text-sky-500" bgColor="bg-sky-50" />
                                    </div>
                                </div>

                                {/* Execution & Control */}
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-900 mb-4">Execution & Control</h4>
                                    <div className="space-y-3">
                                        <ArchItemSmall icon={<FiCpu />} title="Controlled Execution" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiShare2 />} title="Transaction Orchestration" color="text-sky-500" bgColor="bg-sky-50" />
                                        <ArchItemSmall icon={<FiArchive />} title="Execution Receipt" color="text-sky-500" bgColor="bg-sky-50" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 3. Controlled Runtime & Integration */}
                        <div className="space-y-12 text-center lg:text-left">

                            {/* Runtime Environment */}
                            <div className="bg-sky-50/50 rounded-2xl p-6 border border-sky-100/50">
                                <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Controlled Runtime Environment</h4>
                                <div className="space-y-4">
                                    <ArchItem icon={<FiBox />} title="Managed Runtime" desc="Isolated containers" />
                                    <ArchItem icon={<FiShield />} title="Policy Enforcement Layer" desc="Applies DecisionToken" />
                                    <ArchItem icon={<FiActivity />} title="Execution State Manager" desc="Context & session state" />
                                </div>
                            </div>

                            {/* Tool Integration */}
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Tool Integration Layer</h4>
                                    <div className="space-y-4">
                                        <ArchItem icon={<FiCpu />} title="Standardized Tool Adapters" />
                                        <ArchItem icon={<FiShare2 />} title="Credential Mediation" />
                                    </div>
                                </div>

                                {/* External Systems */}
                                <div>
                                    <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">External Systems</h4>
                                    <div className="space-y-3">
                                        <ArchItemFlat icon={<FiZap />} title="Enterprise Saas" />
                                        <ArchItemFlat icon={<FiBox />} title="Cloud Storage" />
                                        <ArchItemFlat icon={<FiShare2 />} title="Internal APIs" />
                                        <ArchItemFlat icon={<FiDatabase />} title="Databases" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Tier Infrastructure (Horizontal) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-slate-100 pt-12">
                        <div className="text-center">
                            <h5 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mb-6">Primary Databases</h5>
                            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <FiDatabase className="text-slate-700 text-lg" />
                                    <span className="font-semibold text-slate-900 text-sm">Data Stores</span>
                                </div>
                                <p className="text-[10px] text-slate-400">Agent Registry · Policy Store · Audit Records</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <h5 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mb-6">Ledger & Cache</h5>
                            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <FiShare2 className="text-slate-700 text-lg" />
                                    <span className="font-semibold text-slate-900 text-sm">Execution Ledger</span>
                                </div>
                                <p className="text-[10px] text-slate-400">Signed Ledger · Receipt Store</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <h5 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest mb-6">Observability</h5>
                            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <FiActivity className="text-slate-700 text-lg" />
                                    <span className="font-semibold text-slate-900 text-sm">Observability</span>
                                </div>
                                <p className="text-[10px] text-slate-400">Telemetry · Decision Logs · Metrics</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final 3-Card Summary Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            id: "client-intent",
                            icon: <FiTarget />,
                            title: "Client & Intent",
                            desc: "Requests enter through authenticated interfaces and are classified before execution.",
                            border: "border-sky-400"
                        },
                        {
                            id: "control-plane-core",
                            icon: <FiLayers />,
                            title: "Control Plane Core",
                            desc: "Policy, validation, and execution engines enforce governance and produce signed receipts.",
                            border: "border-sky-500"
                        },
                        {
                            id: "external-systems",
                            icon: <FiServer />,
                            title: "External Systems",
                            desc: "Approved actions execute against enterprise SaaS, databases, and internal APIs under full traceability.",
                            border: "border-sky-600"
                        }
                    ].map((card, i) => (
                        <div key={i} className={`bg-sky-50/30 rounded-2xl p-8 border-l-4 ${card.border} shadow-sm`}>
                            <div className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center text-xl mb-6 shadow-lg shadow-sky-500/20">
                                {card.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function ArchItem({ icon, title, desc }: { icon: any, title: string, desc?: string }) {
    return (
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="text-slate-700 mb-2">{icon}</div>
            <h5 className="text-[11px] font-bold text-slate-900 mb-1">{title}</h5>
            {desc && <p className="text-[9px] text-slate-400">{desc}</p>}
        </div>
    );
}

function ArchItemSmall({ icon, title, color, bgColor }: { icon: any, title: string, color: string, bgColor: string }) {
    return (
        <div className={`p-3 rounded-lg border border-slate-50 ${bgColor} flex items-center gap-3 transition-transform cursor-default hover:scale-[1.02] shadow-sm`}>
            <div className={`${color} text-sm`}>{icon}</div>
            <span className="text-[10px] font-bold text-slate-700">{title}</span>
        </div>
    );
}

function ArchItemFlat({ icon, title }: { icon: any, title: string }) {
    return (
        <div className="bg-white rounded-lg p-3 border border-slate-100 shadow-sm flex items-center gap-3 flex-1">
            <div className="text-slate-700 text-sm">{icon}</div>
            <span className="text-[10px] font-bold text-slate-800">{title}</span>
        </div>
    );
}
