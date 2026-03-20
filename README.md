# lakewords

Static recreation of the Lakewords website for [GitHub Pages](https://pages.github.com/). Published content lives in [`docs/`](docs/).

## Publish

### GitHub Actions

1. Push to GitHub (`main`).
2. **Settings → Pages** → **Source**: **GitHub Actions**.
3. [`.github/workflows/pages.yml`](.github/workflows/pages.yml) deploys the `docs/` folder on each push to `main`.

URL: `https://<your-username>.github.io/lakewords/`

### Deploy from branch

**Settings → Pages** → **Deploy from a branch** → **main** → **`/docs`**. [`.nojekyll`](docs/.nojekyll) keeps GitHub from running Jekyll on whatever you put in `docs/`.

## Local preview

After you add static files under `docs/`:

```bash
cd docs && python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Recreated routes

- `/`
- `/read-lake-words/`
- `/find-lake-words/`
- `/download/`
- `/connect/`
- `/contact/`
- `/events/`
- `/lake-words-vol-ii-is-ready/`
- `/lake-words-vol-ii-submissions-open/`
- `/call-for-volunteers-art-build-1-7-23/`
- `/123-2/`
- `/category/uncategorized/`

## Form endpoint configuration

Newsletter and contact forms are wired for static hosting via client-side `fetch` in [`docs/assets/site.js`](docs/assets/site.js). They currently post to `https://httpbin.org/post` as a functional placeholder.

To use a real inbox/workflow:

1. Create a form endpoint (Formspree, Getform, Basin, etc).
2. Replace each page form's `data-endpoint` value in:
   - [`docs/index.html`](docs/index.html)
   - [`docs/connect/index.html`](docs/connect/index.html)
   - [`docs/contact/index.html`](docs/contact/index.html)
