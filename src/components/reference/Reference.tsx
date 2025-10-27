import React, { FC } from "react";
import { ReferenceProps } from "./Reference.types";
import { cn } from "../../lib/utils";

const Reference: FC<ReferenceProps> = ({
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

  const headClasses =
    "h-48 w-48 md:h-52 md:w-52 flex items-center justify-center rounded-2xl overflow-hidden bg-[#fbbb10]/30 dark:bg-[#fbbb10]/20 shadow-[0_0_0_3px_rgba(251,187,16,0.15)]";

  const logoClasses =
    "w-auto h-auto max-w-32 md:max-w-36 transition-transform duration-300 group-hover:scale-110";
  const bodyClasses = "text-center mt-4 space-y-2";

  const titleClasses = "text-lg md:text-xl font-medium";

  const categoryClasses = "text-sm font-medium tracking-wide";

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
