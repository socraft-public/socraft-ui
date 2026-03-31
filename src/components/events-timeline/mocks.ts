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
    addEventToCalendarLinks: [
      {
        label: "Google",
        link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260331T160000Z%2F20260331T170000Z&details=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&location=GMeet&text=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Outlook",
        link: "https://outlook.live.com/calendar/0/action/compose?allday=false&body=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&enddt=2026-03-31T19%3A00%3A00&location=GMeet&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-03-31T18%3A00%3A00&subject=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Yahoo",
        link: "https://calendar.yahoo.com/?desc=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&dur=false&et=20260331T170000Z&in_loc=GMeet&st=20260331T160000Z&title=Du%20Savoir-Faire%20au%20Faire-Savoir&v=60",
      },
      {
        label: "Télécharger le fichier ICS",
        link: "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:-%2F%2FAnandChowdhary%2F%2Fcalendar-link%2F%2FEN%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20260331T160000Z%0D%0ADTEND:20260331T170000Z%0D%0ADTSTAMP:20260331T085939Z%0D%0ASUMMARY:Du%20Savoir-Faire%20au%20Faire-Savoir%0D%0ADESCRIPTION:Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l'appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E%0D%0ALOCATION:GMeet%0D%0AUID:4jr5j6ctq7ip272rb7j4bkrfn4%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A",
      },
    ],
  },
  {
    id: "evt_003",
    summary: "Déjeuner client — Banque Cantonale",
    start: { date: "2026-04-02" },
    description: "Restaurant Le Bourgeois, 12h30. Apporter démo Arena.",
    addEventToCalendarLinks: [
      {
        label: "Google",
        link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260331T160000Z%2F20260331T170000Z&details=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&location=GMeet&text=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Outlook",
        link: "https://outlook.live.com/calendar/0/action/compose?allday=false&body=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&enddt=2026-03-31T19%3A00%3A00&location=GMeet&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-03-31T18%3A00%3A00&subject=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Yahoo",
        link: "https://calendar.yahoo.com/?desc=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&dur=false&et=20260331T170000Z&in_loc=GMeet&st=20260331T160000Z&title=Du%20Savoir-Faire%20au%20Faire-Savoir&v=60",
      },
      {
        label: "Télécharger le fichier ICS",
        link: "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:-%2F%2FAnandChowdhary%2F%2Fcalendar-link%2F%2FEN%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20260331T160000Z%0D%0ADTEND:20260331T170000Z%0D%0ADTSTAMP:20260331T085939Z%0D%0ASUMMARY:Du%20Savoir-Faire%20au%20Faire-Savoir%0D%0ADESCRIPTION:Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l'appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E%0D%0ALOCATION:GMeet%0D%0AUID:4jr5j6ctq7ip272rb7j4bkrfn4%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A",
      },
    ],
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
    addEventToCalendarLinks: [
      {
        label: "Google",
        link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260331T160000Z%2F20260331T170000Z&details=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&location=GMeet&text=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Outlook",
        link: "https://outlook.live.com/calendar/0/action/compose?allday=false&body=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&enddt=2026-03-31T19%3A00%3A00&location=GMeet&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-03-31T18%3A00%3A00&subject=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Yahoo",
        link: "https://calendar.yahoo.com/?desc=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&dur=false&et=20260331T170000Z&in_loc=GMeet&st=20260331T160000Z&title=Du%20Savoir-Faire%20au%20Faire-Savoir&v=60",
      },
      {
        label: "Télécharger le fichier ICS",
        link: "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:-%2F%2FAnandChowdhary%2F%2Fcalendar-link%2F%2FEN%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20260331T160000Z%0D%0ADTEND:20260331T170000Z%0D%0ADTSTAMP:20260331T085939Z%0D%0ASUMMARY:Du%20Savoir-Faire%20au%20Faire-Savoir%0D%0ADESCRIPTION:Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l'appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E%0D%0ALOCATION:GMeet%0D%0AUID:4jr5j6ctq7ip272rb7j4bkrfn4%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A",
      },
    ],
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
    addEventToCalendarLinks: [
      {
        label: "Google",
        link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260331T160000Z%2F20260331T170000Z&details=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&location=GMeet&text=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Outlook",
        link: "https://outlook.live.com/calendar/0/action/compose?allday=false&body=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&enddt=2026-03-31T19%3A00%3A00&location=GMeet&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-03-31T18%3A00%3A00&subject=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Yahoo",
        link: "https://calendar.yahoo.com/?desc=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&dur=false&et=20260331T170000Z&in_loc=GMeet&st=20260331T160000Z&title=Du%20Savoir-Faire%20au%20Faire-Savoir&v=60",
      },
      {
        label: "Télécharger le fichier ICS",
        link: "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:-%2F%2FAnandChowdhary%2F%2Fcalendar-link%2F%2FEN%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20260331T160000Z%0D%0ADTEND:20260331T170000Z%0D%0ADTSTAMP:20260331T085939Z%0D%0ASUMMARY:Du%20Savoir-Faire%20au%20Faire-Savoir%0D%0ADESCRIPTION:Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l'appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E%0D%0ALOCATION:GMeet%0D%0AUID:4jr5j6ctq7ip272rb7j4bkrfn4%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A",
      },
    ],
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
    addEventToCalendarLinks: [
      {
        label: "Google",
        link: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20260331T160000Z%2F20260331T170000Z&details=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&location=GMeet&text=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Outlook",
        link: "https://outlook.live.com/calendar/0/action/compose?allday=false&body=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&enddt=2026-03-31T19%3A00%3A00&location=GMeet&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2026-03-31T18%3A00%3A00&subject=Du%20Savoir-Faire%20au%20Faire-Savoir",
      },
      {
        label: "Yahoo",
        link: "https://calendar.yahoo.com/?desc=Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l%27appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E&dur=false&et=20260331T170000Z&in_loc=GMeet&st=20260331T160000Z&title=Du%20Savoir-Faire%20au%20Faire-Savoir&v=60",
      },
      {
        label: "Télécharger le fichier ICS",
        link: "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:-%2F%2FAnandChowdhary%2F%2Fcalendar-link%2F%2FEN%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20260331T160000Z%0D%0ADTEND:20260331T170000Z%0D%0ADTSTAMP:20260331T085939Z%0D%0ASUMMARY:Du%20Savoir-Faire%20au%20Faire-Savoir%0D%0ADESCRIPTION:Session%20exclusive%20%C3%A0%20destination%20des%20crafters%20uniquement.%3Cbr%3E%3Cbr%3ELien%20de%20l'appel%20vid%C3%A9o%C2%A0%3A%20%3Ca%20href%3D%22https%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%22%3Ehttps%3A%2F%2Fmeet.google.com%2Fnbk-szww-sik%3C%2Fa%3E%0D%0ALOCATION:GMeet%0D%0AUID:4jr5j6ctq7ip272rb7j4bkrfn4%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A",
      },
    ],
  },
];
