import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/bootstrap.scss";

// Cada arquivo HTML informa qual página deve ser renderizada
// pelo atributo data-page do elemento <body>.
const page = document.body.dataset.page || "home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App page={page} />
  </StrictMode>
);
