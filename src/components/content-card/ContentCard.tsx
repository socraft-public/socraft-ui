import { IconArrowRight } from "@tabler/icons-react";
import React, { FC, useEffect, useMemo, useState } from "react";

import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../button";
import { Card } from "../ui/card";
import { ContentCardProps } from "./ContentCard.types";

const avatarKey = (id?: string, shortId?: string, firstname?: string) =>
  id ?? shortId ?? firstname ?? "crafter";

const ContentCard: FC<ContentCardProps> = ({
  name,
  domain,
  holders = [],
  pitch,
  website,
  actionIcon,
}) => {
  const ActionIcon = actionIcon ?? IconArrowRight;

  const crafters = useMemo(() => holders.filter(Boolean), [holders]);
  const hasCrafters = crafters.length > 0;
  const isMultiCrafter = crafters.length > 1;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [crafters.length]);

  const activeCrafter = useMemo(() => {
    if (!hasCrafters) {
      return undefined;
    }

    if (!isMultiCrafter) {
      return crafters[0];
    }

    return crafters[Math.min(activeIndex, crafters.length - 1)];
  }, [activeIndex, crafters, hasCrafters, isMultiCrafter]);

  const handleAvatarActivate = (index: number) => {
    setActiveIndex(index);
  };

  const handleAvatarClick = (index: number) => {
    const crafter = crafters[index];

    if (!crafter?.shortId) return;

    const url = `https://socraft.community/profiles/${crafter.shortId}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderAvatarButton = (
    crafter: (typeof crafters)[number],
    index: number,
    {
      sizeClass,
      className,
    }: {
      sizeClass: string;
      className?: string;
    },
  ) => (
    <button
      key={`${avatarKey(crafter.id, crafter.shortId, crafter.firstname)}-${index}`}
      type="button"
      onMouseEnter={() => isMultiCrafter && handleAvatarActivate(index)}
      onFocus={() => isMultiCrafter && handleAvatarActivate(index)}
      onClick={() => handleAvatarClick(index)}
      className={cn(
        "relative overflow-hidden rounded-full border border-border bg-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbb10] focus-visible:ring-offset-2 hover:opacity-90 hover:border-[#fbbb10] dark:hover:border-[#fbbb10]",
        sizeClass,
        isMultiCrafter && activeIndex === index
          ? "z-10 border-[#fbbb10] ring-offset-background"
          : isMultiCrafter
            ? "hover:z-10"
            : undefined,
        className,
      )}
      aria-label={`Voir le profil de ${crafter.firstname}`}
    >
      {crafter.profilePicture ? (
        <img
          src={crafter.profilePicture}
          alt={crafter.firstname}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-muted text-xs font-semibold uppercase text-muted-foreground">
          {crafter.firstname?.slice(0, 2)}
        </span>
      )}
    </button>
  );

  const renderAvatarSelector = (variant: "mobile" | "desktop") => {
    if (!hasCrafters) {
      return null;
    }

    const isDesktopVariant = variant === "desktop";
    const baseClass = isDesktopVariant ? "hidden md:flex" : "flex md:hidden";
    const sizeClass = isDesktopVariant ? "h-16 w-16" : "h-10 w-10";
    if (!activeCrafter) {
      return null;
    }

    if (isMultiCrafter) {
      if (isDesktopVariant) {
        return (
          <div className={cn(baseClass, "flex-col items-center gap-3")}>
            {crafters.map((crafter, index) =>
              renderAvatarButton(crafter, index, {
                sizeClass,
                className: "shadow-sm hover:shadow-md",
              }),
            )}
          </div>
        );
      }

      return (
        <div className={cn(baseClass, "items-center")}>
          <div className="flex -space-x-2">
            {crafters.map((crafter, index) =>
              renderAvatarButton(crafter, index, {
                sizeClass,
                className: "shadow-sm hover:shadow-md",
              }),
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={cn(baseClass)}>
        {renderAvatarButton(activeCrafter, 0, {
          sizeClass,
          className: "shadow-sm hover:shadow-md",
        })}
      </div>
    );
  };

  const desktopAvatarSelector = renderAvatarSelector("desktop");
  const mobileAvatarSelector = renderAvatarSelector("mobile");

  return (
    <Card
      className={cn(
        "flex w-full flex-col justify-between gap-6 p-6 transition-colors",
        "md:w-[600px] md:p-8",
      )}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-4">
        {desktopAvatarSelector}

        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 md:items-start md:gap-3">
              {mobileAvatarSelector}
              <h2 className="m-0 text-xl font-medium leading-tight md:leading-none">
                {name}
              </h2>
            </div>
            {domain && (
              <Badge
                variant="outline"
                className="self-start border max-[550px]:text-xs dark:border-[#fbbb10]/50 border-[#fbbb10]/80"
              >
                {domain}
              </Badge>
            )}
          </div>

          <p className="mt-2 text-lg max-[550px]:text-sm">{pitch}</p>
        </div>
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-end max-[550px]:justify-start">
        <Button
          variant="outlined"
          endIcon={<ActionIcon className="h-4 w-4" />}
          onClick={() => window.open(website, "_blank")}
          className="flex-1 max-[550px]:w-full"
        >
          Voir plus
        </Button>
      </div>
    </Card>
  );
};

export default ContentCard;
