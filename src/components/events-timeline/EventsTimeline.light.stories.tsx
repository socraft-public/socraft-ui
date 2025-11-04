import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { EventsTimeline } from "./";
import { EventsTimelineProps } from "./EventsTimeline.types";

export default {
  title: "socraft-ui/EventsTimeline/Light-mode",
  component: EventsTimeline,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<EventsTimelineProps> = (args) => (
  <EventsTimeline {...args} />
);

export const Default = Template.bind({});

Default.args = {
  events: [
    {
      kind: "calendar#event",
      etag: '"3514495962317374"',
      id: "7ovpdfs2jrtp5aeh2j7j45hn3s",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=N292cGRmczJqcnRwNWFlaDJqN2o0NWhuM3MgY19jZWFjZDhhMmM4ZjRlMjYyNzkxZmNjMWIwOTk2N2VhZWJlNTMzMDc3MGExNjZhM2E4OWEyNTkyMTM0MDk1OTQ1QGc",
      created: "2025-08-27T08:13:35.000Z",
      updated: "2025-09-07T12:26:21.158Z",
      summary: "Global Coding Retreat ",
      description:
        'Infos et inscription : <a href="https://www.meetup.com/romandie-software-craftsmanship/events/305757860/?eventOrigin=group_upcoming_events">https://www.meetup.com/romandie-software-craftsmanship/events/305757860/?eventOrigin=group_upcoming_events</a>',
      location: "QG-RDC-Left-Openspace (6)",
      creator: {
        email: "eva@socraft.ch",
      },
      organizer: {
        email:
          "c_ceacd8a2c8f4e262791fcc1b09967eaebe5330770a166a3a89a2592134095945@group.calendar.google.com",
        displayName: "socraft",
        self: true,
      },
      start: {
        dateTime: "2025-11-08T09:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      end: {
        dateTime: "2025-11-08T18:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      iCalUID: "7ovpdfs2jrtp5aeh2j7j45hn3s@google.com",
      sequence: 1,
      attendees: [
        {
          email:
            "c_18808b6kmu168g29nucav5unhhkb24gaednm6sj1cpq2sor8@resource.calendar.google.com",
          displayName: "QG-RDC-Left-Openspace (6)",
          resource: true,
          responseStatus: "accepted",
        },
        {
          email: "alexandre.cuva@socraagile.ch",
          responseStatus: "accepted",
        },
        {
          email: "eva@socraft.ch",
          responseStatus: "needsAction",
        },
      ],
      hangoutLink: "https://meet.google.com/gta-fymf-wri",
      conferenceData: {
        createRequest: {
          requestId: "1gku2kcdm7fq4vh7pdjsubjef0",
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
          status: {
            statusCode: "success",
          },
        },
        entryPoints: [
          {
            entryPointType: "video",
            uri: "https://meet.google.com/gta-fymf-wri",
            label: "meet.google.com/gta-fymf-wri",
          },
          {
            entryPointType: "more",
            uri: "https://tel.meet/gta-fymf-wri?pin=3063009647774",
            pin: "3063009647774",
          },
          {
            regionCode: "CH",
            entryPointType: "phone",
            uri: "tel:+41-43-430-91-94",
            label: "+41 43 430 91 94",
            pin: "470542701",
          },
        ],
        conferenceSolution: {
          key: {
            type: "hangoutsMeet",
          },
          name: "Google Meet",
          iconUri:
            "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
        },
        conferenceId: "gta-fymf-wri",
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
    },
    {
      kind: "calendar#event",
      etag: '"3523434781671838"',
      id: "4unel0o3cu9rtgfborllp7s0ci",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NHVuZWwwbzNjdTlydGdmYm9ybGxwN3MwY2kgY19jZWFjZDhhMmM4ZjRlMjYyNzkxZmNjMWIwOTk2N2VhZWJlNTMzMDc3MGExNjZhM2E4OWEyNTkyMTM0MDk1OTQ1QGc",
      created: "2025-06-05T09:15:57.000Z",
      updated: "2025-10-29T05:56:30.835Z",
      summary: "Congrès IIBA Geneva - 20 novembre ",
      description:
        '📅 Rendez-vous le 20 novembre 2025 à Lausanne pour une journée d’échanges, d’apprentissage et d’inspiration autour du thème : "Au cœur de la data"<br><br>Inscription à venir... Plus d\'info : <a href="www.linkedin.com/company/iiba-geneva-chapter">www.linkedin.com/company/iiba-geneva-chapter</a>',
      location: "unlimitrust campus, Rte des Flumeaux 42, 1008 Prilly, Suisse",
      creator: {
        email: "eva@socraft.ch",
      },
      organizer: {
        email:
          "c_ceacd8a2c8f4e262791fcc1b09967eaebe5330770a166a3a89a2592134095945@group.calendar.google.com",
        displayName: "socraft",
        self: true,
      },
      start: {
        dateTime: "2025-11-20T09:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      end: {
        dateTime: "2025-11-20T18:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      transparency: "transparent",
      iCalUID: "4unel0o3cu9rtgfborllp7s0ci@google.com",
      sequence: 1,
      attendees: [
        {
          email: "eva@socraft.ch",
          responseStatus: "accepted",
        },
        {
          email: "romain@socraft.ch",
          responseStatus: "accepted",
        },
        {
          email: "tito.espinoza@socraft.ch",
          responseStatus: "accepted",
        },
      ],
      reminders: {
        useDefault: true,
      },
      eventType: "default",
    },
    {
      kind: "calendar#event",
      etag: '"3523119912907230"',
      id: "6r587d8kir4hu6ju3umne2m7sj",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NnI1ODdkOGtpcjRodTZqdTN1bW5lMm03c2ogY19jZWFjZDhhMmM4ZjRlMjYyNzkxZmNjMWIwOTk2N2VhZWJlNTMzMDc3MGExNjZhM2E4OWEyNTkyMTM0MDk1OTQ1QGc",
      created: "2025-10-27T09:24:19.000Z",
      updated: "2025-10-27T10:12:36.453Z",
      summary: "🍻 Pot de départ Eva",
      description:
        '<p>RDV au QG à 18h pour une petite mousse et un apéritif 🍻<br>Ce sera une belle occasion pour moi de vous remercier pour notre collaboration et de partager un moment sympa ensemble 🙂</p><p>➡️ Merci de confirmer votre présence : <a href="https://forms.gle/ektutJxacftxh5Ky8" target="_blank">https://forms.gle/ektutJxacftxh5Ky8</a> <strong>avant le 19/11</strong>, histoire d’organiser les victuailles comme il se doit !</p><p>-</p><p>PS : Si vous n\'êtes pas dispo, RDV à la soirée Meet&amp;Chill du 11 décembre : <a href="https://infomaniak.events/fr-ch/ateliers-et-stages/soiree-networking-meetchill-winter-edition/d9f11b6a-c1d4-4a9a-980c-eb84d70968d2/event/1492166" target="_blank">https://infomaniak.events/fr-ch/ateliers-et-stages/soiree-networking-meetchill-winter-edition/d9f11b6a-c1d4-4a9a-980c-eb84d70968d2/event/1492166</a> 😉</p>',
      location: "QG-RDC-Left-Openspace (6)",
      creator: {
        email: "eva@socraft.ch",
      },
      organizer: {
        email:
          "c_ceacd8a2c8f4e262791fcc1b09967eaebe5330770a166a3a89a2592134095945@group.calendar.google.com",
        displayName: "socraft",
        self: true,
      },
      start: {
        dateTime: "2025-11-24T18:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      end: {
        dateTime: "2025-11-24T20:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      iCalUID: "6r587d8kir4hu6ju3umne2m7sj@google.com",
      sequence: 0,
      attendees: [
        {
          email:
            "c_18808b6kmu168g29nucav5unhhkb24gaednm6sj1cpq2sor8@resource.calendar.google.com",
          displayName: "QG-RDC-Left-Openspace (6)",
          resource: true,
          responseStatus: "accepted",
        },
      ],
      reminders: {
        useDefault: true,
      },
      eventType: "default",
    },
    {
      kind: "calendar#event",
      etag: '"3508801368693566"',
      id: "7qt9h0ros60gp5rdimovl7639g",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=N3F0OWgwcm9zNjBncDVyZGltb3ZsNzYzOWcgY19jZWFjZDhhMmM4ZjRlMjYyNzkxZmNjMWIwOTk2N2VhZWJlNTMzMDc3MGExNjZhM2E4OWEyNTkyMTM0MDk1OTQ1QGc",
      created: "2025-06-19T10:25:59.000Z",
      updated: "2025-08-05T13:31:24.346Z",
      summary: "Agile Tour Geneva - 4 décembre",
      description:
        '<a href="https://www.agilesuisse.ch/agile-tour-geneva-2025">https://www.agilesuisse.ch/agile-tour-geneva-2025</a>',
      creator: {
        email: "eva@socraft.ch",
      },
      organizer: {
        email:
          "c_ceacd8a2c8f4e262791fcc1b09967eaebe5330770a166a3a89a2592134095945@group.calendar.google.com",
        displayName: "socraft",
        self: true,
      },
      start: {
        date: "2025-12-04",
      },
      end: {
        date: "2025-12-05",
      },
      transparency: "transparent",
      iCalUID: "7qt9h0ros60gp5rdimovl7639g@google.com",
      sequence: 0,
      reminders: {
        useDefault: false,
      },
      eventType: "default",
    },
    {
      kind: "calendar#event",
      etag: '"3512589829833310"',
      id: "5604ome73lfu0skoseg4e609lf",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTYwNG9tZTczbGZ1MHNrb3NlZzRlNjA5bGYgY19jZWFjZDhhMmM4ZjRlMjYyNzkxZmNjMWIwOTk2N2VhZWJlNTMzMDc3MGExNjZhM2E4OWEyNTkyMTM0MDk1OTQ1QGc",
      created: "2025-08-27T09:16:35.000Z",
      updated: "2025-08-27T11:41:54.916Z",
      summary: "Software Crafters Romandie",
      description:
        'Infos et inscription : <a href="https://www.meetup.com/romandie-software-craftsmanship/events/305757882/?eventOrigin=group_upcoming_events">https://www.meetup.com/romandie-software-craftsmanship/events/305757882/?eventOrigin=group_upcoming_events</a>',
      location: "QG-RDC-Left-Openspace (6)",
      creator: {
        email: "eva@socraft.ch",
      },
      organizer: {
        email:
          "c_ceacd8a2c8f4e262791fcc1b09967eaebe5330770a166a3a89a2592134095945@group.calendar.google.com",
        displayName: "socraft",
        self: true,
      },
      start: {
        dateTime: "2025-12-04T18:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      end: {
        dateTime: "2025-12-04T20:00:00+01:00",
        timeZone: "Europe/Zurich",
      },
      iCalUID: "5604ome73lfu0skoseg4e609lf@google.com",
      sequence: 0,
      attendees: [
        {
          email:
            "c_18808b6kmu168g29nucav5unhhkb24gaednm6sj1cpq2sor8@resource.calendar.google.com",
          displayName: "QG-RDC-Left-Openspace (6)",
          resource: true,
          responseStatus: "accepted",
        },
        {
          email: "alexandre.cuva@socraagile.ch",
          responseStatus: "accepted",
        },
        {
          email: "eva@socraft.ch",
          responseStatus: "needsAction",
        },
      ],
      hangoutLink: "https://meet.google.com/zaq-eskp-xen",
      conferenceData: {
        entryPoints: [
          {
            entryPointType: "video",
            uri: "https://meet.google.com/zaq-eskp-xen",
            label: "meet.google.com/zaq-eskp-xen",
          },
          {
            entryPointType: "more",
            uri: "https://tel.meet/zaq-eskp-xen?pin=2460310510835",
            pin: "2460310510835",
          },
          {
            regionCode: "CH",
            entryPointType: "phone",
            uri: "tel:+41-43-430-98-70",
            label: "+41 43 430 98 70",
            pin: "892144671",
          },
        ],
        conferenceSolution: {
          key: {
            type: "hangoutsMeet",
          },
          name: "Google Meet",
          iconUri:
            "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png",
        },
        conferenceId: "zaq-eskp-xen",
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
    },
  ] as any[],
};
