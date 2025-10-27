import * as React from "react";
import { cn } from "../../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      role,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "shrink-0 bg-[#28282820] dark:bg-[#4a4a4a]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      role={decorative ? "presentation" : (role ?? "separator")}
      aria-orientation={orientation}
      {...props}
    />
  ),
);
Separator.displayName = "Separator";

export { Separator };
