import React, { FC, useEffect, useState } from "react";
import { differenceFromNow } from "../../utils/difference-from-now";
import { formatDate, SupportedLocale } from "../../utils/format-date";
import { formatTime } from "../../utils/format-time";
import type { EventsTimelineProps } from "./EventsTimeline.types";
import { Button } from "../ui/button";
import { Plus, Video } from "lucide-react";
import { AddToCalendarDropdown } from "./AddToCalendarDropdown";

const resolveLocale = (): SupportedLocale => {
  if (typeof window === "undefined") return "fr";
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
    <div className="my-4">
      <div className="relative">
        {[...events].map(
          (
            { summary, description, start, meetLink, addEventToCalendarLinks },
            index,
          ) => (
            <div key={index} className="group relative">
              <div className="flex items-baseline">
                <div className="mr-5 flex flex-col gap-2 shrink-0 w-[45px] sm:w-[130px] text-end">
                  <h6 className="text-sm text-[#fbbb10] font-semibold">
                    {formatDate(start.dateTime || start.date, locale)}
                  </h6>
                  {start.dateTime && (
                    <span className="text-xs text-muted-foreground">
                      {formatTime(start.dateTime, locale)}
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {differenceFromNow(
                      new Date(start.dateTime || start.date).getTime(),
                      locale,
                    )}
                  </span>
                </div>
                <div className="relative pb-10 border-l-2 dark:border-l-white/20 group-last:pb-35 pl-6 sm:pl-8 space-y-2 flex flex-col items-start gap-2">
                  <div className="absolute h-3 w-3 -translate-x-1/2 -left-px top-2 rounded-full border-2 border-[#fbbb10] bg-background" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-0 dark:text-white">
                    {summary}
                  </h3>
                  {expanded && (
                    <p
                      className="text-sm sm:text-base text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: description ?? "Bientôt plus d'infos...",
                      }}
                    />
                  )}
                  {expanded && (
                    <div className="flex flex-wrap items-center gap-2">
                      {meetLink && (
                        <a
                          className="bg-[#fbbb10] px-3 py-1 flex items-center gap-2 rounded-sm text-xs font-medium text-black hover:opacity-80 transition-all cursor-pointer select-none"
                          target="_blank"
                          href={meetLink}
                          rel="noreferrer"
                        >
                          Participer avec Google Meet
                          <Video size={13} />
                        </a>
                      )}
                      {addEventToCalendarLinks?.length && (
                        <AddToCalendarDropdown
                          links={addEventToCalendarLinks}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      {loadMoreFn !== undefined && !loadMoreDisabled && (
        <div className="flex pl-[15px] sm:pl-[calc(50px+3rem)]">
          <Button
            variant="link"
            onClick={loadMoreFn}
            loading={loadMoreLoading}
            className="cursor-pointer"
          >
            Voir plus <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventsTimeline;
