import type { CSSProperties } from "react";

import { ArrowUpRight } from "lucide-react";

import { featureIcons } from "../lib/iconMaps";
import type { UseCase, WyattFeature } from "../types";

interface FeatureLibraryProps {
  features: WyattFeature[];
  favoriteUseCases: UseCase[];
  onOpenUseCase: (useCase: UseCase) => void;
  onOpenQuiz: () => void;
}

export function FeatureLibrary({
  features,
  favoriteUseCases,
  onOpenUseCase,
  onOpenQuiz
}: FeatureLibraryProps) {
  return (
    <aside className="sidebar-stack">
      <section className="panel sidebar-panel">
        <div className="eyebrow">Wyatt capability guide</div>
        <h2>What each feature is good at</h2>
        <div className="feature-library">
          {features.map((feature) => {
            const FeatureIcon = featureIcons[feature.id];
            return (
              <article
                className="feature-library__item feature-library__item--accent"
                key={feature.id}
                style={{ "--feature-accent": feature.color } as CSSProperties}
              >
                <div className="feature-library__header">
                  <div className="feature-library__icon feature-library__icon--accent">
                    <FeatureIcon size={18} />
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
                <ul className="dot-list">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="panel sidebar-panel">
        <div className="eyebrow">Recommended for you</div>
        <h2>Quick onboarding quiz</h2>
        <p>
          A simple chooser for people who know the problem they want solved but
          not the right Wyatt starting point yet.
        </p>
        <button className="primary-button" onClick={onOpenQuiz} type="button">
          Find my starting point
          <ArrowUpRight size={16} />
        </button>
      </section>

      <section className="panel sidebar-panel">
        <div className="eyebrow">Saved use cases</div>
        <h2>Favorites</h2>
        {favoriteUseCases.length ? (
          <div className="favorites-list">
            {favoriteUseCases.slice(0, 5).map((useCase) => (
              <button
                className="favorite-link"
                key={useCase.id}
                onClick={() => onOpenUseCase(useCase)}
                type="button"
              >
                <span>{useCase.title}</span>
                <small>{useCase.frequency}</small>
              </button>
            ))}
          </div>
        ) : (
          <div className="empty-state small-empty-state">
            Save a few use cases to build a role-based demo path.
          </div>
        )}
      </section>
    </aside>
  );
}
