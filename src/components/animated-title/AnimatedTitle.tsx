import { FC, useEffect, useState } from "react";
import { AnimatedTitleProps } from "./AnimatedTitle.types";
import "./AnimatedTitle.css";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const AnimatedTitle: FC<AnimatedTitleProps> = ({
  staticPart,
  yellowWords,
  fontSize = 40,
  darkMode,
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1
      className={darkMode ? "animated-title dark" : "animated-title"}
      style={{ fontSize: `${fontSize}px` }}
    >
      {staticPart}
      <span className="yellow-words">
        <TextTransition springConfig={presets.stiff} direction="down">
          {yellowWords[index % yellowWords.length]}
        </TextTransition>
      </span>
    </h1>
  );
};

export default AnimatedTitle;
