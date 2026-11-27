# E-One Machinery Version 16

Published 27 November 2026. This release contains the website source and the production Cloudflare Worker build for Version 16. The source commit used to build and publish the site is `e6f7d332c1dd4693fd80632c3d7dcbd3a7855311`.

## What's new

- HWAMDA is the principal injection machinery partner. General-purpose M8-SII, PET preform and pail press content uses HWAMDA manufacturer references, photographs and a model comparison table.
- WENSUI is the principal injection ancillary partner. All nine listings have locally stored catalogue or manufacturer images, specifications and selection guidance.
- Heyan Moulds is the principal precision tooling partner. The moulds section covers six product families with actual catalogue images, design information and quotation links.
- Best Crown is the principal beverage filling turnkey partner. Five filling-machine entries and the complete beverage-line content align with its catalogue.
- Yizumi remains a technology partner only; its machine and demonstration content is no longer displayed.
- The approved catalogue retains 36 machinery listings and ten production solution pages.

## Project folders

- `app/partners.ts`: principal and additional technology-partner roles.
- `app/catalogue-data.ts`, `app/ancillary-data.ts`, `app/additional-machines.ts`: equipment and solution listings.
- `app/buyer-data.ts`, `app/machine-guides.ts`, `app/solution-guides.ts`, `app/bestcrown-data.ts`: technical specifications and buyer guidance.
- `public/eone/hwamda/`, `public/eone/wensui/`, `public/eone/heyan/`, `public/eone/bestcrown/`: manufacturer and catalogue reference media.
- `dist/client/` and `dist/server/`: generated production build.

## Develop and build

Use Node.js 22.13 or later. From the project root:

```sh
npm ci
npm run dev
npm run build
```

The built Worker entry point is `dist/server/index.js`, with the generated configuration at `dist/server/wrangler.json`. For independent hosting, regenerate the build and configure your own D1 database with the `DB` binding and the migrations in `drizzle/`. Deployment credentials, private runtime configuration and live database records are not included in this export. Verify enquiry and newsletter forms before any domain switch.

The Version 12 archive and previous release notes remain in the repository for historical reference.
