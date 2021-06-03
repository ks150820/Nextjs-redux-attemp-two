import "../styles/globals.css";
import Layout from "../src/components/layout/Layout";
import React from "react";
import App from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../src/store/RootReducer/store";
import { wrapper } from "../src/store/wrapper";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
