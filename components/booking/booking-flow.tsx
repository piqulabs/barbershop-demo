"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { BookingCalendar } from "@/components/booking/booking-calendar";
import { BookingProgress } from "@/components/booking/booking-progress";
import {
  SelectionCard,
  StepNav,
  StepShell,
} from "@/components/booking/selection-card";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";
import { BARBERS, SERVICES } from "@/lib/booking/data";
import { formatDisplayDate } from "@/lib/booking/calendar";
import { getBookingWhatsAppUrl } from "@/lib/booking/whatsapp";
import {
  BOOKING_STEPS,
  TIME_SLOTS,
  type BarberId,
  type BookingFormState,
  type BookingStep,
  type ServiceId,
} from "@/lib/booking/types";
import { getBookingUi } from "@/lib/i18n/booking-content";

const initialState: BookingFormState = {
  serviceId: null,
  barberId: null,
  date: null,
  time: null,
  customerName: "",
  customerPhone: "",
  notes: "",
};

function stepIndex(step: BookingStep) {
  return BOOKING_STEPS.indexOf(step);
}

export function BookingFlow({
  initialServiceId,
  initialBarberId,
}: {
  initialServiceId?: ServiceId | null;
  initialBarberId?: BarberId | null;
}) {
  const { locale } = useLanguage();
  const copy = getBookingUi(locale ?? "id");

  const [step, setStep] = useState<BookingStep>(() => {
    if (initialServiceId && initialBarberId) return "date";
    if (initialServiceId) return "service";
    if (initialBarberId) return "barber";
    return "service";
  });
  const [direction, setDirection] = useState(1);
  const [isConfirming, setIsConfirming] = useState(false);
  const [form, setForm] = useState<BookingFormState>({
    ...initialState,
    serviceId: initialServiceId ?? null,
    barberId: initialBarberId ?? null,
  });

  const currentIndex = stepIndex(step);

  const goTo = useCallback((next: BookingStep, dir: number) => {
    setDirection(dir);
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goNext = useCallback(() => {
    const next = BOOKING_STEPS[currentIndex + 1];
    if (next) goTo(next, 1);
  }, [currentIndex, goTo]);

  const goBack = useCallback(() => {
    const prev = BOOKING_STEPS[currentIndex - 1];
    if (prev) goTo(prev, -1);
  }, [currentIndex, goTo]);

  const getServiceLabel = useCallback(
    (id: string) => copy.services[id as ServiceId],
    [copy.services],
  );

  const getBarberLabel = useCallback(
    (id: string) => {
      if (id === "any") return copy.anyBarber;
      return copy.barbers[id as BarberId];
    },
    [copy],
  );

  const formatDate = useCallback(
    (iso: string) => formatDisplayDate(iso, locale ?? "id"),
    [locale],
  );

  const summaryRows = useMemo(() => {
    if (!form.serviceId || !form.barberId || !form.date || !form.time) {
      return null;
    }
    const service = SERVICES.find((s) => s.id === form.serviceId);
    const serviceLabel = getServiceLabel(form.serviceId);
    const barberLabel =
      form.barberId === "any"
        ? copy.anyBarber
        : getBarberLabel(form.barberId);

    if (!service) return null;

    return [
      { label: copy.summaryLabels.service, value: serviceLabel.name },
      { label: copy.summaryLabels.price, value: service.priceDisplay },
      { label: copy.summaryLabels.duration, value: serviceLabel.duration },
      { label: copy.summaryLabels.barber, value: barberLabel.name },
      { label: copy.summaryLabels.date, value: formatDate(form.date) },
      { label: copy.summaryLabels.time, value: form.time },
      { label: copy.summaryLabels.name, value: form.customerName },
    ];
  }, [form, copy, getServiceLabel, getBarberLabel, formatDate]);

  const handleConfirm = useCallback(async () => {
    if (!locale) return;
    setIsConfirming(true);

    await new Promise((r) => setTimeout(r, 1400));

    const url = getBookingWhatsAppUrl(
      form,
      locale,
      getServiceLabel,
      (id) => getBarberLabel(id),
      formatDate,
    );

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setIsConfirming(false);
  }, [form, locale, getServiceLabel, getBarberLabel, formatDate]);

  const canContinue = useMemo(() => {
    switch (step) {
      case "service":
        return !!form.serviceId;
      case "barber":
        return !!form.barberId;
      case "date":
        return !!form.date;
      case "time":
        return !!form.time;
      case "customer":
        return (
          form.customerName.trim().length >= 2 &&
          form.customerPhone.trim().length >= 8
        );
      case "summary":
        return true;
      case "confirm":
        return !isConfirming;
      default:
        return false;
    }
  }, [step, form, isConfirming]);

  return (
    <div className="min-h-svh bg-background pb-24 pt-[calc(var(--header-height)+env(safe-area-inset-top)+1.5rem)]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="headline text-xl tracking-[0.12em] uppercase sm:text-2xl"
          >
            Piqu
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
        >
          {copy.backHome}
        </Link>

        <div className="mt-8 section-fade-in">
          <p className="eyebrow">{copy.pageEyebrow}</p>
          <h1 className="headline mt-3 text-3xl sm:text-4xl">{copy.pageTitle}</h1>
          <p className="body-lg mt-4">{copy.pageSubtitle}</p>
        </div>

        <div className="mt-10">
          <BookingProgress current={step} copy={copy} />

          {step === "service" && (
            <StepShell
              title={copy.selectServiceTitle}
              subtitle={copy.selectServiceSubtitle}
              animationKey="service"
              direction={direction}
            >
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {SERVICES.map((service) => {
                  const label = copy.services[service.id];
                  return (
                    <li key={service.id}>
                      <SelectionCard
                        selected={form.serviceId === service.id}
                        onClick={() =>
                          setForm((f) => ({ ...f, serviceId: service.id }))
                        }
                        className="p-5 sm:p-6"
                      >
                        {service.popular && (
                          <span className="mb-3 inline-block bg-gold/15 px-2 py-0.5 text-[0.5625rem] uppercase tracking-[0.2em] text-gold">
                            {copy.popularBadge}
                          </span>
                        )}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="headline text-lg">{label.name}</h3>
                          <span className="shrink-0 text-gold">{service.priceDisplay}</span>
                        </div>
                        <p className="mt-2 text-sm font-light text-muted">{label.note}</p>
                        <p className="mt-4 text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                          {label.duration}
                        </p>
                      </SelectionCard>
                    </li>
                  );
                })}
              </ul>
              <StepNav
                showBack={false}
                onContinue={goNext}
                continueLabel={copy.continue}
                continueDisabled={!canContinue}
              />
            </StepShell>
          )}

          {step === "barber" && (
            <StepShell
              title={copy.selectBarberTitle}
              subtitle={copy.selectBarberSubtitle}
              animationKey="barber"
              direction={direction}
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {BARBERS.map((barber) => {
                  const label = copy.barbers[barber.id];
                  return (
                    <li key={barber.id}>
                      <SelectionCard
                        selected={form.barberId === barber.id}
                        onClick={() =>
                          setForm((f) => ({ ...f, barberId: barber.id }))
                        }
                        className="p-4 sm:p-5"
                      >
                        <div className="flex gap-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-[#111]">
                            <Image
                              src={barber.photo}
                              alt={label.name}
                              fill
                              className="object-cover saturate-[0.85]"
                              sizes="64px"
                            />
                          </div>
                          <div className="min-w-0 text-start">
                            <p className="headline text-lg">{label.name}</p>
                            <p className="mt-1 text-xs font-light text-muted">
                              {label.specialty}
                            </p>
                            <p className="mt-2 text-[0.625rem] uppercase tracking-[0.16em] text-gold/80">
                              {barber.experienceYears} {copy.yearsExp}
                            </p>
                          </div>
                        </div>
                      </SelectionCard>
                    </li>
                  );
                })}
                <li className="sm:col-span-2">
                  <SelectionCard
                    selected={form.barberId === "any"}
                    onClick={() =>
                      setForm((f) => ({ ...f, barberId: "any" }))
                    }
                    className="p-5"
                  >
                    <p className="headline text-lg">{copy.anyBarber.name}</p>
                    <p className="mt-1 text-sm font-light text-muted">
                      {copy.anyBarber.specialty}
                    </p>
                  </SelectionCard>
                </li>
              </ul>
              <StepNav
                onBack={goBack}
                onContinue={goNext}
                backLabel={copy.back}
                continueLabel={copy.continue}
                continueDisabled={!canContinue}
              />
            </StepShell>
          )}

          {step === "date" && (
            <StepShell
              title={copy.selectDateTitle}
              subtitle={copy.selectDateSubtitle}
              animationKey="date"
              direction={direction}
            >
              <BookingCalendar
                locale={locale ?? "id"}
                copy={copy}
                value={form.date}
                onChange={(iso) => setForm((f) => ({ ...f, date: iso }))}
              />
              <StepNav
                onBack={goBack}
                onContinue={goNext}
                backLabel={copy.back}
                continueLabel={copy.continue}
                continueDisabled={!canContinue}
              />
            </StepShell>
          )}

          {step === "time" && (
            <StepShell
              title={copy.selectTimeTitle}
              subtitle={copy.selectTimeSubtitle}
              animationKey="time"
              direction={direction}
            >
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, time: slot }))}
                    className={`min-h-12 border text-sm transition-all duration-200 ${
                      form.time === slot
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-line text-foreground/80 hover:border-gold/40 hover:bg-gold/5"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <StepNav
                onBack={goBack}
                onContinue={goNext}
                backLabel={copy.back}
                continueLabel={copy.continue}
                continueDisabled={!canContinue}
              />
            </StepShell>
          )}

          {step === "customer" && (
            <StepShell
              title={copy.customerTitle}
              subtitle={copy.customerSubtitle}
              animationKey="customer"
              direction={direction}
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="text-[0.625rem] uppercase tracking-[0.2em] text-muted"
                  >
                    {copy.fullName}
                  </label>
                  <input
                    id="customer-name"
                    value={form.customerName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, customerName: e.target.value }))
                    }
                    placeholder={copy.fullNamePlaceholder}
                    className="mt-2 w-full min-h-12 border-0 border-b border-line bg-transparent py-3 text-base font-light focus:border-gold/50 focus:outline-none"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customer-phone"
                    className="text-[0.625rem] uppercase tracking-[0.2em] text-muted"
                  >
                    {copy.whatsappNumber}
                  </label>
                  <input
                    id="customer-phone"
                    value={form.customerPhone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, customerPhone: e.target.value }))
                    }
                    placeholder={copy.whatsappPlaceholder}
                    className="mt-2 w-full min-h-12 border-0 border-b border-line bg-transparent py-3 text-base font-light focus:border-gold/50 focus:outline-none"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customer-notes"
                    className="text-[0.625rem] uppercase tracking-[0.2em] text-muted"
                  >
                    {copy.notes}
                  </label>
                  <textarea
                    id="customer-notes"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                    placeholder={copy.notesPlaceholder}
                    rows={3}
                    className="mt-2 w-full resize-none border-0 border-b border-line bg-transparent py-3 text-base font-light focus:border-gold/50 focus:outline-none"
                  />
                </div>
              </div>
              <StepNav
                onBack={goBack}
                onContinue={goNext}
                backLabel={copy.back}
                continueLabel={copy.continue}
                continueDisabled={!canContinue}
              />
            </StepShell>
          )}

          {step === "summary" && summaryRows && (
            <StepShell
              title={copy.summaryTitle}
              subtitle={copy.summarySubtitle}
              animationKey="summary"
              direction={direction}
            >
              <dl className="divide-y divide-line border border-line">
                {summaryRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <dt className="text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-light text-foreground sm:text-end">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <StepNav
                onBack={goBack}
                onContinue={goNext}
                backLabel={copy.back}
                continueLabel={copy.continue}
              />
            </StepShell>
          )}

          {step === "confirm" && summaryRows && (
            <StepShell
              title={copy.confirmTitle}
              subtitle={copy.confirmSubtitle}
              animationKey="confirm"
              direction={direction}
            >
              <div className="border border-line-strong bg-gold/5 p-6 sm:p-8">
                <dl className="space-y-3">
                  {summaryRows.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-muted">{row.label}</dt>
                      <dd className="text-end font-light">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={isConfirming}
                  className="btn-gold relative w-full disabled:cursor-wait"
                >
                  {isConfirming ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="loading-spinner" aria-hidden />
                      {copy.confirming}
                    </span>
                  ) : (
                    copy.confirmButton
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => goTo("summary", -1)}
                  disabled={isConfirming}
                  className="touch-target-block justify-center text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground"
                >
                  {copy.edit}
                </button>
              </div>
            </StepShell>
          )}
        </div>
      </div>
    </div>
  );
}
