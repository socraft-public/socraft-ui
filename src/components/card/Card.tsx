import { FC } from "react";
import { CardProps } from "./Card.types";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import React from "react";
import { cn } from "../../lib/utils";

const Card: FC<CardProps> = ({ image, buttons, ...props }) => {
  return (
    <ShadcnCard className={props.className}>
      {(props.title || props.subTitle || props.header) && (
        <CardHeader>
          {props.header ? (
            <>{props.header as React.ReactNode}</>
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
                  {props.title && (
                    <CardTitle className="leading-tight">
                      {props.title as React.ReactNode}
                    </CardTitle>
                  )}
                  {props.subTitle && (
                    <CardDescription className="leading-snug">
                      {props.subTitle as React.ReactNode}
                    </CardDescription>
                  )}
                </div>
              </div>
            </>
          )}
        </CardHeader>
      )}

      {props.children && (
        <CardContent>{props.children as React.ReactNode}</CardContent>
      )}

      {(buttons || props.footer) && (
        <CardFooter className="flex flex-col gap-2 items-end sm:flex-row sm:justify-end">
          {props.footer ? (
            <div>{props.footer as React.ReactNode}</div>
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
};

export default Card;
