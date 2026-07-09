/* Linden House — artwork detail page */

function renderArtwork() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const art = getArtworkById(id);
  const root = document.getElementById("artwork-root");

  if (!art) {
    root.innerHTML = `
      <div class="wrap">
        <a href="index.html" class="back-link">&larr; Back to the collection</a>
        <h1>We couldn't find that piece.</h1>
        <p class="lede" style="margin-top:16px;">It may have sold or been de-listed from the current collection.</p>
      </div>
    `;
    document.title = "Artwork not found — Linden House";
    return;
  }

  document.title = `${art.title} — Linden House`;

  root.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="back-link">&larr; Back to the collection</a>
      <div class="artwork-columns">
        <div class="artwork-media">
          <img src="images/${art.id}.svg" alt="${art.title}, ${art.medium.toLowerCase()} by ${art.artist}" />
        </div>
        <div class="artwork-info">
          <p class="artwork-id-tag">Artwork ID ${art.artworkId}</p>
          <h1>${art.title}</h1>
          <p class="artist-line">${art.artist}, ${art.year}</p>
          <p class="artwork-price">${formatPrice(art.price)}</p>
          <p class="artwork-desc">${art.description}</p>

          <dl class="spec-table">
            <div class="spec-row"><dt>Artist</dt><dd>${art.artist}</dd></div>
            <div class="spec-row"><dt>Medium</dt><dd>${art.medium}</dd></div>
            <div class="spec-row"><dt>Subject</dt><dd>${art.subject}</dd></div>
            <div class="spec-row"><dt>Size</dt><dd>${art.size} &middot; ${art.dimensions}</dd></div>
            <div class="spec-row"><dt>Year</dt><dd>${art.year}</dd></div>
            <div class="spec-row"><dt>Artwork ID</dt><dd>${art.artworkId}</dd></div>
          </dl>

          <div class="artwork-cta">
            <a href="how-to-buy.html" class="btn btn-primary">Enquire About This Piece</a>
            <a href="contact.html" class="btn">Contact the Gallery</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderArtwork);
