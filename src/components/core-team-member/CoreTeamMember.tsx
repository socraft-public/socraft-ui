import React, { FC } from "react";
import { CoreTeamMemberProps } from "./CoreTeamMember.types";
import { cn } from "../../lib/utils";

const CoreTeamMember: FC<CoreTeamMemberProps> = ({ fullname, role, image }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 dark:text-white">
      <div className="relative">
        <div
          className={cn(
            "lg:h-32 lg:w-32",
            "relative overflow-hidden rounded-full transition-all duration-200",
          )}
        >
          {image ? (
            <img
              src={image}
              alt={`Photo de profil de ${fullname}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center text-lg font-semibold",
              )}
            >
              {fullname}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-1 min-h-[2rem]">
        <h3 className="text-base sm:text-lg font-semibold">{fullname}</h3>

        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

export default CoreTeamMember;
