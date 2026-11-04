import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth = false, className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-lg select-none";

    const sizes = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const variants = {
      primary:
        "bg-[#D9F36A] text-[#121514] font-semibold hover:bg-[#CBEA4F] active:scale-[0.99] shadow-sm hover:shadow-md",
      secondary:
        "bg-[#1F2321] text-[#F7F7F4] hover:bg-[#282E2B] border border-[#2E3532] active:scale-[0.99]",
      outline:
        "border border-[#2E3532] text-[#F7F7F4] hover:bg-[#1F2321] hover:border-[#9EABA2] active:scale-[0.99]",
      ghost:
        "text-[#9EABA2] hover:text-[#F7F7F4] hover:bg-[#1F2321]/50",
      dark:
        "bg-[#171A19] text-[#F7F7F4] hover:bg-[#222725] border border-[#2E3532] active:scale-[0.99]",
    };

    const width = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
