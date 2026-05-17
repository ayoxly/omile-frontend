export type TaskPoster = {
  name: string;
  memberSince: string;
  avatarUrl: string;
  rating: number;
  tasksPosted: number;
  verified: boolean;
};

export type TaskDetail = {
  id: string;
  title: string;
  price: string;
  tags: string[];
  description: string[];
  locationDistance: string;
  mapImage: string;
  poster: TaskPoster;
};

const MAP_SNIPPET =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPGiUMkIqPF4A1OUvdadstCetTSqRuT4rDAf1R-CbEZ6O1nnVug52ovPtrcy3cd0OkB4yp8QjROJ93w_hce55ftO1Ofj6NIjbDJ4jgX8F-wOqpY3qAAsLen--s6AgKsmAwF84n67WOU_9MP3y4q_U1LUzKCS0DDvUcTgHI1d8IyvTHdUjxzjfsjlxQ68Np1eJoL_WZSS_8CaaMEE-c6Rh97dIAprfK8bj3qcsTpUK2YJLW977WExomJilQoJSIgrw8JjbaDABbIQ";

const POSTER_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARjOpBtc9PsiwwbJlDrnIW7lUVZKCMwCKnxe4Aygeod6VSXn7BDcFQ76OkyuO7fnw3dlUjdWCC25qe0EcsqNnk61x2RQsCtU4yt837Bc1nJrKIZsNBU7OekWAJz6L__P04rnc57QJp9KRwJ4VsVXGL2pn8Ueo8YDlgAlkuYgUfTwn1GKwqqYXFDQhgKnMLhCrHOGuMsIR4XfK_sqNeIWbo5g5zOnELvg-kCP6Cw70-h6jQA2k4FPzwXhagoXxp8_a4oDWzq2MUKQ";

export const TASK_DETAILS: Record<string, TaskDetail> = {
  "1": {
    id: "1",
    title: "Grocery run at Spar",
    price: "₦5,000",
    tags: ["One-Time Task", "Errands"],
    description: [
      "Need someone to pick up a short grocery list from Spar and deliver to my apartment. List will be shared after you apply.",
      "Prefer delivery before 6pm today.",
    ],
    locationDistance: "0.5 km away",
    mapImage: MAP_SNIPPET,
    poster: {
      name: "Chika O.",
      memberSince: "Mar 2023",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9v_O7dptGzvlxvap1XHiSjcds8gX_GasQAcLltjjYPJ36jVM4ScsoYiC7OEtsy4dHVAbNaB14SgGQhVu_ApKXsI9IyBdydpSCtlTKogC8Y1wktdfcrKADAHHH8uVplcn6cYHyEPa4tBM8dNFKnpoS0PKjCnqxoCzHbWZA_BVmP5mrAqRJ4jhfHHFXdoSteVseCbEt6FKc4Mwv0pESXWMi1jyhaIhZNwCR9p1BD1IisFoiqVHc9bgNNHsSXCoyqztC14oFtT8aqw",
      rating: 4.8,
      tasksPosted: 12,
      verified: true,
    },
  },
  "2": {
    id: "2",
    title: "Assemble Office Chair",
    price: "₦7,000",
    tags: ["One-Time Task", "Requires Tools"],
    description: [
      "I recently purchased an ergonomic office chair online and need someone with the right tools and experience to assemble it for me. The box is heavy, and it comes with multiple small parts. You will need your own Allen keys and possibly a power drill to make sure the armrests and back support are secured tightly.",
      "Looking to get this done sometime this weekend. Flexible on exact timing, just let me know when you are available.",
    ],
    locationDistance: "2.4 km away",
    mapImage: MAP_SNIPPET,
    poster: {
      name: "Chidi K.",
      memberSince: "Jan 2023",
      avatarUrl: POSTER_AVATAR,
      rating: 4.9,
      tasksPosted: 24,
      verified: true,
    },
  },
  "3": {
    id: "3",
    title: "Fix kitchen sink",
    price: "₦8,500",
    tags: ["One-Time Task", "ASAP"],
    description: [
      "Kitchen sink is leaking under the cabinet. Need a handyman to diagnose and fix as soon as possible.",
      "Basic plumbing tools required. Happy to reimburse parts if needed.",
    ],
    locationDistance: "0.3 km away",
    mapImage: MAP_SNIPPET,
    poster: {
      name: "David E.",
      memberSince: "Aug 2022",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMAyFC9zvBm24mO-QpQGjivi3SR9zg9qbglGbXMBvlvZicRzvDIrqblduAweF-O9EjHjpcJH_xbJ6rzZTIh3jrUcTsjuE0ywv22CMQzPuRUHDLigzc2zdsgqcxp_uiC9201LA4zZSfvYNSH6cg6RFcuLJA-cd3EnX5K2ffGVYsgD3F_Kz-Hvc3EPa2G_8sRnLxtEIPt-VbvG7kS5_uwmOtVKvg6whS7R3WB3I_6d8xFjYspJ4T0XoxLTsNfzUNRTwAXCodLkN4w",
      rating: 4.7,
      tasksPosted: 9,
      verified: false,
    },
  },
};

export function getTaskDetail(id: string): TaskDetail | undefined {
  return TASK_DETAILS[id];
}
