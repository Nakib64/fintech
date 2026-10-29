export interface Plan {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  cycle: string;
  badge?: string;
  icon?: string;
  desc: string;
  features: string[];
}

export const ALL_PLANS: Plan[] = [
  {
    id: "content-writing",
    name: "Content Writing",
    price: "$999",
    numericPrice: 999,
    cycle: "/mo",
    badge: "⭐ Most Popular",
    icon: "edit_note",
    desc: "Viral video scripts and copy to grow your brand and sales.",
    features: [
      "12 High-retention video scripts",
      "4 Deep-dive SEO articles",
      "Weekly newsletters & ad copy",
      "Full research & fact-checking",
    ],
  },
  {
    id: "video-editing",
    name: "Video Editing",
    price: "$1,499",
    numericPrice: 1499,
    cycle: "/mo",
    badge: "Post-Production",
    icon: "movie",
    desc: "Fast, high-retention videos for YouTube, Reels, and TikTok.",
    features: [
      "8 Long-form or 20 Shorts",
      "Licensed sound & music",
      "Motion graphics & color grade",
      "48-hour delivery & 3 revisions",
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    price: "$1,899",
    numericPrice: 1899,
    cycle: "/mo",
    badge: "Social Growth",
    icon: "trending_up",
    desc: "Full management across Instagram, TikTok, X, and YouTube.",
    features: [
      "Multi-channel strategy",
      "Weekly scheduling & posting",
      "Daily community & DM replies",
      "Monthly growth report",
    ],
  },
  {
    id: "growth-engine",
    name: "Growth Engine Retainer",
    price: "$1,499",
    numericPrice: 1499,
    cycle: "/mo",
    badge: "Recommended",
    icon: "rocket_launch",
    desc: "Dedicated high-velocity creative sprint with full producer access.",
    features: [
      "Continuous video sprints",
      "Multi-channel video & copy",
      "Dedicated creative director",
      "Delaware LLC contract & SLA",
    ],
  },
  {
    id: "omnichannel-enterprise",
    name: "Omnichannel Media Sprint",
    price: "$4,999",
    numericPrice: 4999,
    cycle: "/mo",
    badge: "Enterprise",
    icon: "workspace_premium",
    desc: "Full-scale media pipeline for global brands and scaling startups.",
    features: [
      "Unlimited video production",
      "Priority 24-hour turnaround",
      "Dedicated 4-person studio team",
      "Custom SLA & bilateral MSA",
    ],
  },
  {
    id: "video-one-off",
    name: "Video Editing (One-Off)",
    price: "$2,199",
    numericPrice: 2199,
    cycle: "/sprint",
    badge: "Milestone",
    icon: "movie_edit",
    desc: "Fixed scope single video sprint delivery with no recurring commitment.",
    features: [
      "4 Master YouTube Videos",
      "8 Short-form cutdowns",
      "Sound design & grading",
      "Single milestone payment",
    ],
  },
  {
    id: "content-one-off",
    name: "Content Writing (One-Off)",
    price: "$1,450",
    numericPrice: 1450,
    cycle: "/sprint",
    badge: "Milestone",
    icon: "rate_review",
    desc: "One-off editorial package and script sprint.",
    features: [
      "24 Video retention scripts",
      "4 In-depth case studies",
      "Brand messaging guide",
      "Full revision milestone",
    ],
  },
  {
    id: "social-one-off",
    name: "Social Media (Audit Sprint)",
    price: "$2,750",
    numericPrice: 2750,
    cycle: "/audit",
    badge: "Milestone",
    icon: "hub",
    desc: "Full omnichannel architecture audit and algorithmic growth blueprint.",
    features: [
      "Comprehensive profile audit",
      "Competitive benchmarking",
      "90-Day content playbook",
      "Executive presentation",
    ],
  },
];

export function getPlanByNameOrId(
  query?: string | null,
  priceQuery?: string | null
): Plan {
  if (!query && !priceQuery) return ALL_PLANS[0];

  const q = (query || "").toLowerCase().trim();
  const pq = (priceQuery || "").toLowerCase().trim();

  // 1. If price query has milestone indicator
  if (pq.includes("2,199") || (q.includes("video") && pq.includes("sprint"))) {
    return ALL_PLANS.find((p) => p.id === "video-one-off") || ALL_PLANS[0];
  }
  if (pq.includes("1,450") || (q.includes("content") && pq.includes("sprint"))) {
    return ALL_PLANS.find((p) => p.id === "content-one-off") || ALL_PLANS[0];
  }
  if (pq.includes("2,750") || (q.includes("social") && pq.includes("audit"))) {
    return ALL_PLANS.find((p) => p.id === "social-one-off") || ALL_PLANS[0];
  }

  // 2. Search by ID exact match
  const byId = ALL_PLANS.find((p) => p.id.toLowerCase() === q);
  if (byId) return byId;

  // 3. Search by Name exact match
  const byName = ALL_PLANS.find((p) => p.name.toLowerCase() === q);
  if (byName) return byName;

  // 4. Search by Name partial match
  const byPartial = ALL_PLANS.find(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      q.includes(p.name.toLowerCase()) ||
      p.id.toLowerCase().includes(q)
  );
  if (byPartial) return byPartial;

  // 5. Search by price if provided
  if (priceQuery) {
    const byPrice = ALL_PLANS.find((p) => pq.includes(p.price.toLowerCase()));
    if (byPrice) return byPrice;
  }

  return ALL_PLANS[0];
}
