export const APP_NAV = [
  { href: "/home", label: "Home", icon: "home", match: (path: string) => path === "/home" },
  {
    href: "/home/post",
    label: "Post",
    icon: "add_circle",
    match: (path: string) => path.startsWith("/home/post"),
  },
  {
    href: "/home/balance",
    label: "Balance",
    icon: "account_balance_wallet",
    match: (path: string) => path.startsWith("/home/balance"),
  },
  {
    href: "/home/profile",
    label: "Profile",
    icon: "person",
    match: (path: string) => path.startsWith("/home/profile"),
  },
] as const;
