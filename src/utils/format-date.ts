export type SupportedLocale = "fr" | "en";

const LOCALE_MAP: Record<SupportedLocale, string> = {
  fr: "fr-CH",
  en: "en-US",
};

export const formatDate = (
  timestamp: number | string,
  locale: SupportedLocale = "fr",
): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat(LOCALE_MAP[locale], {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(date);
  } catch {
    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}.${month}.${year}`;
  }
};

export const getRawDate = (timestamp: number): string => {
  const date: any = new Date(timestamp);

  if (!isNaN(date)) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  } else {
    return "";
  }
};
