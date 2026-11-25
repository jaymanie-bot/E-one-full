# E-One Machinery Version 12

This export contains the source files and built Cloudflare Worker assets for the published Version 12 release. The source commit is `4172a319ffbb9a1560b304bd6df949aad91d06d7`.

## Develop and build

Use Node.js 22.13 or later. From the extracted project directory:

```sh
npm ci
npm run dev
```

Run `npm run build` to rebuild the Worker and assets after editing the source. The included build has its Worker entry point at `dist/server/index.js`, its generated configuration at `dist/server/wrangler.json`, and its browser assets under `dist/client/`.

## Host this release

Use a Cloudflare Workers deployment that serves the included assets. To deploy to a different account or environment, configure its own D1 database with the `DB` binding and apply the SQL migrations in `drizzle/` in order. The database backs the quote and newsletter forms. Test both forms on the destination before switching the domain.

## Maintain the catalogue

The website contains 33 machines across eight categories. Edit `app/catalogue-data.ts` for the product catalogue and core solutions, `app/ancillary-data.ts` for ancillary machines, and `app/solutions/injection.tsx` for the injection demonstration and application content.

Manufacturer reference photos and the injection video use external links. This export contains website code, bundled assets, and database schema migrations. Hosting credentials and live database records are managed separately.
