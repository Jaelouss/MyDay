import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./context/LanguageProvider";

export const LanguageContext = createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
