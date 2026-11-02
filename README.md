# Reet Jaiswal – Portfolio

Static site: `index.html` (design + 3D) and `data.js` (all content).

## Update later
Edit `data.js` only. Change text, add projects, add skills to `HAVE`, then commit and push. The page and the AI assistant both read from it.
Put your LinkedIn URL and resume PDF name in `data.js` (`linkedin`, `resume`).

## Run locally
```
cd portfolio
python -m http.server 8000
```
Open http://localhost:8000

## Deploy on GitHub Pages
```
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/ReetJaiswal/ReetJaiswal.github.io.git
git push -u origin main
```
Create the repo `ReetJaiswal.github.io` first. The site goes live at https://reetjaiswal.github.io. (Any other repo name works too: Settings → Pages → Deploy from `main`.)

## Real LLM assistant
`api/chat.js` is a ready-made serverless function that answers questions and writes the detailed job-fit analysis.
1. Import this repo into Vercel (free), and add the environment variable `ANTHROPIC_API_KEY` (get a key at console.anthropic.com). Also set `ALLOWED_ORIGIN` to your site, e.g. `https://reetjaiswal.github.io`.
2. Set a monthly spend limit on the key, since anyone can reach the endpoint. The function also caps request size and rate-limits per IP.
3. Put `https://YOUR-PROJECT.vercel.app/api/chat` in `AI_ENDPOINT` in `data.js`.
If the endpoint is empty or fails, the built-in offline assistant answers instead. Never put the API key in `data.js`.

## Contact form
Create a free form at formspree.io and paste its URL into `FORM_ENDPOINT` in `data.js`. Without it, the form opens the visitor's email app.
