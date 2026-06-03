"use client";

import { useMemo, useState } from "react";
import {
  formatDisplayDate,
  getMonthMatrix,
  isClosedDay,
  isPastDate,
  isSelectableDate,
  toISODate,
} from "@/lib/booking/calendar";
import type { BookingUiCopy } from "@/lib/i18n/booking-content";
import type { Locale } from "@/lib/i18n/types";

const WEEKDAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEKDAYS_ID = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export function BookingCalendar({
  locale,
  copy,
  value,
  onChange,
}: {
  locale: Locale;
  copy: BookingUiCopy;
  value: string | null;
  onChange: (iso: string) => void;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const weekdays = locale === "id" ? WEEKDAYS_ID : WEEKDAYS_EN;

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
        month: "long",
        year: "numeric",
      }).format(new Date(viewYear, viewMonth, 1)),
    [locale, viewYear, viewMonth],
  );

  const cells = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  function prevMonth() {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return (
    <div className="border border-line bg-[#0a0a0a]/80 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="touch-target text-muted transition-colors hover:text-foreground disabled:opacity-30"
          aria-label="Previous month"
        >
          ←
        </button>
        <p className="headline text-lg capitalize">{monthLabel}</p>
        <button
          type="button"
          onClick={nextMonth}
          className="touch-target text-muted transition-colors hover:text-foreground"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center">
        {weekdays.map((day) => (
          <span
            key={day}
            className="py-2 text-[0.625rem] uppercase tracking-[0.16em] text-muted"
          >
            {day}
          </span>
        ))}
        {cells.map((date, index) => {
          if (!date) {
            return <span key={`empty-${index}`} className="aspect-square" />;
          }

          const iso = toISODate(date);
          const selectable = isSelectableDate(date);
          const selected = value === iso;
          const closed = isClosedDay(date);
          const past = isPastDate(date);

          return (
            <button
              key={iso}
              type="button"
              disabled={!selectable}
              onClick={() => onChange(iso)}
              className={`calendar-day aspect-square min-h-10 text-sm transition-all duration-200 ${
                selected
                  ? "bg-gold text-background"
                  : selectable
                    ? "text-foreground hover:bg-gold/10"
                    : past
                      ? "text-muted/30"
                      : closed
                        ? "text-muted/40 line-through"
                        : "text-muted/30"
              }`}
              title={closed ? copy.closedMonday : undefined}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {value && (
        <p className="mt-4 text-center text-sm font-light text-gold">
          {formatDisplayDate(value, locale)}
        </p>
      )}
    </div>
  );
}
