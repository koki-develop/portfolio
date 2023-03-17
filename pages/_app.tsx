import "@fontsource/open-sans";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Open Sans",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
