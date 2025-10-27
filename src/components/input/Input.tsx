import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-[15px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 dark:bg-[var(--black)] dark:text-white dark:border-[#ffffff20] dark:placeholder:text-gray-400",
  {
    variants: {
      variant: {
        default: "border-[#28282820] focus:border-[var(--yellow)]",
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
              "flex items-center gap-3 rounded-[15px] border px-3 py-2 transition-colors duration-200",
              currentVariant === "error"
                ? "border-red-500 border-2"
                : "border-[#28282820] focus-within:border-[var(--yellow)]",
              hasError && "mb-6",
            )}
          >
            {startIcon && (
              <div className="flex-shrink-0">
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
                className,
              )}
              ref={ref}
              {...props}
            />
            {endIcon && (
              <div className="flex-shrink-0">
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
