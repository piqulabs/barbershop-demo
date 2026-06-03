"use client";

import type { ReactNode } from "react";

export function SelectionCard({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`selection-card w-full border text-start transition-all duration-300 ${
        selected
          ? "border-gold/60 bg-gold/8 shadow-[0_0_0_1px_rgba(179,155,94,0.2)]"
          : "border-line bg-transparent hover:border-gold/30 hover:bg-white/[0.02]"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function StepShell({
  title,
  subtitle,
  children,
  animationKey,
  direction,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  animationKey: string;
  direction: number;
}) {
  return (
    <div
      key={animationKey}
      className={direction >= 0 ? "step-enter-forward" : "step-enter-back"}
    >
      <div className="mb-8">
        <h2 className="headline text-2xl sm:text-3xl">{title}</h2>
        <p className="body-lg mt-3 max-w-lg">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

export function StepNav({
  onBack,
  onContinue,
  backLabel,
  continueLabel,
  continueDisabled = false,
  showBack = true,
}: {
  onBack?: () => void;
  onContinue: () => void;
  backLabel?: string;
  continueLabel: string;
  continueDisabled?: boolean;
  showBack?: boolean;
}) {
  return (
    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      {showBack && onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="touch-target-block justify-center text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground sm:justify-start"
        >
          {backLabel ?? "Back"}
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onContinue}
        disabled={continueDisabled}
        className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-[200px]"
      >
        {continueLabel}
      </button>
    </div>
  );
}
