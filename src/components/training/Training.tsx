import React, { FC } from "react";
import { TrainingProps } from "./Training.types";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../button";
import { Card } from "../ui/card";
import { Profile } from "../profile";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const Training: FC<TrainingProps> = ({
  training,
  onClick,
  darkMode = false,
  language = "fr",
}) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[700px] min-w-[550px] p-8 flex flex-col justify-between gap-6",
        "border border-border bg-background transition-colors cursor-pointer",
        "max-[700px]:min-w-full max-[700px]:max-w-full",
        darkMode && "text-white border-white/20",
      )}
      style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
      onClick={onClick}
    >
      <div className="flex gap-8 max-[485px]:flex-col">
        {Array.isArray(training.trainers) &&
          training.trainers.length > 0 &&
          !training.trainers.some((trainer) => !trainer) && (
            <div className="flex flex-col items-center gap-5 mt-4 mb-8 flex-[0.25] max-[485px]:flex-row max-[485px]:items-center max-[485px]:m-0 max-[485px]:gap-3">
              {training.trainers.map((trainer, key) => {
                if (trainer) {
                  return (
                    <Profile
                      key={key}
                      crafter={{
                        firstname: trainer.firstname,
                        profilePicture: trainer.profilePicture,
                        shortId: trainer.shortId,
                        id: trainer.id,
                      }}
                      darkMode={darkMode}
                      opensTheProfile={true}
                      opensTheProfileInANewTab={true}
                      className="scale-75 max-[485px]:scale-100 [&_h3]:hidden [&_p]:hidden [&>div]:hover:scale-100 [&>div]:hover:ring-0"
                    />
                  );
                }
                return null;
              })}
            </div>
          )}

        <div className="flex-[2]">
          <div className="flex justify-between items-center gap-5 mb-4 max-[745px]:flex-col-reverse max-[745px]:justify-start max-[745px]:items-start max-[745px]:gap-1">
            <h2 className="text-xl font-medium flex-[2] m-0 leading-tight">
              {training.title}
            </h2>
            {training.category && (
              <Badge
                variant="outline"
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap",
                  "border-border bg-black/5 transition-all duration-200",
                  "hover:bg-primary/10 hover:border-primary/30 hover:scale-105",
                  darkMode &&
                    "bg-white/10 border-white/10 text-white hover:bg-white/20",
                )}
              >
                {training.category}
              </Badge>
            )}
          </div>

          {training.description && (
            <div className="text-lg font-normal opacity-80 tracking-wide overflow-hidden transition-opacity duration-300 hover:opacity-100">
              <div
                className="mt-2.5 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                {typeof training.description === "string" ? (
                  <p className="m-0 leading-relaxed">{training.description}</p>
                ) : (
                  training.description
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <Button
          variant="outlined"
          endIcon={
            <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          }
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          darkMode={darkMode}
          className="flex-1 justify-center text-base gap-5 font-semibold group hover:shadow-md transition-all duration-300"
        >
          {language === "en" ? "See more" : "Voir plus"}
        </Button>
      </div>
    </Card>
  );
};

export default Training;
