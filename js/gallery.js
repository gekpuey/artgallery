/* Linden House — landing page gallery + filters */

function populateSelect(id, values, placeholder) {
  const select = document.getElementById(id);
  select.innerHTML =
    `<option value="">${placeholder}</option>` +
    values.map((v) => `<option value="${v}">${v}</option>`).join("");
}

function populatePriceSelect() {
  const select = document.getElementById("filter-price");
  select.innerHTML =
    `<option value="">All prices</option>` +
    PRICE_BRACKETS.map((b, i) => `<option value="${i}">${b.label}</option>`).join("");
}

function cardTemplate(art, index) {
  return `
    <article class="art-card" style="transition-delay:${(index % 6) * 60}ms">
      <a href="artwork.html?id=${art.id}" aria-label="View ${art.title}">
        <div class="art-card-media">
          <img src="images/${art.id}.svg" alt="${art.title}, ${art.medium.toLowerCase()} by ${art.artist}" loading="lazy" />
          <span class="view-pill">View Artwork &rarr;</span>
        </div>
      </a>
      <div class="art-card-info">
        <div>
          <div class="art-card-title"><a href="artwork.html?id=${art.id}">${art.title}</a></div>
          <div class="art-card-artist">${art.artist}, ${art.year}</div>
        </div>
        <div class="art-card-price">${formatPrice(art.price)}</div>
      </div>
    </article>
  `;
}

function getFilters() {
  return {
    medium: document.getElementById("filter-medium").value,
    subject: document.getElementById("filter-subject").value,
    size: document.getElementById("filter-size").value,
    artist: document.getElementById("filter-artist").value,
    priceIdx: document.getElementById("filter-price").value,
  };
}

function applyFilters() {
  const f = getFilters();
  const bracket = f.priceIdx !== "" ? PRICE_BRACKETS[Number(f.priceIdx)] : null;

  const results = ARTWORKS.filter((art) => {
    if (f.medium && art.medium !== f.medium) return false;
    if (f.subject && art.subject !== f.subject) return false;
    if (f.size && art.size !== f.size) return false;
    if (f.artist && art.artist !== f.artist) return false;
    if (bracket && (art.price < bracket.min || art.price > bracket.max)) return false;
    return true;
  });

  renderGrid(results);
  updateCount(results.length);
}

function renderGrid(results) {
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("no-results");

  if (results.length === 0) {
    grid.innerHTML = "";
    empty.classList.add("visible");
    return;
  }
  empty.classList.remove("visible");
  grid.innerHTML = results.map(cardTemplate).join("");
  observeCards();
}

function updateCount(n) {
  const el = document.getElementById("filter-count");
  el.textContent = `Showing ${n} of ${ARTWORKS.length} works`;
}

function observeCards() {
  const cards = document.querySelectorAll(".art-card");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  cards.forEach((c) => io.observe(c));
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelect("filter-medium", MEDIUMS, "All mediums");
  populateSelect("filter-subject", SUBJECTS, "All subjects");
  populateSelect("filter-size", SIZES, "All sizes");
  populateSelect("filter-artist", ARTISTS, "All artists");
  populatePriceSelect();

  ["filter-medium", "filter-subject", "filter-size", "filter-artist", "filter-price"].forEach(
    (id) => document.getElementById(id).addEventListener("change", applyFilters)
  );

  document.getElementById("filter-clear").addEventListener("click", () => {
    ["filter-medium", "filter-subject", "filter-size", "filter-artist", "filter-price"].forEach(
      (id) => (document.getElementById(id).value = "")
    );
    applyFilters();
  });

  applyFilters();
});
