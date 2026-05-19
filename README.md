# Omile — Frontend

**Hyper-local service exchange, built on Stellar.**

Omile is an open-source mobile-first web app that lets neighbors post, accept, and pay for everyday tasks — securely, instantly, and without needing to trust a stranger upfront. Payments are powered by Soroban smart contracts on the Stellar network.

> **Part of the Omile organisation** — see also [omile-contracts](https://github.com/ayoxly/omile-contracts) · [omile-backend](https://github.com/ayoxly/omile-backend)

---

## The Problem

In most neighborhoods, people need small things done — generator fueling, grocery runs, compound cleaning, quick errands. And there are always willing people nearby who could use the income. But two questions kill the deal every time:

- _"Will they actually do the job if I pay upfront?"_
- _"Will I get paid after I do the work?"_

Omile solves both sides of that equation.

---

## How It Works

1. **Post a task** — describe what you need and set a price
2. **A neighbor accepts** — funds are locked in escrow automatically on-chain
3. **Task is completed** — you confirm, they get paid instantly

For recurring tasks (weekly cleaning, regular errands), Omile supports payment streaming — funds flow continuously and can be paused or stopped at any time.

---

## Tech Stack

| Tool                    | Purpose                         |
| ----------------------- | ------------------------------- |
| Next.js 16 (App Router) | Framework + server components   |
| React 19                | UI layer                        |
| TypeScript (strict)     | Type safety                     |
| TailwindCSS v4          | Styling                         |
| Stellar JS SDK          | Client-side transaction signing |

---

## Project Structure

```
omile-frontend/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable UI components
│   ├── lib/           # Stellar SDK helpers, API client
│   └── types/         # Shared TypeScript types
├── public/
├── CONTRIBUTING.md
└── LICENSE
```

---

## Getting Started

**Prerequisites:** Node.js 18+, pnpm

```bash
git clone https://github.com/your-org/omile-frontend.git
cd omile-frontend

pnpm install
pnpm run dev
```

App starts at `http://localhost:3000`.

---

## Why Stellar

Omile is built on the [Stellar network](https://stellar.org) because it fits the use case perfectly:

- **Near-zero fees** — micro-payments for small tasks are actually viable
- **Fast finality** — payments settle in 3–5 seconds
- **Stablecoin support** — users transact in familiar local currencies, not volatile crypto
- **Built for emerging markets** — Stellar's infrastructure aligns with the communities Omile serves

Regular users never interact with a wallet directly. Omile handles account creation behind the scenes using passkey-based authentication — sign up with your email or fingerprint, that's it.

---

## Status

Early development. The project is actively being built in the open.

- [x] Project scaffolding (Next.js 16, TailwindCSS v4)
- [ ] Task posting and browsing UI
- [ ] Stellar wallet onboarding (account abstraction / passkeys)
- [ ] Escrow integration (Soroban)
- [ ] Payment streaming for recurring tasks
- [ ] Reputation display

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Issues tagged `frontend` and `good first issue` in the [Issues](../../issues) tab are great starting points.

---

## License

[MIT](./LICENSE)

---

_Omile — Your community. Your economy._
