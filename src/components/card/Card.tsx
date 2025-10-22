import { FC } from "react";
import { CardProps } from "./Card.types";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import React from "react";

const Card: FC<CardProps> = ({ image, buttons, ...props }) => {
  return (
    <ShadcnCard className={props.className}>
      {(props.title || props.subTitle || props.header) && (
        <CardHeader>
          {props.header ? (
            <>{props.header as React.ReactNode}</>
          ) : (
            <>
              {image && (
                <img
                  src={image}
                  alt="card image"
                  className="h-24 w-24 rounded-lg object-cover mb-2"
                />
              )}
              {props.title && (
                <CardTitle>{props.title as React.ReactNode}</CardTitle>
              )}
              {props.subTitle && (
                <CardDescription>
                  {props.subTitle as React.ReactNode}
                </CardDescription>
              )}
            </>
          )}
        </CardHeader>
      )}

      {props.children && (
        <CardContent>{props.children as React.ReactNode}</CardContent>
      )}

      {(buttons || props.footer) && (
        <CardFooter className="justify-end gap-2">
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
