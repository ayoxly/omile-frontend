# Omile

**Hyper-local service exchange, built on Stellar.**

Omile is an open-source app that lets neighbors post, accept, and pay for everyday tasks — securely, instantly, and without needing to trust a stranger upfront.

---

## The Problem

In most neighborhoods, people need small things done — generator fueling, grocery runs, compound cleaning, quick errands. And there are always willing people nearby who could use the income. But two questions kill the deal every time:

- *"Will they actually do the job if I pay upfront?"*
- *"Will I get paid after I do the work?"*

Omile solves both sides of that equation.

---

## How It Works

1. **Post a task** — describe what you need and set a price
2. **A neighbor accepts** — funds are locked in escrow automatically
3. **Task is completed** — you confirm, they get paid instantly

For recurring tasks (weekly cleaning, regular errands), Omile supports payment streaming — funds flow continuously and can be paused or stopped at any time.

---

## Why Stellar

Omile is built on the [Stellar network](https://stellar.org) because it fits the use case perfectly:

- **Near-zero fees** — micro-payments for small tasks are actually viable
- **Fast finality** — payments settle in 3–5 seconds
- **Stablecoin support** — users transact in familiar local currencies, not volatile crypto
- **Built for emerging markets** — Stellar's infrastructure and mission aligns with the communities Omile serves

Regular users never interact with a wallet directly. Omile handles account creation behind the scenes using passkey-based authentication — sign up with your email or fingerprint, that's it.

---

## Status

Early development. The project is actively being built in the open.

- [x] Project scaffolding
- [ ] Task posting and browsing UI
- [ ] Stellar wallet onboarding (account abstraction)
- [ ] Escrow smart contract (Soroban)
- [ ] Payment streaming for recurring tasks

---

## Getting Started

```bash
git clone https://github.com/your-username/omile.git
cd omile
npm install
npm run dev
```

Requires Node.js 18+. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full setup guide including Stellar testnet configuration.

---

## Contributing

Contributions are welcome. Check the [Issues](../../issues) tab for open tasks — anything tagged `good-first-issue` is a great place to start.

---

## License

[MIT](./LICENSE)

---

*Omile — Your community. Your economy.*
