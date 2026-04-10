import type { CSSProperties } from "react";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { featureIcons, roleIcons } from "../lib/iconMaps";
import type { RoleProfile, UseCase, WyattFeature } from "../types";

interface RoleOverviewProps {
  role: RoleProfile;
  features: WyattFeature[];
  easiestUseCase?: UseCase;
  highestValueUseCase?: UseCase;
}

export function RoleOverview({
  role,
  features,
  easiestUseCase,
  highestValueUseCase
}: RoleOverviewProps) {
  const RoleIcon = roleIcons[role.id];

  return (
    <section className="panel role-overview">
      <div className="role-overview__header">
        <div className="role-overview__title">
          <div className="role-overview__icon">
            <RoleIcon size={24} />
          </div>
          <div>
            <div className="eyebrow">Role overview</div>
            <h2>{role.title}</h2>
            <p>{role.summary}</p>
          </div>
        </div>
        <div className="role-overview__highlights">
          {role.compareHighlights.map((highlight) => (
            <span className="pill pill-highlight" key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="role-overview__grid">
        <div className="content-block">
          <h3>What they care about most</h3>
          <ul className="clean-list">
            {role.whatTheyCareAbout.slice(0, 4).map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-block">
          <h3>Best Wyatt features</h3>
          <div className="feature-chip-grid">
            {features.map((feature) => {
              const FeatureIcon = featureIcons[feature.id];
              return (
                <div
                  className="feature-chip-card feature-chip-card--accent"
                  key={feature.id}
                  style={{ "--feature-accent": feature.color } as CSSProperties}
                >
                  <FeatureIcon size={16} />
                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.benefits[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="content-block">
          <h3>Recommended starting point</h3>
          <div className="starting-point">
            <div>
              <span className="eyebrow">Easiest first use case</span>
              <strong>{easiestUseCase?.title ?? "Select a role"}</strong>
            </div>
            <ArrowRight size={16} />
            <div>
              <span className="eyebrow">Highest-value use case</span>
              <strong>{highestValueUseCase?.title ?? "Select a role"}</strong>
            </div>
          </div>
          <div className="daily-habit">
            <span className="eyebrow">Daily habit suggestion</span>
            <p>{role.startingPoint.dailyHabit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
