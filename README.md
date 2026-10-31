# Souvik Chakraborty Portfolio

Personal portfolio for Souvik Chakraborty, a B.Tech Computer Science & Engineering graduate (2026) focused on backend engineering and AI-powered applications.

Live site: https://soumo31428.github.io/Soumo31428-Soumo31428.github.io/

## Stack

- React 18
- Vite
- Tailwind CSS
- Motion

## Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

```bash
# Production build
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint

# Format
npm run format
```

## Deploy to GitHub Pages

This repository is configured to deploy with GitHub Actions using the workflow in
`.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. Open **Settings > Pages** in the repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Settings > Secrets and variables > Actions** and add any optional
   `VITE_*` secrets or repository variables used by the app. Do not commit API keys.
5. Push to the `main` branch, or run **Deploy to GitHub Pages** manually from
   the repository's **Actions** tab.
6. Wait for the workflow to finish, then open the deployment URL shown in the
   workflow summary.

The Vite configuration uses relative asset paths, so the site works from this
project Pages URL as well as from a local preview.

## Contact

- Email: soumo.study8172@gmail.com
- Phone: 8172011499
- GitHub: https://github.com/Soumo31428
- LinkedIn: https://www.linkedin.com/in/souvik-chakraborty-84b26626b
- Location: Kolkata, West Bengal, India

## AI Chatbot (optional)

The portfolio includes an optional Groq-powered assistant. It is frontend-only and is not required to view the site.

1. Create a Groq API key from Groq Console.
2. Copy `.env.example` to `.env` and set:

```
VITE_GROQ_API_KEY=your_key_here
```

3. Restart the dev server.

Do not commit API keys. Keep the key private and rotate it if it is ever exposed.
