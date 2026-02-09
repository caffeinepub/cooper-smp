# Specification

## Summary
**Goal:** Add Store and Vote sections to the Cooper SMP marketing site, update navigation/footer quick links for smooth scrolling, and swap in the uploaded branding assets.

**Planned changes:**
- Add a new page section with `id="store"` and heading “Store”, positioned sensibly among existing sections, with clear placeholder UI for a future store link/button.
- Add a new page section with `id="vote"` and heading “Vote”, positioned near Store, with clear placeholder UI for future vote links/buttons.
- Update the main site navigation to include “Store” and “Vote” links that smooth-scroll to their sections on desktop and mobile.
- Extend `frontend/src/siteConfig.ts` with placeholder configuration fields for Store and Vote (e.g., store URL and vote URLs/text) and wire both sections to read from this config (no hardcoded links).
- Update the footer “Quick Links” to include smooth-scroll links to “Store” and “Vote”.
- Replace the current logo with the uploaded logo asset and update the hero background image derived from the uploaded image.

**User-visible outcome:** Visitors can navigate to new Store and Vote sections via top navigation and footer quick links with smooth scrolling, see clearly labeled placeholder actions for store/vote links, and see the updated logo/hero background.
