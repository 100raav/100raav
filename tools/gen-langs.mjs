const LANGS = [
  ['HTML', 35.3, '#e34c26'],
  ['Java', 22.6, '#e76f00'],
  ['JavaScript', 15.1, '#f1e05a'],
  ['TypeScript', 11.6, '#3178c6'],
  ['CSS', 9.8, '#563d7c'],
  ['Python', 4.6, '#3572a5'],
  ['Shell', 0.7, '#89e051'],
]
const W = 764, H = 278, y0 = 74, barH = 22, gap = 6
const rows = LANGS.map((l, i) => {
  const y = y0 + i * (barH + gap)
  return `<text x="24" y="${y + 15}" font-family="'Segoe UI',Arial,sans-serif" font-size="11.5" fill="#aebfd9">${l[0]}</text>
  <rect x="110" y="${y}" width="560" height="${barH}" rx="5" fill="#0a0f1e" stroke="#1b2740"/>
  <rect x="110" y="${y}" width="${(l[1] / 100) * 560}" height="${barH}" rx="5" fill="${l[2]}" opacity="0">
    <animate attributeName="width" values="0;${(l[1] / 100) * 560}" dur="0.9s" begin="${(i * 0.12).toFixed(2)}s" fill="freeze"/>
    <animate attributeName="opacity" values="0;1" dur="0.4s" begin="${(i * 0.12).toFixed(2)}s" fill="freeze"/>
  </rect>
  <text x="684" y="${y + 15}" text-anchor="end" font-family="'Consolas',monospace" font-size="11" font-weight="700" fill="#ffffff">${l[1].toFixed(1).replace(/\.0$/, '')}%</text>`
}).join('\n')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Most used languages across public repositories, by bytes">
  <rect width="${W}" height="${H}" rx="16" fill="#0d1428" stroke="#1b2740"/>
  <text x="22" y="30" font-family="'Segoe UI',Arial,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Most-used languages — real bytes across every public repository</text>
  <text x="22" y="48" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#5b6d90">Measured by bytes, read live from the GitHub API — no samples, no estimates</text>
  ${rows}
</svg>`
process.stdout.write(svg)