export interface EventsTimelineProps {
  events: Event[];
}

export interface EventCreator {
  email: string;
}

export interface EventOrganizer {
  email: string;
  displayName: string;
  self: boolean;
}

export interface EventDateTime {
  dateTime: string;
  timeZone: string;
  date?: string;
}

export interface EventReminders {
  useDefault: boolean;
}

export interface Event {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  updated: string;
  summary: string;
  description: string;
  location: string;
  creator: EventCreator;
  organizer: EventOrganizer;
  start: EventDateTime;
  end: EventDateTime;
  iCalUID: string;
  sequence: number;
  guestsCanInviteOthers: boolean;
  reminders: EventReminders;
  eventType: string;
}
