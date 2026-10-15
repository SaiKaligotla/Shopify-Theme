# AUREL theme — design decisions

This is the working record of the storefront direction and what still needs real brand input.

## Brief

- **Store type:** premium fashion and beauty.
- **Theme purpose:** a client-specific Shopify storefront, not a public Theme Store product.
- **Brand assets:** temporary AUREL wordmark, copy, and sample imagery until approved client assets are supplied.
- **Shopping needs:** product, collection, search, cart, and checkout flows powered by Shopify Dawn rather than demo-only code.

## Visual direction

- **Reference:** high-level Apple retail cues—short, clear navigation; product-first campaign storytelling; confident but readable headlines; generous whitespace; modular product and collection features; and simple calls to action. This is a design reference only; the theme does not use Apple branding, copy, or assets.
- **Palette:** clean white `#FFFFFF`, soft light gray `#F5F5F7`, near-black `#1D1D1F`, and a restrained blue `#0066CC` for primary actions.
- **Type:** modern sans-serif headlines and body copy with responsive scale and strong readability.
- **Photography:** existing AI-generated product/editorial placeholders are temporary. Replace them with licensed, approved fashion/beauty photography and descriptive alt text.
- **Page rhythm:** compact announcement/navigation → campaign hero → short brand principles → live featured products → collection stories → editorial feature → newsletter → useful footer.
- **Responsive behavior:** deliberate mobile navigation, stacked campaign copy, two-column product discovery, accessible controls, and reduced-motion support.

## Functional preview versus live store

- The standalone preview in `preview/` demonstrates layout and sample interactions only. It does not create orders, collect subscriber emails, or connect to inventory.
- The Shopify Liquid theme reads the merchant's actual product and collection data and retains Dawn's cart, product-form, search, and theme-editor behavior.
- `templates/index.json` is the storefront home page. `templates/404.json` is only the not-found fallback; the Shopify-ready archive must keep the theme folders at the ZIP root.

## Before launch

Replace the sample wordmark, copy, photos, prices, products, collection assignments, navigation, policy details, social links, and all unconfirmed fulfillment claims with approved store content. Test the unpublished theme on desktop and mobile, confirm each menu and product link, run Theme Check, and preview all product, collection, search, cart, and not-found routes before publishing.
