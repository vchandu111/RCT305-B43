import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { todoStore } from "./Masai/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={todoStore}>
    <App />
  </Provider>
);
