class DrawerIniator {
  constructor({ main, drawer, listMenu }) {
    (this.main = main),
      (this.drawer = drawer),
      (this.listMenu = listMenu),
      this._listenerInit();
  }

  _listenerInit() {
    this._toggleDrawer();
  }

  _toggleDrawer() {
    this.drawer.addEventListener("click", (event) => {
      event.stopPropagation();
      this.listMenu.classList.toggle("open");
    });
  }

  _closeDrawer() {
    this.main.addEventListener("click", (event) => {
      event.stopPropagation();
      this.listMenu.classList.remove("open");
    });
  }
}

export default DrawerIniator;
