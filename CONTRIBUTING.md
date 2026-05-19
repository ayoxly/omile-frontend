# Contributing to omile-frontend

Thank you for your interest in contributing to the Omile frontend. This guide covers environment setup, conventions, and the PR process.

> Part of the Omile organisation — see also [omile-contracts](https://github.com/ayoxly/omile-contracts) · [omile-backend](https://github.com/ayoxly/omile-backend)

---

## Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

---

## Local Setup

```bash
git clone https://github.com/ayoxly/omile-frontend.git
cd omile-frontend

# Install dependencies
pnpm install

# Start the dev server
pnpm run dev
```

The app starts on `http://localhost:3000`.

---

## Branch Naming

| Branch type | Pattern         | Example                   |
| ----------- | --------------- | ------------------------- |
| Feature     | `feat/<scope>`  | `feat/task-feed-ui`       |
| Bug fix     | `fix/<scope>`   | `fix/onboarding-redirect` |
| Docs        | `docs/<scope>`  | `docs/wallet-setup`       |
| Chore       | `chore/<scope>` | `chore/update-next`       |

---

## Making Changes

1. **Fork** the repository and create your branch from `main`.
2. Follow the `src/` folder conventions — components live in `components/`, pages in `app/`.
3. Use TailwindCSS v4 for all styling — no inline styles or custom CSS unless unavoidable.
4. All user-facing strings should be readable and consistent in tone.
5. Run `pnpm run lint` before opening a PR.
6. Open a Pull Request against `main` with a clear description and screenshots for UI changes.

---

## Code Style

- TypeScript strict mode is enabled — no `any` types.
- Use React Server Components by default; only add `"use client"` when interactivity is required.
- Component files are named in `PascalCase.tsx`.
- Keep components focused — split large files into smaller composable pieces.
- Run `pnpm run format` (Prettier) before committing.

---

## Running Lint

```bash
pnpm run lint
```

There is no test suite yet — writing the first tests would be a great contribution! Check [Issues](../../issues) for the open task.

---

## Reporting Bugs

Open a GitHub Issue tagged `frontend` with:

- Page / component affected
- Steps to reproduce
- Screenshot or screen recording
- Browser and OS

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
