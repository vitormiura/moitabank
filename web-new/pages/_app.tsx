import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import reducer, { initialState } from "../reducer/reducer";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { StateProvider } from "../reducer/StateProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </StateProvider>
    </>
  );
}

export default MyApp;
