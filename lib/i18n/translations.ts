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
    barbers: string;
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
    trustItems: [string, string, string];
    ctaReserve: string;
    ctaMenu: string;
    ctaNote: string;
    meta: string;
  };
  stats: {
    items: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    extras: string;
    enquire: string;
    bookService: string;
    popularBadge: string;
    items: {
      name: string;
      note: string;
      price: string;
      duration: string;
      popular?: boolean;
    }[];
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
    viewLabel: string;
    items: { label: string; alt: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    hoursLabel: string;
    hoursWeekday: string;
    hoursSaturday: string;
    hoursSunday: string;
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
  booking: {
    eyebrow: string;
    title: string;
    body: string;
    whatsappCta: string;
    phoneCta: string;
    note: string;
  };
  whatsapp: {
    ariaLabel: string;
    defaultMessage: string;
  };
  footer: { tagline: string; rights: string };
  images: { heroAlt: string; craftAlt: string; ctaAlt: string };
};

const en: Translations = {
  meta: {
    title: "Piqu Barbershop | Premium Grooming Jakarta",
    description:
      "Premium barbershop in Kemang, Jakarta. Master barbers, private chairs, and grooming trusted by 1,200+ clients since 2018.",
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
    barbers: "Barbers",
    craft: "About",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Book",
    menu: "Menu",
    languageAria: "Language",
  },
  hero: {
    eyebrow: "Kemang, Jakarta · Since 2018",
    titleLine1: "Confidence starts",
    titleEmphasis: "in the chair.",
    body: "Premium grooming for men who take their appearance seriously. Master barbers, private appointments, and finishes that look sharp from Monday morning to Friday night.",
    trustItems: [
      "Master barbers only",
      "4.9★ · 1,200+ clients",
      "Kemang · Private chairs",
    ],
    ctaReserve: "Book appointment",
    ctaMenu: "View services & prices",
    ctaNote: "7-step booking · Confirmed via WhatsApp",
    meta: "Jl. Kemang Raya · Open Tue–Sun · Walk-ins when available",
  },
  stats: {
    items: [
      { value: "5,000+", label: "Haircuts delivered" },
      { value: "4.9", label: "Average rating" },
      { value: "2018", label: "Established" },
      { value: "1,200+", label: "Happy clients" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Transparent pricing",
    body: "Every service includes a consultation, precision work, and a finish you can walk out proud of. No hidden fees.",
    extras: "Grey blending, father & son packages, and private events —",
    enquire: "contact us",
    bookService: "Book this service",
    popularBadge: "Most booked",
    items: [
      {
        name: "Classic Cut",
        note: "Consultation, scissor & clipper cut, hot towel finish",
        price: "Rp 85.000",
        duration: "45 min",
      },
      {
        name: "Premium Fade",
        note: "Skin or shadow fade, line-up, styled finish",
        price: "Rp 120.000",
        duration: "50 min",
        popular: true,
      },
      {
        name: "Haircut + Wash",
        note: "Cut, deep cleanse, scalp massage, and styling",
        price: "Rp 100.000",
        duration: "60 min",
      },
      {
        name: "Beard Grooming",
        note: "Shape, line-up, hot towel, and conditioning balm",
        price: "Rp 75.000",
        duration: "35 min",
      },
    ],
  },
  craft: {
    imageAlt: "Master barber at work in Piqu Barbershop",
    eyebrow: "The house",
    titleBefore: "Built for men who",
    titleEmphasis: "show up well",
    pillars: [
      {
        title: "Master barbers",
        text: "Every chair is staffed by experienced barbers — no trainees, no rush jobs.",
      },
      {
        title: "Private atmosphere",
        text: "Low lighting, quality leather, and time blocked per client. This is not a fast-food haircut.",
      },
      {
        title: "Products that perform",
        text: "Premium pomades, oils, and aftercare — chosen to hold up in Jakarta's heat and humidity.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "The craft",
    body: "A look inside our chairs, tools, and finishes — where detail is non-negotiable.",
    viewLabel: "View",
    items: [
      { label: "Premium fade", alt: "Precision fade finish" },
      { label: "Hot towel shave", alt: "Traditional straight-razor shave" },
      { label: "The studio", alt: "Piqu barbershop interior Kemang" },
      { label: "Beard detail", alt: "Beard grooming and line-up" },
      { label: "The finish", alt: "Styled haircut final look" },
    ],
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What clients say",
    items: [
      {
        quote:
          "Sudah dua tahun potong di sini. Fade-nya rapi, barber-nya dengar dulu baru potong. Buat meeting pagi selalu percaya diri.",
        name: "Budi Santoso",
        role: "Marketing Manager · Jakarta Selatan",
      },
      {
        quote:
          "Tempatnya tenang, nggak buru-buru. Cukur jenggot plus potong rambut, hasilnya bersih. Harga sesuai kualitas.",
        name: "Andi Pratama",
        role: "Karyawan bank · Setiabudi",
      },
      {
        quote:
          "Booking lewat WhatsApp gampang banget. Anak saya ikut potong juga — pelayanannya profesional, ramah tapi tetap rapi.",
        name: "Rizky Hidayat",
        role: "Pemilik usaha · Kemang",
      },
    ],
  },
  contact: {
    eyebrow: "Visit us",
    title: "Find the shop",
    body: "We're in the heart of Kemang — easy to reach, easy to book. Drop in or message us first.",
    addressLabel: "Location",
    addressLine1: "Jl. Kemang Raya No. 12A",
    addressLine2: "Kemang, Jakarta Selatan 12730",
    hoursLabel: "Opening hours",
    hoursWeekday: "Tue – Fri · 10.00 – 21.00",
    hoursSaturday: "Sat – Sun · 09.00 – 20.00",
    hoursSunday: "Mon · Closed",
    phoneLabel: "Phone & WhatsApp",
    formEyebrow: "Send a message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    submit: "Send message →",
  },
  booking: {
    eyebrow: "Ready when you are",
    title: "Secure your chair today",
    body: "Choose your service, barber, and time in a few steps — we'll send your request to WhatsApp for confirmation within minutes.",
    whatsappCta: "Start booking",
    phoneCta: "Or call us",
    note: "Free rescheduling up to 24 hours before your appointment",
  },
  whatsapp: {
    ariaLabel: "Book appointment on WhatsApp",
    defaultMessage: "Hi Piqu Barbershop, I'd like to book an appointment.",
  },
  footer: {
    tagline: "Premium grooming · Kemang, Jakarta",
    rights: "All rights reserved",
  },
  images: {
    heroAlt: "Premium barbershop interior with warm lighting",
    craftAlt: "Barber performing a precision cut",
    ctaAlt: "Barbershop tools and grooming products",
  },
};

const id: Translations = {
  meta: {
    title: "Piqu Barbershop | Grooming Premium Jakarta",
    description:
      "Barbershop premium di Kemang, Jakarta. Tukang cukur master, kursi privat, dan perawatan dipercaya 1.200+ klien sejak 2018.",
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
    barbers: "Barber",
    craft: "Tentang",
    gallery: "Galeri",
    contact: "Kontak",
    reserve: "Booking",
    menu: "Menu",
    languageAria: "Bahasa",
  },
  hero: {
    eyebrow: "Kemang, Jakarta · Sejak 2018",
    titleLine1: "Percaya diri",
    titleEmphasis: "dimulai di kursi.",
    body: "Grooming premium untuk pria yang serius soal penampilan. Tukang cukur berpengalaman, janji temu privat, dan hasil yang rapi dari Senin pagi sampai Jumat malam.",
    trustItems: [
      "Hanya tukang cukur master",
      "4.9★ · 1.200+ klien",
      "Kemang · Kursi privat",
    ],
    ctaReserve: "Booking janji temu",
    ctaMenu: "Lihat layanan & harga",
    ctaNote: "Booking 7 langkah · Konfirmasi via WhatsApp",
    meta: "Jl. Kemang Raya · Buka Sel–Min · Walk-in jika ada kursi",
  },
  stats: {
    items: [
      { value: "5.000+", label: "Potongan rambut" },
      { value: "4.9", label: "Rating rata-rata" },
      { value: "2018", label: "Berdiri sejak" },
      { value: "1.200+", label: "Klien puas" },
    ],
  },
  services: {
    eyebrow: "Layanan",
    title: "Harga transparan",
    body: "Setiap layanan termasuk konsultasi, pengerjaan presisi, dan finishing yang bisa Anda banggakan. Tanpa biaya tersembunyi.",
    extras: "Penyamaran uban, paket ayah & anak, dan acara privat —",
    enquire: "hubungi kami",
    bookService: "Booking layanan ini",
    popularBadge: "Paling laris",
    items: [
      {
        name: "Classic Cut",
        note: "Konsultasi, potong gunting & clipper, finish handuk panas",
        price: "Rp 85.000",
        duration: "45 menit",
      },
      {
        name: "Premium Fade",
        note: "Skin atau shadow fade, line-up, styling akhir",
        price: "Rp 120.000",
        duration: "50 menit",
        popular: true,
      },
      {
        name: "Haircut + Wash",
        note: "Potong, cuci deep cleanse, pijat kepala, dan styling",
        price: "Rp 100.000",
        duration: "60 menit",
      },
      {
        name: "Beard Grooming",
        note: "Bentuk, line-up, handuk panas, dan balm kondisioner",
        price: "Rp 75.000",
        duration: "35 menit",
      },
    ],
  },
  craft: {
    imageAlt: "Tukang cukur master sedang bekerja di Piqu",
    eyebrow: "Ruang kami",
    titleBefore: "Dibangun untuk pria",
    titleEmphasis: "yang tampil maksimal",
    pillars: [
      {
        title: "Tukang cukur master",
        text: "Setiap kursi ditangani barber berpengalaman — tanpa trainee, tanpa pengerjaan terburu-buru.",
      },
      {
        title: "Suasana privat",
        text: "Cahaya redup, kursi berkualitas, dan waktu khusus per klien. Bukan potong rambut ala fast food.",
      },
      {
        title: "Produk yang tahan",
        text: "Pomade, minyak, dan aftercare premium — dipilih agar tahan di cuaca Jakarta.",
      },
    ],
  },
  gallery: {
    eyebrow: "Galeri",
    title: "Keahlian kami",
    body: "Sekilas kursi, alat, dan hasil kami — di mana detail tidak bisa ditawar.",
    viewLabel: "Lihat",
    items: [
      { label: "Premium fade", alt: "Hasil fade presisi" },
      { label: "Cukur handuk panas", alt: "Cukur pisau cukur tradisional" },
      { label: "Studio kami", alt: "Interior Piqu Barbershop Kemang" },
      { label: "Detail jenggot", alt: "Grooming dan line-up jenggot" },
      { label: "Finishing", alt: "Tampilan akhir potongan rambut" },
    ],
  },
  testimonials: {
    eyebrow: "Ulasan",
    title: "Kata klien kami",
    items: [
      {
        quote:
          "Sudah dua tahun potong di sini. Fade-nya rapi, barber-nya dengar dulu baru potong. Buat meeting pagi selalu percaya diri.",
        name: "Budi Santoso",
        role: "Marketing Manager · Jakarta Selatan",
      },
      {
        quote:
          "Tempatnya tenang, nggak buru-buru. Cukur jenggot plus potong rambut, hasilnya bersih. Harga sesuai kualitas.",
        name: "Andi Pratama",
        role: "Karyawan bank · Setiabudi",
      },
      {
        quote:
          "Booking lewat WhatsApp gampang banget. Anak saya ikut potong juga — pelayanannya profesional, ramah tapi tetap rapi.",
        name: "Rizky Hidayat",
        role: "Pemilik usaha · Kemang",
      },
    ],
  },
  contact: {
    eyebrow: "Kunjungi kami",
    title: "Temukan salon kami",
    body: "Di pusat Kemang — mudah dijangkau, mudah dibooking. Datang langsung atau chat dulu.",
    addressLabel: "Lokasi",
    addressLine1: "Jl. Kemang Raya No. 12A",
    addressLine2: "Kemang, Jakarta Selatan 12730",
    hoursLabel: "Jam buka",
    hoursWeekday: "Sel – Jum · 10.00 – 21.00",
    hoursSaturday: "Sab – Min · 09.00 – 20.00",
    hoursSunday: "Sen · Tutup",
    phoneLabel: "Telepon & WhatsApp",
    formEyebrow: "Kirim pesan",
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    emailLabel: "Email",
    emailPlaceholder: "email@anda.com",
    messageLabel: "Pesan",
    messagePlaceholder: "Ada yang bisa kami bantu?",
    submit: "Kirim pesan →",
  },
  booking: {
    eyebrow: "Siap kapan Anda butuh",
    title: "Amankan kursi Anda hari ini",
    body: "Pilih layanan, barber, dan waktu dalam beberapa langkah — permintaan Anda dikirim ke WhatsApp untuk konfirmasi dalam hitungan menit.",
    whatsappCta: "Mulai booking",
    phoneCta: "Atau telepon kami",
    note: "Reschedule gratis hingga 24 jam sebelum janji temu",
  },
  whatsapp: {
    ariaLabel: "Booking janji temu via WhatsApp",
    defaultMessage:
      "Halo Piqu Barbershop, saya ingin booking janji temu.",
  },
  footer: {
    tagline: "Grooming premium · Kemang, Jakarta",
    rights: "Hak cipta dilindungi",
  },
  images: {
    heroAlt: "Interior barbershop premium dengan pencahayaan hangat",
    craftAlt: "Tukang cukur melakukan potongan presisi",
    ctaAlt: "Alat barbershop dan produk grooming",
  },
};

export const translations: Record<Locale, Translations> = { en, id };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
