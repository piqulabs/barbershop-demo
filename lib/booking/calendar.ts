const WEEKDAY_INDEX = [1, 2, 3, 4, 5, 6, 0] as const;

export function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function isPastDate(date: Date) {
  return startOfDay(date) < startOfDay(new Date());
}

/** Closed on Monday */
export function isClosedDay(date: Date) {
  return date.getDay() === 1;
}

export function isSelectableDate(date: Date) {
  return !isPastDate(date) && !isClosedDay(date);
}

export function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseISODate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDisplayDate(iso: string, locale: "en" | "id") {
  const date = parseISODate(iso);
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getMonthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startOffset = WEEKDAY_INDEX.indexOf(
    first.getDay() as (typeof WEEKDAY_INDEX)[number],
  );
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
