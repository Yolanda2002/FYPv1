import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwindcss.css";
import "./index.css";
import Layout from "./Layout";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { router } from "./router";
import { IconContext } from "react-icons";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <IconContext.Provider
        value={{ color: "#92c57b", className: "global-class-name" }}
      >
        <Layout>
          {/* <RouterProvider router={router} /> */}
          <App />
        </Layout>
      </IconContext.Provider>
    </Provider>
  </BrowserRouter>
);
