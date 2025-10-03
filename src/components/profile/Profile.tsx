import React, { FC } from "react";
import "./Profile.css";
import { ProfileProps } from "./Profile.types";

const Profile: FC<ProfileProps> = ({
  crafter,
  opensTheProfile,
  opensTheProfileInANewTab,
  darkMode,
}) => {
  const { firstname, profilePicture, shortId } = crafter;

  if (!firstname) return <></>;

  const handleClick = () => {
    if (opensTheProfile) {
      const url = `https://socraft.community/profiles/${shortId}`;

      if (opensTheProfileInANewTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className={`crafter ${darkMode ? "dark" : ""}`} onClick={handleClick}>
      <img
        className="avatar"
        alt="avatar"
        src={profilePicture}
        loading="lazy"
      />
      <div className="infos">
        <span className="firstname">{firstname}</span>
      </div>
    </div>
  );
};

export default Profile;
