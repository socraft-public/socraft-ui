import React, { FC, useState } from "react";
import { TribeProps } from "./Tribe.types";
import "./Tribe.css";
import { Button } from "../button";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Carousel } from "../carousel";

const Tribe: FC<TribeProps> = ({ ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const hasCrafters = props.crafters && props.crafters.length > 0;

  return (
    <div className={"socraft-tribe-card" + (props.darkMode ? " dark" : "")}>
      <div className="header">
        <div
          className="tribe-image"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          {!isExpanded && (
            <div className="title-overlay">
              <h2 className="title">{props.name}</h2>
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-content">
          <h2 className="expanded-title">{props.name}</h2>
          <div className="description">
            <p>{props.description}</p>
          </div>
          {hasCrafters && (
            <>
              <h3 className="carousel-title">Les experts</h3>
              <div className="carousel-container">
                <Carousel
                  useCustomElements={false}
                  crafters={props.crafters}
                  darkMode={props.darkMode}
                  shouldOpenTheProfile={true}
                  shouldOpenTheProfileInANewTab={
                    props.opensTheProfileInANewTab ?? true
                  }
                  numVisible={2}
                  circular={true}
                  autoplayInterval={3000}
                  width="100%"
                  fullWidth={true}
                  responsiveOptions={[
                    {
                      breakpoint: "5000px",
                      numVisible: 3,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "800px",
                      numVisible: 2,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "600px",
                      numVisible: 2,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "400px",
                      numVisible: 1,
                      numScroll: 1,
                    },
                  ]}
                />
              </div>
            </>
          )}
        </div>
      )}

      <div className="actions">
        <Button
          variant="outlined"
          darkMode={props.darkMode}
          endIcon={isExpanded ? <IconChevronUp /> : <IconChevronDown />}
          onClick={toggleExpand}
        >
          {props.showMoreText}
        </Button>
      </div>
    </div>
  );
};

export default Tribe;
