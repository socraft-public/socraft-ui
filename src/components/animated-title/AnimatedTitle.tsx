import React, { FC, useEffect, useState } from "react";
import { AnimatedTitleProps } from "./AnimatedTitle.types";
import { cn } from "../../lib/utils";
import TextTransition, { presets } from "react-text-transition";

const AnimatedTitle: FC<AnimatedTitleProps> = ({
  staticPart,
  yellowWords,
  fontSize = 40,
  fontWeight = 600,
  darkMode,
  className,
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  const containerClasses = cn(
    "flex items-center flex-wrap justify-center gap-2 md:gap-3",
    "my-8 md:my-12 mx-4 leading-tight",
    darkMode ? "text-white" : "text-zinc-800",
    className,
  );

  const animatedTextClasses = cn(
    "transition-colors duration-200",
    darkMode ? "text-yellow-400" : "text-yellow-500",
  );

  return (
    <h1
      className={containerClasses}
      style={{ fontSize: `${fontSize}px`, fontWeight }}
    >
      <span>{staticPart}</span>
      <span className={animatedTextClasses}>
        <TextTransition springConfig={presets.gentle} direction="up">
          {yellowWords[index % yellowWords.length]}
        </TextTransition>
      </span>
    </h1>
  );
};

export default AnimatedTitle;
