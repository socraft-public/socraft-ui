import React, { FC } from "react";
import { WordsListProps } from "./WordsList.types";
import { cn } from "../../lib/utils";

const WordsList: FC<WordsListProps> = ({
  words,
  darkMode,
  className,
  size = "default",
  separator = "dot",
}) => {
  const containerClasses = cn(
    "flex items-center flex-wrap justify-center",
    size === "sm" ? "gap-2" : size === "lg" ? "gap-6" : "gap-4",
    className,
  );

  const wordClasses = cn(
    "font-medium transition-colors duration-200",
    {
      "text-sm": size === "sm",
      "text-base": size === "default",
      "text-lg": size === "lg",
    },
    darkMode
      ? "text-zinc-100 hover:text-zinc-300"
      : "text-zinc-700 hover:text-zinc-900",
  );

  const getSeparatorElement = (index: number) => {
    if (index >= words.length - 1) return null;

    const separatorClasses = cn(
      "transition-opacity duration-200",
      darkMode ? "text-yellow-400" : "text-yellow-500",
    );

    switch (separator) {
      case "pipe":
        return <span className={cn(separatorClasses, "font-light")}>|</span>;
      case "slash":
        return <span className={cn(separatorClasses, "font-light")}>/</span>;
      case "none":
        return null;
      default: // dot
        return (
          <div
            className={cn(
              "rounded-full transition-opacity duration-200",
              size === "sm"
                ? "w-1 h-1"
                : size === "lg"
                  ? "w-2 h-2"
                  : "w-1.5 h-1.5",
              darkMode ? "bg-yellow-400" : "bg-yellow-500",
            )}
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div className={containerClasses}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className={wordClasses}>{word}</span>
          {getSeparatorElement(index)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WordsList;
