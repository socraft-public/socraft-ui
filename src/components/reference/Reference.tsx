import React, { FC } from "react";
import { ReferenceProps } from "./Reference.types";
import { cn } from "../../lib/utils";

const Reference: FC<ReferenceProps> = ({
  darkMode,
  logo,
  title,
  category,
  onClick,
  className,
}) => {
  const containerClasses = cn(
    "flex flex-col items-center cursor-pointer group",
    className,
  );

  const headClasses = cn(
    "h-48 w-48 md:h-52 md:w-52 flex items-center justify-center rounded-2xl overflow-hidden",
    darkMode
      ? "bg-yellow-400/10 border border-yellow-400/20"
      : "bg-yellow-400/5 border border-yellow-400/10",
  );

  const logoClasses = cn(
    "w-auto h-auto max-w-32 md:max-w-36 transition-transform duration-300 group-hover:scale-110",
  );

  const bodyClasses = cn("text-center mt-4 space-y-2");

  const titleClasses = cn(
    "text-lg md:text-xl font-medium",
    darkMode ? "text-white" : "text-zinc-800",
  );

  const categoryClasses = cn(
    "text-sm font-medium tracking-wide",
    darkMode ? "text-zinc-400" : "text-zinc-500",
  );

  return (
    <div className={containerClasses} onClick={onClick}>
      <div className={headClasses}>
        <img src={logo} className={logoClasses} alt={`${title} logo`} />
      </div>
      <div className={bodyClasses}>
        <h3 className={titleClasses}>{title}</h3>
        <span className={categoryClasses}>{category.join(" • ")}</span>
      </div>
    </div>
  );
};

export default Reference;
