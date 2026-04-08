import type { CSSProperties } from "react";

import { motion } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";

import { featureIcons } from "../lib/iconMaps";
import type { UseCase, WyattFeature } from "../types";

interface UseCaseCardProps {
  useCase: UseCase;
  feature: WyattFeature;
  roleTitle?: string;
  isFavorite: boolean;
  onOpen: (useCase: UseCase) => void;
  onToggleFavorite: (useCaseId: string) => void;
}

export function UseCaseCard({
  useCase,
  feature,
  roleTitle,
  isFavorite,
  onOpen,
  onToggleFavorite
}: UseCaseCardProps) {
  const FeatureIcon = featureIcons[feature.id];

  return (
    <motion.article
      className="use-case-card use-case-card--accent"
      layout
      style={{ "--feature-accent": feature.color } as CSSProperties}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
    >
      <div className="use-case-card__header">
        <div className="use-case-card__title-group">
          <span className="eyebrow">Use case</span>
          <h3>{useCase.title}</h3>
          <p>{useCase.shortDescription}</p>
        </div>

        <button
          aria-label="Toggle favorite"
          className={`icon-button ${isFavorite ? "is-active" : ""}`}
          onClick={() => onToggleFavorite(useCase.id)}
          type="button"
        >
          <Heart size={16} />
        </button>
      </div>

      <div className="tag-row">
        <span className="pill pill-feature">
          <FeatureIcon size={14} />
          {feature.title}
        </span>
        <span className="pill pill-subtle">{useCase.frequency}</span>
        <span className="pill pill-subtle">{useCase.difficulty}</span>
        <span className="pill pill-subtle">{useCase.valueLevel} value</span>
        {roleTitle ? <span className="pill pill-subtle">{roleTitle}</span> : null}
      </div>

      <div className="use-case-card__body">
        <p className="body-emphasis">{useCase.businessProblem}</p>
        <div className="prompt-preview">
          <span className="eyebrow">Example prompt / workflow</span>
          <p>{useCase.examplePrompt}</p>
        </div>
      </div>

      <div className="use-case-card__footer">
        <div>
          <span className="eyebrow">Measurable outcome</span>
          <strong>{useCase.measurableOutcome}</strong>
        </div>

        <button className="primary-inline" onClick={() => onOpen(useCase)} type="button">
          View details
          <MoveRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}
