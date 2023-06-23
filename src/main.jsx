import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { LanguageProvider } from "@context/LanguageContext/LanguageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* styles arabe */}
    {/* <LanguageProvider initialLanguage="ar"> */}
    <LanguageProvider initialLanguage="es">
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
