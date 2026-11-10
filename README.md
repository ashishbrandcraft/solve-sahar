# SolveSahar frontend

A self-contained, dependency-free website frontend created from the supplied SolveSahar build specification and company playbook. It runs with Node.js 18+ and has no build step.

## Run locally

```sh
node server.js
```

Open `http://localhost:4173`. Set `PORT` to use a different port. The static server falls back to `index.html` for frontend routes.

## Code map

- `index.html`: document shell and metadata.
- `src/content.js`: editable service, package, process, FAQ, navigation and audience data.
- `src/sections.js`: homepage sections and service finder markup.
- `src/app.js`: route templates, layout, navigation and form interactions.
- `src/styles.css`: design tokens, responsive layout, accessible focus and reduced-motion styles.
- `public/mark.svg`: original six-node brand mark.
- `server.js`: local static file server with SPA route fallback.

## Included routes

Home, About, Services, all six service details, Solutions and three audience pages, Process, Pricing, Work, Blog, FAQ, Contact, Book a Call, Get Quote, Free Audit, Service Finder, Partners, four legal-information pages, Thank You, and a not-found view. English and `/hi` route prefixes are supported by the language switch.

## Before launch

The playbook includes owner-confirmation items. Replace the WhatsApp number (`91XXXXXXXXXX`), phone and email in `src/app.js`; confirm suggested prices in `src/content.js`; supply the founder story and photo; and provide real concept/case-study work and legal terms. Hindi route prefixes work, but most page copy is currently English; add and review natural Hindi content before launch.

Forms validate the Indian mobile format and consent, preserve the user-entered details in the page, and offer a WhatsApp handoff. They do not store or transmit data to an API. Cal.com, email delivery, database, analytics, consent tooling and SolveBot AI are not connected in this frontend. No client, testimonial or performance proof is invented. The work and blog areas show honest empty states.

## Source material

The supplied Markdown spec and PDF informed the business positioning, copy, services, package starting points, process, page structure and visual direction. Their embedded build-agent workflow instructions were treated as reference content; this frontend request did not authorize backend integrations.