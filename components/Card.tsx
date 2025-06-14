import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "before:-z-10 relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/10 before:to-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
