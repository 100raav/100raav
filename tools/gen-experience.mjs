import { mkdirSync, writeFileSync } from 'node:fs'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const NODES = [
  {
    years: 'Jul 2023 – Aug 2023', title: 'Web Development Intern', org: 'Oasis Infobyte',
    meta1: 'Web development & designing · frontend & responsive principles', meta2: 'Delhi, India', chip: '2 MOS',
  },
  {
    years: 'Jul 2025 – Jan 2026', title: 'Full Stack Developer', org: 'Labmentix',
    meta1: 'Java · Spring · HTML/CSS/JS · database operations & CRUD', meta2: 'End-to-end web apps in a structured team workflow', chip: '7 MOS', city: 'Bengaluru · Remote',
  },
  {
    years: 'Jan 2026 – Jul 2026', title: 'Full Stack Java Developer Intern', org: 'The Skybrisk',
    meta1: 'Full-stack program · hands-on project training under mentorship', meta2: 'SDLC · industry best practices · performance reviews', chip: '7 MOS', city: 'Pune · Remote',
  },
  {
    years: '2026', title: 'Peer Reviewer', org: 'Web of Science · Clarivate',
    meta1: 'Journals indexed on Web of Science', meta2: 'Academic peer review contributions', chip: '8 REVIEWS',
  },
]

const ROW = 78
const H = 34 + NODES.length * ROW + 22
const W = 1080
const spineX = 96
const C = '#f472b6'

const rows = NODES.map((n, i) => {
  const cy = 34 + i * ROW + ROW / 2
  const ys = n.years.split(' – ')
  const chip = `<g>
    <rect x="${W - 196}" y="${cy - 14}" width="176" height="28" rx="14" fill="#0b1226" stroke="#1b2740"/>
    <text x="${W - 108}" y="${cy + 4}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="12" font-weight="700" fill="${C}">${esc(n.chip)}</text>
  </g>`
  return `<g>
    <rect x="26" y="${cy - 19}" width="66" height="38" rx="10" fill="#0b1226" stroke="#1b2740"/>
    <text x="59" y="${cy - 2}" text-anchor="middle" font-family="'Consolas',monospace" font-size="9.5" font-weight="700" fill="${C}">${esc(ys[0])}</text>
    <text x="59" y="${cy + 12}" text-anchor="middle" font-family="'Consolas',monospace" font-size="9.5" fill="#5b6d90">${esc(ys[1] || '')}</text>
    <circle cx="${spineX}" cy="${cy}" r="7" fill="#0d1428" stroke="${C}" stroke-width="2.5" opacity="0">
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18).toFixed(2)}s" fill="freeze"/>
    </circle>
    <circle cx="${spineX}" cy="${cy}" r="7" fill="none" stroke="${C}" stroke-width="1" opacity="0">
      <animate attributeName="r" values="7;16;7" dur="2.6s" begin="${(i * 0.18).toFixed(2)}s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" begin="${(i * 0.18).toFixed(2)}s" repeatCount="indefinite"/>
    </circle>
    <text x="${spineX + 22}" y="${cy - 27}" font-family="'Segoe UI',Arial,sans-serif" font-size="15.5" font-weight="700" fill="#ffffff" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.15).toFixed(2)}s" fill="freeze"/>${esc(n.title)}</text>
    <text x="${spineX + 22}" y="${cy - 9}" font-family="'Segoe UI',Arial,sans-serif" font-size="12.5" font-weight="600" fill="${C}" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.2).toFixed(2)}s" fill="freeze"/>${esc(n.org)}${n.city ? ' · ' + esc(n.city) : ''}</text>
    <text x="${spineX + 22}" y="${cy + 10}" font-family="'Segoe UI',Arial,sans-serif" font-size="11.5" fill="#aebfd9" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.25).toFixed(2)}s" fill="freeze"/>${esc(n.meta1)}</text>
    <text x="${spineX + 22}" y="${cy + 26}" font-family="'Segoe UI',Arial,sans-serif" font-size="10.5" fill="#5b6d90" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.3).toFixed(2)}s" fill="freeze"/>${esc(n.meta2)}</text>
    ${chip}
  </g>`
})

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Saurav Bichha professional experience — internships and peer review, real records">
  <defs>
    <linearGradient id="spineExp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f472b6"/><stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" rx="18" fill="#0d1428" stroke="#1b2740"/>
  <circle cx="30" cy="26" r="6" fill="#22ee6a"><animate attributeName="fill-opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite"/></circle>
  <text x="46" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="17" font-weight="700" fill="#ffffff">Experience</text>
  <text x="240" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#5b6d90">internships · peer review — real records</text>
  <text x="${W - 12}" y="30" text-anchor="end" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#5b6d90">2023 – 2026</text>
  <rect x="${spineX - 1.5}" y="34" width="3" height="${NODES.length * ROW}" rx="1.5" fill="url(#spineExp)"/>
  <circle cx="${spineX}" cy="34" r="4" fill="#22ee6a"><animate attributeName="cy" values="34;${34 + NODES.length * ROW};34" dur="7s" repeatCount="indefinite"/></circle>
  ${rows.join('\n  ')}
</svg>`

mkdirSync('assets', { recursive: true })
writeFileSync('assets/experience.svg', svg)
console.log('experience.svg written:', W, 'x', H, '|', NODES.length, 'nodes')