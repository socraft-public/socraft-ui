export interface AddToCalendarLink {
  label: string;
  link: string;
}

export interface Event {
  id: string;
  summary: string;
  start: { dateTime?: string; timeZone?: string; date: string };
  meetLink?: string;
  description?: string;
  addEventToCalendarLinks?: AddToCalendarLink[];
}

export interface EventsTimelineProps {
  events: Event[];
  expanded?: boolean;
  loadMoreFn?: () => void | Promise<void>;
  loadMoreDisabled?: boolean;
  loadMoreLoading?: boolean;
}
