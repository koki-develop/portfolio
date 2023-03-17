import "@fontsource/open-sans";
import { AnchorProps, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Open Sans",
        globalStyles: () => ({
          body: {
            backgroundColor: "#f9fafb",
          },
        }),
        components: {
          Anchor: {
            defaultProps: {
              underline: false,
            } as AnchorProps,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default App;
