import React, { FC } from "react";
import { ProfileProps } from "./Profile.types";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { IconBriefcase } from "@tabler/icons-react";

const Profile: FC<ProfileProps> = ({
  crafter,
  opensTheProfile = true,
  opensTheProfileInANewTab = true,
  className,
  showJob = false,
  showOpenToWork = false,
  ...props
}) => {
  const { firstname, profilePicture, shortId, job, openToWork } = crafter;

  if (!firstname) return null;

  const handleClick = () => {
    if (opensTheProfile && shortId) {
      const url = `https://socraft.community/profiles/${shortId}`;

      if (opensTheProfileInANewTab) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        "transition-all duration-200 ease-in-out",
        "cursor-pointer group",
        opensTheProfile && "hover:opacity-70",
        "gap-3",
        "dark:text-white",
        className,
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={opensTheProfile ? 0 : -1}
      role={opensTheProfile ? "button" : undefined}
      aria-label={
        opensTheProfile ? `Voir le profil de ${firstname}` : undefined
      }
      {...props}
    >
      <div className="relative">
        <div
          className={cn(
            "h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32",
            "relative overflow-hidden rounded-full transition-all duration-200",
          )}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              alt={`Photo de profil de ${firstname}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <>{firstname}</>
          )}
        </div>

        {showOpenToWork && openToWork && (
          <Badge
            variant="secondary"
            className="absolute -bottom-0 -right-0 text-[10px] sm:px-2 sm:py-1 bg-green-100 text-green-800 border border-green-200"
          >
            <span>Open to work</span>
            <IconBriefcase className="h-3 w-3 sm:hidden" />
          </Badge>
        )}
      </div>

      <div className="flex flex-col items-center space-y-1 min-h-[2rem]">
        <h3 className="font-semibold">{firstname}</h3>

        {showJob && job && <p className="text-sm">{job}</p>}
      </div>
    </div>
  );
};

export default Profile;
