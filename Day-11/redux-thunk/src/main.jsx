import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { todoReducerStore } from "./Masai/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={todoReducerStore}>
    <App />
  </Provider>
);
