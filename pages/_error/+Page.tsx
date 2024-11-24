import { usePageContext } from "vike-react/usePageContext";
import Container from "../../components/Container";

export default function Page() {
  const { is404 } = usePageContext();
  const message = is404 ? "404 Page Not Found" : "500 Internal Server Error";

  return (
    <Container>
      <h1 className="text-center font-bold text-2xl">{message}</h1>
    </Container>
  );
}
