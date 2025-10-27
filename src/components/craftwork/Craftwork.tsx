import React, { FC } from "react";
import { CraftworkProps } from "./Craftwork.types";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "../button";
import { Card } from "../ui/card";
import { Profile } from "../profile";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const Craftwork: FC<CraftworkProps> = ({
  name,
  domain,
  holder,
  pitch,
  website,
}) => {
  return (
    <Card
      className={cn(
        "w-full max-w-[600px] p-8 flex flex-col justify-between gap-6 transition-colors",
        "md:w-[600px]",
        "max-[580px]:w-[90%] max-[580px]:min-w-0",
      )}
    >
      <div className="flex items-start gap-4 max-[550px]:flex-col max-[550px]:gap-2">
        {holder && (
          <div className="flex flex-col gap-4 max-[550px]:items-start">
            <Profile
              crafter={{
                firstname: holder.firstname,
                profilePicture: holder.profilePicture,
                shortId: holder.shortId,
                id: holder.id,
              }}
              opensTheProfile={true}
              opensTheProfileInANewTab={true}
              className="scale-75 [&_h3]:hidden [&_p]:hidden"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between max-[550px]:text-left">
          <div className="flex items-center justify-between w-full gap-2.5 max-[550px]:flex-col-reverse max-[550px]:items-start">
            <h2 className="text-xl font-medium m-0">{name}</h2>
            {domain && <Badge variant="outline">{domain}</Badge>}
          </div>
          <p className="text-lg mt-2">{pitch}</p>
        </div>
      </div>

      <div className="flex items-center justify-end flex-wrap">
        <Button
          variant="outlined"
          endIcon={<IconArrowRight />}
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
