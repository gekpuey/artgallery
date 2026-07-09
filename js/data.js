/* Linden House — artwork catalogue data */

const PRICE_BRACKETS = [
  { label: "Under $1,000", min: 0, max: 999 },
  { label: "$1,000 – $3,000", min: 1000, max: 2999 },
  { label: "$3,000 – $6,000", min: 3000, max: 5999 },
  { label: "$6,000 and above", min: 6000, max: Infinity },
];

const ARTWORKS = [
  {
    id: "art-01",
    artworkId: "LH-001",
    title: "Low Country Light",
    artist: "Mara Solberg",
    year: 2023,
    medium: "Oil on canvas",
    subject: "Landscape",
    size: "Large",
    dimensions: "100 × 130 cm",
    price: 6200,
    description:
      "A wide, low horizon built up in slow layers of ochre and burnt umber, painted over three weeks from the same field at first light. Solberg works entirely from memory rather than photographs, so the composition drifts — the sun sits slightly too high, the ground slightly too warm.",
  },
  {
    id: "art-02",
    artworkId: "LH-002",
    title: "Static Bloom",
    artist: "Kofi Danquah",
    year: 2024,
    medium: "Acrylic on canvas",
    subject: "Abstract",
    size: "Medium",
    dimensions: "60 × 60 cm",
    price: 2900,
    description:
      "Overlapping ellipses in clay, forest and gold, built with fast, wet-on-wet layers so the edges bleed rather than sit. Part of Danquah's ongoing 'Interference' series exploring colour collision without a fixed focal point.",
  },
  {
    id: "art-03",
    artworkId: "LH-003",
    title: "Study in Ochre",
    artist: "Naomi Ashworth",
    year: 2022,
    medium: "Charcoal on paper",
    subject: "Portrait",
    size: "Small",
    dimensions: "30 × 40 cm",
    price: 850,
    description:
      "A quick, unfinished-looking sitting, deliberately left raw at the edges. Ashworth works in fifteen-minute sessions with a single sitter across a year, returning to the same paper each time.",
  },
  {
    id: "art-04",
    artworkId: "LH-004",
    title: "Tide Line No. 3",
    artist: "Ingrid Vela",
    year: 2023,
    medium: "Watercolor on paper",
    subject: "Seascape",
    size: "Small",
    dimensions: "28 × 38 cm",
    price: 640,
    description:
      "Loose bands of grey-green and rust wash across damp paper, painted directly on the shoreline before the tide could reach the easel. Third in a small run made over one October week on the Atlantic coast.",
  },
  {
    id: "art-05",
    artworkId: "LH-005",
    title: "Half Past the Hour",
    artist: "Tomas Ferreira",
    year: 2024,
    medium: "Mixed media",
    subject: "Urban",
    size: "Medium",
    dimensions: "70 × 70 cm",
    price: 3400,
    description:
      "Torn transit maps, house paint and graphite layered into a loose street grid, built from Ferreira's daily walk between two studios. The piece keeps changing under gallery light as the paper layers catch differently.",
  },
  {
    id: "art-06",
    artworkId: "LH-006",
    title: "Late Marsh Grasses",
    artist: "Etienne Rocha",
    year: 2021,
    medium: "Gouache on paper",
    subject: "Botanical",
    size: "Small",
    dimensions: "35 × 45 cm",
    price: 720,
    description:
      "A dense, upright study of reed and grass forms in matte gouache, made from cuttings kept in the studio through a whole season. Rocha favours the plants most painters discard for being unglamorous.",
  },
  {
    id: "art-07",
    artworkId: "LH-007",
    title: "After the Rain, Kessel",
    artist: "Mara Solberg",
    year: 2022,
    medium: "Oil on canvas",
    subject: "Landscape",
    size: "Medium",
    dimensions: "60 × 80 cm",
    price: 4100,
    description:
      "Painted in a single sitting immediately after a storm broke over the village of Kessel, while the light was still unstable. The wet ground is rendered almost entirely in reflected sky.",
  },
  {
    id: "art-08",
    artworkId: "LH-008",
    title: "Held Breath",
    artist: "Kofi Danquah",
    year: 2023,
    medium: "Acrylic on canvas",
    subject: "Abstract",
    size: "Large",
    dimensions: "110 × 140 cm",
    price: 7800,
    description:
      "The largest work in the 'Interference' series, built over six months in thin, translucent layers so earlier decisions remain faintly visible beneath the surface. No sketches were used.",
  },
  {
    id: "art-09",
    artworkId: "LH-009",
    title: "The Long Look",
    artist: "Naomi Ashworth",
    year: 2024,
    medium: "Oil on canvas",
    subject: "Portrait",
    size: "Medium",
    dimensions: "55 × 70 cm",
    price: 3950,
    description:
      "A formal, front-facing portrait built from over twenty short sittings, the paint reworked so many times the surface has a soft, worn quality more common in much older paintings.",
  },
  {
    id: "art-10",
    artworkId: "LH-010",
    title: "Grey Water, Morning",
    artist: "Ingrid Vela",
    year: 2022,
    medium: "Oil on canvas",
    subject: "Seascape",
    size: "Large",
    dimensions: "90 × 120 cm",
    price: 5600,
    description:
      "A flat, still sea rendered in close tonal greys and greens, with almost no horizon incident. Vela painted this from a fixed studio window over eleven consecutive mornings, tracking only how the light changed.",
  },
  {
    id: "art-11",
    artworkId: "LH-011",
    title: "Corner Lot",
    artist: "Tomas Ferreira",
    year: 2023,
    medium: "Acrylic on canvas",
    subject: "Urban",
    size: "Small",
    dimensions: "40 × 40 cm",
    price: 1450,
    description:
      "A compressed, top-down view of a vacant city lot, flattened into blocks of ochre and grey. Ferreira works from aerial reference photos taken on a borrowed drone.",
  },
  {
    id: "art-12",
    artworkId: "LH-012",
    title: "Winter Hedgerow",
    artist: "Etienne Rocha",
    year: 2024,
    medium: "Charcoal on paper",
    subject: "Botanical",
    size: "Medium",
    dimensions: "50 × 65 cm",
    price: 1100,
    description:
      "A dense, bare hedgerow drawn in a single afternoon in low winter light, the charcoal built up and lifted repeatedly to leave a faint ghosting behind each branch.",
  },
  {
    id: "art-13",
    artworkId: "LH-013",
    title: "Field, Late August",
    artist: "Mara Solberg",
    year: 2021,
    medium: "Watercolor on paper",
    subject: "Landscape",
    size: "Small",
    dimensions: "25 × 35 cm",
    price: 580,
    description:
      "A small, quickly worked study made in under an hour, kept by the artist for two years before agreeing to show it. The palette is unusually warm for Solberg's later, cooler landscapes.",
  },
  {
    id: "art-14",
    artworkId: "LH-014",
    title: "Interior Weather",
    artist: "Kofi Danquah",
    year: 2022,
    medium: "Mixed media",
    subject: "Abstract",
    size: "Medium",
    dimensions: "65 × 65 cm",
    price: 2650,
    description:
      "Layered paper, ink and thinned acrylic worked into a loose, cloud-like mass. Danquah made this piece over a single unusually low-pressure week, and considers it a departure from the harder-edged 'Interference' works.",
  },
];

const MEDIUMS = [...new Set(ARTWORKS.map((a) => a.medium))].sort();
const SUBJECTS = [...new Set(ARTWORKS.map((a) => a.subject))].sort();
const SIZES = ["Small", "Medium", "Large"];
const ARTISTS = [...new Set(ARTWORKS.map((a) => a.artist))].sort();

function getArtworkById(id) {
  return ARTWORKS.find((a) => a.id === id);
}

function formatPrice(price) {
  return "$" + price.toLocaleString("en-US");
}
