import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-[15px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-[#28282820] focus:border-[var(--yellow)]",
        error: "border-red-500 border-2",
      },
      darkMode: {
        true: "bg-[var(--black)] text-white border-[#ffffff20] placeholder:text-gray-400",
        false: "bg-white text-gray-900 border-[#28282820]",
      },
    },
    compoundVariants: [
      {
        variant: "error",
        darkMode: true,
        class: "border-red-500",
      },
      {
        variant: "error",
        darkMode: false,
        class: "border-red-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      darkMode: false,
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  errorMessage?: string;
  darkMode?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      darkMode,
      startIcon,
      endIcon,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const hasError = !!errorMessage;
    const currentVariant = hasError ? "error" : variant;

    // If we have icons, we need a wrapper
    if (startIcon || endIcon) {
      return (
        <div className="relative">
          <div
            className={cn(
              "flex items-center gap-3 rounded-[15px] border px-3 py-2 transition-colors duration-200",
              currentVariant === "error"
                ? "border-red-500 border-2"
                : "border-[#28282820] focus-within:border-[var(--yellow)]",
              darkMode
                ? "bg-[var(--black)] border-[#ffffff20]"
                : "bg-white border-[#28282820]",
              hasError && "mb-6",
            )}
          >
            {startIcon && (
              <div
                className={cn(
                  "flex-shrink-0",
                  darkMode ? "text-white" : "text-gray-900",
                )}
              >
                {React.isValidElement(startIcon)
                  ? React.cloneElement(startIcon as React.ReactElement, {
                      className: cn(
                        "h-4 w-4",
                        (startIcon as React.ReactElement).props?.className,
                      ),
                    })
                  : startIcon}
              </div>
            )}
            <input
              type={type}
              className={cn(
                "flex-1 border-0 bg-transparent text-sm ring-0 focus:outline-none focus:ring-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                darkMode
                  ? "text-white placeholder:text-gray-400"
                  : "text-gray-900 placeholder:text-gray-500",
                className,
              )}
              ref={ref}
              {...props}
            />
            {endIcon && (
              <div
                className={cn(
                  "flex-shrink-0",
                  darkMode ? "text-white" : "text-gray-900",
                )}
              >
                {React.isValidElement(endIcon)
                  ? React.cloneElement(endIcon as React.ReactElement, {
                      className: cn(
                        "h-4 w-4",
                        (endIcon as React.ReactElement).props?.className,
                      ),
                    })
                  : endIcon}
              </div>
            )}
          </div>
          {errorMessage && (
            <div
              className={cn(
                "absolute left-4 top-full mt-1 text-xs",
                darkMode ? "text-red-400" : "text-red-500",
              )}
            >
              {errorMessage}
            </div>
          )}
        </div>
      );
    }

    // Simple input without icons
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            inputVariants({ variant: currentVariant, darkMode, className }),
            hasError && "mb-6",
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <div
            className={cn(
              "absolute left-4 top-full mt-1 text-xs",
              darkMode ? "text-red-400" : "text-red-500",
            )}
          >
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
