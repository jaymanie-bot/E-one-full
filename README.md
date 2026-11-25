# E-One Machinery
A responsive engineering website, searchable equipment catalogue and database-backed quotation intake. Built with React, Vinext, a Cloudflare Worker and D1.

## Development and release
Use Node 22.13 or later. Install the locked dependencies with npm ci and run npm run dev. The hosting configuration binds the D1 database as DB. Run npm run build to produce dist/server/index.js and the generated Worker configuration. Sites applies the version-controlled SQL migrations when publishing.

For local quotation testing after building, apply each pending SQL file in drizzle/ in order with Wrangler. For example:

    node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_cultured_nova.sql

## Operations
Edit `app/catalogue-data.ts` to maintain the 26 machine records and seven production-line solutions. Machine images are in `public/catalogue/`, while uploaded project assets are in `public/eone/`. Every catalogue item has a dedicated `/product/:slug` page, and every production line has a `/solutions/:slug` page. The quote form sends a validated POST to `/api/enquiries` and returns a reference once D1 accepts the record. Repeated submissions with the same reference are deduplicated. Footer newsletter signups post to `/api/newsletter` and are stored in the `newsletter_subscribers` table. The Site owner can review both tables using Sites database tools. Email campaign delivery or CRM synchronization requires a separate integration.

This bid deployment is owner-private. Before a domain migration, obtain company approval for content, enquiry handling and domain access, and map existing URLs. The existing E-One website remains independent of this project.

## Uploaded E-One project
This revision migrates the supplied eoner.zip project into server-rendered routes and expands it with the equipment and solution material available on the existing E-One website. Source wording was rewritten for clarity and contradictory product descriptions were omitted or corrected conservatively. Production-line descriptions and feature lists from the uploaded project remain in `app/source-content.json`. The old HTML entry points and existing solution URLs redirect to their new destinations. Confirm machine specifications and performance claims with E-One engineering before a public domain migration. Insights link to the existing E-One articles.
