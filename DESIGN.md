# Linden House — Brand Guide

**Concept:** A small, considered fine-art gallery. Editorial, warm, unhurried —
like a well-printed catalogue, not a marketplace.

## Palette
- `--bg`: #F5F0E6 (warm parchment)
- `--surface`: #FFFCF6 (card surface, slightly lighter than bg)
- `--ink`: #211C16 (primary text, warm near-black)
- `--muted`: #6F675A (secondary text)
- `--line`: #DED4C2 (hairlines, borders)
- `--accent`: #B34E2A (clay/terracotta — CTAs, active states, price)
- `--accent-ink`: #FFF9F2 (text on accent)

No purple, no default blue links, no dark mode toggle (single considered mode).

## Typography
- Display: 'Fraunces', serif — headlines, artwork titles, nav wordmark. Optical
  sizing pushed large, slightly negative letter-spacing at display sizes.
- Body: 'Work Sans', sans-serif — body copy, labels, UI chrome, uppercase
  micro-labels with wide letter-spacing for eyebrows/tags.

## Motion language
Staggered reveals + subtle hover reveal. No glassmorphism, no spring bounce.
- Hero: headline/subhead fade-up on load, staggered.
- Gallery grid: cards fade-up on scroll (IntersectionObserver), staggered by index.
- Card hover: image scales 1.0 → 1.04, "View Artwork" pill fades/slides in.

## Visual style
Cardless where possible. Gallery grid uses plain image + caption blocks
divided by whitespace and hairlines, not boxed cards. Sharp corners
throughout (no border-radius on images/buttons except the pill CTA).

## Components
- Buttons: rectangular, thin border, fills with --ink on hover (outline style)
  or solid --accent for primary actions.
- "View Artwork" pill: solid --ink background, --accent-ink text, appears on
  image hover (desktop) / always visible (mobile).
- Filter bar: inline row of native selects styled flat with bottom border only.
- Nav: wordmark left, 5 category links right, thin bottom hairline, no shadow.

## Spacing scale
4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 (px)
