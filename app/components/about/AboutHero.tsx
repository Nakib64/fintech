import RevealOnScroll from "../RevealOnScroll";

export default function AboutHero() {
  return (
    <section className="relative w-full -mt-20 bg-gradient-to-b from-[#180535] via-[#24084f] to-[#120329] text-surface-container-lowest overflow-hidden">
      {/* Ambient Light Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-surface-tint/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-margin pt-32 pb-24 md:pb-28 relative z-10">
        {/* Eyebrow Pill Tag */}
        <RevealOnScroll variant="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/10">
            <span className="text-[12px] uppercase font-bold text-surface-container-lowest tracking-widest">
              About Us &amp; Legal Info
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <RevealOnScroll variant="up" delay={80}>
              <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight">
                Built on Trust &amp; Transparency
              </h1>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[16px] md:text-[18px] text-secondary-fixed-dim/90 max-w-2xl leading-relaxed">
                Vortex Digital Media LLC is a registered US company. We deliver
                premium video production with 100% intellectual property
                ownership, clear contracts, and dependable delivery.
              </p>
            </RevealOnScroll>
          </div>

          {/* Metric Glass Teaser Badges */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:justify-end">
            <RevealOnScroll variant="scale" delay={200} className="flex-1">
              <div className="p-3 lg:p-6 rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl h-full">
                <div className="flex items-center gap-2 text-primary-fixed-dim mb-1">
                  <span className="material-symbols-outlined text-[12px] lg:text-[20px]">
                    verified
                  </span>
                  <span className="text-[12px] uppercase font-bold tracking-wider">
                    Registration
                  </span>
                </div>
                <div className="text-[26px] lg:text-[38px] font-extrabold text-white">
                  DE, USA
                </div>
                <p className="text-[11px] lg:text-[13px] text-surface-container-high/70 mt-1">
                  Delaware Registered LLC
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="scale" delay={300} className="flex-1">
              <div className="p-3 lg:p-6 rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl h-full">
                <div className="flex items-center gap-2 text-primary-fixed-dim mb-1">
                  <span className="material-symbols-outlined text-[12px] lg:text-[20px]">
                    policy
                  </span>
                  <span className="text-[12px] uppercase font-bold tracking-wider">
                    Rights
                  </span>
                </div>
                <div className="text-[26px] lg:text-[38px] font-extrabold text-white">
                  100%
                </div>
                <p className="text-[11px] lg:text-[13px] text-surface-container-high/70 mt-1">
                  Full IP Ownership on All Files
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Organic Wave Divider */}
      <div className="w-full text-surface-bright leading-none -mb-px">
        <svg
          className="w-full h-12 md:h-16 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 64"
        >
          <path
            d="M0 64C360 20 1080 20 1440 64V64H0V64Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
