import React, { FC, useEffect, useState } from "react";
import { AnimatedTitleProps } from "./AnimatedTitle.types";
import { cn } from "../../lib/utils";

const AnimatedTitle: FC<AnimatedTitleProps> = ({
  staticPart,
  yellowWords,
  fontSize = 40,
  fontWeight = 600,
  darkMode,
  className,
}) => {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % yellowWords.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [yellowWords.length]);

  return (
    <h1
      className={cn(
        "flex items-center flex-wrap justify-center gap-2 md:gap-3",
        "my-8 md:my-12 mx-4 leading-tight",
        darkMode ? "text-white" : "text-zinc-800",
        className,
      )}
      style={{ fontSize: `${fontSize}px`, fontWeight }}
    >
      <span>{staticPart}</span>
      <span
        className={cn(
          "transition-all duration-300",
          darkMode ? "text-yellow-400" : "text-yellow-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        )}
      >
        {yellowWords[index]}
      </span>
    </h1>
  );
};

export default AnimatedTitle;
