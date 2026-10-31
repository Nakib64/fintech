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
  // ── Video Editing Packages ──
  {
    id: "video-100",
    name: "Video Editing - Professional",
    price: "$100",
    numericPrice: 100,
    cycle: "/project",
    badge: "⭐ Most Popular",
    icon: "movie_edit",
    desc: "Color correction, sound design & basic motion graphics.",
    features: [
      "1 video up to 3-5 minutes",
      "Cinematic color grading & LUTs",
      "Sound design & audio cleanup",
      "Motion titles & lower thirds",
      "Multi-format export (Reels, TikTok, YT)",
    ],
  },
  {
    id: "video-50",
    name: "Video Editing - Starter",
    price: "$50",
    numericPrice: 50,
    cycle: "/project",
    badge: "Starter",
    icon: "movie",
    desc: "Basic editing, transitions & copyright-free music.",
    features: [
      "1 video up to 60 seconds",
      "Cuts, transitions & music sync",
      "Copyright-free background music",
      "Basic color & lighting correction",
      "1080p Full HD export",
    ],
  },
  {
    id: "video-150",
    name: "Video Editing - Advanced",
    price: "$150",
    numericPrice: 150,
    cycle: "/project",
    badge: "Advanced",
    icon: "video_settings",
    desc: "Professional motion graphics, subtitles & multi-format export.",
    features: [
      "Advanced motion graphics & hooks",
      "Dynamic animated subtitles",
      "Multi-format export (16:9, 9:16, 1:1)",
      "Custom thumbnail concept",
      "Priority production turnaround",
    ],
  },
  {
    id: "video-200",
    name: "Video Editing - Premium Studio",
    price: "$200",
    numericPrice: 200,
    cycle: "/project",
    badge: "VIP Studio",
    icon: "workspace_premium",
    desc: "Premium production, advanced visual effects & dedicated support.",
    features: [
      "Full studio production & VFX",
      "Commercial sound mastering",
      "Multi-platform master exports",
      "Source project files included",
      "Dedicated editor & 24/7 VIP support",
    ],
  },

  // ── Content Writing Packages ──
  {
    id: "content-80",
    name: "Content Writing - In-Depth Article",
    price: "$80",
    numericPrice: 80,
    cycle: "/project",
    badge: "⭐ Most Popular",
    icon: "rate_review",
    desc: "500-word in-depth SEO-optimized article with rich formatting.",
    features: [
      "500 words deep-dive SEO article",
      "Competitor analysis & keyword map",
      "H2/H3 header structure & scannable layout",
      "Proofread, fact-checked & citation-ready",
    ],
  },
  {
    id: "content-20",
    name: "Content Writing - Social Captions",
    price: "$20",
    numericPrice: 20,
    cycle: "/project",
    badge: "Starter",
    icon: "edit_note",
    desc: "Catchy short-form social media captions and viral hashtags.",
    features: [
      "Engaging short-form social captions",
      "Targeted viral hashtag matrix",
      "Conversion-driven call-to-action (CTA)",
      "Formatted for IG, FB, LinkedIn & X",
    ],
  },
  {
    id: "content-60",
    name: "Content Writing - SEO Blog",
    price: "$60",
    numericPrice: 60,
    cycle: "/project",
    badge: "Standard",
    icon: "article",
    desc: "300-word SEO-friendly blog post optimized for ranking.",
    features: [
      "300 words of 100% original copy",
      "Primary keyword & meta description",
      "Engaging, hook-driven introduction",
      "Plagiarism-free & grammar checked",
    ],
  },
  {
    id: "content-120",
    name: "Content Writing - Authority Guide / E-book",
    price: "$120",
    numericPrice: 120,
    cycle: "/project",
    badge: "Authority",
    icon: "menu_book",
    desc: "1,000-word comprehensive guide or professional e-book.",
    features: [
      "1,000-word comprehensive guide or e-book",
      "Deep research & industry case studies",
      "Executive summary & key takeaways",
      "Full commercial copyright ownership",
      "Unlimited revisions until satisfaction",
    ],
  },

  // ── Social Media Management Packages ──
  {
    id: "social-400",
    name: "Social Media - Growth Retainer",
    price: "$400",
    numericPrice: 400,
    cycle: "/mo",
    badge: "⭐ Most Popular",
    icon: "hub",
    desc: "5 posts per week with monthly reporting and scheduling.",
    features: [
      "5 high-impact posts per week (20/mo)",
      "End-to-end content calendar & scheduling",
      "In-depth monthly analytics & reporting",
      "Audience interaction & hashtag growth",
      "Dedicated account manager",
    ],
  },
  {
    id: "social-300",
    name: "Social Media - Starter Growth",
    price: "$300",
    numericPrice: 300,
    cycle: "/mo",
    badge: "Starter",
    icon: "trending_up",
    desc: "3 posts per week with basic engagement and branded graphics.",
    features: [
      "3 custom branded posts per week (12/mo)",
      "Custom graphic design & copy",
      "Community monitoring & basic engagement",
      "Cross-posting to IG and Facebook",
      "Monthly performance recap",
    ],
  },
  {
    id: "social-500",
    name: "Social Media - Pro Acceleration",
    price: "$500",
    numericPrice: 500,
    cycle: "/mo",
    badge: "Pro Scale",
    icon: "rocket_launch",
    desc: "Daily posts with community management and growth strategy.",
    features: [
      "Daily high-retention posts & carousels (30/mo)",
      "Proactive community management & DM replies",
      "Data-driven algorithmic growth strategy",
      "Weekly performance syncs & review",
      "Creative direction & brand guidelines",
    ],
  },
  {
    id: "social-600",
    name: "Social Media - 360 Omnichannel",
    price: "$600",
    numericPrice: 600,
    cycle: "/mo",
    badge: "360 Elite",
    icon: "campaign",
    desc: "Full paid campaign management, video planning, and 24/7 support.",
    features: [
      "Complete paid ad campaign management",
      "Short-form video planning & script concepts",
      "Multi-channel management (FB, IG, TikTok, X)",
      "ROI tracking, funnel optimization & A/B tests",
      "24/7 priority support & dedicated director",
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

  // 1. Search by ID exact match
  const byId = ALL_PLANS.find((p) => p.id.toLowerCase() === q);
  if (byId) return byId;

  // 2. Search by numeric/exact price match
  if (pq) {
    if (pq.includes("50")) return ALL_PLANS.find((p) => p.id === "video-50") || ALL_PLANS[0];
    if (pq.includes("100")) return ALL_PLANS.find((p) => p.id === "video-100") || ALL_PLANS[0];
    if (pq.includes("150")) return ALL_PLANS.find((p) => p.id === "video-150") || ALL_PLANS[0];
    if (pq.includes("200")) return ALL_PLANS.find((p) => p.id === "video-200") || ALL_PLANS[0];
    if (pq.includes("20")) return ALL_PLANS.find((p) => p.id === "content-20") || ALL_PLANS[0];
    if (pq.includes("60")) return ALL_PLANS.find((p) => p.id === "content-60") || ALL_PLANS[0];
    if (pq.includes("80")) return ALL_PLANS.find((p) => p.id === "content-80") || ALL_PLANS[0];
    if (pq.includes("120")) return ALL_PLANS.find((p) => p.id === "content-120") || ALL_PLANS[0];
    if (pq.includes("300")) return ALL_PLANS.find((p) => p.id === "social-300") || ALL_PLANS[0];
    if (pq.includes("400")) return ALL_PLANS.find((p) => p.id === "social-400") || ALL_PLANS[0];
    if (pq.includes("500")) return ALL_PLANS.find((p) => p.id === "social-500") || ALL_PLANS[0];
    if (pq.includes("600")) return ALL_PLANS.find((p) => p.id === "social-600") || ALL_PLANS[0];
    if (pq.includes("4,999")) return ALL_PLANS.find((p) => p.id === "omnichannel-enterprise") || ALL_PLANS[0];
  }

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

  // 5. Search by price if provided in query
  if (priceQuery) {
    const byPrice = ALL_PLANS.find((p) => pq.includes(p.price.toLowerCase()));
    if (byPrice) return byPrice;
  }

  return ALL_PLANS[0];
}
