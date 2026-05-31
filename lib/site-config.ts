/** Central business details — update once for production */
export const SITE = {
  phone: "+6281234567890",
  phoneDisplay: "+62 812-3456-7890",
  whatsappMessage: {
    en: "Hi Piqu Barbershop, I'd like to book an appointment.",
    id: "Halo Piqu Barbershop, saya ingin booking janji temu.",
  },
  mapsQuery: "Piqu+Barbershop+Kemang+Jakarta",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:${SITE.phone}`;
}
