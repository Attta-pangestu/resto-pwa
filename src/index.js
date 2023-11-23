// Import styles
import "./style/main.css";

// Component
import "./js/components/hero";
import "./js/components/navbar";
import "./js/components/custom-footer";

// Utlis
import DrawerIniator from "./js/utilities/drawer-iniator";

window.addEventListener("DOMContentLoaded", () => {
  new DrawerIniator({
    main: document.querySelector(".header__hero__wrapper"),
    drawer: document.querySelector(".navbar__menu"),
    listMenu: document.querySelector(".navbar__list"),
  });
});
