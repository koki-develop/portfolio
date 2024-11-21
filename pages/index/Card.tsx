import type { FC, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      {children}
    </div>
  );
};

export default Card;
