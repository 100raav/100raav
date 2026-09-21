<div align="center">
  <img src="assets/hero.svg" alt="Saurav Bichha — Code Engineer and Systems Builder" width="100%" />
</div>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=17&duration=2600&pause=700&color=22D3EE&center=true&vCenter=true&width=760&lines=Code+Engineer+%26+Systems+Builder;Java+%26+Spring+backend+%E2%80%A2+React+%26+TypeScript+frontend;Multi-tenant+platforms+with+real+security+and+data+integrity;Verified+checkpoints%2C+exactly-once+events%2C+deny-by-default+RBAC;28+public+repositories+%E2%80%94+shipping+and+proving+it+daily" alt="Typing animation" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/saurav-bixa"><img src="https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/u/100raav73/"><img src="https://img.shields.io/badge/LeetCode-%23FFA116.svg?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
  <a href="mailto:100raav73@gmail.com"><img src="https://img.shields.io/badge/Email-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/100raav"><img src="https://img.shields.io/badge/GitHub-100raav-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

---

## 👨‍💻 Who I am

- **Computer Science & Engineering student**, Greater Noida — Delhi NCR.
- I build **full product stacks, end-to-end**: UI → API → authentication → authorization → business logic → database → events → audit. Not screenshots — executable, testable systems.
- **Java-first.** Spring Boot 3, Hibernate, JWT/RBAC, Flyway migrations on the backend; React + TypeScript + Vite on the frontend.
- **Security and data-integrity obsessed**: deny-by-default authorization, tenant isolation that is never trusted to the UI, verified checkpoints, exactly-once event delivery.
- I ship **CLI tooling** too — real command-line products with web dashboards, not just web CRUD.
- Open to **backend, full-stack, and platform-engineering** roles.

> “I don’t call something done until the full execution chain works and the evidence exists to prove it.”

---

## 🏛️ The flagship — **BLYVERO** <img src="https://img.shields.io/badge/PRIVATE-lock-%238B5CF6?style=flat" alt="private" />

A **production-grade, multi-tenant digital-organization platform** — one shared platform, many tenant organizations, each with its own configurable modules, roles, website, and ERP. This is where my engineering principles get exercised at scale.

| Area | What's real inside |
| --- | --- |
| **Platform** | Spring Boot 3 modular monolith on **Java 25**, PostgreSQL + Flyway, React + TypeScript SPA, server-rendered public websites per tenant |
| **Tenant isolation** | Tenant resolved from host/preview-token — never from client input; every tenant row is scoped in the DB; cross-tenant leaks return 404/403 |
| **Events (exactly-once)** | Transactional outbox + RabbitMQ; correlated **publisher confirms** so no message is ever silently lost; consumer inbox ledger absorbs duplicate deliveries |
| **Security** | Deny-by-default RBAC, per-principal rate limiting, login-lockout recorder, upload sanitization + deny lists, JSON 401/403, audit-logged |
| **Proven by tests** | **89/89** security-negative matrix, **87/87** golden-journey E2E (full lifecycle: register → org → site publish → ERP versions → roles → payments), **168+** automated checks across the suite |
| **Infra** | Redis cache, MinIO/S3 object storage, 2-instance fleet on one shared queue |

The repository is **private** — I'm happy to share it on request with any team (demo walkthrough or read access). *No seeded data: every number in it is real work or a passing test.*

---

## 🚀 Featured projects

<table>
<tr>
  <td align="center"><b>⚡ chronovault</b><br/><i>Java · CLI · Gradle</i></td>
  <td align="center"><b>🔍 project-xray</b><br/><i>Java/Spring intelligence</i></td>
  <td align="center"><b>🧮 compeng-calc</b><br/><i>JS · HTML · CSS</i></td>
</tr>
<tr>
  <td width="33%">A <b>code time machine</b>: <code>checkpoint</code> only snapshots when your real build + tests pass; <code>diagnose</code> proves what broke it; <code>restore</code> is crash-safe with <b>automatic rollback</b> if verification fails. SHA-256 content-addressed dedup, 9 project adapters, web dashboard, VS Code + IntelliJ companions. <b>48/48 tests.</b><br/><a href="https://github.com/100raav/chronovault">github.com/100raav/chronovault →</a></td>
  <td width="33%">Real-repository <b>architecture intelligence</b> for Java/Spring: scans the actual code, resolves symbols, and emits an evidence-backed architecture graph + dependency galaxy + code-health radar — built as a VS Code tooling MVP.<br/><a href="https://github.com/100raav/project-xray">github.com/100raav/project-xray →</a></td>
  <td width="33%">Professional <b>computer-engineering calculator</b> — Basic, Programmer, Scientific, Network & Converter modes in a premium glassmorphism UI. Zero dependencies, responsive on every device.<br/><a href="https://github.com/100raav/compeng-calc">github.com/100raav/compeng-calc →</a></td>
</tr>
</table>

<table>
<tr>
  <td align="center"><b>🤖 talent-IQ</b><br/><i>React · Node</i></td>
  <td align="center"><b>📚 BookStore Management</b><br/><i>Spring Boot · JWT · MySQL</i></td>
  <td align="center"><b>🧰 react-dev-tool-suite</b><br/><i>React · Vite · Vercel</i></td>
</tr>
<tr>
  <td width="33%">AI interview & coding platform: VS Code–powered editor, Clerk authentication, 1-on-1 video interview rooms, <b>isolated code execution</b> with pass/fail auto-feedback on test cases.<br/><a href="https://github.com/100raav/talent-IQ">github.com/100raav/talent-IQ →</a></td>
  <td width="33%">Secure REST API: JWT auth, role-based access (ADMIN/CUSTOMER), book & order management, pagination + search, MySQL, Swagger documentation.<br/><a href="https://github.com/100raav/BookStoreManagement">github.com/100raav/BookStoreManagement →</a></td>
  <td width="33%">Mini-IDE in React: code editor + JS runner with user input + regex tester in one clean interface. <a href="https://github.com/100raav/react-dev-tool-suite">repo</a> · <a href="https://react-dev-tool-suite.vercel.app/">live demo</a></td>
</tr>
</table>

**More on the shelf:** `erp-system` (Spring Boot ERP backend) · `notes-management-app` (React + Vite, Vercel) · `Medical-Ledger` · `Blockchain-SImulation-Project` (Java) · `Audio-to-text` + `speech-to-text-transcriber` · Oasis Infobyte + CodeAlpha internship builds (`OIBSIP` tasks, banking app) · and more.

---

## 🧰 Tech I work with

<p align="center">
  <img src="https://skillicons.dev/icons?i=java,spring,react,typescript,javascript,html,css,nodejs,nextjs,vite,postgres,mysql,redis,rabbitmq,minio,gradle,maven,git,github,vercel" alt="Tech stack icons" />
</p>

---

## 📈 Live on GitHub

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=100raav&show_icons=true&locale=en&theme=tokyonight&hide_border=true&border_radius=12&rank_icon=compact" alt="GitHub stats" height="180" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=100raav&layout=compact&theme=tokyonight&hide_border=true&border_radius=12" alt="Most used languages" height="180" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=100raav&theme=tokyonight&hide_border=true&border_radius=12" alt="GitHub streak" />
</p>

---

## 🧭 Engineering journey

```mermaid
flowchart LR
  A[Learn Java & CS fundamentals] --> B[Spring Boot REST APIs]
  B --> C[React & TypeScript frontends]
  C --> D[Full-stack intern builds — Oasis Infobyte, CodeAlpha]
  D --> E[TDD, security & data integrity]
  E --> F[Production multi-tenant platform — BLYVERO]
  F --> G[CLI tooling — chronovault, project-xray]
  G --> H[Ship daily · prove it with tests]
```

---

## 🎯 What guides my work

- **Never fake a feature.** Done = the full chain works and tests prove it.
- **Security is the system, not the UI.** Authorization is enforced server-side; identity is verified, not assumed.
- **Production data integrity.** Empty states beat fabricated dashboards, every time.
- **Automation everywhere.** Outbox publishers, publisher confirms, idempotent consumers, automated rollback — boring reliability beats clever demos.

---

## 📬 Let's talk

You can reach me here — always happy to walk through the architecture, the test suites, or just talk shop:

<p align="center">
  <a href="https://www.linkedin.com/in/saurav-bixa"><img src="https://img.shields.io/badge/LinkedIn-%230A66C2.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/u/100raav73/"><img src="https://img.shields.io/badge/LeetCode-%23FFA116.svg?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
  <a href="mailto:100raav73@gmail.com"><img src="https://img.shields.io/badge/Email-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/100raav"><img src="https://img.shields.io/badge/GitHub-100raav-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

<p align="center">
  <sub>Built from real repositories, real tests, and real deployment evidence — no placeholders.</sub>
</p>