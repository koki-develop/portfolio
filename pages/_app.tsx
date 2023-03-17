import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "@fontsource/open-sans";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
