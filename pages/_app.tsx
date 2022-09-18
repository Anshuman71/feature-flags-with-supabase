import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={"p-10"}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
