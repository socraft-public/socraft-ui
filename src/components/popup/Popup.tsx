import React, { FC } from "react";
import { PopupProps } from "./Popup.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

const Popup: FC<PopupProps> = ({
  children,
  title,
  subTitle,
  width,
  darkMode,
  open,
  onOpenChange,
  className,
  ...props
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} {...props}>
      <DialogContent
        className={cn(
          "sm:max-w-lg border-0 shadow-lg",
          width && `sm:max-w-[${width}]`,
          darkMode && "text-white",
          className,
        )}
        style={{
          ...(width ? { width } : {}),
          backgroundColor: darkMode ? "var(--black)" : "white",
        }}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(
              "text-lg font-semibold",
              darkMode ? "text-white" : "text-gray-900",
            )}
          >
            {title}
          </DialogTitle>
          {subTitle && (
            <DialogDescription
              className={cn(
                "text-sm",
                darkMode ? "text-gray-300" : "text-muted-foreground",
              )}
            >
              {subTitle}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className={cn("mt-4", darkMode ? "text-white" : "text-gray-900")}>
          {children}
        </div>
        <DialogClose
          className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
            darkMode
              ? "text-gray-300 hover:text-white focus:ring-gray-500"
              : "text-gray-600 hover:text-gray-900 focus:ring-gray-400",
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
