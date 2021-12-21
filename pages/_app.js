import 'tailwindcss/tailwind.css';

import { Provider } from "react-redux";

import { createStore } from "redux";

import storeApp from "../store/combine";

const store = createStore(storeApp);

function MyApp({ Component, pageProps }) {
  
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp
