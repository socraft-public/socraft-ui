import type { Event } from "./EventsTimeline.types";

export const mockEvents: Event[] = [
  {
    id: "evt_001",
    summary: "Standup équipe produit",
    start: {
      dateTime: "2026-04-01T09:00:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-01",
    },
    meetLink: "https://meet.google.com/abc-defg-hij",
    description: "Daily standup de 15min",
  },
  {
    id: "evt_002",
    summary: "Review sprint #12",
    start: {
      dateTime: "2026-04-01T14:00:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-01",
    },
    meetLink: "https://meet.google.com/xyz-uvwx-yz",
  },
  {
    id: "evt_003",
    summary: "Déjeuner client — Banque Cantonale",
    start: { date: "2026-04-02" },
    description: "Restaurant Le Bourgeois, 12h30. Apporter démo Arena.",
  },
  {
    id: "evt_004",
    summary: "1:1 avec José",
    start: {
      dateTime: "2026-04-03T10:30:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-03",
    },
    meetLink: "https://meet.google.com/qrs-tuv-wxy",
    description: "Point hebdo infra + roadmap Huddle",
  },
  {
    id: "evt_005",
    summary: "Cours Socraft — NestJS avancé",
    start: {
      dateTime: "2026-04-04T08:00:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-04",
    },
  },
  {
    id: "evt_006",
    summary: "Appel prospect FC Lausanne-Sport",
    start: {
      dateTime: "2026-04-04T16:00:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-04",
    },
    meetLink: "https://meet.google.com/lmn-opqr-stu",
    description: "Démo Huddle + Arena, contact: Marc Dupont",
  },
  {
    id: "evt_007",
    summary: "Journée sans réunion 🎉",
    start: { date: "2026-04-06" },
  },
  {
    id: "evt_008",
    summary: "Planning Q2 — Optifit",
    start: {
      dateTime: "2026-04-07T09:00:00",
      timeZone: "Europe/Zurich",
      date: "2026-04-07",
    },
    meetLink: "https://meet.google.com/vwx-yzab-cde",
    description: "OKRs, budget, roadmap produit jusqu'en juin",
  },
];
