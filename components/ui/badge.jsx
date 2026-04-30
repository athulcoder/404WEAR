import React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
    secondary: "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
    destructive: "border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20",
    outline: "text-foreground border-border",
    warning: "border-transparent bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 dark:text-yellow-500",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
