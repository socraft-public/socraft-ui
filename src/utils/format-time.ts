import { SupportedLocale } from "./format-date";

const LOCALE_MAP: Record<SupportedLocale, string> = {
  fr: "fr-CH",
  en: "en-US",
};

export const formatTime = (
  timestamp: number | string,
  locale: SupportedLocale = "fr",
): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat(LOCALE_MAP[locale], {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }
};
