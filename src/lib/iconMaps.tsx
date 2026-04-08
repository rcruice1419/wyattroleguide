import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BarChart3,
  BookUser,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  FlaskConical,
  FolderKanban,
  Handshake,
  LayoutDashboard,
  MessagesSquare,
  Network,
  PlugZap,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

import type { RoleId, WyattFeatureId } from "../types";

export const roleIcons: Record<RoleId, LucideIcon> = {
  "executive-principal": Building2,
  "cfo-finance-leader": BadgeDollarSign,
  controller: ReceiptText,
  "project-manager": FolderKanban,
  "operations-leader": BarChart3,
  "marketing-business-development": Handshake,
  "accounting-staff": ClipboardList,
  "hr-talent-recruiting": UsersRound,
  "it-systems-admin": ShieldCheck,
  "department-leader": BriefcaseBusiness,
  "pmo-resource-manager": Network,
  "junior-staff-general-employee": BookUser
};

export const featureIcons: Record<WyattFeatureId, LucideIcon> = {
  roundups: LayoutDashboard,
  chores: ClipboardList,
  chats: MessagesSquare,
  integrations: PlugZap,
  labs: FlaskConical
};

export const sparkIcon = Sparkles;
