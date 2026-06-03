"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";
import { BarbersSection } from "@/components/sections/barbers-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SERVICE_IDS } from "@/lib/i18n/booking-content";
import { SITE, telUrl, whatsappUrl } from "@/lib/site-config";

const GALLERY_IMAGES = [
  {
    src: "/images/fade_haircut.jpg",
    layout:
      "col-span-2 row-span-2 min-h-[280px] sm:col-span-7 sm:row-span-2 sm:min-h-0",
  },
  {
    src: "/images/hotTowelShave.jpg",
    layout: "col-span-1 row-span-1 min-h-[200px] sm:col-span-5 sm:min-h-[200px]",
  },
  {
    src: "/images/studioBarber.jpg",
    layout: "col-span-1 row-span-1 min-h-[200px] sm:col-span-5 sm:min-h-[200px]",
  },
  {
    src: "/images/beard_Cut.jpg",
    layout: "col-span-1 row-span-1 min-h-[180px] sm:col-span-4 sm:min-h-[180px]",
  },
  {
    src: "/images/finishing.jpg",
    layout: "col-span-2 row-span-1 min-h-[180px] sm:col-span-8 sm:min-h-[200px]",
  },
] as const;

const PAGE_IMAGES = {
  hero: "https://picsum.photos/seed/piqu-hero/1600/2000",
  craft: "/images/mansGroom.jpg",
  booking: "https://picsum.photos/seed/piqu-cta/1600/900",
};

const PILLAR_NUMS = ["01", "02", "03"] as const;

function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  overlay = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  overlay?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#111] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="gallery-img object-cover object-center saturate-[0.88] contrast-[1.05]"
      />
      {overlay && (
        <>
          <div className="absolute inset-0 bg-black/25" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent"
            aria-hidden
          />
        </>
      )}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto px-5 sm:px-10 ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}
    >
      {children}
    </div>
  );
}

function GoldButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = "btn-gold w-full sm:w-auto";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="touch-target-block justify-center text-xs font-normal uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-gold sm:justify-start sm:text-[0.6875rem] sm:tracking-[0.28em]"
    >
      {children}
    </Link>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function LandingPage() {
  const { t } = useLanguage();

  if (!t) return null;

  const waContact = whatsappUrl(t.whatsapp.defaultMessage);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#barbers", label: t.nav.barbers },
    { href: "#craft", label: t.nav.craft },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ] as const;

  return (
    <div className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-40 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-10 sm:py-5">
          <Link
            href="#"
            className="touch-target -ms-2 shrink-0 justify-start ps-2"
            aria-label={t.nav.homeAria}
          >
            <span className="headline block text-2xl tracking-[0.1em] uppercase sm:text-[1.75rem] sm:tracking-[0.12em]">
              Piqu
            </span>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 xl:gap-10 lg:flex"
            aria-label={t.nav.mainAria}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="touch-target-block px-2 text-[0.6875rem] font-normal uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher className="hidden sm:flex" />
            <Link
              href="/book"
              className="touch-target hidden text-[0.6875rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:text-gold md:inline-flex"
            >
              {t.nav.reserve}
            </Link>

            <details className="relative lg:hidden">
              <summary className="touch-target cursor-pointer list-none text-xs uppercase tracking-[0.22em] text-muted transition-colors group-open:text-foreground [&::-webkit-details-marker]:hidden">
                {t.nav.menu}
              </summary>
              <nav
                className="absolute right-0 top-full z-50 mt-2 w-[min(calc(100vw-2.5rem),16rem)] border border-line bg-background py-2 shadow-2xl backdrop-blur-md"
                aria-label={t.nav.mobileAria}
              >
                <div className="flex justify-center px-4 py-3 sm:hidden">
                  <LanguageSwitcher />
                </div>
                <div className="hairline mx-5 mb-2 sm:hidden" />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="touch-target-block w-full justify-start px-5 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:bg-white/5 hover:text-foreground active:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="hairline mx-5 my-2" />
                <Link
                  href="/book"
                  className="touch-target-block w-full justify-start px-5 text-xs uppercase tracking-[0.2em] text-foreground active:bg-white/10"
                >
                  {t.nav.reserve}
                </Link>
              </nav>
            </details>
          </div>
        </div>
        <div className="hairline mx-5 opacity-60 sm:mx-10" />
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-svh flex-col justify-end pb-12 pt-[calc(var(--header-height)+env(safe-area-inset-top)+2.5rem)] sm:pb-16 sm:pt-[calc(var(--header-height)+env(safe-area-inset-top)+3.5rem)] lg:pb-24"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 lg:hidden" aria-hidden>
            <EditorialImage
              src={PAGE_IMAGES.hero}
              alt=""
              sizes="100vw"
              priority
              className="h-full w-full opacity-40"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background"
              aria-hidden
            />
          </div>

          <Container>
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
              <div
                className="relative z-10 lg:max-w-xl"
                style={{ animation: "reveal 1.2s ease-out both" }}
              >
                <p className="eyebrow">{t.hero.eyebrow}</p>
                <h1
                  id="hero-heading"
                  className="headline mt-5 text-[clamp(2.75rem,11vw,6.25rem)] sm:mt-8"
                >
                  {t.hero.titleLine1}
                  <br />
                  <em>{t.hero.titleEmphasis}</em>
                </h1>
                <p className="body-lg mt-6 max-w-lg leading-relaxed sm:mt-8">
                  {t.hero.body}
                </p>

                <ul
                  className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
                  aria-label="Trust highlights"
                >
                  {t.hero.trustItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-light uppercase tracking-[0.16em] text-foreground/75 sm:text-[0.6875rem] sm:tracking-[0.2em]"
                    >
                      <span className="h-px w-4 shrink-0 bg-gold/70" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:mt-12 sm:max-w-none">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <GoldButton href="/book">
                      {t.hero.ctaReserve}
                    </GoldButton>
                    <TextLink href="#services">{t.hero.ctaMenu}</TextLink>
                  </div>
                  <p className="text-center text-[0.625rem] uppercase tracking-[0.22em] text-muted sm:text-start sm:text-[0.6875rem] sm:tracking-[0.24em]">
                    {t.hero.ctaNote}
                  </p>
                </div>

                <div className="mt-12 hidden lg:block">
                  <div className="hairline" />
                  <p className="mt-5 text-sm font-light leading-relaxed text-muted">
                    {t.hero.meta}
                  </p>
                </div>
              </div>

              <div
                className="relative z-10 hidden aspect-[4/5] max-h-[min(72vh,640px)] lg:block lg:justify-self-end"
                style={{ animation: "reveal 1.2s ease-out 0.12s both" }}
              >
                <div className="absolute -inset-px border border-line-strong" aria-hidden />
                <EditorialImage
                  src={PAGE_IMAGES.hero}
                  alt={t.images.heroAlt}
                  sizes="(max-width: 1024px) 0vw, 45vw"
                  priority
                  className="h-full w-full"
                />
              </div>
            </div>
          </Container>

          <div className="relative z-10 mx-auto mt-10 max-w-6xl px-5 sm:px-10 lg:hidden">
            <div className="hairline" />
            <p className="mt-5 text-sm font-light leading-relaxed text-muted">
              {t.hero.meta}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section
          className="border-y border-line bg-[#0a0a0a]"
          aria-label="Business statistics"
        >
          <Container className="py-0">
            <dl className="grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
              {t.stats.items.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-12"
                >
                  <dt className="stat-value">{stat.value}</dt>
                  <dd className="mt-3 text-[0.625rem] font-light uppercase tracking-[0.2em] text-muted sm:text-[0.6875rem] sm:tracking-[0.24em]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* Services */}
        <Section id="services">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                {t.services.title}
              </h2>
              <p className="body-lg mx-auto mt-4 sm:mt-6">{t.services.body}</p>
            </div>

            <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5">
              {t.services.items.map((service, index) => (
                <li key={service.name}>
                  <article className="service-card group relative flex h-full flex-col border border-line p-6 sm:p-8">
                    {service.popular && (
                      <span className="absolute end-6 top-0 -translate-y-1/2 bg-gold px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-background">
                        {t.services.popularBadge}
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="headline text-xl sm:text-2xl">{service.name}</h3>
                      <span className="shrink-0 font-display text-lg text-gold sm:text-xl">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                      {service.note}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                      <span className="text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                        {service.duration}
                      </span>
                      <Link
                        href={`/book?service=${SERVICE_IDS[index]}`}
                        className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity group-hover:opacity-100 sm:opacity-100"
                      >
                        {t.services.bookService} →
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center text-sm font-light leading-relaxed text-muted sm:mt-14">
              {t.services.extras}{" "}
              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center text-gold/90 underline-offset-4 hover:text-gold hover:underline"
              >
                {t.services.enquire}
              </Link>
            </p>
          </Container>
        </Section>

        <BarbersSection />

        {/* About / Craft */}
        <Section id="craft" className="border-t border-line">
          <Container>
            <EditorialImage
              src={PAGE_IMAGES.craft}
              alt={t.images.craftAlt}
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]"
            />
          </Container>
          <Container narrow className="mt-12 sm:mt-20">
            <p className="eyebrow text-center">{t.craft.eyebrow}</p>
            <h2 className="headline mt-4 text-center text-3xl sm:mt-6 sm:text-5xl">
              {t.craft.titleBefore} <em>{t.craft.titleEmphasis}</em>
            </h2>
            <ul className="mt-12 space-y-10 sm:mt-16 sm:space-y-16">
              {t.craft.pillars.map((pillar, index) => (
                <li
                  key={PILLAR_NUMS[index]}
                  className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[4rem_1fr] sm:gap-10 sm:pt-10"
                >
                  <span className="eyebrow text-muted">{PILLAR_NUMS[index]}</span>
                  <div>
                    <h3 className="headline text-xl sm:text-2xl">{pillar.title}</h3>
                    <p className="body-lg mt-3 max-w-lg">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* Gallery — masonry */}
        <Section id="gallery">
          <Container>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <p className="eyebrow">{t.gallery.eyebrow}</p>
                <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                  {t.gallery.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
                {t.gallery.body}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 auto-rows-fr sm:mt-14 sm:grid-cols-12 sm:gap-4">
              {t.gallery.items.map((item, index) => (
                <figure
                  key={item.label}
                  className={`gallery-item ${GALLERY_IMAGES[index].layout}`}
                >
                  <Image
                    src={GALLERY_IMAGES[index].src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="gallery-img object-cover object-center saturate-[0.85] contrast-[1.05]"
                  />
                  <div className="gallery-overlay" aria-hidden />
                  <figcaption className="gallery-caption absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 sm:p-6">
                    <p className="eyebrow text-gold/90">{item.label}</p>
                    <span className="hidden text-[0.625rem] uppercase tracking-[0.24em] text-foreground/60 sm:inline">
                      {t.gallery.viewLabel}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" className="border-t border-line bg-[#0a0a0a]">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{t.testimonials.eyebrow}</p>
              <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                {t.testimonials.title}
              </h2>
            </div>
            <ul className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
              {t.testimonials.items.map((item) => (
                <li key={item.name}>
                  <blockquote className="flex h-full flex-col border border-line p-6 sm:p-8">
                    <StarRating />
                    <p className="mt-5 flex-1 text-sm font-light leading-relaxed text-foreground/85">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="mt-6 border-t border-line pt-5">
                      <cite className="not-italic">
                        <p className="text-sm font-normal text-foreground">{item.name}</p>
                        <p className="mt-1 text-xs font-light text-muted">{item.role}</p>
                      </cite>
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="eyebrow">{t.contact.eyebrow}</p>
                <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                  {t.contact.title}
                </h2>
                <p className="body-lg mt-4 max-w-md">{t.contact.body}</p>

                <dl className="mt-10 space-y-8 sm:mt-12">
                  <div className="border-s-2 border-gold/40 ps-5">
                    <dt className="eyebrow text-muted">{t.contact.addressLabel}</dt>
                    <dd className="mt-2 text-base font-light leading-relaxed text-foreground/90">
                      {t.contact.addressLine1}
                      <br />
                      {t.contact.addressLine2}
                    </dd>
                    <a
                      href={`https://maps.google.com/?q=${SITE.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center text-xs uppercase tracking-[0.2em] text-gold hover:underline"
                    >
                      Google Maps →
                    </a>
                  </div>
                  <div className="border-s-2 border-gold/40 ps-5">
                    <dt className="eyebrow text-muted">{t.contact.hoursLabel}</dt>
                    <dd className="mt-2 space-y-1 text-base font-light text-foreground/90">
                      <p>{t.contact.hoursWeekday}</p>
                      <p>{t.contact.hoursSaturday}</p>
                      <p className="text-muted">{t.contact.hoursSunday}</p>
                    </dd>
                  </div>
                  <div className="border-s-2 border-gold/40 ps-5">
                    <dt className="eyebrow text-muted">{t.contact.phoneLabel}</dt>
                    <dd className="mt-2 flex flex-col gap-2">
                      <a
                        href={waContact}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="touch-target-block justify-start text-base font-light text-foreground/90 transition-colors hover:text-gold"
                      >
                        WhatsApp · {SITE.phoneDisplay}
                      </a>
                      <a
                        href={telUrl()}
                        className="touch-target-block justify-start text-sm font-light text-muted transition-colors hover:text-gold"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <form action="#" method="post" className="lg:pt-4">
                <p className="eyebrow text-muted">{t.contact.formEyebrow}</p>
                <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t.contact.namePlaceholder}
                      className="w-full min-h-12 border-0 border-b border-line bg-transparent py-3 text-base font-light text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full min-h-12 border-0 border-b border-line bg-transparent py-3 text-base font-light text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full min-h-[7rem] resize-y border-0 border-b border-line bg-transparent py-3 text-base font-light text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none sm:resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="touch-target-block -ms-2 w-full justify-start ps-2 text-xs font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:text-foreground active:text-foreground sm:w-auto sm:text-[0.6875rem] sm:tracking-[0.32em]"
                  >
                    {t.contact.submit}
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </Section>

        {/* Booking CTA */}
        <section
          id="book"
          className="border-t border-line py-16 sm:py-28"
          aria-labelledby="booking-heading"
        >
          <Container narrow>
            <div className="relative overflow-hidden border border-line-strong px-5 py-14 text-center sm:px-12 sm:py-20">
              <div className="absolute inset-0" aria-hidden>
                <Image
                  src={PAGE_IMAGES.booking}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover object-center opacity-20 saturate-[0.65]"
                />
                <div className="absolute inset-0 bg-background/88" />
              </div>
              <div className="relative z-10">
                <p className="eyebrow">{t.booking.eyebrow}</p>
                <h2
                  id="booking-heading"
                  className="headline mt-6 text-3xl sm:mt-8 sm:text-5xl"
                >
                  {t.booking.title}
                </h2>
                <p className="body-lg mx-auto mt-4 max-w-md sm:mt-6">
                  {t.booking.body}
                </p>
                <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:mt-12">
                  <GoldButton href="/book">
                    {t.booking.whatsappCta}
                  </GoldButton>
                  <a
                    href={telUrl()}
                    className="touch-target-block justify-center text-sm font-light text-muted transition-colors hover:text-gold"
                  >
                    {t.booking.phoneCta} · {SITE.phoneDisplay}
                  </a>
                </div>
                <p className="mt-8 text-[0.625rem] uppercase tracking-[0.22em] text-muted sm:text-[0.6875rem] sm:tracking-[0.24em]">
                  {t.booking.note}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-line py-10 pb-[calc(5rem+env(safe-area-inset-bottom))] sm:py-12 sm:pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
            <div>
              <p className="headline text-lg tracking-[0.14em] uppercase">Piqu</p>
              <p className="mt-2 text-xs font-light text-muted">{t.footer.tagline}</p>
            </div>
            <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted sm:tracking-[0.22em]">
              © {new Date().getFullYear()} · {t.footer.rights}
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="touch-target px-3 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground sm:text-[0.6875rem] sm:tracking-[0.22em]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="touch-target px-3 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground sm:text-[0.6875rem] sm:tracking-[0.22em]"
              >
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
