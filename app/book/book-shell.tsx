"use client";

import { Suspense } from "react";
import { LocaleGate } from "@/components/i18n/locale-gate";
import { BookingFlow } from "@/components/booking/booking-flow";
import { useSearchParams } from "next/navigation";
import type { BarberId, ServiceId } from "@/lib/booking/types";
import { SERVICE_IDS } from "@/lib/i18n/booking-content";

function BookingFlowLoader() {
  const params = useSearchParams();
  const serviceParam = params.get("service");
  const barberParam = params.get("barber");

  const initialService = SERVICE_IDS.includes(serviceParam as ServiceId)
    ? (serviceParam as ServiceId)
    : null;

  const initialBarber =
    barberParam === "andi" ||
    barberParam === "raka" ||
    barberParam === "dimas" ||
    barberParam === "any"
      ? (barberParam as BarberId)
      : null;

  return (
    <BookingFlow
      initialServiceId={initialService}
      initialBarberId={initialBarber}
    />
  );
}

export function BookShell() {
  return (
    <LocaleGate>
      <Suspense fallback={<div className="min-h-svh bg-background" />}>
        <BookingFlowLoader />
      </Suspense>
    </LocaleGate>
  );
}
