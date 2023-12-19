import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./layouts/Main/Main";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
