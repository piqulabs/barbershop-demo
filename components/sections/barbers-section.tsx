"use client";

import Image from "next/image";
import Link from "next/link";
import { BARBERS } from "@/lib/booking/data";
import type { BarberId } from "@/lib/booking/types";
import { getBarbersSection, getBookingUi } from "@/lib/i18n/booking-content";
import { useLanguage } from "@/components/i18n/language-provider";

export function BarbersSection() {
  const { locale } = useLanguage();
  const section = getBarbersSection(locale ?? "id");
  const booking = getBookingUi(locale ?? "id");

  return (
    <section id="barbers" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
            {section.title}
          </h2>
          <p className="body-lg mx-auto mt-4 sm:mt-6">{section.body}</p>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BARBERS.map((barber) => {
            const label = booking.barbers[barber.id as BarberId];
            return (
              <li key={barber.id}>
                <article className="service-card group flex h-full flex-col border border-line bg-[#0a0a0a]/50">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                    <Image
                      src={barber.photo}
                      alt={label.name}
                      fill
                      className="object-cover object-top saturate-[0.88] transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="headline text-2xl text-foreground">{label.name}</p>
                      <p className="mt-1 text-xs font-light text-muted">
                        {label.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <p className="text-[0.625rem] uppercase tracking-[0.2em] text-gold">
                      {barber.experienceYears} {booking.yearsExp}
                    </p>
                    <Link
                      href={`/book?barber=${barber.id}`}
                      className="mt-6 inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.22em] text-gold transition-colors hover:text-foreground"
                    >
                      {section.bookWith} {label.name.split(" ")[0]} →
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center sm:mt-14">
          <Link href="/book" className="btn-gold inline-flex">
            {booking.startBooking}
          </Link>
        </div>
      </div>
    </section>
  );
}
