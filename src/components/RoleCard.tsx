import { motion } from "framer-motion";
import { Plus, ScanSearch } from "lucide-react";

import { roleIcons } from "../lib/iconMaps";
import type { RoleProfile } from "../types";

interface RoleCardProps {
  role: RoleProfile;
  useCaseCount: number;
  isFocused: boolean;
  isCompared: boolean;
  compareDisabled: boolean;
  onFocus: (roleId: RoleProfile["id"]) => void;
  onToggleCompare: (roleId: RoleProfile["id"]) => void;
}

export function RoleCard({
  role,
  useCaseCount,
  isFocused,
  isCompared,
  compareDisabled,
  onFocus,
  onToggleCompare
}: RoleCardProps) {
  const Icon = roleIcons[role.id];

  return (
    <motion.article
      className={`role-card ${isFocused ? "is-focused" : ""}`}
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <button className="role-card__focus" onClick={() => onFocus(role.id)}>
        <div className="role-card__header">
          <div className="role-card__title-wrap">
            <div className="role-card__icon-shell">
              <Icon size={18} />
            </div>
            <div className="role-card__meta">
              <div className="role-card__eyebrow">Role</div>
              <h3>{role.shortTitle}</h3>
            </div>
          </div>
          {isFocused ? <span className="role-card__selected">Selected</span> : null}
        </div>

        <div className="role-card__highlights">
          {role.whatTheyCareAbout.slice(0, 2).map((item) => (
            <span className="role-card__highlight" key={item}>
              {item}
            </span>
          ))}
        </div>
      </button>

      <div className="role-card__footer">
        <div className="role-card__stats">
          <span className="pill pill-subtle">
            <ScanSearch size={14} />
            {useCaseCount} use cases
          </span>
        </div>
        <button
          className={`secondary-action role-card__compare ${isCompared ? "is-active" : ""}`}
          disabled={compareDisabled}
          onClick={() => onToggleCompare(role.id)}
          type="button"
        >
          <Plus size={14} />
          {isCompared ? "Remove" : "Compare"}
        </button>
      </div>
    </motion.article>
  );
}
