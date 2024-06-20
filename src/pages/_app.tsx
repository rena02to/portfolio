import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ContextProvider } from "@/context/context";
import '@/lib/i18n';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Renato Alves | Desenvolvedor Front end</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="google-site-verification" content="DRSaguy3OhrKSnKLNM0nvrJ7PtTBjfbaZPzhev4XqEc" />
      </Head>
      <SpeedInsights/>
      <Analytics/>
      <GoogleAnalytics gaId="G-QNMWKLRCB4"/>
      <ContextProvider>
        <ToastContainer position="bottom-right" closeOnClick/>
        <Component {...pageProps}/>
      </ContextProvider>
    </>
  );
}