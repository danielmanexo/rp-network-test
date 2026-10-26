// Vercel: answers the test page's comment check (POST /api/ping), echoing what it got.
export default function handler(req, res) {
  res.status(200).json({ ok: true, method: req.method, received: req.body ?? null });
}
