import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-lg p-6 border border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
