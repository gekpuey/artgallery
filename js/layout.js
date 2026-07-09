/* Testing Art Gallery — shared header/footer, injected on every page */

const NAV_LINKS = [
  { href: "about.html", label: "About Us" },
  { href: "exhibition.html", label: "Exhibition" },
  { href: "how-to-sell.html", label: "How to Sell" },
  { href: "how-to-buy.html", label: "How to Buy" },
  { href: "contact.html", label: "Contact Us" },
];

function renderHeader() {
  const current = document.body.dataset.page || "";
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}"${l.href === current ? ' aria-current="page"' : ""}>${l.label}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <div class="wrap">
      <a href="index.html" class="wordmark">Testing Art Gallery</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
      </button>
      <nav class="main-nav" id="main-nav">${links}</nav>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="wrap">
      <div class="footer-col">
        <h4>Testing Art Gallery</h4>
        <p>142 Aldergate Row<br>Bristol, BS1 4QP</p>
      </div>
      <div class="footer-col">
        <h4>Visit</h4>
        <a href="exhibition.html">Current Exhibition</a>
        <a href="contact.html">Directions &amp; Hours</a>
      </div>
      <div class="footer-col">
        <h4>Collectors</h4>
        <a href="how-to-buy.html">How to Buy</a>
        <a href="how-to-sell.html">How to Sell</a>
      </div>
      <div class="footer-col">
        <h4>Gallery</h4>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      © ${new Date().getFullYear()} Testing Art Gallery. All works shown by kind permission of the artists.
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
