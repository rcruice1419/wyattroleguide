import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Sparkles, Users2 } from "lucide-react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { FeatureLibrary } from "./components/FeatureLibrary";
import { OnboardingQuiz } from "./components/OnboardingQuiz";
import { RoleCard } from "./components/RoleCard";
import { RoleOverview } from "./components/RoleOverview";
import { SearchFilters } from "./components/SearchFilters";
import { UseCaseCard } from "./components/UseCaseCard";
import { UseCaseDetailDialog } from "./components/UseCaseDetailDialog";
import { featureIds, roleProfiles, useCases, wyattFeatures } from "./data/mockData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { trackEvent } from "./lib/analytics";
import { featureIcons } from "./lib/iconMaps";
import type { RoleId, UseCase, WyattFeatureId } from "./types";

const defaultRoleId: RoleId = "project-manager";

function App() {
  const [activeTab, setActiveTab] = useState("by-role");
  const [activeRoleId, setActiveRoleId] = useState<RoleId>(defaultRoleId);
  const [previewRoleId, setPreviewRoleId] = useState<RoleId | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<WyattFeatureId[]>([
    ...featureIds
  ]);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [spotlightUseCaseId, setSpotlightUseCaseId] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [favoriteUseCaseIds, setFavoriteUseCaseIds] = useLocalStorage<string[]>(
    "wyatt-role-guide.favorites",
    []
  );

  const roleLookup = useMemo(
    () =>
      Object.fromEntries(roleProfiles.map((role) => [role.id, role])) as Record<
        RoleId,
        (typeof roleProfiles)[number]
      >,
    []
  );

  const featureLookup = useMemo(
    () =>
      Object.fromEntries(
        wyattFeatures.map((feature) => [feature.id, feature])
      ) as Record<WyattFeatureId, (typeof wyattFeatures)[number]>,
    []
  );

  const useCaseLookup = useMemo(
    () =>
      Object.fromEntries(useCases.map((useCase) => [useCase.id, useCase])) as Record<
        string,
        UseCase
      >,
    []
  );

  const activeRole = roleLookup[activeRoleId];
  const previewRole = previewRoleId ? roleLookup[previewRoleId] : activeRole;

  const roleUseCases = useMemo(
    () =>
      Object.fromEntries(
        roleProfiles.map((role) => [
          role.id,
          useCases.filter((useCase) => useCase.roleId === role.id)
        ])
      ) as Record<RoleId, UseCase[]>,
    []
  );

  const roleFeatureCounts = useMemo(
    () =>
      Object.fromEntries(
        roleProfiles.map((role) => {
          const entries = wyattFeatures.map((feature) => ({
            label: feature.shortTitle,
            count: roleUseCases[role.id].filter(
              (useCase) => useCase.featureId === feature.id
            ).length
          }));

          return [role.id, entries.filter((entry) => entry.count > 0)];
        })
      ) as Record<RoleId, Array<{ label: string; count: number }>>,
    [roleUseCases]
  );

  const filteredRoleUseCases = useMemo(
    () =>
      useCases.filter((useCase) => {
        if (useCase.roleId !== activeRoleId) {
          return false;
        }

        if (!selectedFeatures.includes(useCase.featureId)) {
          return false;
        }

        const haystack = [
          useCase.title,
          useCase.shortDescription,
          useCase.businessProblem,
          useCase.examplePrompt,
          useCase.workflow.join(" "),
          useCase.businessValue,
          useCase.measurableOutcome,
          useCase.tags.join(" ")
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(searchValue.toLowerCase());
      }),
    [activeRoleId, searchValue, selectedFeatures]
  );

  const filteredGlobalUseCases = useMemo(
    () =>
      useCases.filter((useCase) => {
        if (!selectedFeatures.includes(useCase.featureId)) {
          return false;
        }

        const haystack = [
          useCase.title,
          roleLookup[useCase.roleId].title,
          useCase.shortDescription,
          useCase.businessProblem,
          useCase.examplePrompt,
          useCase.workflow.join(" "),
          useCase.tags.join(" ")
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(searchValue.toLowerCase());
      }),
    [roleLookup, searchValue, selectedFeatures]
  );

  const favoriteUseCases = favoriteUseCaseIds
    .map((useCaseId) => useCaseLookup[useCaseId])
    .filter(Boolean);

  const featureGroups = wyattFeatures.map((feature) => ({
    feature,
    items: filteredGlobalUseCases.filter((useCase) => useCase.featureId === feature.id)
  }));

  const activeRoleUseCaseGroups = useMemo(() => {
    const grouped = wyattFeatures
      .map((feature) => ({
        feature,
        items: filteredRoleUseCases.filter((useCase) => useCase.featureId === feature.id)
      }))
      .filter((group) => group.items.length > 0);

    const recommendedOrder = new Map(
      activeRole.recommendedFeatureIds.map((featureId, index) => [featureId, index])
    );

    return grouped.sort((left, right) => {
      const leftOrder = recommendedOrder.get(left.feature.id) ?? 99;
      const rightOrder = recommendedOrder.get(right.feature.id) ?? 99;
      return leftOrder - rightOrder;
    });
  }, [activeRole.recommendedFeatureIds, filteredRoleUseCases, wyattFeatures]);

  const spotlightUseCase =
    filteredRoleUseCases.find((useCase) => useCase.id === spotlightUseCaseId) ??
    filteredRoleUseCases[0] ??
    null;

  const spotlightFeature = spotlightUseCase
    ? featureLookup[spotlightUseCase.featureId]
    : null;

  const toggleFeature = (featureId: WyattFeatureId) => {
    setSelectedFeatures((current) => {
      const next = current.includes(featureId)
        ? current.filter((value) => value !== featureId)
        : [...current, featureId];

      trackEvent("feature_filter_toggled", { featureId, active: next.includes(featureId) });
      return next.length ? next : [...featureIds];
    });
  };

  const clearFilters = () => {
    setSearchValue("");
    setSelectedFeatures([...featureIds]);
    trackEvent("filters_cleared");
  };

  const toggleFavoriteUseCase = (useCaseId: string) => {
    setFavoriteUseCaseIds((current) => {
      const next = current.includes(useCaseId)
        ? current.filter((value) => value !== useCaseId)
        : [...current, useCaseId];

      trackEvent("use_case_favorited", {
        useCaseId,
        active: next.includes(useCaseId)
      });

      return next;
    });
  };

  const openUseCase = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    trackEvent("use_case_opened", { useCaseId: useCase.id });
  };

  const focusUseCase = (useCase: UseCase) => {
    setSpotlightUseCaseId(useCase.id);
    trackEvent("use_case_spotlighted", { useCaseId: useCase.id });
  };

  return (
    <>
      <div className="app-shell">
        <header className="hero panel">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero__copy"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.32 }}
          >
            <div className="hero__kicker">
              <Sparkles size={16} />
              Wyatt role guide for Unanet AE firms
            </div>
            <h1>How can Wyatt help you in your role?</h1>
            <p>
              Pick a role and see the Wyatt workflows that matter most, the best
              feature fit, realistic prompts, and the business outcomes AE firms
              actually care about.
            </p>
            <div className="hero__stats">
              <div className="stat-card">
                <span className="eyebrow">Roles</span>
                <strong>{roleProfiles.length}</strong>
              </div>
              <div className="stat-card">
                <span className="eyebrow">Use cases</span>
                <strong>{useCases.length}</strong>
              </div>
              <div className="stat-card">
                <span className="eyebrow">Favorites</span>
                <strong>{favoriteUseCases.length}</strong>
              </div>
            </div>
          </motion.div>

          <div className="hero__aside">
            <div className="hero-callout">
              <LayoutDashboard size={20} />
              <div>
                <span className="eyebrow">Core goal</span>
                <p>
                  Show each role what they care about, the Wyatt features that
                  fit, and the exact workflows worth demoing first.
                </p>
              </div>
            </div>
            <div className="hero-callout">
              <Users2 size={20} />
              <div>
                <span className="eyebrow">Best for</span>
                <p>
                  Internal enablement, product demos, CSM playbooks, and role-based
                  rollout planning.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="layout-grid">
          <main className="main-column">
            <section className="panel role-selector-panel">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">Role selector</div>
                  <h2>Choose a role to personalize the view</h2>
                </div>
                <p>Hover to preview. Click to select.</p>
              </div>

              <div className="role-preview-strip">
                <div className="role-preview-strip__summary">
                  <span className="eyebrow">
                    {previewRoleId ? "Previewing role" : "Selected role"}
                  </span>
                  <h3>{previewRole.title}</h3>
                </div>
                <div className="role-preview-strip__meta">
                  <div className="role-preview-strip__group">
                    <span className="eyebrow">Cares about</span>
                    <div className="tag-row">
                      {previewRole.whatTheyCareAbout.slice(0, 2).map((item) => (
                        <span className="pill pill-subtle" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="role-preview-strip__group">
                    <span className="eyebrow">Wyatt mix</span>
                    <div className="tag-row">
                      {roleFeatureCounts[previewRole.id].slice(0, 4).map((item) => (
                        <span className="pill" key={item.label}>
                          {item.label}
                          <strong>{item.count}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="role-preview-strip__group role-preview-strip__group--cta">
                    <span className="eyebrow">Start with</span>
                    <strong>
                      {
                        useCaseLookup[
                          previewRole.startingPoint.easiestUseCaseId
                        ]?.title
                      }
                    </strong>
                  </div>
                </div>
              </div>

              <div className="role-grid">
                {roleProfiles.map((role) => (
                  <RoleCard
                    featureCounts={roleFeatureCounts[role.id]}
                    isFocused={role.id === activeRoleId}
                    key={role.id}
                    onFocus={(roleId) => {
                      setActiveRoleId(roleId);
                      setPreviewRoleId(null);
                      trackEvent("role_focused", { roleId });
                    }}
                    onPreview={setPreviewRoleId}
                    role={role}
                    useCaseCount={roleUseCases[role.id].length}
                  />
                ))}
              </div>
            </section>

            <SearchFilters
              features={wyattFeatures}
              onClear={clearFilters}
              onSearchChange={(value) => {
                setSearchValue(value);
                trackEvent("search_updated", { value });
              }}
              onToggleFeature={toggleFeature}
              resultCount={
                activeTab === "by-role"
                  ? filteredRoleUseCases.length
                  : filteredGlobalUseCases.length
              }
              scopeLabel={activeTab === "by-role" ? activeRole.shortTitle : "all roles"}
              searchValue={searchValue}
              selectedFeatures={selectedFeatures}
            />

            <Tabs.Root onValueChange={setActiveTab} value={activeTab}>
              <Tabs.List className="tabs-list" aria-label="View options">
                <Tabs.Trigger className="tabs-trigger" value="by-role">
                  By role
                </Tabs.Trigger>
                <Tabs.Trigger className="tabs-trigger" value="by-feature">
                  By feature
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="by-role">
                <RoleOverview
                  easiestUseCase={useCaseLookup[activeRole.startingPoint.easiestUseCaseId]}
                  features={activeRole.recommendedFeatureIds.map(
                    (featureId) => featureLookup[featureId]
                  )}
                  highestValueUseCase={
                    useCaseLookup[activeRole.startingPoint.highestValueUseCaseId]
                  }
                  role={activeRole}
                />

                <section className="panel">
                  <div className="section-heading">
                    <div>
                      <div className="eyebrow">Role-specific use cases</div>
                      <h2>{activeRole.title}</h2>
                    </div>
                    <p>
                      Scan the full role playbook by feature. Select any item to
                      preview the prompt, workflow, and outcome without opening a modal.
                    </p>
                  </div>

                  {activeRoleUseCaseGroups.length ? (
                    <div className="use-case-board">
                      <div className="use-case-board__lanes">
                        {activeRoleUseCaseGroups.map(({ feature, items }) => {
                          const FeatureIcon = featureIcons[feature.id];

                          return (
                            <section
                              className="use-case-lane use-case-lane--accent"
                              key={feature.id}
                              style={{ "--feature-accent": feature.color } as CSSProperties}
                            >
                              <div className="use-case-lane__header">
                                <div className="use-case-lane__title">
                                  <FeatureIcon size={16} />
                                  <div>
                                    <span>{feature.shortTitle}</span>
                                    <strong>{items.length}</strong>
                                  </div>
                                </div>
                                <span className="lane-count">use cases</span>
                              </div>

                              <div className="compact-use-case-list">
                                {items.map((useCase) => (
                                  <button
                                    className={`compact-use-case ${
                                      spotlightUseCase?.id === useCase.id ? "is-active" : ""
                                    }`}
                                    key={useCase.id}
                                    onClick={() => focusUseCase(useCase)}
                                    type="button"
                                  >
                                    <span className="compact-use-case__title">
                                      {useCase.title}
                                    </span>
                                    <span className="compact-use-case__meta">
                                      {useCase.frequency} / {useCase.valueLevel} value
                                    </span>
                                    {spotlightUseCase?.id === useCase.id ? (
                                      <span className="compact-use-case__selected">
                                        Selected
                                      </span>
                                    ) : null}
                                  </button>
                                ))}
                              </div>
                            </section>
                          );
                        })}
                      </div>

                      {spotlightUseCase && spotlightFeature ? (
                        <aside
                          className="use-case-spotlight use-case-spotlight--accent"
                          style={
                            {
                              "--feature-accent": spotlightFeature.color
                            } as CSSProperties
                          }
                        >
                          <div className="use-case-spotlight__header">
                            <div>
                              <span className="eyebrow">Inline preview</span>
                              <h3>{spotlightUseCase.title}</h3>
                            </div>
                            <span className="pill pill-feature">
                              {spotlightFeature.shortTitle}
                            </span>
                          </div>

                          <div className="spotlight-metrics">
                            <span>{spotlightUseCase.frequency}</span>
                            <span>{spotlightUseCase.difficulty}</span>
                            <span>{spotlightUseCase.valueLevel} value</span>
                          </div>

                          <div className="spotlight-prompt">
                            <span className="eyebrow">Prompt / workflow</span>
                            <p>{spotlightUseCase.examplePrompt}</p>
                          </div>

                          <div className="spotlight-grid">
                            <div>
                              <span className="eyebrow">Solves</span>
                              <p>{spotlightUseCase.businessProblem}</p>
                            </div>
                            <div>
                              <span className="eyebrow">Measurable outcome:</span>
                              <p>{spotlightUseCase.measurableOutcome}</p>
                            </div>
                          </div>

                          <div className="spotlight-workflow">
                            <span className="eyebrow">Workflow</span>
                            <ol>
                              {spotlightUseCase.workflow.slice(0, 3).map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="spotlight-actions">
                            <button
                              className="primary-button"
                              onClick={() => openUseCase(spotlightUseCase)}
                              type="button"
                            >
                              Open full detail
                              <ArrowRight size={14} />
                            </button>
                            <button
                              className={`secondary-action ${
                                favoriteUseCaseIds.includes(spotlightUseCase.id)
                                  ? "is-active"
                                  : ""
                              }`}
                              onClick={() => toggleFavoriteUseCase(spotlightUseCase.id)}
                              type="button"
                            >
                              {favoriteUseCaseIds.includes(spotlightUseCase.id)
                                ? "Saved"
                                : "Save"}
                            </button>
                          </div>
                        </aside>
                      ) : null}
                    </div>
                  ) : (
                    <div className="empty-state">
                      No use cases match the current search and feature filters for
                      this role. Clear filters or switch to a different feature mix.
                    </div>
                  )}
                </section>
              </Tabs.Content>

              <Tabs.Content value="by-feature">
                <section className="panel">
                  <div className="section-heading">
                    <div>
                      <div className="eyebrow">Feature-first exploration</div>
                      <h2>Browse Wyatt by capability</h2>
                    </div>
                    <p>
                      Useful when a buyer or internal stakeholder already knows they
                      want Roundups, Chores, Chats, Integrations, or Labs.
                    </p>
                  </div>

                  <div className="feature-stack">
                    {featureGroups.map(({ feature, items }) => (
                      <section className="feature-section" key={feature.id}>
                        <div className="feature-section__header">
                          <div>
                            <div className="eyebrow">{feature.title}</div>
                            <h3>{feature.description}</h3>
                          </div>
                          <span className="results-badge">{items.length} matches</span>
                        </div>

                        {items.length ? (
                          <div className="use-case-grid">
                            {items.map((useCase) => (
                              <UseCaseCard
                                feature={feature}
                                isFavorite={favoriteUseCaseIds.includes(useCase.id)}
                                key={useCase.id}
                                onOpen={openUseCase}
                                onToggleFavorite={toggleFavoriteUseCase}
                                roleTitle={roleLookup[useCase.roleId].shortTitle}
                                useCase={useCase}
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="empty-state small-empty-state">
                            No current matches for this feature with the active search
                            filters.
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                </section>
              </Tabs.Content>
            </Tabs.Root>
          </main>

          <FeatureLibrary
            favoriteUseCases={favoriteUseCases}
            features={wyattFeatures}
            onOpenQuiz={() => {
              setQuizOpen(true);
              trackEvent("quiz_opened");
            }}
            onOpenUseCase={openUseCase}
          />
        </div>
      </div>

      <UseCaseDetailDialog
        feature={selectedUseCase ? featureLookup[selectedUseCase.featureId] : undefined}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedUseCase(null);
          }
        }}
        open={Boolean(selectedUseCase)}
        role={selectedUseCase ? roleLookup[selectedUseCase.roleId] : undefined}
        useCase={selectedUseCase}
      />

      <OnboardingQuiz
        onChooseRole={(roleId) => {
          setActiveRoleId(roleId);
          setActiveTab("by-role");
          trackEvent("quiz_role_chosen", { roleId });
        }}
        onOpenChange={setQuizOpen}
        open={quizOpen}
        roles={roleProfiles}
        useCases={useCases}
      />
    </>
  );
}

export default App;
