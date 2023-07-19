import Rootlayout from "@/components/header/Rootlayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="font-bodyfont bg-gray-300">
        <Rootlayout>
          <Component {...pageProps} />
        </Rootlayout>
      </div>
    </Provider>
  );
}
