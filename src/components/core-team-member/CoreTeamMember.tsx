import React, { FC } from "react";
import { CoreTeamMemberProps } from "./CoreTeamMember.types";
import "./CoreTeamMember.css";

const CoreTeamMember: FC<CoreTeamMemberProps> = ({ ...props }) => {
  return (
    <div className={`core-team-member ${props.darkMode ? "dark" : ""}`}>
      <img
        src={props.image}
        alt={props.fullname}
        className="core-team-member__image"
      />
      <h3 className="core-team-member__name">{props.fullname}</h3>
      <span className="core-team-member__role">{props.role}</span>
    </div>
  );
};

export default CoreTeamMember;
