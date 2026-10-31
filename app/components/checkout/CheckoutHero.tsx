import RevealOnScroll from "../RevealOnScroll";

export default function CheckoutHero() {
  return (
    <section className="relative w-full -mt-20 bg-gradient-to-b from-[#180535] via-[#240b4a] to-[#320e6d] text-surface-container-lowest overflow-hidden pb-20 pt-32 md:pb-28 md:pt-36">
      {/* Ambient Violet Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] rounded-full bg-surface-tint/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-margin z-10 flex flex-col items-center text-center">
        {/* Pill Badge */}
        <RevealOnScroll variant="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md shadow-sm mb-6 border border-white/10">
            <span className="text-[12px] uppercase font-bold text-secondary-fixed-dim tracking-wider">
              Secure Stripe Rails
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </RevealOnScroll>

        {/* Main Headline */}
        <RevealOnScroll variant="up" delay={80}>
          <h1 className="text-[36px] sm:text-[48px] md:text-[54px] leading-[1.15] font-bold text-white max-w-4xl tracking-tight">
            Complete Your Settlement
          </h1>
        </RevealOnScroll>

        {/* Subtitle */}
        <RevealOnScroll variant="up" delay={160}>
          <p className="text-[16px] text-secondary-fixed-dim/90 max-w-xl mt-4 font-normal leading-relaxed">
            Review your selected creative production plan, configure custom add-ons,
            and proceed with encrypted 3D Secure settlement.
          </p>
        </RevealOnScroll>

        {/* Floating Trust Glass Pill */}
        <RevealOnScroll variant="scale" delay={240}>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl shadow-lg border border-white/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                lock
              </span>
              <span className="text-[13px] text-white font-medium">
                256-Bit SSL Encrypted
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                verified
              </span>
              <span className="text-[13px] text-white font-medium">
                ASHIVOX LLC Invoicing
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                bolt
              </span>
              <span className="text-[13px] text-white font-medium">
                Instant SLA Activation
              </span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                verified_user
              </span>
              <span className="text-[13px] text-white font-medium">
                14-Day Guarantee
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Organic Concave Separation Layer */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-surface-container-lowest [clip-path:ellipse(65%_100%_at_50%_100%)] pointer-events-none" />
    </section>
  );
}
