import React, { FC } from "react";
import { CraftworkProps } from "./Craftwork.types";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../button";
import { Card } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const Craftwork: FC<CraftworkProps> = ({
  name,
  domain,
  holder,
  pitch,
  website,
  darkMode = false,
}) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[600px] p-8 flex flex-col justify-between gap-6 transition-colors",
        "border border-border bg-background",
        "md:w-[600px]",
        "max-[580px]:w-[90%] max-[580px]:min-w-0",
        darkMode && "text-white border-white/20",
      )}
      style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
    >
      <div className="flex items-start gap-8 max-[550px]:flex-col max-[550px]:gap-2">
        {holder && (
          <div className="flex flex-col gap-4 flex-shrink-0 max-[550px]:items-start">
            <div className="flex-shrink-0">
              <a
                href={`https://socraft.community/profiles/${holder.shortId}`}
                className="block group"
              >
                <Avatar className="w-[75px] h-[75px] rounded-[10%] transition-all duration-300 group-hover:scale-110 group-hover:opacity-80">
                  <AvatarImage
                    src={holder.profilePicture}
                    alt="profile-picture"
                    className="object-cover"
                  />
                </Avatar>
              </a>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between max-[550px]:text-left">
          <div className="flex items-center justify-between w-full gap-2.5 max-[550px]:flex-col-reverse max-[550px]:items-start">
            <h2 className="text-xl font-medium m-0">{name}</h2>
            {domain && (
              <Badge
                variant="outline"
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap",
                  "border-border bg-black/5",
                  darkMode && "bg-white/10 border-white/20 text-white",
                )}
              >
                {domain}
              </Badge>
            )}
          </div>
          <p className="text-lg opacity-50 mt-2">{pitch}</p>
        </div>
      </div>

      <div className="flex items-center justify-end flex-wrap mt-4">
        <Button
          variant="outlined"
          endIcon={<IconArrowRight />}
          darkMode={darkMode}
          onClick={() => window.open(website, "_blank")}
          className="flex-1"
        >
          Voir plus
        </Button>
      </div>
    </Card>
  );
};

export default Craftwork;
