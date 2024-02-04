import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { DarkModeProvider } from "../hooks/DarkmodeProvider.jsx";
import { AuthContextProvider } from "../hooks/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
