import Container from "../../components/Container";

export type ErrorPageProps = {
  message: string;
};

export default function ErrorPage({ message }: ErrorPageProps) {
  return (
    <Container>
      <h1 className="text-center font-bold text-2xl">{message}</h1>
    </Container>
  );
}
