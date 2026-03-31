import { CalendarPlus, ChevronDown } from "lucide-react";
import React, { FC } from "react";
import type { AddToCalendarLink } from "./EventsTimeline.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Props {
  links: AddToCalendarLink[];
}

export const AddToCalendarDropdown: FC<Props> = ({ links }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border rounded-sm px-3 py-1 hover:text-foreground hover:border-foreground/40 transition-all select-none">
        <CalendarPlus size={13} />
        Ajouter à mon calendrier
        <ChevronDown size={12} />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      {links.map(({ label, link }) => (
        <DropdownMenuItem key={label} asChild className="cursor-pointer">
          <a
            href={link}
            target={label === "Télécharger le fichier ICS" ? "_self" : "_blank"}
            rel="noreferrer"
            download={
              label === "Télécharger le fichier ICS" ? "event.ics" : undefined
            }
          >
            {label}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
