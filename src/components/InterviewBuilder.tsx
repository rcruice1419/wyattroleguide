import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { ArrowRight, Sparkles } from "lucide-react";

import { featureIcons, roleIcons } from "../lib/iconMaps";
import type { RoleId, RoleProfile, UseCase, WyattFeature, WyattFeatureId } from "../types";

type InterviewGoal =
  | "project-health"
  | "finance-control"
  | "billing-cash"
  | "staffing-capacity"
  | "growth-pipeline"
  | "systems-adoption"
  | "compliance-exceptions";

type InterviewDataFocus =
  | "erp-financials"
  | "projects-staffing"
  | "crm-growth"
  | "people-policy"
  | "systems-admin";

type InterviewCadence = "instant" | "daily" | "weekly" | "monthly" | "close-cycle";

interface InterviewBuilderProps {
  roles: RoleProfile[];
  features: WyattFeature[];
  useCases: UseCase[];
  selectedRoleId: RoleId;
  onRoleChange: (roleId: RoleId) => void;
  onOpenUseCase: (useCase: UseCase) => void;
}

const goalOptions: Array<{
  id: InterviewGoal;
  label: string;
  description: string;
  keywords: string[];
}> = [
  {
    id: "project-health",
    label: "Project health",
    description: "Margin, burn, budget, schedule, and delivery risk.",
    keywords: ["project", "health", "margin", "burn", "budget", "schedule", "risk"]
  },
  {
    id: "finance-control",
    label: "Financial control",
    description: "GL, profitability, variance, close, and financial exceptions.",
    keywords: ["financial", "finance", "gl", "margin", "profit", "variance", "close"]
  },
  {
    id: "billing-cash",
    label: "Billing and cash",
    description: "Billing readiness, WIP, AR, invoices, and collections.",
    keywords: ["billing", "bill", "cash", "wip", "ar", "invoice", "collections"]
  },
  {
    id: "staffing-capacity",
    label: "Staffing and capacity",
    description: "Utilization, resource gaps, hiring demand, and workload.",
    keywords: ["staffing", "capacity", "utilization", "resource", "headcount", "labor"]
  },
  {
    id: "growth-pipeline",
    label: "Growth and pipeline",
    description: "CRM, pursuits, proposals, clients, and market activity.",
    keywords: ["growth", "pipeline", "crm", "pursuit", "proposal", "client", "market"]
  },
  {
    id: "systems-adoption",
    label: "Systems and adoption",
    description: "Integrations, permissions, usage, admin workflow, and rollout.",
    keywords: ["system", "integration", "permission", "usage", "admin", "access", "rollout"]
  },
  {
    id: "compliance-exceptions",
    label: "Exceptions and compliance",
    description: "Policy checks, approvals, timesheets, expenses, and anomalies.",
    keywords: ["policy", "approval", "timesheet", "expense", "exception", "anomaly"]
  }
];

const dataFocusOptions: Array<{
  id: InterviewDataFocus;
  label: string;
  keywords: string[];
}> = [
  {
    id: "erp-financials",
    label: "ERP financials",
    keywords: ["erp", "financial", "gl", "cash", "ar", "wip", "billing"]
  },
  {
    id: "projects-staffing",
    label: "Projects and staffing",
    keywords: ["project", "staffing", "capacity", "labor", "resource", "schedule"]
  },
  {
    id: "crm-growth",
    label: "CRM and growth",
    keywords: ["crm", "pipeline", "proposal", "pursuit", "client", "market"]
  },
  {
    id: "people-policy",
    label: "People and policy",
    keywords: ["people", "hr", "talent", "policy", "approval", "timesheet"]
  },
  {
    id: "systems-admin",
    label: "Systems and admin",
    keywords: ["system", "admin", "integration", "permission", "access", "usage"]
  }
];

const cadenceOptions: Array<{
  id: InterviewCadence;
  label: string;
  keywords: string[];
}> = [
  { id: "instant", label: "Instant answers", keywords: ["chat", "daily", "lookup"] },
  { id: "daily", label: "Daily check", keywords: ["daily", "today", "inbox"] },
  { id: "weekly", label: "Weekly review", keywords: ["weekly", "week", "watchlist"] },
  { id: "monthly", label: "Monthly package", keywords: ["monthly", "month", "board"] },
  { id: "close-cycle", label: "Close / billing cycle", keywords: ["close", "billing", "invoice"] }
];

const recommendationFeatures: WyattFeatureId[] = [
  "chats",
  "chores",
  "roundups",
  "integrations"
];

function searchableText(useCase: UseCase) {
  return [
    useCase.title,
    useCase.shortDescription,
    useCase.businessProblem,
    useCase.examplePrompt,
    useCase.workflow.join(" "),
    useCase.businessValue,
    useCase.measurableOutcome,
    useCase.tags.join(" "),
    useCase.frequency,
    useCase.valueLevel
  ]
    .join(" ")
    .toLowerCase();
}

function scoreKeywordMatches(text: string, keywords: string[], weight: number) {
  return keywords.reduce((score, keyword) => {
    return text.includes(keyword.toLowerCase()) ? score + weight : score;
  }, 0);
}

export function InterviewBuilder({
  roles,
  features,
  useCases,
  selectedRoleId,
  onRoleChange,
  onOpenUseCase
}: InterviewBuilderProps) {
  const [goal, setGoal] = useState<InterviewGoal>("project-health");
  const [dataFocus, setDataFocus] = useState<InterviewDataFocus>("projects-staffing");
  const [cadence, setCadence] = useState<InterviewCadence>("weekly");

  const role = roles.find((item) => item.id === selectedRoleId) ?? roles[0];
  const RoleIcon = roleIcons[role.id];
  const goalOption = goalOptions.find((item) => item.id === goal) ?? goalOptions[0];
  const dataFocusOption =
    dataFocusOptions.find((item) => item.id === dataFocus) ?? dataFocusOptions[0];
  const cadenceOption =
    cadenceOptions.find((item) => item.id === cadence) ?? cadenceOptions[0];

  const featureLookup = useMemo(
    () =>
      Object.fromEntries(features.map((feature) => [feature.id, feature])) as Record<
        WyattFeatureId,
        WyattFeature
      >,
    [features]
  );

  const recommendations = useMemo(() => {
    const roleRecommendedFeatures = new Set(role.recommendedFeatureIds);

    return recommendationFeatures.map((featureId) => {
      const scored = useCases
        .filter((useCase) => useCase.featureId === featureId)
        .map((useCase) => {
          const text = searchableText(useCase);
          let score = useCase.roleId === role.id ? 18 : 0;

          score += scoreKeywordMatches(text, goalOption.keywords, 3);
          score += scoreKeywordMatches(text, dataFocusOption.keywords, 2);
          score += scoreKeywordMatches(text, cadenceOption.keywords, 1.5);

          if (roleRecommendedFeatures.has(useCase.featureId)) {
            score += 2;
          }

          if (useCase.valueLevel === "Strategic") {
            score += 1.5;
          }

          if (useCase.valueLevel === "High") {
            score += 1;
          }

          return { score, useCase };
        })
        .sort((left, right) => right.score - left.score)
        .map((item) => item.useCase);

      return {
        feature: featureLookup[featureId],
        items: scored.slice(0, 2)
      };
    });
  }, [cadenceOption, dataFocusOption, featureLookup, goalOption, role, useCases]);

  return (
    <section className="panel interview-panel">
      <div className="section-heading">
        <div>
          <div className="eyebrow">Wyatt interview</div>
          <h2>Build a starter set from a few answers</h2>
        </div>
        <p>
          Select the role, goal, data focus, and cadence. Wyatt recommends the
          Chats, Chores, Roundups, and Integrations to start with.
        </p>
      </div>

      <div className="interview-grid">
        <div className="interview-questions">
          <div className="interview-question interview-question--role">
            <label htmlFor="interview-role">1. Who is using Wyatt?</label>
            <div className="interview-role-select">
              <RoleIcon size={18} />
              <select
                id="interview-role"
                onChange={(event) => onRoleChange(event.target.value as RoleId)}
                value={role.id}
              >
                {roles.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="interview-question">
            <span>2. What are they trying to accomplish?</span>
            <div className="interview-chip-grid">
              {goalOptions.map((option) => (
                <button
                  className={`interview-chip ${goal === option.id ? "is-active" : ""}`}
                  key={option.id}
                  onClick={() => setGoal(option.id)}
                  type="button"
                >
                  <strong>{option.label}</strong>
                  <small>{option.description}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="interview-question">
            <span>3. What data should Wyatt lean on?</span>
            <div className="chip-row">
              {dataFocusOptions.map((option) => (
                <button
                  className={`feature-chip ${dataFocus === option.id ? "is-active" : ""}`}
                  key={option.id}
                  onClick={() => setDataFocus(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="interview-question">
            <span>4. How often should Wyatt help?</span>
            <div className="chip-row">
              {cadenceOptions.map((option) => (
                <button
                  className={`feature-chip ${cadence === option.id ? "is-active" : ""}`}
                  key={option.id}
                  onClick={() => setCadence(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="interview-results">
          <div className="interview-results__header">
            <div>
              <div className="eyebrow">Recommended starter set</div>
              <h3>{role.shortTitle}: {goalOption.label}</h3>
            </div>
            <div className="interview-results__badge">
              <Sparkles size={15} />
              {recommendations.reduce((total, group) => total + group.items.length, 0)} picks
            </div>
          </div>

          <div className="interview-results__context">
            <span>{dataFocusOption.label}</span>
            <span>{cadenceOption.label}</span>
            <span>Built from current use cases</span>
          </div>

          <div className="recommendation-grid">
            {recommendations.map(({ feature, items }) => {
              const FeatureIcon = featureIcons[feature.id];

              return (
                <section
                  className="recommendation-column recommendation-column--accent"
                  key={feature.id}
                  style={{ "--feature-accent": feature.color } as CSSProperties}
                >
                  <div className="recommendation-column__header">
                    <FeatureIcon size={16} />
                    <div>
                      <span className="eyebrow">{feature.shortTitle}</span>
                      <strong>{feature.title}</strong>
                    </div>
                  </div>

                  <div className="recommendation-list">
                    {items.map((useCase) => (
                      <button
                        className="recommendation-card"
                        key={useCase.id}
                        onClick={() => onOpenUseCase(useCase)}
                        type="button"
                      >
                        <span className="recommendation-card__title">
                          {useCase.title}
                        </span>
                        <span className="recommendation-card__prompt">
                          {useCase.examplePrompt}
                        </span>
                        <span className="recommendation-card__meta">
                          {useCase.frequency} / {useCase.valueLevel} value
                          <ArrowRight size={13} />
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
