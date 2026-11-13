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
      "inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

    const sizes = {
      sm: "text-[11px] px-3 py-1.5 gap-1.5",
      md: "text-xs px-5 py-2.5 gap-2 font-bold",
      lg: "text-xs px-6 py-3.5 gap-2.5 font-bold",
    };

    const variants = {
      primary:
        "bg-white text-black font-bold hover:bg-neutral-200 active:scale-[0.98]",
      secondary:
        "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10 active:scale-[0.98]",
      outline:
        "border border-white/15 text-white hover:bg-white/[0.05] active:scale-[0.98]",
      ghost:
        "text-white/60 hover:text-white hover:bg-white/[0.04]",
      dark:
        "bg-[#0D0F11] text-white hover:bg-[#15181C] border border-white/10 active:scale-[0.98]",
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
