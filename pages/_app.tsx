import { config } from "@/../config";
import Layout from "@/components/Layout";
import "@fontsource/open-sans";
import { AnchorProps, MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const handleRouteChangeComplete = (pathname: string) => {
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

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
      {/* google analytics */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `,
            }}
          />
        </>
      )}
      {/* seo */}
      <DefaultSeo
        defaultTitle={config.user.name}
        titleTemplate={`%s | ${config.user.name}`}
        description={config.user.description}
        twitter={{
          cardType: "summary_large_image",
          handle: config.user.socials.twitter.username,
        }}
        openGraph={{
          type: "website",
          locale: "ja_JP",
          images: [
            {
              url: `${config.url}/images/profile.jpg`,
              secureUrl: `${config.url}/images/profile.jpg`,
              width: 800,
              height: 800,
              alt: config.user.name,
              type: "image/jpeg",
            },
          ],
        }}
      />
      {/* component */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
};

export default App;
