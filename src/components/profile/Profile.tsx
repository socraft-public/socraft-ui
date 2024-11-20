import { FC } from "react";
import { ProfileProps } from "./Profile.types";
import React from "react";
import "./Profile.css";

const Profile: FC<ProfileProps> = ({
  crafter,
  opensTheProfile,
  opensTheProfileInANewTab,
}) => {
  const { firstname, profilePicture, openToWork, shortId } = crafter;

  if (!firstname) return <></>;

  const handleClick = () => {
    if (opensTheProfile) {
      const url = `https://socraft.community/profile/${shortId}`;

      if (opensTheProfileInANewTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className="crafter" onClick={handleClick}>
      <img
        className="avatar"
        alt="avatar"
        src={profilePicture}
        loading="lazy"
      />
      <div className="infos">
        <span className="firstname">{firstname}</span>
        {openToWork && <span className="open-to-work">Open to work</span>}
      </div>
    </div>
  );
};

export default Profile;
