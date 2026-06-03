import type { BookingFormState } from "./types";
import { getBarber, getService } from "./data";
import { whatsappUrl } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/types";

type BookingLabels = {
  serviceName: string;
  barberName: string;
  dateFormatted: string;
  time: string;
  customerName: string;
  customerPhone: string;
  notes: string;
};

export function buildBookingWhatsAppMessage(labels: BookingLabels): string {
  const notesLine = labels.notes.trim() || "-";

  return `Halo,

Saya ingin melakukan booking.

Nama:
${labels.customerName}

Nomor WhatsApp:
${labels.customerPhone}

Layanan:
${labels.serviceName}

Barber:
${labels.barberName}

Tanggal:
${labels.dateFormatted}

Jam:
${labels.time}

Catatan:
${notesLine}

Mohon konfirmasi ketersediaannya.

Terima kasih.`;
}

export function resolveBookingLabels(
  state: BookingFormState,
  locale: Locale,
  getServiceLabel: (id: string) => { name: string; duration: string },
  getBarberLabel: (id: string) => { name: string },
  formatDate: (iso: string) => string,
): BookingLabels | null {
  if (
    !state.serviceId ||
    !state.barberId ||
    !state.date ||
    !state.time ||
    !state.customerName.trim() ||
    !state.customerPhone.trim()
  ) {
    return null;
  }

  const service = getService(state.serviceId);
  if (!service) return null;

  const serviceLabel = getServiceLabel(state.serviceId);
  const barberLabel =
    state.barberId === "any"
      ? { name: locale === "id" ? "Barber tersedia" : "Any available barber" }
      : getBarberLabel(state.barberId);

  return {
    serviceName: serviceLabel.name,
    barberName: barberLabel.name,
    dateFormatted: formatDate(state.date),
    time: state.time,
    customerName: state.customerName.trim(),
    customerPhone: state.customerPhone.trim(),
    notes: state.notes.trim(),
  };
}

export function getBookingWhatsAppUrl(
  state: BookingFormState,
  locale: Locale,
  getServiceLabel: (id: string) => { name: string; duration: string },
  getBarberLabel: (id: string) => { name: string },
  formatDate: (iso: string) => string,
): string | null {
  const labels = resolveBookingLabels(
    state,
    locale,
    getServiceLabel,
    getBarberLabel,
    formatDate,
  );
  if (!labels) return null;
  return whatsappUrl(buildBookingWhatsAppMessage(labels));
}
