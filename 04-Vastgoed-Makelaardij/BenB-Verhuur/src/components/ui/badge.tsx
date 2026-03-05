import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-terracotta text-white hover:bg-terracotta-600",
        secondary:
          "border-transparent bg-sage text-white hover:bg-sage-600",
        outline:
          "border-terracotta text-terracotta hover:bg-terracotta/10",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning:
          "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
