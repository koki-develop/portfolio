import type { FC, ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-4xl max-lg:px-4">{children}</div>;
};

export default Container;
