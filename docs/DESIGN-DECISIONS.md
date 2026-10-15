# GAMANA theme — design decisions

This is the working record of the storefront direction and what still needs real store input. Shopify theme source lives at the repository root; the local prototype is in the repository-root `preview/` directory.

## Brief

- **Store name:** GAMANA, matching the provided storefront screenshot.
- **Theme purpose:** a functional Shopify Online Store 2.0 theme with standard, editable Dawn sections.
- **Brand assets and copy:** starter content until the store's approved logo, product catalog, photography, and copy are supplied.
- **Shopping needs:** product, collection, search, cart, and checkout handoff use Shopify/Dawn behavior rather than demo-only code.

## Visual direction

- **Reference:** high-level Apple retail cues—short, clear navigation; product-first campaign storytelling; confident but readable headlines; generous whitespace; focused product and collection groupings; and simple calls to action. This is a design reference only; the theme does not use Apple branding, copy, or assets.
- **Palette:** clean white `#FFFFFF`, soft light gray `#F5F5F7`, near-black `#1D1D1F`, and a restrained blue accent for primary actions.
- **Type:** modern sans-serif headlines and body copy with responsive scale and strong readability.
- **Photography:** the hero image is a temporary generated editorial placeholder. Replace it with approved, licensed store photography and descriptive alt text.
- **Home page:** native image banner → live featured products → editable collection cards → three-column value statement → newsletter signup → Dawn footer.
- **Responsive behavior:** Dawn's mobile navigation, stacked content, two-column product discovery, accessible controls, and reduced-motion support.

## Functional preview versus live store

- The standalone preview in `preview/` demonstrates layout and sample interactions only. It does not create orders, collect subscriber emails, or connect to inventory.
- The Shopify Liquid theme reads the merchant's actual product and collection data and retains Dawn's product-form, search, cart, and theme-editor behavior.
- `templates/index.json` is the storefront home page. `templates/404.json` is only the not-found fallback; the Shopify-ready archive must keep the theme folders at the ZIP root.

## Before launch

Replace the starter wordmark, copy, photos, products, collection assignments, navigation, policy details, and social links with approved store content. Test the unpublished theme on desktop and mobile, confirm each menu and product link, run Theme Check, and preview all product, collection, search, cart, and not-found routes before publishing.
