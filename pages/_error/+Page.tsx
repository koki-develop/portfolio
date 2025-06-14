import { usePageContext } from "vike-react/usePageContext";
import ErrorPage from "../../src/pages/ErrorPage/ErrorPage";

export default function Page() {
  const { is404 } = usePageContext();
  const message = is404 ? "404 Page Not Found" : "500 Internal Server Error";

  return <ErrorPage message={message} />;
}
