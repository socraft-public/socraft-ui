import React, { FC, useEffect, useState } from "react";
import { differenceFromNow } from "../../utils/difference-from-now";
import { formatDate, SupportedLocale } from "../../utils/format-date";
import type { EventsTimelineProps } from "./EventsTimeline.types";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const resolveLocale = (): SupportedLocale => {
  if (typeof window === "undefined") {
    return "fr";
  }

  return window.location.pathname.startsWith("/en") ? "en" : "fr";
};

const EventsTimeline: FC<EventsTimelineProps> = ({
  events,
  expanded,
  loadMoreFn,
  loadMoreDisabled,
  loadMoreLoading,
}) => {
  const [locale, setLocale] = useState<SupportedLocale>("fr");

  useEffect(() => {
    setLocale(resolveLocale());
  }, []);

  return (
    <div className="lg:max-w-screen mt-3 flex flex-col items-center gap-5">
      <div className="relative">
        {[...events].map(({ summary, description, start, location }, index) => (
          <div key={index} className="group relative">
            <div className="flex items-start">
              <div className="mt-3 mr-5 flex flex-col gap-2 shrink-0 w-[45px] sm:w-[130px] text-end">
                <h6 className="text-sm text-[#fbbb10] font-semibold">
                  {formatDate(start.dateTime || start.date || "", locale)}
                </h6>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {differenceFromNow(
                    start.dateTime
                      ? new Date(start.dateTime).getTime()
                      : start.date
                        ? new Date(start.date).getTime()
                        : NaN,
                    start.date,
                    locale,
                  )}
                </span>
              </div>
              <div className="relative pb-10 border-l-2 dark:border-l-white/20 group-last:pb-35 pl-6 sm:pl-8 space-y-2">
                <div className="absolute h-3 w-3 -translate-x-1/2 -left-px top-4 rounded-full border-2 border-[#fbbb10] bg-background" />
                <h3 className="text-lg sm:text-xl font-semibold mb-0 dark:text-white">
                  {summary}
                </h3>
                {expanded && (
                  <>
                    {location && (
                      <h4 className="text-sm font-medium text-foreground/40">
                        {location}
                      </h4>
                    )}
                    <p
                      className="text-sm sm:text-base text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: description ?? "Bientôt plus d'infos...",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {loadMoreFn !== undefined && !loadMoreDisabled && (
        <Button variant="ghost" onClick={loadMoreFn} loading={loadMoreLoading}>
          Voir plus <Plus />
        </Button>
      )}
    </div>
  );
};

export default EventsTimeline;
