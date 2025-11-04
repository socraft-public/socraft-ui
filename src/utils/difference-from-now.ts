import dayjs, { Dayjs } from "dayjs";
import { getRawDate } from "./format-date";

export const differenceFromNow = (
  timestamp: number,
  fullDayDate?: string,
): string => {
  let prefix: "dans" | "il y a" = "dans";
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
    return "aujourd'hui";
  }

  if (differenceInDays < 0) {
    prefix = "il y a";
    differenceInDays = Math.abs(differenceInDays);
  }

  if (differenceInDays >= 365) {
    const years = Math.floor(differenceInDays / 365);
    return `${prefix} ${years} an${years > 1 ? "s" : ""}`;
  } else if (differenceInDays >= 30) {
    const months = Math.floor(differenceInDays / 30);
    return `${prefix} ${months} mois`;
  } else {
    return `${prefix} ${differenceInDays} jour${differenceInDays > 1 ? "s" : ""}`;
  }
};
