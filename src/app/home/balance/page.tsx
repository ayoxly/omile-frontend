import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balance — Omile",
};

export default function BalancePage() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <span className="material-symbols-outlined filled text-5xl text-primary">account_balance_wallet</span>
      <h1 className="font-headline-lg text-headline-lg text-on-surface">Balance</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Wallet and escrow balances will appear here soon.
      </p>
    </main>
  );
}
