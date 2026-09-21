import { mkdirSync, writeFileSync } from 'node:fs'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const NODES = [
  { years: '2015 – 2019', title: 'Secondary Education · SEE', org: 'Sinha Public School', meta: 'Grade X · Mathematics & Science', grade: '3.65 / 4.0', kind: 'edu' },
  { years: '2020 – 2022', title: 'Senior Secondary · Science', org: 'Sinha Public School', meta: 'Grade XII · Physical Sciences', grade: '3.08 / 4.0', kind: 'edu' },
  { years: '2022 – 2026', title: 'B.Tech · Computer Science & Engineering', org: 'Noida International University', meta: 'Greater Noida · Delhi NCR', grade: 'CGPA 7.62', kind: 'edu' },
  { years: '2023', title: 'Web Development Intern', org: 'Oasis Infobyte', meta: 'Front-end work on production-minded builds', grade: '', kind: 'work' },
  { years: '2024', title: 'Java Development Intern', org: 'CodeAlpha', meta: 'Banking application · real Java backend', grade: '', kind: 'work' },
  { years: '2026', title: 'Peer Reviewer', org: 'Web of Science · Clarivate', meta: 'Journals indexed on Web of Science', grade: '8 reviews', kind: 'work' },
]

const ROW = 68
const H = 34 + NODES.length * ROW + 22
const W = 1080
const spineX = 96
const kindColor = (k) => (k === 'edu' ? '#22d3ee' : '#f472b6')

const rows = NODES.map((n, i) => {
  const cy = 34 + i * ROW + ROW / 2
  const c = kindColor(n.kind)
  const ys = n.years.split(' – ')
  const gradeChip = n.grade
    ? `<g>
    <rect x="${W - 208}" y="${cy - 14}" width="188" height="28" rx="14" fill="#0b1226" stroke="#1b2740"/>
    <circle cx="${W - 192}" cy="${cy}" r="9" fill="none" stroke="${c}" stroke-width="1.4"/>
    <circle cx="${W - 192}" cy="${cy}" r="3" fill="${c}"/>
    <text x="${W - 176}" y="${cy + 4}" font-family="'Segoe UI',Arial,sans-serif" font-size="12.5" font-weight="700" fill="${c}">${esc(n.grade)}</text>
  </g>`
    : ''
  return `<g>
    <rect x="28" y="${cy - 19}" width="50" height="38" rx="10" fill="#0b1226" stroke="#1b2740"/>
    <text x="53" y="${cy - 2}" text-anchor="middle" font-family="'Consolas',monospace" font-size="11" font-weight="700" fill="${c}">${esc(ys[0])}</text>
    <text x="53" y="${cy + 12}" text-anchor="middle" font-family="'Consolas',monospace" font-size="11" fill="#5b6d90">${esc(ys[1] || '')}</text>
    <circle cx="${spineX}" cy="${cy}" r="7" fill="#0d1428" stroke="${c}" stroke-width="2.5" opacity="0">
      <animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18).toFixed(2)}s" fill="freeze"/>
    </circle>
    <circle cx="${spineX}" cy="${cy}" r="7" fill="none" stroke="${c}" stroke-width="1" opacity="0">
      <animate attributeName="r" values="7;16;7" dur="2.6s" begin="${(i * 0.18).toFixed(2)}s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" begin="${(i * 0.18).toFixed(2)}s" repeatCount="indefinite"/>
    </circle>
    <text x="${spineX + 22}" y="${cy - 22}" font-family="'Segoe UI',Arial,sans-serif" font-size="15.5" font-weight="700" fill="#ffffff" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.15).toFixed(2)}s" fill="freeze"/>${esc(n.title)}</text>
    <text x="${spineX + 22}" y="${cy - 4}" font-family="'Segoe UI',Arial,sans-serif" font-size="12.5" font-weight="600" fill="${c}" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.2).toFixed(2)}s" fill="freeze"/>${esc(n.org)}</text>
    <text x="${spineX + 22}" y="${cy + 13}" font-family="'Segoe UI',Arial,sans-serif" font-size="11.5" fill="#5b6d90" opacity="0"><animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.18 + 0.25).toFixed(2)}s" fill="freeze"/>${esc(n.meta)}</text>
    ${gradeChip}
  </g>`
})

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Saurav Bichha education and professional experience timeline — real records">
  <defs>
    <linearGradient id="spineG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22d3ee"/><stop offset="0.55" stop-color="#a78bfa"/><stop offset="1" stop-color="#f472b6"/>
    </linearGradient>
    <linearGradient id="sweepV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0"/><stop offset="0.5" stop-color="#a78bfa" stop-opacity="1"/><stop offset="1" stop-color="#f472b6" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" rx="18" fill="#0d1428" stroke="#1b2740"/>
  <rect x="16" y="12" width="${W - 32}" height="3" rx="1.5" fill="url(#sweepV)" opacity="0.28"><animate attributeName="y" values="10;${H - 6};10" dur="7s" repeatCount="indefinite"/></rect>
  <circle cx="30" cy="26" r="6" fill="#22ee6a"><animate attributeName="fill-opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite"/></circle>
  <text x="46" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="17" font-weight="700" fill="#ffffff">Education &amp; Experience</text>
  <text x="350" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#5b6d90">real records — school · university · internships · peer review</text>
  <text x="${W - 12}" y="30" text-anchor="end" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#5b6d90">since 2015</text>
  <rect x="${spineX - 1.5}" y="34" width="3" height="${NODES.length * ROW}" rx="1.5" fill="url(#spineG)"/>
  <circle cx="${spineX}" cy="34" r="4" fill="#22ee6a"><animate attributeName="cy" values="34;${34 + NODES.length * ROW};34" dur="7s" repeatCount="indefinite"/></circle>
  ${rows.join('\n  ')}
</svg>`

mkdirSync('assets', { recursive: true })
writeFileSync('assets/academics.svg', svg)
console.log('academics.svg written:', W, 'x', H, '|', NODES.length, 'nodes')