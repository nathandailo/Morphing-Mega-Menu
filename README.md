# Morphing Mega Menu

[Live demo](https://morphing-mega-menu.nathandailo.com)

A floating mega menu prototype. The nav stays fixed above the page, and hovering a parent opens a panel "shell" that morphs in size and position depending on the submenu layout, sliding content in and out as you move between parents.

## Features

- Six submenu styles, one per top-level parent:
  - Image grid (cards with thumbnails, titles, descriptions)
  - CTA + image grid
  - Icon grid
  - CTA + icon grid
  - Compact icons (narrow dropdown)
  - Compact links (narrow dropdown)
- One shared shell that resizes, repositions, and slides content between parents instead of each parent having its own dropdown.
- Third-level drill-down: items with an arrow open a compact dropdown anchored under their parent, with a back link to return. These stay open until dismissed via the back link, a click elsewhere, or Escape.
- Mobile drill navigation: parents slide to children, children slide to subchildren, with a back button that relabels itself with the current parent's name.

## Tech

Plain HTML, CSS, and JS. No build step. Uses GSAP for animation.

## License

MIT, see LICENSE.
