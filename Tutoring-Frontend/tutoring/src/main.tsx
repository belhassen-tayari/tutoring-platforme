import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./router/Routes.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);
