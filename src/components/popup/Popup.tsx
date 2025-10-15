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
          "w-[95vw] max-w-[95vw] sm:w-auto sm:max-w-lg border-0 shadow-lg p-4 sm:p-6 rounded-xl sm:rounded-lg",
          width && `sm:max-w-[${width}]`,
          darkMode && "text-white",
          className,
        )}
        style={{
          ...(width ? { maxWidth: width, width: "auto" } : {}),
          backgroundColor: darkMode ? "var(--black)" : "white",
        }}
      >
        <DialogHeader className="space-y-2 pr-8">
          <DialogTitle
            className={cn(
              "text-base sm:text-lg font-semibold leading-tight",
              darkMode ? "text-white" : "text-gray-900",
            )}
          >
            {title}
          </DialogTitle>
          {subTitle && (
            <DialogDescription
              className={cn(
                "text-xs sm:text-sm leading-relaxed",
                darkMode ? "text-gray-300" : "text-muted-foreground",
              )}
            >
              {subTitle}
            </DialogDescription>
          )}
        </DialogHeader>
        <div
          className={cn(
            "mt-4 overflow-y-auto max-h-[70vh] sm:max-h-[80vh]",
            darkMode ? "text-white" : "text-gray-900",
          )}
        >
          {children}
        </div>
        <DialogClose
          className={cn(
            "absolute right-2 top-2 sm:right-4 sm:top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none p-1",
            darkMode
              ? "text-gray-300 hover:text-white focus:ring-gray-500"
              : "text-gray-600 hover:text-gray-900 focus:ring-gray-400",
          )}
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
