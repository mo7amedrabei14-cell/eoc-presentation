# EOC Command Deck — Emergency Operations Center Presentation

[![Deploy to GitHub Pages](https://github.com/mo7amedrabei14-cell/eoc-presentation/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/mo7amedrabei14-cell/eoc-presentation/actions/workflows/deploy-pages.yml)

**Live presentation:** [mo7amedrabei14-cell.github.io/eoc-presentation](https://mo7amedrabei14-cell.github.io/eoc-presentation/)

A self-contained presentation showcasing the Egyptian Red Crescent (ERC) Emergency Operations Center (EOC) and the digital command environment used to bring operational information into a clearer, more coordinated decision-making view.

The presentation uses a dark command-center visual language, crimson action accents (`#c70000`), Arabic right-to-left content where appropriate, and a sequence of application-screen examples.

## What the presentation covers

The deck introduces the EOC's operational purpose and digital workflow, then connects that narrative to examples from the system, including:

- Main indicators and Power BI dashboard
- AI monitoring and daily weather intelligence
- Earthquake intelligence and the earthquake monitoring center
- Daily operations overview and weather forecasts
- Governorate / branch contacts and field missions
- Human resources and supervisor handover
- Local news and global disaster monitoring
- Branch readiness and strategic inventory
- System audit log and mobile interface

The example sequence contains **15 application-page examples plus one mobile-interface example**. The examples are image captures, not a live session connected to the operational application; they should be refreshed when the corresponding UI changes.

## Open the presentation

### View it locally

The main presentation is a standalone HTML file and does not require Node.js or package installation.

1. Download or clone this repository.
2. Open `eoc-command-deck.html` in a browser.

For a local web-server preview, run this command from the repository root:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/eoc-command-deck.html](http://localhost:8000/eoc-command-deck.html).

The root `index.html` is a small redirect to the presentation file.

## Update the application-screen examples

Place example screenshots in:

`deploy/assets/live-examples/`

Use the **exact filenames and page mapping** documented in [the screenshot guide](deploy/assets/live-examples/README.md). The current sequence uses numbered files from `01-powerbi-dashboard.png` through `15-system-audit-log.png`, plus `16-mobile-interface.png`.

For consistent captures:

- Use 100% browser zoom and maximize the browser.
- Prefer a clear 16:9 desktop capture at 1920×1080 or 1600×900.
- Capture the mobile interface at an actual mobile width; do not simply shrink a desktop screen.
- Mask personal information, phone numbers, beneficiary details, credentials, tokens, and sensitive operational data before committing screenshots.
- Keep filenames unchanged unless you also update the references in the source deck.

The presentation's source HTML references these images through `deploy/assets/live-examples/`. The Pages workflow rewrites those paths for the published site.

## How publishing works

GitHub Pages is deployed by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

- A push to `main` triggers deployment; the workflow can also be started manually.
- The workflow takes `eoc-command-deck.html` as the source of truth, generates `deploy/index.html` with the asset paths adjusted for GitHub Pages, and publishes the `deploy/` directory.
- The deployed site is therefore the standalone HTML deck, not the separate React/Vite client below.

**Edit `eoc-command-deck.html` for presentation changes.** Do not treat `deploy/index.html` as the source file: the workflow regenerates it during deployment.

## Repository map

| Path | Purpose |
| --- | --- |
| `eoc-command-deck.html` | Canonical standalone presentation and its slide logic |
| `index.html` | Root redirect to the standalone deck |
| `deploy/` | Static files published by the GitHub Pages workflow |
| `deploy/assets/live-examples/` | Numbered application screenshots and their capture guide |
| `client/` | Separate React/Vite presentation interface and supporting UI components |
| `server/index.ts` | Express static server used by the React/Vite build |
| `ideas.md` | Visual direction and design principles |
| `visual_verification.md` | Notes from previous visual checks |
| `todo.md` | Working task notes |

The repository also contains supporting build artifacts and alternate presentation files. They are not the source used by the GitHub Pages workflow.

## Optional: run the React/Vite client

The React/Vite project is separate from the standalone HTML deck that GitHub Pages publishes. To run that client locally, install Node.js and the package manager declared in `package.json` (pnpm), then run:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Useful project scripts:

```bash
pnpm check
pnpm build
pnpm preview
```

Use the standalone HTML instructions above when your goal is simply to view or publish the EOC Command Deck.

## Language and data handling

This repository is the presentation/showcase layer, not the EOC backend or operational database. Do not commit passwords, access tokens, recovery codes, private environment files, or unredacted operational data. Treat all sample metrics and illustrative content as presentation material unless verified against an approved operational source.

---

### ملخص بالعربية

هذا المستودع مخصص لعرض مركز عمليات الطوارئ بالهلال الأحمر المصري. ملف العرض الأساسي هو `eoc-command-deck.html`، أما صور أمثلة صفحات النظام فتوجد في `deploy/assets/live-examples/`، مع أسماء الملفات وتعليمات تحديثها في دليل الصور داخل المجلد نفسه.

النشر يتم تلقائيًا إلى GitHub Pages عند الدفع إلى فرع `main` عبر GitHub Actions. عدّل ملف HTML الأساسي لإجراء تغييرات العرض، ولا تعدّل `deploy/index.html` يدويًا لأنه يُنشأ من جديد أثناء النشر.
