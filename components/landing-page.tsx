"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";

const PHONE = "tel:+15551234567";
const PHONE_DISPLAY = "(555) 123-4567";

const gallerySources = [
  {
    src: "https://picsum.photos/seed/piqu-fade/1200/1600",
    aspect:
      "aspect-[4/5] max-h-[min(70vh,520px)] lg:max-h-none lg:aspect-auto lg:min-h-[520px]",
  },
  {
    src: "https://picsum.photos/seed/piqu-shave/900/1200",
    aspect:
      "aspect-[4/5] max-h-[min(60vh,440px)] lg:max-h-none lg:aspect-auto lg:min-h-[420px]",
  },
  {
    src: "https://picsum.photos/seed/piqu-house/900/1200",
    aspect:
      "aspect-[4/5] max-h-[min(60vh,440px)] lg:max-h-none lg:aspect-auto lg:min-h-[420px]",
  },
] as const;

const images = {
  hero: "https://picsum.photos/seed/piqu-hero/1600/2000",
  craft: "https://picsum.photos/seed/piqu-craft/1800/1000",
  cta: "https://picsum.photos/seed/piqu-cta/1600/900",
};

const testimonialNames = ["Piqu Chen", "David Okamoto", "Rendy Osborn"];
const pillarNums = ["01", "02", "03"] as const;

function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#111] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center saturate-[0.88] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-black/10"
        aria-hidden
      />
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
    <section id={id} className={`py-16 sm:py-28 lg:py-40 ${className}`}>
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

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex w-full min-h-12 items-center justify-center border border-gold/60 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.24em] text-foreground transition-colors duration-500 hover:border-gold hover:bg-gold/5 active:bg-gold/10 sm:w-auto sm:min-h-11 sm:px-10 sm:text-[0.6875rem] sm:tracking-[0.32em] ${className}`}
    >
      {children}
    </Link>
  );
}

function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`touch-target-block justify-center text-xs font-normal uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-gold sm:justify-start sm:text-[0.6875rem] sm:tracking-[0.28em] ${className}`}
    >
      {children}
    </Link>
  );
}

export function LandingPage() {
  const { t } = useLanguage();

  if (!t) return null;

  const navLinks = [
    { href: "#services", label: t.nav.services },
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
              href="#book"
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
                  href="#book"
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
        <section
          className="relative flex min-h-svh flex-col justify-end pb-12 pt-[calc(var(--header-height)+env(safe-area-inset-top)+2.5rem)] sm:pb-20 sm:pt-[calc(var(--header-height)+env(safe-area-inset-top)+3.5rem)] lg:pb-32"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 lg:hidden" aria-hidden>
            <EditorialImage
              src={images.hero}
              alt=""
              sizes="100vw"
              priority
              className="h-full w-full opacity-35"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
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
                  className="headline mt-5 text-[clamp(2.75rem,11vw,6.5rem)] sm:mt-8"
                >
                  {t.hero.titleLine1}
                  <br />
                  <em>{t.hero.titleEmphasis}</em>
                </h1>
                <p className="body-lg mt-6 max-w-md sm:mt-10">{t.hero.body}</p>
                <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:mt-14 sm:max-w-none sm:flex-row sm:items-center sm:gap-8">
                  <PrimaryButton href="#book">{t.hero.ctaReserve}</PrimaryButton>
                  <TextLink href="#services">{t.hero.ctaMenu}</TextLink>
                </div>
                <div className="mt-14 hidden lg:block">
                  <div className="hairline" />
                  <p className="mt-6 text-sm font-light leading-relaxed text-muted">
                    {t.hero.meta}
                  </p>
                </div>
              </div>

              <div
                className="relative z-10 hidden aspect-[4/5] max-h-[min(72vh,680px)] lg:block lg:justify-self-end"
                style={{ animation: "reveal 1.2s ease-out 0.12s both" }}
              >
                <EditorialImage
                  src={images.hero}
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

        <Section id="services">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow">{t.services.eyebrow}</p>
                <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl lg:text-[3.25rem]">
                  {t.services.title}
                </h2>
                <p className="body-lg mt-4 max-w-sm sm:mt-6">{t.services.body}</p>
              </div>
              <ul className="divide-y divide-line">
                {t.services.items.map((service) => (
                  <li key={service.name} className="group py-7 first:pt-0 sm:py-9">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h3 className="headline text-xl sm:text-3xl">{service.name}</h3>
                      <span className="font-display text-lg text-gold sm:shrink-0 sm:text-2xl">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted sm:mt-3">
                      {service.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-10 text-center text-sm font-light leading-relaxed text-muted sm:mt-16">
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

        <Section id="craft" className="border-t border-line">
          <Container>
            <EditorialImage
              src={images.craft}
              alt={t.craft.imageAlt}
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="aspect-[3/2] sm:aspect-[16/9] lg:aspect-[21/9]"
            />
          </Container>
          <Container narrow className="mt-12 sm:mt-28">
            <p className="eyebrow text-center">{t.craft.eyebrow}</p>
            <h2 className="headline mt-4 text-center text-3xl sm:mt-6 sm:text-5xl">
              {t.craft.titleBefore} <em>{t.craft.titleEmphasis}</em>
            </h2>
            <ul className="mt-12 space-y-10 sm:mt-20 sm:space-y-20">
              {t.craft.pillars.map((pillar, index) => (
                <li
                  key={pillarNums[index]}
                  className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[4rem_1fr] sm:gap-10 sm:pt-12"
                >
                  <span className="eyebrow text-muted">{pillarNums[index]}</span>
                  <div>
                    <h3 className="headline text-xl sm:text-3xl">{pillar.title}</h3>
                    <p className="body-lg mt-3 max-w-lg sm:mt-4">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section id="gallery">
          <Container>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
              <div>
                <p className="eyebrow">{t.gallery.eyebrow}</p>
                <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                  {t.gallery.title}
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-muted">
                {t.gallery.body}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {t.gallery.items.map((item, index) => (
                <figure
                  key={item.label}
                  className={`relative ${gallerySources[index].aspect}`}
                >
                  <EditorialImage
                    src={gallerySources[index].src}
                    alt={item.alt}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="absolute inset-0 h-full w-full"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8">
                    <p className="eyebrow text-gold/80">{item.label}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="testimonials" className="border-t border-line">
          <Container narrow>
            <blockquote className="text-center">
              <p className="headline text-[clamp(1.5rem,5vw,2.75rem)] leading-snug font-light italic text-foreground/95">
                &ldquo;{t.testimonials.featured.quote}&rdquo;
              </p>
              <footer className="mt-8 sm:mt-10">
                <cite className="not-italic">
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground sm:text-[0.6875rem] sm:tracking-[0.32em]">
                    {testimonialNames[0]}
                  </p>
                  <p className="mt-2 text-sm font-light text-muted">
                    {t.testimonials.featured.role}
                  </p>
                </cite>
              </footer>
            </blockquote>
            <div className="hairline mx-auto mt-12 max-w-xs sm:mt-20" />
            <div className="mt-12 grid gap-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-8 sm:text-left">
              {t.testimonials.secondary.map((item, index) => (
                <blockquote key={testimonialNames[index + 1]}>
                  <p className="text-sm font-light leading-relaxed text-muted">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic text-[0.6875rem] uppercase tracking-[0.28em] text-foreground/80">
                      {testimonialNames[index + 1]}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="contact">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-32">
              <div>
                <p className="eyebrow">{t.contact.eyebrow}</p>
                <h2 className="headline mt-4 text-3xl sm:mt-6 sm:text-5xl">
                  {t.contact.title}
                </h2>
                <dl className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
                  <div>
                    <dt className="eyebrow text-muted">{t.contact.addressLabel}</dt>
                    <dd className="mt-3 text-base font-light leading-relaxed text-foreground/90">
                      {t.contact.addressLine1}
                      <br />
                      {t.contact.addressLine2}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">{t.contact.hoursLabel}</dt>
                    <dd className="mt-3 text-base font-light leading-relaxed text-foreground/90">
                      {t.contact.hoursWeekday}
                      <br />
                      {t.contact.hoursSaturday}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">{t.contact.phoneLabel}</dt>
                    <dd className="mt-3">
                      <a
                        href={PHONE}
                        className="touch-target-block -ms-2 inline-flex ps-2 text-base font-light text-foreground/90 transition-colors hover:text-gold active:text-gold"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <form action="#" method="post" className="lg:pt-12">
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

        <section
          id="book"
          className="border-t border-line py-16 sm:py-36"
          aria-labelledby="cta-heading"
        >
          <Container narrow>
            <div className="relative overflow-hidden border border-line-strong px-5 py-12 text-center sm:px-16 sm:py-20">
              <div className="absolute inset-0" aria-hidden>
                <Image
                  src={images.cta}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover object-center opacity-25 saturate-[0.7]"
                />
                <div className="absolute inset-0 bg-background/85" />
              </div>
              <div className="relative z-10">
                <p className="eyebrow">{t.cta.eyebrow}</p>
                <h2
                  id="cta-heading"
                  className="headline mt-6 text-3xl sm:mt-8 sm:text-5xl lg:text-6xl"
                >
                  {t.cta.title}
                </h2>
                <p className="body-lg mx-auto mt-4 max-w-sm sm:mt-6">{t.cta.body}</p>
                <div className="mx-auto mt-10 flex w-full max-w-sm flex-col items-stretch gap-4 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-10">
                  <PrimaryButton href={PHONE}>{t.cta.button}</PrimaryButton>
                  <a
                    href={PHONE}
                    className="touch-target-block justify-center text-base font-light text-muted transition-colors hover:text-gold active:text-gold sm:text-sm"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-line py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:py-12">
        <Container>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-6">
            <p className="headline text-lg tracking-[0.14em] uppercase">Piqu</p>
            <p className="order-3 text-center text-xs uppercase tracking-[0.18em] text-muted sm:order-none sm:text-[0.6875rem] sm:tracking-[0.22em]">
              © {new Date().getFullYear()} · {t.footer.rights}
            </p>
            <div className="flex w-full justify-center gap-2 sm:w-auto sm:gap-6">
              <a
                href="#"
                className="touch-target px-4 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground active:text-foreground sm:text-[0.6875rem] sm:tracking-[0.22em]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="touch-target px-4 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground active:text-foreground sm:text-[0.6875rem] sm:tracking-[0.22em]"
              >
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
