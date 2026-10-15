# Start here: the Shopify theme, in plain English

This guide is for the person making the design decisions—not someone expected to write code. Shopify's developer documentation is large, so this page explains the parts that matter for this project in everyday language.

## What we're making

A Shopify **theme** is the design and page behavior customers see in an online store. Shopify still manages the products, inventory, checkout, and orders. The theme decides how the store presents those things.

The starting concept is **AUREL**, a temporary premium fashion/beauty brand direction. Its name, words, images, and example prices are placeholders. We will replace them with the actual client's approved brand and store content before launch.

## Current state

- The standard Shopify theme structure is in place inside the `GAMANA/` folder. Paths mentioned in this guide are relative to that folder.
- The homepage has custom, editable AUREL sections for a hero, brand principles, collection stories, and a brand story.
- Shopify Dawn provides the normal product, collection, search, cart drawer, and theme-editor behavior. The styling has been changed to the agreed modern-luxe direction.
- A visual concept is available in the preview. Its add-to-bag and email interactions are only demonstrations; they do not send orders or email addresses.
- Nothing has been uploaded to a Shopify store or published live.

The theme is based on Shopify Dawn 16.0.0, which is included with its license in `LICENSE.md`. It was chosen as a safer starting point for a client store with complete shopping pages and accessible interactions. The separate `preview/` and `docs/` folders are for review and guidance; `.shopifyignore` keeps them out of theme uploads.

## What the Shopify terms mean

| Shopify term | In everyday words |
| --- | --- |
| **Liquid** | Shopify's page-filling language. It puts the correct product name, picture, price, and other store information into a design. I handle this part. |
| **Template** | The recipe for a type of page, such as the home page, product page, or collection page. |
| **Section** | A larger page area—such as a hero, product grid, or brand story—that can usually be moved or edited in Shopify's visual editor. |
| **Block** | A smaller item inside a section—such as one principle, slide, or testimonial. |
| **Theme editor** | Shopify's visual control panel. It lets the store owner change supported text, images, colors, and section order without changing code. |
| **Shopify CLI** | Shopify's developer tool for previewing and transferring a theme. I handle the technical commands; you do not need to learn them to make design decisions. |
| **Theme Check** | An automatic checker that catches many common code mistakes. It is useful, but it does not replace visual, accessibility, or device testing. |
| **Online Store 2.0** | Shopify's flexible theme structure. It lets merchants rearrange sections on many page types and connect store data to theme settings. |

## How the theme is organized

You do not need to open these files yourself, but knowing what each part does can make design conversations easier:

- `layout/theme.liquid` is the shared frame around the store, including the common page shell.
- `templates/` contains the recipes for page types such as home, product, collection, cart, and search.
- `sections/` contains the reusable page areas that appear in Shopify's theme editor.
- `snippets/` contains small pieces reused in more than one place, such as a product card.
- `assets/` holds styles, scripts, icons, and the replaceable sample images.
- `config/` defines the options the store owner can change in the theme editor.
- `locales/` holds translated wording.

The practical idea: pages are assembled from reusable pieces, and useful design choices can be exposed in Shopify's visual editor instead of being locked in code.

## Simple instructions for reviewing the design

1. Open the **live preview** shown with this project. No installation or command line is needed to review the design.
2. Check it at both desktop and phone widths.
3. Try the menu, search, and “Add to bag” buttons. In this preview they are illustrative only; the real theme uses Shopify's own store data and cart.
4. Tell me what you want changed—such as the image crop, spacing, colors, type, order of sections, or shopping details.

When a Shopify store is connected later, the theme can be previewed safely as an **unpublished theme**. In everyday terms, that means it sits in the theme library for review and does not replace the live website. The store owner can use Shopify's **Online Store → Themes → Customize** screen to change editable text, imagery, and sections. Publishing is a separate step and will happen only after approval.

## How to replace a sample image in Shopify

After the theme is in a store, the store owner can replace the hero image without editing code:

1. In Shopify admin, open **Online Store → Themes → Customize** on the unpublished AUREL theme.
2. Use the page selector to open the home page, then select **Atelier hero** in the left-hand panel.
3. Choose or upload the real brand image. Add a short image description when the image communicates useful information; leave it empty when the image is purely decorative.
4. Preview the change on desktop and mobile, then press **Save**. Saving changes the unpublished theme, not the live storefront.

The same idea applies to the other sections: select the section in the left panel, replace its image or text, and save. I can provide a page-by-page handoff once the real store content and theme preview are available.

## What “premium” means in this build

- A distinct point of view that fits the products and audience.
- Strong product photography, with images cropped consistently.
- Clear typography, deliberate spacing, and an easy-to-follow buying journey.
- A useful mobile layout, not just a squeezed desktop layout.
- Good contrast, visible keyboard focus, descriptive image text where needed, and controls that work without a mouse.
- A quick experience. The important words, products, and shopping actions should not depend on decorative effects or large scripts.
- Theme-editor controls that make real brand changes easy without overwhelming the store owner.

## What is still waiting for the client

The actual brand name, final fashion-versus-beauty focus, logo, brand palette, approved fonts, product photography, final copy, menus, collection assignments, shipping/returns details, and social links are not known yet. The design is ready to be reviewed, but those real store details should be supplied before it is treated as launch-ready.

## Shopify references reviewed

The official Shopify pages are written for developers, so you do not need to read them before we continue. I reviewed the theme-building pages linked from the main [Shopify themes overview](https://shopify.dev/docs/storefronts/themes), including:

- [Create a theme](https://shopify.dev/docs/storefronts/themes/getting-started/create) and [customize a theme](https://shopify.dev/docs/storefronts/themes/getting-started/customize) — the basic build, preview, and handoff workflow.
- [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture), [Online Store 2.0](https://shopify.dev/docs/storefronts/themes/os20), and [JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates) — how pages and editable sections fit together.
- [Theme design principles](https://shopify.dev/docs/storefronts/themes/best-practices/design), [sections and blocks](https://shopify.dev/docs/storefronts/themes/best-practices/templates-sections-blocks), [accessibility](https://shopify.dev/docs/storefronts/themes/best-practices/accessibility), and [performance](https://shopify.dev/docs/storefronts/themes/best-practices/performance) — balancing visual quality, flexibility, inclusion, and speed.
- [Liquid reference](https://shopify.dev/docs/api/liquid), [Ajax API](https://shopify.dev/docs/api/ajax), [Section Rendering API](https://shopify.dev/docs/api/ajax/section-rendering), the [Liquid cheat sheet](https://www.shopify.com/partners/shopify-cheat-sheet), and the [Liquid code examples](https://shopify.github.io/liquid-code-examples/) — references for dynamic store data and interactions.
- [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli), [GitHub integration](https://shopify.dev/docs/storefronts/themes/tools/github), and [Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check) — the tools used to preview, track, and check theme work.
- [Shopify Theme Store overview](https://shopify.dev/docs/storefronts/themes/store) — relevant only if the goal later changes to selling the theme to other merchants.

The Liquid reference and Liquid-example library are large reference collections rather than single how-to articles. I reviewed their structure and the parts relevant to this theme; a specific example can be consulted as a feature requires it.
