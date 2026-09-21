import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const DATA = process.env.DATA_DIR || '/tmp'
const REPOS = JSON.parse(readFileSync(`${DATA}/repos.json`, 'utf8'))

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// ---------- PROJECT CARDS (public, real) ----------
const CARDS = [
  {
    repo: 'codemeetly-backend', glyph: '💬', lang: 'BACKEND', file: 'codemeetly-backend.svg',
    desc: 'API for the CodeMeetly collab platform — active development.',
  },
  {
    repo: 'Blockchain-SImulation-Project', glyph: '⛓', lang: 'Java', file: 'blockchain-simulation.svg',
    desc: 'Spring Boot REST ledger — blocks, hashing, Swagger docs.',
  },
  {
    repo: 'erp-system', glyph: '🏭', lang: 'Java', file: 'erp-system.svg',
    desc: 'Spring Boot ERP — modules, roles, clean REST backend.',
  },
  {
    repo: 'project-xray', glyph: '🔬', lang: 'HTML', file: 'project-xray.svg',
    desc: 'Java/Spring repo intelligence — architecture graph.',
  },
  {
    repo: 'chronovault', glyph: '🛡', lang: 'Java', file: 'chronovault.svg',
    desc: 'Verified checkpoint CLI — auto-rollback built in.',
  },
  {
    repo: 'compeng-calc', glyph: '🧮', lang: 'JavaScript', file: 'compeng-calc.svg',
    desc: 'Engineering calculator — Basic · Programmer · Network.',
  },
]

const GH = 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'

function card(c) {
  const langColor = c.lang === 'Java' ? '#e76f00' : c.lang === 'JavaScript' ? '#f7df1e' : c.lang === 'BACKEND' ? '#f472b6' : '#22d3ee'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="356" height="168" viewBox="0 0 356 168" role="img" aria-label="${esc(c.repo)} — ${esc(c.desc)}">
  <defs>
    <linearGradient id="${c.file.replace('.svg', '')}bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1428"/><stop offset="1" stop-color="#0a0f1e"/>
    </linearGradient>
    <linearGradient id="${c.file.replace('.svg', '')}accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/><stop offset="0.5" stop-color="#a78bfa"/><stop offset="1" stop-color="#f472b6"/>
    </linearGradient>
    <radialGradient id="${c.file.replace('.svg', '')}glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.22"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="356" height="168" rx="16" fill="url(#${c.file.replace('.svg', '')}bg)" stroke="#1b2740"/>
  <rect width="356" height="168" rx="16" fill="url(#${c.file.replace('.svg', '')}glow)"/>
  <rect x="16" y="16" width="300" height="2" rx="1" fill="url(#${c.file.replace('.svg', '')}accent)" opacity="0.85">
    <animate attributeName="width" values="60;300;60" dur="6s" repeatCount="indefinite"/>
  </rect>
  <g transform="translate(30 62)">
    <circle r="24" fill="none" stroke="#233150" stroke-width="1.6" stroke-dasharray="8 6" opacity="0.9">
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
    </circle>
    <circle r="17" fill="#0d1428"/>
    <text x="0" y="7" text-anchor="middle" font-size="19">${c.glyph}</text>
    <circle r="26" fill="url(#${c.file.replace('.svg', '')}accent)" opacity="0.2">
      <animate attributeName="r" values="24;30;24" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.25;0.06;0.25" dur="3.2s" repeatCount="indefinite"/>
    </circle>
  </g>
  <text x="72" y="40" font-family="'Segoe UI','SF Pro Display',Arial,sans-serif" font-size="16" font-weight="700" fill="#ffffff">${esc(c.repo)}</text>
  <text x="72" y="60" font-family="'Segoe UI',Arial,sans-serif" font-size="9.5" letter-spacing="1.5" fill="${langColor}">${esc(c.lang.toUpperCase())}</text>
  <text x="30" y="102" font-family="'Segoe UI',Arial,sans-serif" font-size="11.5" fill="#aebfd9">${esc(c.desc)}</text>
  <g transform="translate(303 20)" opacity="0.95">
    <circle r="15" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.35">
      <animate attributeName="r" values="13;18;13" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0.05;0.5" dur="3s" repeatCount="indefinite"/>
    </circle>
    <path d="${GH}" fill="#9fb4d8" transform="scale(0.77) translate(-2.9 -2.9)"/>
  </g>
</svg>`
}

// ---------- JOURNEY TIMELINE ----------
function journey() {
  const byYear = {}
  for (const r of REPOS) {
    const y = r.created_at.slice(0, 4)
    ;(byYear[y] ||= []).push(r)
  }
  const years = Object.keys(byYear).sort()
  const top = 60
  const rowH = 34
  const lanes = []
  for (const y of years) {
    const n = byYear[y].length
    const labels = byYear[y].sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 3).map((r) => r.name).join(' · ')
    lanes.push({ y, n, labels: labels + (n > 3 ? ` (+${n - 3} more)` : '') })
  }
  const W = 764
  const H = top + lanes.length * rowH + 24
  const cells = []
  lanes.forEach((l, i) => {
    const cy = top + i * rowH
    cells.push(`<circle cx="22" cy="${cy}" r="5" fill="#0d1428" stroke="#22d3ee" stroke-width="2"/>
      <rect x="46" y="${cy - 9}" width="74" height="18" rx="9" fill="#0d1428" stroke="#1b2740"/>
      <text x="83" y="${cy + 4}" text-anchor="middle" font-family="'Consolas',monospace" font-size="11" font-weight="700" fill="#22d3ee">${l.y}</text>
      <text x="136" y="${cy + 4}" font-family="'Segoe UI',Arial,sans-serif" font-size="10.5" fill="#5b6d90">${l.n} ${l.n === 1 ? 'repo' : 'repos'}</text>
      <text x="196" y="${cy + 4}" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#aebfd9">${l.labels}</text>`)
  })
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Saurav Bichha engineering journey by year">
  <rect width="${W}" height="${H}" rx="16" fill="#0d1428" stroke="#1b2740"/>
  <text x="22" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Engineering journey — every public repo, by the year it was built</text>
  <rect x="20" y="40" width="3" height="${top - 40 + lanes.length * rowH}" rx="1.5" fill="#1b2740"/>
  <circle cx="21.5" cy="${top - 20}" r="4" fill="#f472b6"><animate attributeName="cy" values="${top - 20};${top - 20 + (lanes.length - 1) * rowH};${top - 20}" dur="8s" repeatCount="indefinite"/></circle>
  ${cells.join('')}
</svg>`
}

mkdirSync('assets/projects', { recursive: true })
for (const c of CARDS) writeFileSync(`assets/projects/${c.file}`, card(c))
writeFileSync('assets/journey.svg', journey())
console.log('cards:', CARDS.length)