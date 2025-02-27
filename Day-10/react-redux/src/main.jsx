import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import counterStore from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={counterStore}>
    <App />
  </Provider>
);


//created a store
// Provider to entire application with value of store