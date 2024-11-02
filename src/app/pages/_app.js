// pages/_app.js
import { GoogleAnalytics } from "next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-G177DF6JNV" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
