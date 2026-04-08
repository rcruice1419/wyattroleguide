import type { CSSProperties } from "react";

import { featureIcons, roleIcons } from "../lib/iconMaps";
import type { RoleProfile, UseCase, WyattFeature } from "../types";

interface ComparisonPanelProps {
  roles: RoleProfile[];
  featureLookup: Record<string, WyattFeature>;
  useCaseLookup: Record<string, UseCase | undefined>;
}

export function ComparisonPanel({
  roles,
  featureLookup,
  useCaseLookup
}: ComparisonPanelProps) {
  if (roles.length < 2) {
    return null;
  }

  return (
    <section className="panel comparison-panel">
      <div className="comparison-panel__header">
        <div>
          <div className="eyebrow">Side-by-side comparison</div>
          <h2>Compare how Wyatt lands with different roles</h2>
        </div>
        <p>
          Useful for demo prep, internal enablement, and explaining where to
          start by persona.
        </p>
      </div>

      <div className="comparison-grid">
        {roles.map((role) => {
          const RoleIcon = roleIcons[role.id];
          const easiestUseCase = useCaseLookup[role.startingPoint.easiestUseCaseId];
          const highestValueUseCase =
            useCaseLookup[role.startingPoint.highestValueUseCaseId];

          return (
            <article className="comparison-card" key={role.id}>
              <div className="comparison-card__title">
                <div className="role-card__icon-shell">
                  <RoleIcon size={18} />
                </div>
                <div>
                  <h3>{role.shortTitle}</h3>
                  <p>{role.summary}</p>
                </div>
              </div>

              <div className="comparison-card__section">
                <span className="eyebrow">Top priorities</span>
                <ul className="dot-list">
                  {role.priorities.slice(0, 3).map((priority) => (
                    <li key={priority}>{priority}</li>
                  ))}
                </ul>
              </div>

              <div className="comparison-card__section">
                <span className="eyebrow">Best-fit features</span>
                <div className="tag-row">
                  {role.recommendedFeatureIds.map((featureId) => {
                    const feature = featureLookup[featureId];
                    const FeatureIcon = featureIcons[feature.id];
                    return (
                      <span
                        className="pill comparison-feature-pill"
                        key={feature.id}
                        style={{ "--feature-accent": feature.color } as CSSProperties}
                      >
                        <FeatureIcon size={14} />
                        {feature.shortTitle}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="comparison-card__section">
                <span className="eyebrow">Recommended starting point</span>
                <strong>{easiestUseCase?.title}</strong>
                <span className="comparison-card__secondary">
                  Highest-value: {highestValueUseCase?.title}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
