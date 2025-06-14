import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge("glass-card rounded-lg p-4", className)}>
      {children}
    </div>
  );
}
