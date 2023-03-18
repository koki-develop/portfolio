import Layout from "@/components/Layout";
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
        globalStyles: (theme) => ({
          body: {
            backgroundColor: "#f9fafb",
          },
          a: {
            textDecoration: "none",
            color: theme.black,
          },
        }),
        components: {
          Anchor: {
            defaultProps: (theme) =>
              ({
                c: theme.black,
                underline: false,
              } as AnchorProps),
          },
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
};

export default App;
