export type Review = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  rating: number;
  body: string;
};

export const PROFILE = {
  name: "Tunde B.",
  memberSince: "2022",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDcZ2Vaw90RlPiwHahxKjB4dT-i1mA6lfOpzs2zn84Zp2Hx08WL8IhKUsT6R2Bx8cRsiIKlvFq-2XahT04I5PX4s2fpIw74OAMJueJJgA82xhxoZxXjjsdqDr_ovRa9fZrffXLAWqRNaZ1XYaF-h-yWW7sj2u_OYU4vJEDNt3y1ndBlbDMKMvjM5-7CQhljKdbMRyDfdzvkkkvtn3mxeaEZ8G_9QW_Pu-6iG8Vn9hSiUz5H-0lydNAQm4Hgr99e0ij_r-r8arXQYg",
  bio: "Tech enthusiast and local handyman based in Victoria Island. I specialize in helping neighbors with quick tech setups, home network configurations, and local errands. I believe in building a strong, reliable community network. Always happy to lend a hand!",
  tasksCompleted: 48,
  averageRating: 4.9,
};

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Amina Y.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlk1MWR0Sy2EwRrdSUXwWt5TraAsuxb9OBUdKWQ0SAz1qejPi_n2ILX41ctFYUnr-N5MMYBuq3uRq0V3kBU3weRThm4DcZybybXwCn6SZpuSsm00yuyld7WnGuhbDAj9VuI7A8sNEk_edo_qS5IdsqAc9XKM84wuiZyB634i7C6DNBEdOKYepw664OHmbRkqY3MoTNnVVrIHcM2yIBnTFpTGyysY82bKxG9vZa8vgcZfNxSr7LeIG79G_cSmirBdt3_rVS3a2XZg",
    date: "2 weeks ago",
    rating: 5,
    body: "Tunde was incredibly helpful in setting up my home network. He arrived exactly on time, was very polite, and explained the new router settings clearly. Highly recommend his tech services!",
  },
  {
    id: "2",
    author: "Chike O.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHWLoJO7t1dcHf8-5J0iisUBDjkPpQmwbriDokN_JcGyhjZnYa7ecWIRNCOc6BpsTeno-PLH7jEPXtI4RUQy-PLWuCZx-B_Eo98XxpoUZ8ybUNx2uDP5WbwkXuJmd1Sn6d5N0MVG44ifAjmiME7N4iwrgXkLJCC0o3D0ptNrB08ekUqbeDaUKN2hMjYZQfBIaMLbI7VzB_Rjivk09Lw7xH1-Uc-wnciES-6Csjk1wCZe8QtlIGCXwJLq0lDOmn8iY9rpl8nebuUQ",
    date: "1 month ago",
    rating: 4.5,
    body: "Fast and efficient. Helped me move some heavy furniture down three flights of stairs. A genuinely great guy to have in the neighborhood. Will hire again.",
  },
];
