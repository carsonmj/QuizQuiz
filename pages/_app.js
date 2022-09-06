import { RecoilRoot } from "recoil";

import ErrorBoundary from "../components/error";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default MyApp;
