import type { FC, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-6">
      {children}
    </div>
  );
};

export default Card;
