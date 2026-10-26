// Netlify: the same check as api/ping.js on Vercel (netlify.toml routes /api/ping here).
export default async (req) => {
  let received = null;
  try { received = await req.json(); } catch { /* GET or empty body */ }
  return Response.json({ ok: true, method: req.method, received });
};
