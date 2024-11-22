import type { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={twMerge("mx-auto max-w-4xl max-lg:px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
