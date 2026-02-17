# Towers Digital - Agency Landing Page

This is the repository for the Towers Digital landing page.

## Structure

- `index.html`: Main entry point.
- `src/css/style.css`: Main stylesheet containing variables, layout, and component styles.
- `src/js/main.js`: Main JavaScript file for interactions.
- `src/assets/`: Directory for images and other static assets.

## Deployment

### Cloudflare Pages

1. Push this repository to GitHub.
2. Log in to the Cloudflare Dashboard and navigate to **Pages**.
3. Click **Create a project** > **Connect to Git**.
4. Select this repository.
5. In "Build settings":
   - **Framework preset**: None (Static HTML)
   - **Build command**: (Leave empty)
   - **Build output directory**: `/` (Root directory)
6. Click **Save and Deploy**.

## Development

To run locally, you can use a simple static server like `serve` or VS Code's Live Server extension.

```bash
# If you have npm installed
npx serve .
```
