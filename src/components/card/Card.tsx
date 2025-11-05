import { IconArrowRight } from "@tabler/icons-react";
import React, { FC, useEffect, useMemo, useState } from "react";

import type {
  CardContentVariantProps,
  CardDefaultVariantProps,
  CardProps,
} from "./Card.types.ts";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const avatarKey = (id?: string, shortId?: string, firstname?: string) =>
  id ?? shortId ?? firstname ?? "crafter";

const DefaultCard: FC<CardDefaultVariantProps> = ({
  image,
  buttons,
  header,
  footer,
  children,
  title,
  subTitle,
  className,
  variant,
  ...props
}) => (
  <ShadcnCard className={className} variant={variant} {...props}>
    {(title || subTitle || header) && (
      <CardHeader>
        {header ? (
          <>{header as React.ReactNode}</>
        ) : (
          <>
            <div
              className={cn(
                "flex w-full gap-4",
                image
                  ? "flex-row items-center"
                  : "flex-col items-start text-left",
              )}
            >
              {image && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border bg-background transition-all duration-200">
                  <img
                    src={image}
                    alt="card image"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col items-start text-left gap-1">
                {title && (
                  <CardTitle className="leading-tight">
                    {title as React.ReactNode}
                  </CardTitle>
                )}
                {subTitle && (
                  <CardDescription className="leading-snug">
                    {subTitle as React.ReactNode}
                  </CardDescription>
                )}
              </div>
            </div>
          </>
        )}
      </CardHeader>
    )}

    {children && <CardContent>{children as React.ReactNode}</CardContent>}

    {(buttons || footer) && (
      <CardFooter className="flex flex-col gap-2 items-end sm:flex-row sm:justify-end">
        {footer ? (
          <div>{footer as React.ReactNode}</div>
        ) : (
          <>
            {React.Children.map(buttons, (button, index) => (
              <React.Fragment key={index}>{button}</React.Fragment>
            ))}
          </>
        )}
      </CardFooter>
    )}
  </ShadcnCard>
);

const ContentVariantCard: FC<CardContentVariantProps> = ({
  name,
  domain,
  holders = [],
  pitch,
  website,
  actionIcon,
  className,
  variant,
  ...props
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
    if (!isMultiCrafter) return;
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
      className: avatarClassName,
    }: {
      sizeClass: string;
      className?: string;
    },
  ) => (
    <button
      key={`${avatarKey(crafter.id, crafter.shortId, crafter.firstname)}-${index}`}
      type="button"
      onMouseEnter={() => handleAvatarActivate(index)}
      onFocus={() => handleAvatarActivate(index)}
      onClick={() => handleAvatarClick(index)}
      className={cn(
        "relative overflow-hidden rounded-full border border-border bg-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbbb10] focus-visible:ring-offset-2 hover:opacity-90 hover:border-[#fbbb10] dark:hover:border-[#fbbb10]",
        sizeClass,
        isMultiCrafter && activeIndex === index
          ? "z-10 border-[#fbbb10] ring-offset-background"
          : isMultiCrafter
            ? "hover:z-10"
            : undefined,
        avatarClassName,
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
    <ShadcnCard
      variant={variant}
      className={cn("flex h-full flex-col", className)}
      {...props}
    >
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-start md:gap-4">
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
                className="self-start border max-[550px]:text-xs"
              >
                {domain}
              </Badge>
            )}
          </div>

          <p className="mt-2 text-lg max-[550px]:text-sm">{pitch}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-end pt-4 max-[550px]:justify-start">
        <Button
          variant="outlined"
          endIcon={<ActionIcon className="h-4 w-4" />}
          onClick={(e) => {
            e.stopPropagation();
            window.open(website, "_blank");
          }}
          className="flex-1 max-[550px]:w-full"
        >
          Voir plus
        </Button>
      </div>
    </ShadcnCard>
  );
};

const Card: FC<CardProps> = (props) => {
  if (props.variant === "content") {
    return <ContentVariantCard {...props} />;
  }

  return <DefaultCard {...props} />;
};

export default Card;
