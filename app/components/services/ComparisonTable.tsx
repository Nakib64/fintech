import RevealOnScroll from "../RevealOnScroll";

const comparisonRows = [
  {
    term: "Turnaround SLA",
    video: "48 Hours (Short-form)",
    content: "24-48 Hours",
    smm: "Daily Live Cadence",
  },
  {
    term: "Revision Cycles",
    video: "Unlimited within scope",
    content: "Unlimited within scope",
    smm: "Continuous Strategic Iteration",
  },
  {
    term: "Dedicated Slack Connect",
    video: "Direct Producer",
    content: "Lead Copywriter",
    smm: "Full Growth Squad",
    isIcon: true,
  },
  {
    term: "US Commercial Agreement (MSA)",
    video: "Included",
    content: "Included",
    smm: "Included",
    isBadge: true,
  },
  {
    term: "Full Commercial IP Transfer",
    video: "100% Client Ownership",
    content: "100% Client Ownership",
    smm: "100% Client Ownership",
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <div className="max-w-3xl mb-12">
          <RevealOnScroll variant="up">
            <span className="text-[12px] uppercase font-bold text-primary tracking-widest block">
              Comparison
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="up" delay={80}>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-on-surface mt-2 mb-4 tracking-tight">
              Plan Comparison
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="up" delay={160}>
            <p className="text-[15px] leading-[24px] text-on-surface-variant">
              Compare turnarounds, revision rounds, communication, and rights across plans.
            </p>
          </RevealOnScroll>
        </div>

        {/* Matrix Container */}
        <RevealOnScroll variant="up" delay={200}>
          <div className="w-full overflow-x-auto rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-outline-variant/30 bg-surface-container-lowest">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low text-on-surface border-b border-outline-variant/20">
                  <th className="py-5 px-6 text-[13px] uppercase tracking-wider font-bold text-outline">
                    Capabilities &amp; Terms
                  </th>
                  <th className="py-5 px-6 text-[13px] uppercase tracking-wider font-bold text-primary">
                    Video Editing &amp; VFX
                  </th>
                  <th className="py-5 px-6 text-[13px] uppercase tracking-wider font-bold text-primary">
                    Content Writing
                  </th>
                  <th className="py-5 px-6 text-[13px] uppercase tracking-wider font-bold text-primary">
                    Social Management
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-on-surface text-[14px]">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.term}
                    className={`transition-colors ${idx % 2 === 1
                        ? "bg-surface-container-low/30 hover:bg-surface-container-low/60"
                        : "bg-surface-container-lowest hover:bg-surface-container-low/40"
                      }`}
                  >
                    <td className="py-5 px-6 font-semibold text-on-surface">
                      {row.term}
                    </td>

                    <td className="py-5 px-6">
                      {row.isBadge ? (
                        <span className="inline-flex items-center gap-1.5 text-on-surface font-medium">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            verified_user
                          </span>
                          {row.video}
                        </span>
                      ) : row.isIcon ? (
                        <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                          <span className="material-symbols-outlined text-[18px]">
                            check
                          </span>
                          {row.video}
                        </span>
                      ) : (
                        row.video
                      )}
                    </td>

                    <td className="py-5 px-6">
                      {row.isBadge ? (
                        <span className="inline-flex items-center gap-1.5 text-on-surface font-medium">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            verified_user
                          </span>
                          {row.content}
                        </span>
                      ) : row.isIcon ? (
                        <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                          <span className="material-symbols-outlined text-[18px]">
                            check
                          </span>
                          {row.content}
                        </span>
                      ) : (
                        row.content
                      )}
                    </td>

                    <td className="py-5 px-6">
                      {row.isBadge ? (
                        <span className="inline-flex items-center gap-1.5 text-on-surface font-medium">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            verified_user
                          </span>
                          {row.smm}
                        </span>
                      ) : row.isIcon ? (
                        <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                          <span className="material-symbols-outlined text-[18px]">
                            check
                          </span>
                          {row.smm}
                        </span>
                      ) : (
                        row.smm
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
