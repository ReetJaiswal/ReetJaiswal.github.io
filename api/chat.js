const hits = new Map();
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ reply: 'POST only' });
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || 'x';
  const now = Date.now(), arr = (hits.get(ip) || []).filter(t => now - t < 6e5);
  if (arr.length >= 20) return res.status(429).json({ reply: 'Too many requests. Please try again in a few minutes.' });
  arr.push(now); hits.set(ip, arr);
  const { question = '', jd = '', history = [], mode, profile = {} } = req.body || {};
  const system =
    "You are the assistant on Reet Jaiswal's portfolio website. Answer only from the profile JSON below, in the third person, concisely. " +
    "If something is not in the profile, say so and suggest emailing her. Never invent experience, employers or skills. " +
    "Reet is a woman and uses she/her pronouns. Always refer to Reet as she or her, never he, him. " +
    (mode === 'jd'
      ? " The user will paste a job description. Give: a fit rating (Strong, Good or Partial), strengths with evidence from the profile, honest gaps, and one line on how Reet should position her application. Under 250 words."
      : '') +
    '\n\nPROFILE:\n' + JSON.stringify(profile).slice(0, 20000);
  const past = (Array.isArray(history) ? history : [])
    .filter(h => h && ['user', 'assistant'].includes(h.role) && typeof h.content === 'string')
    .slice(-6).map(h => ({ role: h.role, content: h.content.slice(0, 2000) }));
  const messages = mode === 'jd'
    ? [{ role: 'user', content: 'Job description:\n' + String(jd).slice(0, 12000) }]
    : [...past, { role: 'user', content: String(question).slice(0, 1000) }];
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.MODEL || 'claude-sonnet-5-5', max_tokens: 600, system, messages })
    });
    const d = await r.json();
    res.status(200).json({ reply: (d.content && d.content[0] && d.content[0].text) || 'Sorry, I could not answer that.' });
  } catch (e) {
    res.status(200).json({ reply: 'Sorry, the assistant is unavailable right now.' });
  }
};
