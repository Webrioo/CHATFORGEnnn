# ChatForge — static website for Vercel

This project is a static website built with plain HTML, CSS, and browser JavaScript. **No Node.js, npm install, build command, or server is required.**

## Deploy to Vercel

1. Extract this ZIP.
2. Before publishing, open `script.js` and replace `YOUR_EMAIL@example.com` with the inbox that should receive enquiries.
3. Push the contents of the `chatforge-website` folder to a GitHub repository, or import the repository into Vercel.
4. In Vercel, set the project framework preset to **Other**.
5. Set the root directory to the folder containing `index.html` (the `chatforge-website` folder if you uploaded the parent folder).
6. Leave Build Command and Output Directory empty; no build is needed. Deploy.

You can also use Vercel's static deployment flow for this folder. The site entry point is `index.html`.

## Enquiry form behaviour

The form validates the required fields and then opens the visitor's default email application with the enquiry pre-filled. The visitor must press Send in their email app. This works on static hosting and does not require a backend. If you want enquiries submitted directly in the browser without opening an email app, connect a form service (for example Formspree) or add a Vercel serverless function later.

## Files

- `index.html` — page content, service descriptions, FAQs, and enquiry form
- `styles.css` — colors, typography, layout, responsive styling, and animations
- `script.js` — mobile menu, industry selector, form behaviour, and interactions
- `favicon.svg` — browser icon

## Customize

- Change the contact inbox in `script.js` (`CONTACT_EMAIL`).
- Edit copy and sections in `index.html`.
- Adjust the brand colors and visual styling in `styles.css`.

## Important scope notes

This is the ChatForge company marketing website, not a live AI assistant product. The examples explain the services and are illustrative; each customer assistant needs its own model/API configuration, knowledge sources, permissions, hosting, and testing.
