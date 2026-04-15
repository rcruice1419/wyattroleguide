import { motion } from "framer-motion";

import { roleIcons } from "../lib/iconMaps";
import type { RoleProfile } from "../types";

interface RoleCardProps {
  role: RoleProfile;
  useCaseCount: number;
  featureCounts: Array<{ label: string; count: number }>;
  isFocused: boolean;
  onFocus: (roleId: RoleProfile["id"]) => void;
  onPreview: (roleId: RoleProfile["id"] | null) => void;
}

export function RoleCard({
  role,
  useCaseCount,
  featureCounts,
  isFocused,
  onFocus,
  onPreview
}: RoleCardProps) {
  const Icon = roleIcons[role.id];

  return (
    <motion.article
      className={`role-card ${isFocused ? "is-focused" : ""}`}
      layout
      onHoverEnd={() => onPreview(null)}
      onHoverStart={() => onPreview(role.id)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <button
        className="role-card__focus"
        onBlur={() => onPreview(null)}
        onClick={() => onFocus(role.id)}
        onFocus={() => onPreview(role.id)}
      >
        <div className="role-card__header">
          <div className="role-card__title-wrap">
            <div className="role-card__icon-shell">
              <Icon size={16} />
            </div>
            <div className="role-card__meta">
              <h3>{role.shortTitle}</h3>
              <span>{useCaseCount} use cases</span>
            </div>
          </div>
        </div>

        <div className="role-card__feature-snapshot">
          {featureCounts.slice(0, 4).map((item) => (
            <span className="role-card__feature-pill" key={item.label}>
              {item.label}
              <strong>{item.count}</strong>
            </span>
          ))}
        </div>
      </button>
    </motion.article>
  );
}
