export type WyattFeatureId =
  | "roundups"
  | "chores"
  | "chats"
  | "integrations"
  | "labs";

export type RoleId =
  | "executive-principal"
  | "cfo-finance-leader"
  | "controller"
  | "project-manager"
  | "operations-leader"
  | "marketing-business-development"
  | "accounting-staff"
  | "hr-talent-recruiting"
  | "it-systems-admin"
  | "department-leader"
  | "pmo-resource-manager"
  | "junior-staff-general-employee";

export type DifficultyLevel = "Easy" | "Moderate" | "Advanced";
export type ValueLevel = "Core" | "High" | "Strategic";

export interface WyattFeature {
  id: WyattFeatureId;
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
  color: string;
}

export interface StartingPoint {
  easiestUseCaseId: string;
  highestValueUseCaseId: string;
  dailyHabit: string;
}

export interface RoleProfile {
  id: RoleId;
  title: string;
  shortTitle: string;
  summary: string;
  whatTheyCareAbout: string[];
  priorities: string[];
  recommendedFeatureIds: WyattFeatureId[];
  compareHighlights: string[];
  startingPoint: StartingPoint;
}

export interface UseCase {
  id: string;
  title: string;
  roleId: RoleId;
  featureId: WyattFeatureId;
  shortDescription: string;
  businessProblem: string;
  examplePrompt: string;
  workflow: string[];
  frequency: string;
  difficulty: DifficultyLevel;
  valueLevel: ValueLevel;
  measurableOutcome: string;
  businessValue: string;
  tags: string[];
}
