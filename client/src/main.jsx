import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { DarkModeProvider } from "../hooks/DarkmodeProvider.jsx";
import { AuthContextProvider } from "../hooks/authContext.jsx";
import { FormProvider } from "../hooks/formContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
      <FormProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
        </FormProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
