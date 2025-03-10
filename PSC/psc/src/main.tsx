import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ThemeProvider } from "./Components/ui/provider.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./RTK/store.ts";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={store}>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </ReduxProvider>
);
