import type { BarberId, ServiceId } from "@/lib/booking/types";
import type { Locale } from "./types";

export type BookingUiCopy = {
  pageEyebrow: string;
  pageTitle: string;
  pageSubtitle: string;
  backHome: string;
  stepLabels: [string, string, string, string, string, string, string];
  continue: string;
  back: string;
  selectServiceTitle: string;
  selectServiceSubtitle: string;
  selectBarberTitle: string;
  selectBarberSubtitle: string;
  selectDateTitle: string;
  selectDateSubtitle: string;
  closedMonday: string;
  selectTimeTitle: string;
  selectTimeSubtitle: string;
  customerTitle: string;
  customerSubtitle: string;
  fullName: string;
  fullNamePlaceholder: string;
  whatsappNumber: string;
  whatsappPlaceholder: string;
  notes: string;
  notesPlaceholder: string;
  summaryTitle: string;
  summarySubtitle: string;
  confirmTitle: string;
  confirmSubtitle: string;
  confirmButton: string;
  confirming: string;
  edit: string;
  summaryLabels: {
    service: string;
    price: string;
    duration: string;
    barber: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    notes: string;
  };
  services: Record<
    ServiceId,
    { name: string; note: string; duration: string }
  >;
  barbers: Record<BarberId, { name: string; specialty: string }>;
  anyBarber: { name: string; specialty: string };
  yearsExp: string;
  popularBadge: string;
  bookNow: string;
  startBooking: string;
};

export type BarbersSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  bookWith: string;
  selectBarber: string;
};

const enBooking: BookingUiCopy = {
  pageEyebrow: "Appointment",
  pageTitle: "Book your appointment",
  pageSubtitle: "Complete the steps below — we'll send your request to WhatsApp for confirmation.",
  backHome: "← Back to home",
  stepLabels: [
    "Service",
    "Barber",
    "Date",
    "Time",
    "Details",
    "Summary",
    "Confirm",
  ],
  continue: "Continue",
  back: "Back",
  selectServiceTitle: "Choose your service",
  selectServiceSubtitle: "All prices in Indonesian Rupiah. Includes consultation and finish.",
  selectBarberTitle: "Choose your barber",
  selectBarberSubtitle: "Select a specialist or let us assign the next available chair.",
  selectDateTitle: "Pick a date",
  selectDateSubtitle: "We're closed on Mondays. Same-week appointments available.",
  closedMonday: "Closed",
  selectTimeTitle: "Pick a time",
  selectTimeSubtitle: "All times are in WIB (Jakarta). We'll confirm availability via WhatsApp.",
  customerTitle: "Your details",
  customerSubtitle: "We'll use this to confirm your booking on WhatsApp.",
  fullName: "Full name",
  fullNamePlaceholder: "e.g. Budi Santoso",
  whatsappNumber: "WhatsApp number",
  whatsappPlaceholder: "e.g. 0812 3456 7890",
  notes: "Notes (optional)",
  notesPlaceholder: "Preferred style, allergies, etc.",
  summaryTitle: "Review your booking",
  summarySubtitle: "Please check everything before confirming.",
  confirmTitle: "Confirm & send",
  confirmSubtitle: "We'll open WhatsApp with your booking details pre-filled.",
  confirmButton: "Confirm booking via WhatsApp",
  confirming: "Opening WhatsApp…",
  edit: "Edit",
  summaryLabels: {
    service: "Service",
    price: "Price",
    duration: "Duration",
    barber: "Barber",
    date: "Date",
    time: "Time",
    name: "Name",
    phone: "WhatsApp",
    notes: "Notes",
  },
  services: {
    "classic-cut": {
      name: "Classic Cut",
      note: "Consultation, scissor & clipper cut, hot towel finish",
      duration: "45 min",
    },
    "premium-fade": {
      name: "Premium Fade",
      note: "Skin or shadow fade, line-up, styled finish",
      duration: "50 min",
    },
    "haircut-wash": {
      name: "Haircut + Wash",
      note: "Cut, deep cleanse, scalp massage, and styling",
      duration: "60 min",
    },
    "beard-grooming": {
      name: "Beard Grooming",
      note: "Shape, line-up, hot towel, and conditioning balm",
      duration: "35 min",
    },
  },
  barbers: {
    andi: { name: "Andi Wijaya", specialty: "Premium fades & modern cuts" },
    raka: { name: "Raka Pratama", specialty: "Classic cuts & scissor work" },
    dimas: { name: "Dimas Hartono", specialty: "Beard sculpt & hot towel shave" },
    any: { name: "", specialty: "" },
  },
  anyBarber: {
    name: "Any available barber",
    specialty: "First available master barber",
  },
  yearsExp: "yrs experience",
  popularBadge: "Most booked",
  bookNow: "Book now",
  startBooking: "Start booking",
};

const idBooking: BookingUiCopy = {
  pageEyebrow: "Janji temu",
  pageTitle: "Booking janji temu",
  pageSubtitle: "Lengkapi langkah berikut — permintaan Anda akan dikirim ke WhatsApp untuk konfirmasi.",
  backHome: "← Kembali ke beranda",
  stepLabels: [
    "Layanan",
    "Barber",
    "Tanggal",
    "Jam",
    "Data",
    "Ringkasan",
    "Konfirmasi",
  ],
  continue: "Lanjutkan",
  back: "Kembali",
  selectServiceTitle: "Pilih layanan",
  selectServiceSubtitle: "Semua harga dalam Rupiah. Termasuk konsultasi dan finishing.",
  selectBarberTitle: "Pilih Capster",
  selectBarberSubtitle: "Pilih spesialis atau biarkan kami tentukan barber yang tersedia.",
  selectDateTitle: "Pilih tanggal",
  selectDateSubtitle: "Tutup setiap Senin. Janji temu minggu ini masih tersedia.",
  closedMonday: "Tutup",
  selectTimeTitle: "Pilih jam",
  selectTimeSubtitle: "Waktu WIB (Jakarta). Kami konfirmasi ketersediaan via WhatsApp.",
  customerTitle: "Data Anda",
  customerSubtitle: "Digunakan untuk konfirmasi booking di WhatsApp.",
  fullName: "Nama lengkap",
  fullNamePlaceholder: "Contoh: Budi Santoso",
  whatsappNumber: "Nomor WhatsApp",
  whatsappPlaceholder: "Contoh: 0812 3456 7890",
  notes: "Catatan (opsional)",
  notesPlaceholder: "Gaya preferensi, alergi, dll.",
  summaryTitle: "Tinjau booking Anda",
  summarySubtitle: "Periksa kembali sebelum konfirmasi.",
  confirmTitle: "Konfirmasi & kirim",
  confirmSubtitle: "WhatsApp akan terbuka dengan detail booking yang sudah terisi.",
  confirmButton: "Konfirmasi booking via WhatsApp",
  confirming: "Membuka WhatsApp…",
  edit: "Ubah",
  summaryLabels: {
    service: "Layanan",
    price: "Harga",
    duration: "Durasi",
    barber: "Barber",
    date: "Tanggal",
    time: "Jam",
    name: "Nama",
    phone: "WhatsApp",
    notes: "Catatan",
  },
  services: {
    "classic-cut": {
      name: "Classic Cut",
      note: "Konsultasi, potong gunting & clipper, finish handuk panas",
      duration: "45 menit",
    },
    "premium-fade": {
      name: "Premium Fade",
      note: "Skin atau shadow fade, line-up, styling akhir",
      duration: "50 menit",
    },
    "haircut-wash": {
      name: "Haircut + Wash",
      note: "Potong, cuci deep cleanse, pijat kepala, styling",
      duration: "60 menit",
    },
    "beard-grooming": {
      name: "Beard Grooming",
      note: "Bentuk, line-up, handuk panas, balm kondisioner",
      duration: "35 menit",
    },
  },
  barbers: {
    andi: { name: "Andi Wijaya", specialty: "Premium fade & potongan modern" },
    raka: { name: "Raka Pratama", specialty: "Potongan klasik & gunting" },
    dimas: { name: "Dimas Hartono", specialty: "Sculpt jenggot & cukur handuk panas" },
    any: { name: "", specialty: "" },
  },
  anyBarber: {
    name: "Barber tersedia",
    specialty: "Barber master pertama yang tersedia",
  },
  yearsExp: "thn pengalaman",
  popularBadge: "Paling laris",
  bookNow: "Booking sekarang",
  startBooking: "Mulai booking",
};

const enBarbers: BarbersSectionCopy = {
  eyebrow: "Our barbers",
  title: "Master craftsmen",
  body: "Each barber brings years of experience and a distinct specialty — choose yours when you book.",
  bookWith: "Book with",
  selectBarber: "Select & book",
};

const idBarbers: BarbersSectionCopy = {
  eyebrow: "Barber kami",
  title: "Tukang cukur master",
  body: "Setiap barber membawa pengalaman dan keahlian khusus — pilih saat booking.",
  bookWith: "Booking dengan",
  selectBarber: "Pilih & booking",
};

export function getBookingUi(locale: Locale): BookingUiCopy {
  return locale === "id" ? idBooking : enBooking;
}

export function getBarbersSection(locale: Locale): BarbersSectionCopy {
  return locale === "id" ? idBarbers : enBarbers;
}

export const SERVICE_IDS: ServiceId[] = [
  "classic-cut",
  "premium-fade",
  "haircut-wash",
  "beard-grooming",
];
