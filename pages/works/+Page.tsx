import type { FC } from "react";
import Container from "../../components/Container";
import Works from "./Works";

const Page: FC = () => {
  return (
    <Container>
      <h1 className="mb-4 font-bold text-3xl">Works</h1>
      <Works />
    </Container>
  );
};

export default Page;
