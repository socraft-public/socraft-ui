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
import { cn } from "../../lib/utils";
import React from "react";

const Card: FC<CardProps> = ({ darkMode, image, buttons, ...props }) => {
  return (
    <ShadcnCard
      className={cn("flex flex-col gap-6 p-6 md:p-8", props.className)}
      style={{
        ...(darkMode
          ? { backgroundColor: "var(--black)", color: "white" }
          : {}),
        ...props.style,
      }}
    >
      {image && (
        <div className="flex justify-center md:justify-start">
          <img
            src={image}
            alt="Profil Image"
            className="h-24 w-24 rounded-lg object-cover"
          />
        </div>
      )}

      {(props.title || props.subTitle || props.header) && (
        <CardHeader className={cn("p-0", image && "mt-5")}>
          {props.header ? (
            <div>{props.header as React.ReactNode}</div>
          ) : (
            <>
              {props.title && (
                <CardTitle className="text-2xl font-medium leading-tight mb-0">
                  {props.title as React.ReactNode}
                </CardTitle>
              )}
              {props.subTitle && (
                <CardDescription className="text-xl font-normal mt-0">
                  {props.subTitle as React.ReactNode}
                </CardDescription>
              )}
            </>
          )}
        </CardHeader>
      )}

      {props.children && (
        <CardContent className="p-0">
          <div className="text-lg font-medium opacity-60 text-justify leading-relaxed">
            {props.children as React.ReactNode}
          </div>
        </CardContent>
      )}

      {(buttons || props.footer) && (
        <CardFooter className="p-0 mt-8">
          {props.footer ? (
            <div>{props.footer as React.ReactNode}</div>
          ) : (
            <div className="flex flex-wrap gap-2.5 w-full">
              {React.Children.map(buttons, (button, index) => (
                <div key={index} className="flex-1 min-w-0">
                  {button}
                </div>
              ))}
            </div>
          )}
        </CardFooter>
      )}
    </ShadcnCard>
  );
};

export default Card;
