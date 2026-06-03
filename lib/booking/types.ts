export type ServiceId =
  | "classic-cut"
  | "premium-fade"
  | "haircut-wash"
  | "beard-grooming";

export type BarberId = "andi" | "raka" | "dimas" | "any";

export type BookingStep =
  | "service"
  | "barber"
  | "date"
  | "time"
  | "customer"
  | "summary"
  | "confirm";

export type BookingFormState = {
  serviceId: ServiceId | null;
  barberId: BarberId | null;
  date: string | null;
  time: string | null;
  customerName: string;
  customerPhone: string;
  notes: string;
};

export type ServiceMeta = {
  id: ServiceId;
  price: number;
  priceDisplay: string;
  durationMin: number;
  popular?: boolean;
};

export type BarberMeta = {
  id: BarberId;
  photo: string;
  experienceYears: number;
};

export const BOOKING_STEPS: BookingStep[] = [
  "service",
  "barber",
  "date",
  "time",
  "customer",
  "summary",
  "confirm",
];

export const TIME_SLOTS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];
