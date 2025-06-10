import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("mx-auto max-w-4xl max-lg:px-4", className)}>
      {children}
    </div>
  );
}
