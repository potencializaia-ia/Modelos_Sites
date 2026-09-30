type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap " +
  "transition-[background-color,color,box-shadow,transform,border-color] duration-200 ease-out " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_20px_-10px_rgba(58,120,184,0.9)] hover:bg-brand-600 hover:shadow-[0_10px_24px_-10px_rgba(58,120,184,1)]",
  dark: "bg-brand-700 text-white shadow-[0_8px_20px_-10px_rgba(42,93,151,0.9)] hover:bg-[#234f82]",
  outline: "border border-white/90 bg-white/25 text-ink backdrop-blur-sm hover:bg-white/70",
  ghost: "text-brand hover:text-brand-700",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}
