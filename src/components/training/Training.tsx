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
        "w-full max-w-[440px] min-w-[320px] p-3 flex flex-col justify-between gap-4",
        "border border-border bg-background transition-colors",
      )}
    >
      <div className="flex flex-col">
        <div className={cn("flex items-center gap-2 -mb-8")}>
          {hasTrainers && (
            <div>
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
                      opensTheProfile={true}
                      opensTheProfileInANewTab={true}
                      className="scale-75 [&_h3]:hidden [&_p]:hidden"
                    />
                  );
                }
                return null;
              })}
            </div>
          )}

          <div className="flex-col">
            {training.category && (
              <Badge variant="outline">{training.category}</Badge>
            )}
            <h2 className="font-bold mb-3">{training.title}</h2>
          </div>
        </div>

        {training.description && descriptionContent && (
          <div>
            <div
              className="overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {typeof descriptionContent === "string" ? (
                <p className="leading-relaxed">{descriptionContent}</p>
              ) : (
                descriptionContent
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <Button
          variant="outlined"
          endIcon={<IconArrowRight />}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className="flex-1 justify-center text-base font-semibold group"
        >
          {language === "en" ? "See more" : "Voir plus"}
        </Button>
      </div>
    </Card>
  );
};

export default Training;
