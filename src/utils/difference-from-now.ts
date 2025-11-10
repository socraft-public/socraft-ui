import dayjs, { Dayjs } from "dayjs";
import { getRawDate, SupportedLocale } from "./format-date";

export const differenceFromNow = (
  timestamp: number,
  fullDayDate?: string,
  locale: SupportedLocale = "fr",
): string => {
  let dateObj: Dayjs;

  if (isNaN(timestamp) && fullDayDate) {
    dateObj = dayjs(fullDayDate).startOf("day");
  } else {
    const date: string = getRawDate(new Date(timestamp).getTime());
    dateObj = dayjs(date);
  }

  const now: Dayjs = dayjs().startOf("day");
  let differenceInDays = dateObj.diff(now, "days");

  if (differenceInDays === 0) {
    return locale === "fr" ? "aujourd'hui" : "today";
  }

  const isPast = differenceInDays < 0;
  const absoluteDifference = Math.abs(differenceInDays);

  const getUnitLabel = (value: number, unit: "year" | "month" | "day") => {
    if (locale === "fr") {
      if (unit === "year") {
        return value > 1 ? "ans" : "an";
      }

      if (unit === "month") {
        return "mois";
      }

      return `jour${value > 1 ? "s" : ""}`;
    }

    if (unit === "year") {
      return value > 1 ? "years" : "year";
    }

    if (unit === "month") {
      return value > 1 ? "months" : "month";
    }

    return value > 1 ? "days" : "day";
  };

  const formatDifference = (value: number, unit: "year" | "month" | "day") => {
    const unitLabel = getUnitLabel(value, unit);

    if (locale === "fr") {
      const prefix = isPast ? "il y a" : "dans";
      return `${prefix} ${value} ${unitLabel}`;
    }

    return isPast ? `${value} ${unitLabel} ago` : `in ${value} ${unitLabel}`;
  };

  if (absoluteDifference >= 365) {
    const years = Math.floor(absoluteDifference / 365);
    return formatDifference(years, "year");
  }

  if (absoluteDifference >= 30) {
    const months = Math.floor(absoluteDifference / 30);
    return formatDifference(months, "month");
  }

  return formatDifference(absoluteDifference, "day");
};
