import React, { FC } from "react";
import { TrainingProps } from "./Training.types";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../button";
import { Card } from "../ui/card";
import { Profile } from "../profile";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const truncateWithEllipsis = (text: string, limit = 160) => {
  if (text.length <= limit) return text;

  const sliced = text.slice(0, limit).trimEnd();
  const lastSpaceIndex = sliced.lastIndexOf(" ");

  const baseText =
    lastSpaceIndex > 60 ? sliced.slice(0, lastSpaceIndex).trimEnd() : sliced;

  return `${baseText}…`;
};

const Training: FC<TrainingProps> = ({
  training,
  onClick,
  darkMode = false,
  language = "fr",
}) => {
  const hasTrainers =
    Array.isArray(training.trainers) &&
    training.trainers.length > 0 &&
    !training.trainers.some((trainer) => !trainer);

  const descriptionContent =
    typeof training.description === "string"
      ? truncateWithEllipsis(training.description.trim(), 150)
      : training.description;

  return (
    <Card
      className={cn(
        "w-full max-w-[440px] min-w-[320px] p-5 flex flex-col justify-between gap-4",
        "border border-border bg-background transition-colors cursor-pointer",
        "max-[700px]:min-w-full max-[700px]:max-w-full",
        darkMode && "text-white border-white/20",
      )}
      style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2.5 max-[485px]:gap-2">
        <div
          className={cn(
            "flex items-center gap-5",
            "max-[485px]:gap-4 max-[485px]:flex-wrap",
          )}
        >
          {hasTrainers && (
            <div
              className={cn(
                "flex flex-col items-center gap-4 shrink-0",
                "max-[485px]:flex-row max-[485px]:items-center max-[485px]:gap-3",
              )}
            >
              {training.trainers?.map((trainer, key) => {
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

          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            {training.category && (
              <Badge
                variant="outline"
                className={cn(
                  "self-start px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap",
                  "border-border bg-black/5 transition-all duration-200",
                  "hover:bg-primary/10 hover:border-primary/30 hover:scale-105",
                  darkMode &&
                    "bg-white/10 border-white/10 text-white hover:bg-white/20",
                )}
              >
                {training.category}
              </Badge>
            )}
            <h2 className="text-xl font-medium m-0 leading-tight">
              {training.title}
            </h2>
          </div>
        </div>

        {training.description && descriptionContent && (
          <div className="text-base font-normal opacity-80 tracking-wide overflow-hidden transition-opacity duration-300 hover:opacity-100">
            <div
              className="mt-0.5 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {typeof descriptionContent === "string" ? (
                <p className="m-0 leading-relaxed">{descriptionContent}</p>
              ) : (
                descriptionContent
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mt-3">
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
