"use client";

import { BOOKING_STEPS, type BookingStep } from "@/lib/booking/types";
import type { BookingUiCopy } from "@/lib/i18n/booking-content";

export function BookingProgress({
  current,
  copy,
}: {
  current: BookingStep;
  copy: BookingUiCopy;
}) {
  const currentIndex = BOOKING_STEPS.indexOf(current);

  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.625rem] uppercase tracking-[0.24em] text-muted">
          Step {currentIndex + 1} / {BOOKING_STEPS.length}
        </p>
        <p className="text-[0.625rem] uppercase tracking-[0.2em] text-gold">
          {copy.stepLabels[currentIndex]}
        </p>
      </div>
      <div className="mt-3 h-px w-full bg-line">
        <div
          className="h-px bg-gold transition-all duration-500 ease-out"
          style={{
            width: `${((currentIndex + 1) / BOOKING_STEPS.length) * 100}%`,
          }}
        />
      </div>
      <ol className="mt-4 hidden gap-2 sm:flex">
        {copy.stepLabels.map((label, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li
              key={label}
              className={`flex-1 border-t-2 pt-2 text-[0.5625rem] uppercase tracking-[0.16em] ${
                active
                  ? "border-gold text-gold"
                  : done
                    ? "border-gold/40 text-foreground/60"
                    : "border-line text-muted"
              }`}
            >
              {label}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
