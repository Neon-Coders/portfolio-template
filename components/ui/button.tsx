import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "text-sm",
    "font-semibold",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-gray-400",
    "focus:ring-offset-2",
    "dark:hover:bg-gray-800",
    "dark:hover:text-gray-100",
    "disabled:opacity-50",
    "dark:focus:ring-gray-400",
    "disabled:pointer-events-none",
    "dark:focus:ring-offset-gray-900",
    "data-[state=open]:bg-gray-100",
    "dark:data-[state=open]:bg-gray-800",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-gray-900",
          "text-white",
          "hover:bg-gray-700",
          "dark:bg-gray-50",
        ],
        secondary: [
          "bg-gray-100",
          "text-gray-900",
          "hover:bg-gray-200",
          "dark:bg-gray-700",
          "dark:text-gray-100",
        ],
      },
      outline: {
        true: [
          "bg-transparent",
          "text-gray-900",
          "border",
          "hover:bg-gray-100",
        ],
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        primary: ["h-10", "py-2", "px-4"],
        small: ["h-9", "px-2", "rounded-md"],
        large: ["h-11", "px-8", "rounded-md"],
      },
      defaultVariants: {
        intent: "primary",
        size: "primary",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ className, intent, size }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
