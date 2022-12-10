import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
