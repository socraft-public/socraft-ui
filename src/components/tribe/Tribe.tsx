import React, { FC } from "react";
import { TribeProps } from "./Tribe.types";
import "./Tribe.css";
import { Button } from "../button";
import { IconArrowRight } from "@tabler/icons-react";

const Tribe: FC<TribeProps> = ({ ...props }) => {
  return (
    <div className={"socraft-tribe-card" + (props.darkMode ? " dark" : "")}>
      <div className="header">
        <div
          className="tribe-image"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <div className="text">
          <div className="title-container">
            <h2 className="title">{props.name}</h2>
            <span className="members">
              {props.members}{" "}
              {props.members > 1 ? "crafters experts" : "crafter expert"}
            </span>
          </div>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <div className="actions">
        <Button
          variant="outlined"
          darkMode={props.darkMode}
          endIcon={<IconArrowRight />}
          onClick={() => window.open(`/${props.slug}`, "_self")}
        >
          Voir plus
        </Button>
      </div>
    </div>
  );
};

export default Tribe;
