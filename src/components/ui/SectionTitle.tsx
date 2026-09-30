import type { ReactNode } from "react";

export default function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-[24px] font-semibold uppercase leading-none tracking-[-0.01em] text-ink sm:text-[28px] ${className}`}
    >
      {children}
    </h2>
  );
}
