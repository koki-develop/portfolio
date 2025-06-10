import Container from "../components/Container";
import Works from "./works/Works";

export default function WorksPage() {
  return (
    <Container>
      <title>Works - Koki Sato</title>
      <h1 className="mb-4 font-bold text-3xl">Works</h1>
      <Works />
    </Container>
  );
}
