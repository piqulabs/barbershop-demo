import type { Locale } from "./types";

export type Translations = {
  meta: { title: string; description: string };
  gate: {
    eyebrow: string;
    title: string;
    subtitle: string;
    english: string;
    indonesian: string;
    englishAria: string;
    indonesianAria: string;
  };
  nav: {
    homeAria: string;
    mainAria: string;
    mobileAria: string;
    services: string;
    craft: string;
    gallery: string;
    contact: string;
    reserve: string;
    menu: string;
    languageAria: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleEmphasis: string;
    body: string;
    ctaReserve: string;
    ctaMenu: string;
    meta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    extras: string;
    enquire: string;
    items: { name: string; note: string; price: string }[];
  };
  craft: {
    imageAlt: string;
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    pillars: { title: string; text: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    body: string;
    items: { label: string; alt: string }[];
  };
  testimonials: {
    featured: { quote: string; role: string };
    secondary: { quote: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    hoursLabel: string;
    hoursWeekday: string;
    hoursSaturday: string;
    phoneLabel: string;
    formEyebrow: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
  footer: { rights: string };
  images: {
    heroAlt: string;
    ctaAlt: string;
  };
};

const en: Translations = {
  meta: {
    title: "Piqu Barbershop | Premium Grooming",
    description:
      "A private grooming house for men who value precision, discretion, and craft.",
  },
  gate: {
    eyebrow: "Welcome",
    title: "Choose your language",
    subtitle: "Select a language to enter the Piqu experience.",
    english: "English",
    indonesian: "Bahasa Indonesia",
    englishAria: "Continue in English",
    indonesianAria: "Lanjutkan dalam Bahasa Indonesia",
  },
  nav: {
    homeAria: "Piqu Barbershop — home",
    mainAria: "Main navigation",
    mobileAria: "Mobile navigation",
    services: "Services",
    craft: "Craft",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Reserve",
    menu: "Menu",
    languageAria: "Language",
  },
  hero: {
    eyebrow: "Est. 2012",
    titleLine1: "Grooming,",
    titleEmphasis: "refined.",
    body: "A private barbershop for men who expect precision without pretense.",
    ctaReserve: "Reserve a chair",
    ctaMenu: "View the menu",
    meta: "Downtown · By appointment · Walk-ins when available",
  },
  services: {
    eyebrow: "Services",
    title: "The menu",
    body: "Every service opens with a consultation and closes with a finish you can trust.",
    extras: "Grey blending, father & son, and private events —",
    enquire: "enquire",
    items: [
      {
        name: "Signature Cut",
        note: "Consultation, cut, hot towel, and styled finish",
        price: "$45",
      },
      {
        name: "Hot Towel Shave",
        note: "Straight razor, essential oils, and post-shave balm",
        price: "$40",
      },
      {
        name: "The Executive",
        note: "Cut, beard detail, and scalp massage",
        price: "$75",
      },
      {
        name: "Beard Sculpt",
        note: "Line-up, shape, and conditioning treatment",
        price: "$30",
      },
    ],
  },
  craft: {
    imageAlt: "Barber precisely cutting a client's hair",
    eyebrow: "The house",
    titleBefore: "Why gentlemen",
    titleEmphasis: "choose Piqu",
    pillars: [
      {
        title: "Master barbers",
        text: "Classical technique. Contemporary eye. No apprentices at your chair.",
      },
      {
        title: "Quiet luxury",
        text: "Low light, leather, and time set aside — grooming as ritual.",
      },
      {
        title: "Exacting standards",
        text: "Premium products, precise finishes, and a result you feel before you leave.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "The work",
    body: "A restrained glimpse — the craft speaks quietly.",
    items: [
      { label: "The fade", alt: "Close-up of a precision skin fade" },
      { label: "The shave", alt: "Hot towel straight-razor shave" },
      { label: "The house", alt: "Premium barbershop interior" },
    ],
  },
  testimonials: {
    featured: {
      quote:
        "The only place I trust with a fade. Understated, exacting, and never rushed.",
      role: "Client since 2019",
    },
    secondary: [
      {
        quote:
          "A shave that feels ceremonial. The room itself demands you slow down.",
      },
      {
        quote:
          "Discreet, polished, and consistently excellent. This is what a modern barbershop should be.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Visit us",
    addressLabel: "Address",
    addressLine1: "2847 Kingsway Avenue",
    addressLine2: "Suite 12, Downtown",
    hoursLabel: "Hours",
    hoursWeekday: "Tue – Fri · 9am – 8pm",
    hoursSaturday: "Sat · 8am – 6pm",
    phoneLabel: "Telephone",
    formEyebrow: "Enquiries",
    nameLabel: "Name",
    namePlaceholder: "Name",
    emailLabel: "Email",
    emailPlaceholder: "Email",
    messageLabel: "Message",
    messagePlaceholder: "Message",
    submit: "Send enquiry →",
  },
  cta: {
    eyebrow: "Reservations",
    title: "Your chair awaits",
    body: "Appointments are limited. Reserve yours with a single call.",
    button: "Book appointment",
  },
  footer: { rights: "All rights reserved" },
  images: {
    heroAlt: "Warm-lit vintage barbershop interior",
    ctaAlt: "Grooming tools on a dark wood counter",
  },
};

const id: Translations = {
  meta: {
    title: "Piqu Barbershop | Perawatan Pria Premium",
    description:
      "Rumah perawatan privat untuk pria yang menghargai presisi, ketenangan, dan keahlian.",
  },
  gate: {
    eyebrow: "Selamat datang",
    title: "Pilih bahasa Anda",
    subtitle: "Pilih bahasa untuk memasuki pengalaman Piqu.",
    english: "English",
    indonesian: "Bahasa Indonesia",
    englishAria: "Continue in English",
    indonesianAria: "Lanjutkan dalam Bahasa Indonesia",
  },
  nav: {
    homeAria: "Piqu Barbershop — beranda",
    mainAria: "Navigasi utama",
    mobileAria: "Navigasi seluler",
    services: "Layanan",
    craft: "Filosofi",
    gallery: "Galeri",
    contact: "Kontak",
    reserve: "Reservasi",
    menu: "Menu",
    languageAria: "Bahasa",
  },
  hero: {
    eyebrow: "Berdiri sejak 2012",
    titleLine1: "Perawatan,",
    titleEmphasis: "berkelas.",
    body: "Barbershop privat untuk pria yang menghargai presisi tanpa berlebihan.",
    ctaReserve: "Reservasi kursi",
    ctaMenu: "Lihat layanan",
    meta: "Pusat kota · Dengan reservasi · Tanpa reservasi jika kursi tersedia",
  },
  services: {
    eyebrow: "Layanan",
    title: "Daftar layanan",
    body: "Setiap layanan diawali konsultasi dan diakhiri penampilan yang bisa Anda percaya.",
    extras: "Penyamaran uban, ayah & anak, dan acara privat —",
    enquire: "hubungi kami",
    items: [
      {
        name: "Potongan Signature",
        note: "Konsultasi, potong, handuk panas, dan styling akhir",
        price: "Rp 450.000",
      },
      {
        name: "Cukur Handuk Panas",
        note: "Pisau cukur, minyak esensial, dan balm pasca-cukur",
        price: "Rp 400.000",
      },
      {
        name: "Paket Eksekutif",
        note: "Potong, detail jenggot, dan pijat kulit kepala",
        price: "Rp 750.000",
      },
      {
        name: "Sculpt Jenggot",
        note: "Garis, bentuk, dan perawatan kondisioner",
        price: "Rp 300.000",
      },
    ],
  },
  craft: {
    imageAlt: "Tukang cukur sedang mengerjakan potongan rambut",
    eyebrow: "Ruang kami",
    titleBefore: "Mengapa pria",
    titleEmphasis: "memilih Piqu",
    pillars: [
      {
        title: "Tukang cukur master",
        text: "Teknik klasik. Mata kontemporer. Tanpa magang di kursi Anda.",
      },
      {
        title: "Kemewahan yang tenang",
        text: "Cahaya redup, kulit asli, dan waktu yang disediakan — perawatan sebagai ritual.",
      },
      {
        title: "Standar tanpa kompromi",
        text: "Produk premium, finishing presisi, dan hasil yang Anda rasakan sebelum beranjak.",
      },
    ],
  },
  gallery: {
    eyebrow: "Galeri",
    title: "Karya kami",
    body: "Sekilas yang sengaja terbatas — keahlian berbicara sendiri.",
    items: [
      { label: "Fade presisi", alt: "Tampak dekat fade presisi" },
      { label: "Cukur klasik", alt: "Cukur dengan handuk panas dan pisau cukur" },
      { label: "Ruang kami", alt: "Interior barbershop premium" },
    ],
  },
  testimonials: {
    featured: {
      quote:
        "Satu-satunya tempat saya percaya untuk fade. Sederhana, presisi, dan tidak pernah terburu-buru.",
      role: "Pelanggan sejak 2019",
    },
    secondary: [
      {
        quote:
          "Cukuran yang terasa seperti ritual. Ruangannya sendiri membuat Anda melambat.",
      },
      {
        quote:
          "Diskret, rapi, dan konsisten luar biasa. Inilah barbershop modern seharusnya.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontak",
    title: "Kunjungi kami",
    addressLabel: "Alamat",
    addressLine1: "Jl. Sudirman No. 2847",
    addressLine2: "Lantai 12, Pusat Kota",
    hoursLabel: "Jam buka",
    hoursWeekday: "Sel – Jum · 09.00 – 20.00",
    hoursSaturday: "Sab · 08.00 – 18.00",
    phoneLabel: "Telepon",
    formEyebrow: "Pertanyaan",
    nameLabel: "Nama",
    namePlaceholder: "Nama",
    emailLabel: "Email",
    emailPlaceholder: "Email",
    messageLabel: "Pesan",
    messagePlaceholder: "Pesan",
    submit: "Kirim pertanyaan →",
  },
  cta: {
    eyebrow: "Reservasi",
    title: "Kursi Anda menanti",
    body: "Slot terbatas. Reservasi cukup dengan satu telepon.",
    button: "Buat reservasi",
  },
  footer: { rights: "Hak cipta dilindungi" },
  images: {
    heroAlt: "Interior barbershop dengan pencahayaan hangat",
    ctaAlt: "Detail peralatan grooming di meja kayu",
  },
};

export const translations: Record<Locale, Translations> = { en, id };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
