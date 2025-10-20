import { IconExternalLink } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Card } from "../ui/card";
import { Spinner } from "../ui/spinner";
import { StatCardProps } from "./StatCard.type";

const StatCard: React.FC<StatCardProps> = ({
  stat,
  darkMode = false,
  loading = false,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!loading && stat.value > 0) {
      const duration = 500;
      const steps = 80;
      const startValue = Math.floor(stat.value * 0.8);
      const remainingValue = stat.value - startValue;
      const increment = remainingValue / steps;
      let currentStep = 0;

      setAnimatedValue(startValue);

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          startValue + Math.floor(increment * currentStep),
          stat.value,
        );
        setAnimatedValue(currentValue);

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValue(stat.value);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [stat.value, loading]);
  if (loading) {
    return (
      <Card
        className={cn(
          "w-[250px] h-[200px] flex items-center justify-center",
          "border border-border bg-background",
          darkMode && "border-white/20",
        )}
        style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
      >
        <Spinner
          className="w-8 h-8"
          style={{
            color: "#fbbb10",
          }}
        />
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "w-[250px] flex flex-col items-center gap-4 p-8 relative overflow-hidden",
        "border border-border bg-background",
        darkMode && "text-white border-white/20",
      )}
      style={darkMode ? { backgroundColor: "var(--black)" } : undefined}
    >
      <div className="text-center space-y-2">
        <h2
          className={cn("text-6xl font-bold m-0")}
          style={{
            color: "#fbbb10",
          }}
        >
          {animatedValue.toLocaleString()}
        </h2>

        <h4
          className={cn(
            "text-xl font-medium m-0 transition-all duration-300",
            "text-foreground/80 group-hover:text-foreground",
            darkMode && "text-white/80 group-hover:text-white",
          )}
        >
          {stat.title}
        </h4>
      </div>

      <Button
        variant="outlined"
        darkMode={darkMode}
        onClick={(e) => {
          e.stopPropagation();
          window.open(stat.link.url, "_blank");
        }}
        endIcon={<IconExternalLink className="w-4 h-4" />}
        className="text-sm font-medium"
      >
        {stat.link.title}
      </Button>
    </Card>
  );
};

export default StatCard;
