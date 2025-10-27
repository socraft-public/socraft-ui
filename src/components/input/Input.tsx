import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-[15px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 dark:bg-[var(--black)] dark:text-white dark:border-[#4a4a4a] dark:placeholder:text-gray-400",
  {
    variants: {
      variant: {
        default:
          "border-[#28282820] dark:border-[#4a4a4a] focus:border-[var(--yellow)] dark:focus:border-[#fbbb10]",
        error: "border-red-500 border-2",
      },
    },
    compoundVariants: [
      {
        variant: "error",
        class: "border-red-500",
      },
      {
        variant: "error",
        class: "border-red-500",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, variant, startIcon, endIcon, errorMessage, ...props },
    ref,
  ) => {
    const hasError = !!errorMessage;
    const currentVariant = hasError ? "error" : variant;

    if (startIcon || endIcon) {
      return (
        <div className="relative">
          <div
            className={cn(
              "relative flex items-center h-10 overflow-hidden gap-2 rounded-[15px] border px-3 py-2 transition-colors duration-200",
              currentVariant === "error"
                ? "border-red-500 border-2"
                : "border-[#28282820] dark:border-[#4a4a4a] focus-within:border-[var(--yellow)] dark:focus-within:border-[#fbbb10]",
              hasError && "mb-6",
            )}
          >
            {startIcon && <div className="flex-shrink-0">{startIcon}</div>}
            <input
              type={type}
              className={cn(
                "flex-1 min-w-0 border-0 bg-transparent text-sm ring-0 focus:outline-none focus:ring-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 pr-10",
                className,
              )}
              ref={ref}
              {...props}
            />
            {endIcon && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                {endIcon}
              </div>
            )}
          </div>
          {errorMessage && (
            <div className="absolute left-4 top-full mt-1 text-xs">
              {errorMessage}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            inputVariants({ variant: currentVariant, className }),
            hasError && "mb-6",
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <div className="absolute left-4 top-full mt-1 text-xs">
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
export { Input, inputVariants };
