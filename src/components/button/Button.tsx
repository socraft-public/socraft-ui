import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { IconLoader2 } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[15px] text-sm font-medium font-[500] transition-opacity duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        yellow: "bg-[#fbbb10] text-[#282828] border-none hover:opacity-80",
        "socraft-link":
          "bg-transparent text-current hover:text-[#fbbb10] hover:opacity-100",
        outlined: "bg-transparent border border-[#28282820] hover:opacity-80",
        "socraft-icon":
          "bg-transparent hover:scale-110 hover:z-10 transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      darkMode: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "socraft-link",
        darkMode: true,
        class: "text-white hover:text-[#fbbb10]",
      },
      {
        variant: "outlined",
        darkMode: true,
        class: "text-white border-[#ffffff20]",
      },
      // Dark mode variants for socraft-icon
      {
        variant: "socraft-icon",
        darkMode: true,
        class: "text-gray-300",
      },
      {
        variant: "socraft-icon",
        darkMode: false,
        class: "text-foreground",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      darkMode: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  darkMode?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      darkMode,
      asChild = false,
      startIcon,
      endIcon,
      children,
      loading = false,
      loadingText,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, darkMode, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, darkMode, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <IconLoader2 className="h-4 w-4 animate-spin" />
            {loadingText || children}
          </>
        ) : (
          <>
            {startIcon}
            {children}
            {endIcon}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
export { Button, buttonVariants };
