# Reet Jaiswal – Portfolio

Static site: `index.html` (design + 3D) and `data.js` (all content).

# Reet Jaiswal – Portfolio

**Live site:** https://reetjaiswal.github.io

A personal portfolio for Reet Jaiswal, a final-year Computer Science student at VIT Chennai who builds backend systems, AI agents and secure deployment pipelines. The site covers my skills, experience, projects, rocketry work, education and certifications.

## Highlights

- **Interactive 3D background:** a rocket engine nozzle with a particle exhaust plume built in Three.js. Scrolling the page flies the camera down the plume.
- **Smooth scroll design:** glass-style cards that fade in as you scroll, a navigation bar that highlights the current section, and a "throttle" bar that shows scroll progress.
- **Portfolio assistant:** visitors can ask questions about my background, or paste a job description in the "Match a job" tab to get a skill-fit score. It works offline, and can use Claude for fuller answers when an API endpoint is connected.
- **Contact form:** messages can be delivered straight to my inbox through Formspree.
- **Easy to update:** all content lives in one file (`data.js`), so the page and the assistant update together.

## Built with

HTML, CSS and vanilla JavaScript, Three.js, a Vercel serverless function (`api/chat.js`) for the optional AI assistant, and GitHub Pages for hosting.
