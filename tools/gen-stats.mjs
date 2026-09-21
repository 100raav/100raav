import { readFileSync, writeFileSync } from 'node:fs'

const DATA = process.env.DATA_DIR || '/tmp'
const REPOS = JSON.parse(readFileSync(`${DATA}/repos.json`, 'utf8'))
const USER = JSON.parse(readFileSync(`${DATA}/user.json`, 'utf8'))
const CONTRIB = JSON.parse(readFileSync(`${DATA}/gh_contrib.json`, 'utf8')).data.user.contributionsCollection

const publicRepos = REPOS.filter((r) => !r.private).length
const totalStars = REPOS.reduce((s, r) => s + (r.stargazers_count || 0), 0)
const cal = CONTRIB.contributionCalendar
const totalContrib = cal.totalContributions
const totalCommits = CONTRIB.totalCommitContributions
const days = cal.weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount))
const activeDays = days.filter((n) => n > 0).length
let streak = 0, best = 0
for (const n of days) { streak = n > 0 ? streak + 1 : 0; if (streak > best) best = streak }
const years = ((Date.now() - Date.parse(USER.created_at)) / (365.25 * 86400000)).toFixed(1)

const METRICS = [
  { glyph: '⌘', value: `${publicRepos}`, suffix: '+', label: 'PUBLIC REPOSITORIES', hint: 'all shipped in the open' },
  { glyph: '📈', value: `${totalContrib}`, suffix: '', label: '12-MONTH CONTRIBUTIONS', hint: 'refreshed every hour' },
  { glyph: '🖥', value: `${totalCommits}`, suffix: '', label: 'COMMITS / LAST 12 MO', hint: 'measured from live API' },
  { glyph: '📅', value: `${activeDays}`, suffix: '', label: 'ACTIVE DAYS / 12 MO', hint: 'days with commits counted' },
  { glyph: '🔥', value: `${best}`, suffix: '-DAY', label: 'LONGEST STREAK', hint: 'consecutive-building days' },
  { glyph: '🚀', value: `${years}`, suffix: 'YRS', label: 'BUILDING IN THE OPEN', hint: 'since July 2023' },
]

const W = 864, H = 200
const colW = 264, rowH = 70, gapX = 12, gapY = 12
const startX = 24, titleY = 32, row1Y = 48, row2Y = 48 + rowH + gapY

const cells = METRICS.map((m, i) => {
  const x = startX + (i % 3) * (colW + gapX)
  const y = i < 3 ? row1Y : row2Y
  const id = `cell${i}`
  return `<g>
    <rect x="${x}" y="${y}" width="${colW}" height="${rowH}" rx="12" fill="#0d1428" stroke="#1b2740"/>
    <rect x="${x}" y="${y}" width="${colW}" height="2" rx="1" fill="#22d3ee" opacity="0.9"><animate attributeName="width" values="40;${colW};40" dur="5s" begin="${i * 0.2}s" repeatCount="indefinite"/></rect>
    <g transform="translate(${x + 26} ${y + rowH / 2})">
      <circle r="16" fill="#0a0f1e" stroke="#233150"/>
      <text x="0" y="6" text-anchor="middle" font-size="14">${m.glyph}</text>
      <circle r="20" fill="#22d3ee" opacity="0.16"><animate attributeName="r" values="16;22;16" dur="2.6s" begin="${i * 0.3}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.6s" begin="${i * 0.3}s" repeatCount="indefinite"/></circle>
    </g>
    <text x="${x + 56}" y="${y + 26}" font-family="'Segoe UI',Arial,sans-serif" font-size="24" font-weight="800" fill="#ffffff">${m.value}<tspan fill="#67e8f9" font-size="13" font-weight="700"> ${m.suffix}</tspan></text>
    <text x="${x + 56}" y="${y + 43}" font-family="'Segoe UI',Arial,sans-serif" font-size="10" letter-spacing="1" fill="#8ea3c9">${m.label}</text>
    <text x="${x + 56}" y="${y + 57}" font-family="'Segoe UI',Arial,sans-serif" font-size="8.5" fill="#5b6d90">${m.hint}</text>
  </g>`
}).join('\n')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Live GitHub analytics — ${publicRepos} public repositories, ${totalContrib} contributions last 12 months">
  <rect width="${W}" height="${H}" rx="16" fill="#0d1428" stroke="#1b2740"/>
  <circle cx="26" cy="22" r="5" fill="#22ee6a"><animate attributeName="fill-opacity" values="1;0.25;1" dur="1.6s" repeatCount="indefinite"/></circle>
  <text x="40" y="26" font-family="'Segoe UI',Arial,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Live analytics — real numbers from the GitHub API</text>
  <text x="848" y="26" text-anchor="end" font-family="'Segoe UI',Arial,sans-serif" font-size="9.5" fill="#5b6d90">★ ${totalStars} star total · refreshed hourly by CI</text>
  ${cells}
</svg>`
writeFileSync(`${process.env.OUT_DIR || 'assets'}/stats.svg`, svg)
console.log('stats.svg written', { publicRepos, totalStars, totalContrib, totalCommits, activeDays, best, years })