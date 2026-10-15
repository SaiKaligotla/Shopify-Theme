# AUREL — Modern Shopify storefront

AUREL is a designer-led Online Store 2.0 theme for a premium fashion and beauty store. Brand copy, sample product photography, names, and prices are placeholders; replace them with the store's approved identity and catalog before launch.

## Preview and package

- The interactive visual concept lives in `preview/`. Its shared assets are loaded from `assets/` so it can be viewed from the repository's root `index.html` on a static host.
- `GAMANA/` is the Shopify theme root: it contains the standard `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, and `templates/` directories.
- The repository-root `Shopify-Theme.zip` is the upload-ready theme archive. It begins with those Shopify folders directly and respects `.shopifyignore`; it does not include the project notes or the local preview.
- Run Shopify CLI and Theme Check commands from inside `GAMANA/`.

## Design direction

The store uses a restrained product-first layout: compact navigation, a campaign-scale hero, generous breathing room, clear product and collection groupings, and direct calls to action. It takes broad visual cues from Apple's product storytelling and retail clarity, while keeping AUREL's own brand, imagery, and fashion/beauty catalog. Shopify Dawn 16.0.0 provides the underlying product, collection, cart, search, accessibility, and theme-editor behavior.

See [`docs/START-HERE.md`](docs/START-HERE.md) for the plain-English handoff and [`docs/DESIGN-DECISIONS.md`](docs/DESIGN-DECISIONS.md) for the design record. The included Dawn license is in `LICENSE.md`.
