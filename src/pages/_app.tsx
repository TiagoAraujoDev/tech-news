import Link from "next/link";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";

import { techNew } from "../../prismicio";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../styles/globals.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={techNew}>
        <SessionProvider session={session}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
