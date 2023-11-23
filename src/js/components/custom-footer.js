class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
        <ul>
          <li>Copyright © 2023</li>
          <li>Atha Rizki P</li>
        </ul>
      </footer>
        `;
  }
}

customElements.define("custom-footer", CustomFooter);
