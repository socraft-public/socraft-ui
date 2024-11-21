import { FC } from "react";
import { CardProps } from "./Card.types";
import { Card as PrimeCard } from "primereact/card";
import React from "react";
import "./Card.css";

const Card: FC<CardProps> = ({ ...props }) => {
  return (
    <div className={props.darkMode ? "socraft-card dark" : "socraft-card"}>
      <PrimeCard {...props} />
      {props.buttons && (
        <div className="socraft-card-buttons">{props.buttons}</div>
      )}
    </div>
  );
};

export default Card;
