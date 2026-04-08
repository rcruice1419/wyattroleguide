import type { CSSProperties } from "react";

import { Filter, Search, X } from "lucide-react";

import { featureIcons } from "../lib/iconMaps";
import type { WyattFeature, WyattFeatureId } from "../types";

interface SearchFiltersProps {
  searchValue: string;
  selectedFeatures: WyattFeatureId[];
  features: WyattFeature[];
  resultCount: number;
  scopeLabel: string;
  onSearchChange: (value: string) => void;
  onToggleFeature: (featureId: WyattFeatureId) => void;
  onClear: () => void;
}

export function SearchFilters({
  searchValue,
  selectedFeatures,
  features,
  resultCount,
  scopeLabel,
  onSearchChange,
  onToggleFeature,
  onClear
}: SearchFiltersProps) {
  return (
    <section className="panel controls-panel">
      <div className="controls-panel__top">
        <div>
          <div className="eyebrow">Search and filter</div>
          <h2>Search across use cases, prompts, and workflows</h2>
          <p>
            Filter by Wyatt capability or search for terms like “billing”,
            “staffing”, “cash”, or “proposal”.
          </p>
        </div>
        <div className="results-badge">
          <Filter size={16} />
          {resultCount} results in {scopeLabel}
        </div>
      </div>

      <div className="search-row">
        <label className="search-box">
          <Search size={18} />
          <input
            type="search"
            placeholder="Search use cases, prompts, workflows, business outcomes..."
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <button className="secondary-action" onClick={onClear} type="button">
          <X size={14} />
          Clear
        </button>
      </div>

      <div className="chip-row">
        {features.map((feature) => {
          const FeatureIcon = featureIcons[feature.id];
          const active = selectedFeatures.includes(feature.id);

          return (
            <button
              className={`feature-chip feature-chip--accent ${active ? "is-active" : ""}`}
              key={feature.id}
              onClick={() => onToggleFeature(feature.id)}
              style={{ "--feature-accent": feature.color } as CSSProperties}
              type="button"
            >
              <FeatureIcon size={14} />
              {feature.shortTitle}
            </button>
          );
        })}
      </div>
    </section>
  );
}
