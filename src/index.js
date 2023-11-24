import "regenerator-runtime";

// Import styles
import "./style/main.css";

// Component
import "./js/components/hero";
import "./js/components/navbar";
import "./js/components/custom-footer";

import App from "./js/views/App";

// Inisiasi App
const app = new App({
  main: document.querySelector("#main-content"),
  drawer: document.querySelector("#navbar__menu"),
  listMenu: document.querySelector("#navbar__list"),
});

window.addEventListener("DOMContentLoaded", () => {
  app.renderPage();
  console.log("render 6");
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
