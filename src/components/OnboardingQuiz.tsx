import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";

import { roleIcons } from "../lib/iconMaps";
import type { RoleProfile, UseCase, WyattFeatureId } from "../types";

type QuizArea = "finance" | "delivery" | "growth" | "people" | "systems";
type QuizMode = "dashboards" | "automation" | "ask-questions" | "connected-data";
type QuizCadence = "daily" | "weekly" | "monthly";

interface OnboardingQuizProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roles: RoleProfile[];
  useCases: UseCase[];
  onChooseRole: (roleId: RoleProfile["id"]) => void;
}

const areaWeights: Record<QuizArea, RoleProfile["id"][]> = {
  finance: ["cfo-finance-leader", "controller", "accounting-staff"],
  delivery: ["project-manager", "operations-leader", "department-leader"],
  growth: ["executive-principal", "marketing-business-development"],
  people: ["hr-talent-recruiting", "pmo-resource-manager"],
  systems: ["it-systems-admin", "operations-leader"]
};

const modeWeights: Record<QuizMode, WyattFeatureId> = {
  dashboards: "roundups",
  automation: "chores",
  "ask-questions": "chats",
  "connected-data": "integrations"
};

const cadenceWeights: Record<QuizCadence, RoleProfile["id"][]> = {
  daily: ["project-manager", "accounting-staff", "junior-staff-general-employee"],
  weekly: ["operations-leader", "department-leader", "pmo-resource-manager"],
  monthly: ["executive-principal", "cfo-finance-leader", "controller"]
};

export function OnboardingQuiz({
  open,
  onOpenChange,
  roles,
  useCases,
  onChooseRole
}: OnboardingQuizProps) {
  const [area, setArea] = useState<QuizArea>("delivery");
  const [mode, setMode] = useState<QuizMode>("dashboards");
  const [cadence, setCadence] = useState<QuizCadence>("daily");

  const recommendation = useMemo(() => {
    const scores = new Map<RoleProfile["id"], number>();

    for (const role of roles) {
      scores.set(role.id, 0);
    }

    for (const roleId of areaWeights[area]) {
      scores.set(roleId, (scores.get(roleId) ?? 0) + 3);
    }

    for (const roleId of cadenceWeights[cadence]) {
      scores.set(roleId, (scores.get(roleId) ?? 0) + 2);
    }

    for (const role of roles) {
      if (role.recommendedFeatureIds.includes(modeWeights[mode])) {
        scores.set(role.id, (scores.get(role.id) ?? 0) + 2);
      }
    }

    const winner = roles
      .slice()
      .sort((left, right) => (scores.get(right.id) ?? 0) - (scores.get(left.id) ?? 0))[0];

    const easiestUseCase = useCases.find(
      (useCase) => useCase.id === winner.startingPoint.easiestUseCaseId
    );

    return {
      role: winner,
      useCase: easiestUseCase
    };
  }, [area, cadence, mode, roles, useCases]);

  const RecommendedIcon = roleIcons[recommendation.role.id];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content dialog-content--quiz">
          <div className="dialog-header">
            <div>
              <div className="eyebrow">Recommended for you</div>
              <Dialog.Title>Quick onboarding quiz</Dialog.Title>
              <Dialog.Description>
                Pick the kind of problem you want Wyatt to solve first.
              </Dialog.Description>
            </div>
            <Dialog.Close className="icon-button" aria-label="Close">
              <X size={16} />
            </Dialog.Close>
          </div>

          <div className="quiz-grid">
            <div className="quiz-column">
              <div className="quiz-question">
                <h3>What matters most right now?</h3>
                <div className="chip-row">
                  {[
                    ["finance", "Finance and margins"],
                    ["delivery", "Projects and delivery"],
                    ["growth", "Growth and pursuits"],
                    ["people", "Staffing and talent"],
                    ["systems", "Systems and admin"]
                  ].map(([value, label]) => (
                    <button
                      className={`feature-chip ${area === value ? "is-active" : ""}`}
                      key={value}
                      onClick={() => setArea(value as QuizArea)}
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quiz-question">
                <h3>How do you prefer to work?</h3>
                <div className="chip-row">
                  {[
                    ["dashboards", "Roundups"],
                    ["automation", "Chores"],
                    ["ask-questions", "Chats"],
                    ["connected-data", "Integrations"]
                  ].map(([value, label]) => (
                    <button
                      className={`feature-chip ${mode === value ? "is-active" : ""}`}
                      key={value}
                      onClick={() => setMode(value as QuizMode)}
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quiz-question">
                <h3>What cadence fits the need?</h3>
                <div className="chip-row">
                  {[
                    ["daily", "Daily"],
                    ["weekly", "Weekly"],
                    ["monthly", "Monthly"]
                  ].map(([value, label]) => (
                    <button
                      className={`feature-chip ${cadence === value ? "is-active" : ""}`}
                      key={value}
                      onClick={() => setCadence(value as QuizCadence)}
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="quiz-result">
              <div className="quiz-result__icon">
                <RecommendedIcon size={24} />
              </div>
              <span className="eyebrow">Recommended role</span>
              <h3>{recommendation.role.title}</h3>
              <p>{recommendation.role.summary}</p>
              <div className="quiz-highlight">
                <Sparkles size={16} />
                <span>
                  Start with: <strong>{recommendation.useCase?.title}</strong>
                </span>
              </div>
              <button
                className="primary-button"
                onClick={() => {
                  onChooseRole(recommendation.role.id);
                  onOpenChange(false);
                }}
                type="button"
              >
                Open recommended role
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
