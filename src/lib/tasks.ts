export type TaskBadge = {
  icon: string;
  label: string;
  tone?: "default" | "secondary" | "urgent";
};

export type Task = {
  id: string;
  title: string;
  author: string;
  price: string;
  avatarUrl?: string;
  avatarInitial?: string;
  verified?: boolean;
  description?: string;
  badges: TaskBadge[];
};

export const TASK_CATEGORIES = [
  { id: "all", label: "All Tasks", icon: "all_inclusive" },
  { id: "errands", label: "Errands", icon: "shopping_cart" },
  { id: "handyman", label: "Handyman", icon: "handyman" },
  { id: "moving", label: "Moving", icon: "local_shipping" },
] as const;

export const TASKS: Task[] = [
  {
    id: "1",
    title: "Grocery run at Spar",
    author: "Chika O.",
    price: "₦5,000",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9v_O7dptGzvlxvap1XHiSjcds8gX_GasQAcLltjjYPJ36jVM4ScsoYiC7OEtsy4dHVAbNaB14SgGQhVu_ApKXsI9IyBdydpSCtlTKogC8Y1wktdfcrKADAHHH8uVplcn6cYHyEPa4tBM8dNFKnpoS0PKjCnqxoCzHbWZA_BVmP5mrAqRJ4jhfHHFXdoSteVseCbEt6FKc4Mwv0pESXWMi1jyhaIhZNwCR9p1BD1IisFoiqVHc9bgNNHsSXCoyqztC14oFtT8aqw",
    badges: [
      { icon: "near_me", label: "0.5km away" },
      { icon: "schedule", label: "Needs done today", tone: "secondary" },
    ],
  },
  {
    id: "2",
    title: "Assemble IKEA desk",
    author: "Tunde B.",
    price: "₦12,000",
    avatarInitial: "T",
    verified: true,
    description:
      "Need help assembling a MALM desk. Have all the tools but not enough time. Looking for someone experienced.",
    badges: [
      { icon: "near_me", label: "1.2km away" },
      { icon: "event", label: "Tomorrow, 10am", tone: "secondary" },
    ],
  },
  {
    id: "3",
    title: "Fix kitchen sink",
    author: "David E.",
    price: "₦8,500",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMAyFC9zvBm24mO-QpQGjivi3SR9zg9qbglGbXMBvlvZicRzvDIrqblduAweF-O9EjHjpcJH_xbJ6rzZTIh3jrUcTsjuE0ywv22CMQzPuRUHDLigzc2zdsgqcxp_uiC9201LA4zZSfvYNSH6cg6RFcuLJA-cd3EnX5K2ffGVYsgD3F_Kz-Hvc3EPa2G_8sRnLxtEIPt-VbvG7kS5_uwmOtVKvg6whS7R3WB3I_6d8xFjYspJ4T0XoxLTsNfzUNRTwAXCodLkN4w",
    badges: [
      { icon: "near_me", label: "0.3km away" },
      { icon: "bolt", label: "ASAP", tone: "urgent" },
    ],
  },
];
