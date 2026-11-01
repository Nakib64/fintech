import Image from "next/image";
import RevealOnScroll from "../RevealOnScroll";

const leaders = [
  {
    name: "Marcus Vance",
    role: "VP of Video Infrastructure",
    tag: "Video Tech",
    desc: "Oversees rendering systems, cloud servers, and video delivery tools across our entire platform.",
    badge: "14+ Years in Tech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyjbecr5FYZ1N2cz8t9ctUMjWgQ7HotwP-Anz9ukvW2NjYwyKzERajygGPd3JdcFoRecO_IzRr60Cf6nus_dJs9mZ0k2UH-yJgcjujKfM7GlHxw_wRTjThSNg7t5a7toQxKsM6JFsjBuFfsfSoVLlhsJH498eSlnUcq5xj5DVsOPH4ybSOeGjuJ68saqtiVW0NrLw2NAFXparG2dq0ULhuSeYVPyr29gDhHv8iXMuV",
  },
  {
    name: "Elena Rostova",
    role: "Head of Creative Strategy",
    tag: "Creative",
    desc: "Leads scriptwriting, visual design, and brand storytelling for client campaigns and releases.",
    badge: "Award-Winning Director",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHK15OqgGiDsDNoaNmqrSdoHUbiSOR2jYmsnk3tWjaJi9nLZxCQkOKvBI1N9bX3Wig9Nk5I6fPnpAi7tZi6zb22GSkUjiyGhLcNphpGTzogY9qahYqtTh1S0-NK0c2J5fWKVWJPFyJU6ibx2gpJ80D_Tzl9QGrSO1mioMA0RtKl9maefa-ADsAWTq49hHv191sGegAgXo1pGckRveYSEU7q15UlZZgAQclrk21czpR",
  },
  {
    name: "Julian Thorne",
    role: "Head of Operations & Legal",
    tag: "Legal & Ops",
    desc: "Manages New Mexico corporate compliance, contract terms, copyright transfer, and client agreements.",
    badge: "Corporate Legal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0an3QA6Wiwk_mHZd_Qo-gaU5TaKt2y1y7y6eI7GX0ST3-pfE1pXlxV7YYRlbsZys0-ecod6lW0hXMWxiu13251yKaDZa39RunsBIVDapKiP4G5im4fSrhIJ87-r2t-qClvg_dRyOPdC3WyKL31KjOmWXMzRCzu3q5f13Llbm5mhSVTlnoOs3GJA-ycyt__C4ElK_LjyGNc8c-tiV6K5iYXtUxVqlrx9NpoTHvN41b",
  },
];

export default function LeadershipGrid() {
  return (
    <div className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <RevealOnScroll variant="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-2">
              <span>Our Team</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="up" delay={80}>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-on-surface tracking-tight">
              Meet the Leadership
            </h2>
          </RevealOnScroll>
        </div>
        <RevealOnScroll variant="up" delay={160}>
          <p className="text-[15px] leading-[24px] text-on-surface-variant max-w-md">
            Experienced leaders in video engineering, creative strategy, and
            business operations.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader, idx) => (
          <RevealOnScroll key={leader.name} variant="up" delay={idx * 150}>
            <div className="rounded-[2rem] bg-surface-container-lowest p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover:shadow-md transition-all h-full">
              <div>
                <div className="relative overflow-hidden rounded-[1.25rem] mb-6 h-72 w-full bg-surface-container">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute bottom-3 left-3 px-3.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-[11px] uppercase font-bold tracking-wider shadow-sm">
                    {leader.tag}
                  </div>
                </div>

                <h3 className="text-[22px] font-bold text-on-surface">
                  {leader.name}
                </h3>
                <p className="text-[13px] text-primary font-semibold mt-0.5">
                  {leader.role}
                </p>
                <p className="text-[13px] leading-[22px] text-on-surface-variant mt-3">
                  {leader.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 flex items-center justify-between border-t border-outline-variant/20">
                <span className="text-[12px] font-medium text-outline">
                  {leader.badge}
                </span>
                <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[16px]">
                    north_east
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
