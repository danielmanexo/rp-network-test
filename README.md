# Test połączenia (sieć klienta)

Neutral page (no client content, no branding) that a client opens inside their corporate
network to see whether a course for review would work there: HTTPS, scripts, JSON, JPG and
WebP pictures, MP3 audio, MP4 video, a frame (as in an LMS), localStorage, full screen, and a
POST to `api/ping` (the server that would store review comments).

The same folder deploys as is to:
- Vercel (`api/ping.js` is a serverless function),
- Netlify (`netlify.toml` + `netlify/functions/ping.js`),
- GitHub Pages / any static host (the comment check then shows "no server", in amber).

The client presses "Kopiuj wynik" and sends the text back.
