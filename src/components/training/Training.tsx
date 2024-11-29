import React, { FC } from "react";
import { TrainingProps } from "./Training.types";
import "./Training.css";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../button";

const Training: FC<TrainingProps> = ({ ...props }) => {
  const { training, onClick } = props;

  return (
    <div className={props.darkMode ? "training dark" : "training"}>
      <div className="body">
        {Array.isArray(training.trainers) && training.trainers.length > 0 && (
          <div className="heads">
            {training.trainers.map((trainer, key) => {
              if (trainer) {
                return (
                  <img
                    key={key}
                    className="head"
                    src={trainer?.profilePicture}
                    alt={trainer?.firstname}
                  />
                );
              }
            })}
          </div>
        )}
        <div className="content">
          <div className="training-header">
            <h2>{training.title}</h2>
            <span className="category">{training.category}</span>
          </div>
          {training.description !== undefined && training.description}
        </div>
      </div>
      <div className="training-footer">
        <Button
          variant="outlined"
          endIcon={<IconArrowRight />}
          onClick={onClick}
          darkMode={props.darkMode}
        >
          Voir plus
        </Button>
      </div>
    </div>
  );
};

export default Training;
