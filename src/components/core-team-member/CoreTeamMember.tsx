import React, { FC } from "react";
import { CoreTeamMemberProps } from "./CoreTeamMember.types";
import { cn } from "../../lib/utils";

const CoreTeamMember: FC<CoreTeamMemberProps> = ({
  fullname,
  role,
  image,
  darkMode = false,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-3",
        darkMode && "text-white",
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32",
            "relative overflow-hidden rounded-full ring-2 ring-offset-2",
            darkMode
              ? "ring-white/20 ring-offset-gray-900"
              : "ring-gray-200 ring-offset-white",
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
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-900",
              )}
            >
              {getInitials(fullname)}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-1 min-h-[2rem]">
        <h3
          className={cn(
            "text-base sm:text-lg font-semibold leading-tight",
            darkMode ? "text-white" : "text-gray-900",
          )}
        >
          {fullname}
        </h3>

        <p
          className={cn(
            "text-sm leading-relaxed",
            darkMode ? "text-gray-300" : "text-gray-600",
          )}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default CoreTeamMember;
