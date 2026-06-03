import type { BarberMeta, ServiceMeta } from "./types";

export const SERVICES: ServiceMeta[] = [
  {
    id: "classic-cut",
    price: 85000,
    priceDisplay: "Rp 85.000",
    durationMin: 45,
  },
  {
    id: "premium-fade",
    price: 120000,
    priceDisplay: "Rp 120.000",
    durationMin: 50,
    popular: true,
  },
  {
    id: "haircut-wash",
    price: 100000,
    priceDisplay: "Rp 100.000",
    durationMin: 60,
  },
  {
    id: "beard-grooming",
    price: 75000,
    priceDisplay: "Rp 75.000",
    durationMin: 35,
  },
];

export const BARBERS: BarberMeta[] = [
  {
    id: "andi",
    photo: "/images/random1.jpg",
    experienceYears: 8,
  },
  {
    id: "raka",
    photo: "/images/random2.jpg",
    experienceYears: 6,
  },
  {
    id: "dimas",
    photo: "/images/random3.jpg",
    experienceYears: 10,
  },
];

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}

export function getBarber(id: string) {
  return BARBERS.find((b) => b.id === id);
}
