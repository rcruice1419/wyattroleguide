import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";

import { featureIcons, roleIcons } from "../lib/iconMaps";
import type { RoleProfile, UseCase, WyattFeature } from "../types";

interface UseCaseDetailDialogProps {
  useCase: UseCase | null;
  role?: RoleProfile;
  feature?: WyattFeature;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UseCaseDetailDialog({
  useCase,
  role,
  feature,
  open,
  onOpenChange
}: UseCaseDetailDialogProps) {
  const RoleIcon = role ? roleIcons[role.id] : null;
  const FeatureIcon = feature ? featureIcons[feature.id] : null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-header">
            <div>
              <div className="eyebrow">Wyatt use case detail</div>
              <Dialog.Title>{useCase?.title}</Dialog.Title>
              <Dialog.Description>{useCase?.shortDescription}</Dialog.Description>
            </div>

            <Dialog.Close className="icon-button" aria-label="Close">
              <X size={16} />
            </Dialog.Close>
          </div>

          {useCase ? (
            <div className="dialog-grid">
              <div className="dialog-main">
                <div className="dialog-pill-row">
                  {role && RoleIcon ? (
                    <span className="pill">
                      <RoleIcon size={14} />
                      {role.shortTitle}
                    </span>
                  ) : null}
                  {feature && FeatureIcon ? (
                    <span className="pill">
                      <FeatureIcon size={14} />
                      {feature.title}
                    </span>
                  ) : null}
                  <span className="pill pill-subtle">{useCase.frequency}</span>
                  <span className="pill pill-subtle">{useCase.difficulty}</span>
                  <span className="pill pill-subtle">{useCase.valueLevel} value</span>
                </div>

                <section className="dialog-section">
                  <h3>Business problem solved</h3>
                  <p>{useCase.businessProblem}</p>
                </section>

                <section className="dialog-section">
                  <h3>Example prompt</h3>
                  <div className="quote-box">{useCase.examplePrompt}</div>
                </section>

                <section className="dialog-section">
                  <h3>Example workflow</h3>
                  <ol className="step-list">
                    {useCase.workflow.map((step) => (
                      <li key={step}>
                        <ArrowRight size={14} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <aside className="dialog-sidebar">
                <section className="dialog-side-card">
                  <span className="eyebrow">Business value</span>
                  <p>{useCase.businessValue}</p>
                </section>
                <section className="dialog-side-card">
                  <span className="eyebrow">Measurable outcome</span>
                  <strong>{useCase.measurableOutcome}</strong>
                </section>
                <section className="dialog-side-card">
                  <span className="eyebrow">Tags</span>
                  <div className="tag-row">
                    {useCase.tags.map((tag) => (
                      <span className="pill pill-subtle" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </aside>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
