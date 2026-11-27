# E-One Machinery Version 15

This release contains the source files and built Cloudflare Worker assets for the published E-One Machinery website, Version 15. The source commit used to build and publish the release is `49c8ef033c3cd33f51e99958a495527a10054ff0`.

## Develop and build

Use Node.js 22.13 or later. Run from the project root.

```sh
npm ci
npm run dev
npm run build
```

The included build has its Worker entry point at `dist/server/index.js`, its generated configuration at `dist/server/wrangler.json` and browser assets under `dist/client/`. Run `npm run build` locally before deployment to generate the private runtime configuration required by the framework.

## Host this release

For an independent Cloudflare Workers deployment, configure your own D1 database with the `DB` binding and apply the migrations in `drizzle/`. Verify quotation and newsletter forms on the destination before switching the domain. Hosting credentials and live database records are managed separately.

## Maintain the catalogue

Version 15 contains 36 machinery listings across eight categories and ten production solution pages.

- `app/catalogue-data.ts` and `app/machine-guides.ts` contain the machinery catalogue and equipment guidance.
- `app/solution-guides.ts` and `app/bestcrown-data.ts` contain production-line technical comparisons, including Best Crown references.
- `public/eone/bestcrown/` contains Best Crown's logo and equipment photographs used in the beverage section.

The earlier Version 12 export is retained as a historical archive.
