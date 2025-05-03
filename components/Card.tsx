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
        "rounded-lg border border-gray-700 bg-gray-800 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
