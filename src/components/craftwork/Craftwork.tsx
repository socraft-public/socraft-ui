import React, { FC } from "react";
import { CraftworkProps } from "./Craftwork.types";
import { IconArrowRight } from "@tabler/icons-react";
import "./Craftwork.css";
import { Button } from "../button";

const Craftwork: FC<CraftworkProps> = ({ ...props }) => {
  return (
    <div className={props.darkMode ? "craftwork dark" : "craftwork"}>
      <div className="body">
        {props.holder && (
          <div className="holder-profile-container">
            <div className="holder-profile">
              <a
                href={`https://socraft.community/profile/${props.holder?.shortId}`}
              >
                <img
                  alt="profile-picture"
                  src={props.holder?.profilePicture}
                  className="profile-picture"
                />
              </a>
            </div>
          </div>
        )}
        <div className="content">
          <div className="head">
            <h2>{props.name}</h2>
            {props.domain?.length ? (
              <span className="domain-badge">{props.domain}</span>
            ) : (
              <></>
            )}
          </div>
          <p className="pitch">{props.pitch}</p>
        </div>
      </div>
      <div className="actions">
        <Button
          variant="outlined"
          endIcon={<IconArrowRight />}
          darkMode={props.darkMode}
          onClick={() => window.open(props.website, "_blank")}
        >
          Voir plus
        </Button>
      </div>
    </div>
  );
};

export default Craftwork;
