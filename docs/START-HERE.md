# Start here: the Shopify theme, in plain English

This guide is for the person making design decisions—not someone expected to write code. Shopify manages products, inventory, checkout, and orders; a theme controls how the storefront presents them.

## What we're making

This is the **GAMANA** storefront theme. The current copy and product photography are starter content, so replace them with the shop's approved brand assets and catalog before launch. The design takes broad inspiration from Apple's product storytelling—clear navigation, strong campaign imagery, generous whitespace, and focused product groups—without using Apple branding or assets.

## Current state

- **The Shopify theme root is the repository root**, one level above this guide. Shopify's `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, and `templates/` directories are directly at that level; there is no enclosing `GAMANA/` folder.
- `templates/index.json` is the home page and uses Shopify/Dawn sections: a campaign banner, live featured collection, collection picker, editorial/value columns, and newsletter.
- The home page reads Shopify catalog data. The collection list and image banner can be customized from **Online Store → Themes → Customize**.
- Dawn provides the product, collection, search, cart, checkout handoff, accessibility, and theme-editor behavior. `templates/404.json` is only the not-found fallback; it is not the home page.
- The local preview in `preview/` is a visual prototype with sample products and prices. Its cart and email form are demonstrations; they do not create orders or collect email addresses. The repository-root `index.html` opens this preview on a static host.
- The repository-root `Shopify-Theme.zip` is the upload-ready theme archive. Its root contains Shopify's standard theme folders directly, with no parent `GAMANA/` folder; it excludes project notes and the local preview.
- Uploading a theme creates a draft in Shopify and does not publish it automatically. Use the Shopify theme editor to preview and publish only when approved.

## What the Shopify terms mean

| Shopify term | In everyday words |
| --- | --- |
| **Liquid** | Shopify's page-filling language. It puts the correct product name, picture, price, and other store information into a design. |
| **Template** | The recipe for a type of page, such as the home page, product page, or collection page. |
| **Section** | A page area—such as a hero, product grid, or story—that can be customized in Shopify's visual editor. |
| **Block** | A smaller item inside a section, such as a principle or product story. |
| **Theme editor** | Shopify's visual control panel for changing supported text, images, colors, and section order without editing code. |
| **Shopify CLI** | Shopify's developer tool for previewing and transferring a theme. |
| **Theme Check** | An automatic checker for common theme-code mistakes. It is useful, but it does not replace visual, accessibility, or device testing. |
| **Online Store 2.0** | Shopify's flexible theme structure. It lets merchants rearrange sections on many page types and connect store data to theme settings. |

## How the theme is organized

All paths below are relative to the repository root:

- `layout/theme.liquid` is the shared frame around the store.
- `templates/` contains the page recipes for home, product, collection, cart, search, and other routes.
- `sections/` contains reusable page areas available in Shopify's theme editor.
- `snippets/` contains small pieces reused in more than one place, such as a product card.
- `assets/` holds styles, scripts, icons, and replaceable sample images.
- `config/` defines the options the store owner can change in the theme editor.
- `locales/` holds translated wording.
- `preview/` and `docs/` contain local review materials and are excluded from Shopify uploads.

## Reviewing the design

1. Open the local preview and check it at desktop and phone widths.
2. In Shopify, preview the unpublished theme and try the menu, search, product links, and add-to-cart behavior.
3. Tell me what to change—such as the image, copy, colors, spacing, product group, or section order.

## What is still waiting for the store owner

The final logo, brand guidelines, approved product photography and copy, collection assignments, navigation links, policies, shipping/returns details, and social links need confirmation. Review the unpublished theme, run Theme Check, and test product, collection, search, cart, and not-found routes before launch.
