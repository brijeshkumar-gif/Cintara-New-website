"use client";

import React from "react";
import { FiAlertCircle, FiShield, FiCheckCircle } from "react-icons/fi";

interface ScenarioPoint {
  text: string;
}

interface Scenario {
  id: string;
  badge: string;
  title: string;
  description: string;
  withoutGovernance: {
    title: string;
    description: string;
    points: ScenarioPoint[];
  };
  withGovernance: {
    title: string;
    description: string;
    points: ScenarioPoint[];
  };
  outcome: {
    text: string;
    status: string;
    icon: React.ReactNode;
  };
}

const scenarios: Scenario[] = [
  {
    id: "01",
    badge: "Scenario 01",
    title: "Financial Operations & Transaction Automation",
    description: "When AI can move Money, Risk moves with it",
    withoutGovernance: {
      title: "WITHOUT GOVERNANCE",
      description: "Over-permissioned access to regulated data.",
      points: [
        { text: "High-value transactions execute without structured review." },
        { text: "Policy violations surface after exposure." },
        { text: "Fraud detection becomes reactive rather than preventative." },
      ],
    },
    withGovernance: {
      title: "HOW CINTARA GOVERNS IT",
      description: "Cintara enforces transaction thresholds, role-based permissions, and approvals before execution:",
      points: [
        { text: "High-value actions require defined, multi-party authorization." },
        { text: "Financial access is scoped by role and policy." },
        { text: "Every approval and execution is cryptographically verifiable." },
      ],
    },
    outcome: {
      text: "Financial automation scales without expanding audit or fraud risk.",
      status: "Finance Controls Intact",
      icon: <FiShield />,
    },
  },
  {
    id: "02",
    badge: "Scenario 02",
    title: "Regulated Data Access (Healthcare, Insurance, Legal)",
    description: "When AI touches sensitive records, over-permissioned agents turn every misstep into a compliance and privacy risk.",
    withoutGovernance: {
      title: "WITHOUT CONTROLS",
      description: "Over-permissioned access to regulated data.",
      points: [
        { text: "Over-permissioned agents access sensitive data beyond their scope." },
        { text: "Data access lacks demonstrable, auditable proof." },
        { text: "Regulatory violations become systemic compliance risk." },
      ],
    },
    withGovernance: {
      title: "HOW CINTARA ENFORCES IT",
      description: "Role-based, context-aware controls at execution time.",
      points: [
        { text: "Access is validated before retrieval based on role and context." },
        { text: "Jurisdictional and geographic constraints are enforced automatically." },
        { text: "Every data interaction is recorded with cryptographic proof." },
      ],
    },
    outcome: {
      text: "Autonomous workflows operate within enforceable regulatory boundaries.",
      status: "Audit Ready",
      icon: <FiCheckCircle />,
    },
  },
  {
    id: "03",
    badge: "Scenario 03",
    title: "IT & Infrastructure Automation",
    description: "When agents modify production systems, a single misconfigured change can expand your blast radius.",
    withoutGovernance: {
      title: "WITHOUT GOVERNANCE",
      description: "Direct, ungoverned access to production environments.",
      points: [
        { text: "Configuration changes bypass oversight and formal change control." },
        { text: "Privilege escalation occurs without visibility." },
        { text: "Incident investigations lack clarity and traceability." },
      ],
    },
    withGovernance: {
      title: "HOW CINTARA GOVERNS IT",
      description: "Least privilege automation with bounded runtime execution.",
      points: [
        { text: "Production modifications require explicit authorization under policy." },
        { text: "Runtime actions are bounded, monitored, and validated against policy." },
        { text: "Every execution is traceable for audit and incident review." },
      ],
    },
    outcome: {
      text: "Infrastructure automation scales without expanding operational blast radius.",
      status: "Stable Ops",
      icon: <FiShield />,
    },
  },
  {
    id: "04",
    badge: "Scenario 04",
    title: "Cross-System Workflow Orchestration",
    description: "When AI coordinates CRM, ERP, HR, and internal tools, fragmented policy breaks end to end governance.",
    withoutGovernance: {
      title: "WITHOUT GOVERNANCE",
      description: "Policies and privileges scattered across tools.",
      points: [
        { text: "Policy enforcement fragments as workflows span systems." },
        { text: "Privilege boundaries blur and expand across systems." },
        { text: "Audit records become inconsistent and difficult to reconstruct." },
      ],
    },
    withGovernance: {
      title: "HOW CINTARA GOVERNS IT",
      description: "One policy plane across every agent and system.",
      points: [
        { text: "A centralized policy layer governs every orchestration step." },
        { text: "Execution pathways remain consistent across systems." },
        { text: "A unified audit trail spans every system in the workflow." },
      ],
    },
    outcome: {
      text: "Enterprises scale orchestration without losing visibility or control.",
      status: "Unified Control",
      icon: <FiCheckCircle />,
    },
  },
  {
    id: "05",
    badge: "Scenario 05",
    title: "Multi-Agent Ecosystems",
    description: "As finance, operations, compliance, and IT agents collaborate, accountability and risk compound across every automated handoff.",
    withoutGovernance: {
      title: "WITHOUT GOVERNANCE",
      description: "Chained agents, unclear responsibility.",
      points: [
        { text: "Accountability across agents becomes unclear." },
        { text: "Automated chains silently compound risk." },
        { text: "Governance varies across teams and agent domains." },
      ],
    },
    withGovernance: {
      title: "HOW CINTARA GOVERNS IT",
      description: "Identity, policy, and proof across every agent.",
      points: [
        { text: "Each agent action is assigned verified identity and attribution." },
        { text: "Policy is enforced consistently across agents and domains." },
        { text: "Every workflow is fully traceable across agents and steps." },
      ],
    },
    outcome: {
      text: "Coordinated autonomy scales within defined responsibility boundaries.",
      status: "Governed Collaboration",
      icon: <FiShield />,
    },
  },
];

const ScenariosSection = () => {
  return (
    <section className="scenarios-section">
      <div className="scenarios-header">
        <span className="scenarios-label">High-Impact Enterprise Scenarios</span>
        <h2 className="scenarios-headline">Where Autonomous AI Must Be Governed?</h2>
        <p className="scenarios-subheadline">
          Four high-stakes scenarios where Cintara turns unconstrained agent risk into governed, provable autonomy.
        </p>
      </div>

      <div className="scenarios-container">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="scenario-card">
            <div className="scenario-card-header">
              <span className="scenario-badge">{scenario.badge}</span>
              <h3 className="scenario-title">{scenario.title}</h3>
              <p className="scenario-desc">{scenario.description}</p>
            </div>

            <div className="scenario-comparison">
              {/* Without Governance */}
              <div className="comparison-box comparison-box--red">
                <div className="comparison-header">
                  <h4 className="comparison-title">{scenario.withoutGovernance.title}</h4>
                  <p className="comparison-desc">{scenario.withoutGovernance.description}</p>
                </div>
                <ul className="comparison-points">
                  {scenario.withoutGovernance.points.map((point, idx) => (
                    <li key={idx} className="comparison-point">
                      <FiAlertCircle className="point-icon text-red-500" />
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Governance */}
              <div className="comparison-box comparison-box--blue">
                <div className="comparison-header">
                  <h4 className="comparison-title">{scenario.withGovernance.title}</h4>
                  <p className="comparison-desc">{scenario.withGovernance.description}</p>
                </div>
                <ul className="comparison-points">
                  {scenario.withGovernance.points.map((point, idx) => (
                    <li key={idx} className="comparison-point">
                      <div className="point-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="point-icon text-blue-500">
                          <path d="M12 2L3 7v9c0 5 9 7 9 7s9-2 9-7V7l-9-5z" />
                        </svg>
                      </div>
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="scenario-outcome">
              <div className="outcome-content">
                <span className="outcome-label">OUTCOME</span>
                <p className="outcome-text">{scenario.outcome.text}</p>
              </div>
              <div className="outcome-pill">
                <span className="outcome-icon">{scenario.outcome.icon}</span>
                <span className="outcome-status">{scenario.outcome.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scenarios-section {
          padding: 100px 40px;
          background: #f0f9ff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .scenarios-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
        }

        .scenarios-label {
          display: inline-block;
          padding: 6px 16px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          color: #666;
          margin-bottom: 24px;
        }

        .scenarios-headline {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .scenarios-subheadline {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
        }

        .scenarios-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .scenario-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .scenario-card-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .scenario-badge {
          display: inline-block;
          align-self: flex-start;
          padding: 4px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .scenario-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .scenario-desc {
          font-size: 15px;
          color: #666;
        }

        .scenario-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .comparison-box {
          padding: 24px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .comparison-box--red {
          background: #fffafa;
          border: 1px solid #fee2e2;
        }

        .comparison-box--blue {
          background: #f0f9ff;
          border: 1px solid #e0f2fe;
        }

        .comparison-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .comparison-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .comparison-box--red .comparison-title {
          color: #ef4444;
        }

        .comparison-box--blue .comparison-title {
          color: #0ea5e9;
        }

        .comparison-desc {
          font-size: 14px;
          color: #666;
        }

        .comparison-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .comparison-point {
          background: #ffffff;
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: #333;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease;
        }

        .comparison-point:hover {
          transform: translateX(4px);
        }

        .point-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .point-icon-wrapper {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .scenario-outcome {
          margin-top: 8px;
          padding: 16px 24px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .outcome-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .outcome-label {
          font-size: 11px;
          font-weight: 700;
          color: #0ea5e9;
          letter-spacing: 0.05em;
        }

        .outcome-text {
          font-size: 14px;
          color: #1e3a8a;
          font-weight: 500;
        }

        .outcome-pill {
          background: #0ea5e9;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .outcome-icon {
          display: flex;
          align-items: center;
          font-size: 14px;
        }

        .outcome-status {
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .scenario-comparison {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .scenarios-section {
            padding: 60px 20px;
          }

          .scenarios-headline {
            font-size: 32px;
          }

          .scenario-card {
            padding: 24px;
          }

          .scenario-outcome {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .outcome-pill {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ScenariosSection;
