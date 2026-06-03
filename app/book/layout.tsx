import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Piqu Barbershop",
  description:
    "Book your grooming appointment at Piqu Barbershop, Kemang Jakarta. Choose service, barber, date, and time — confirmed via WhatsApp.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
