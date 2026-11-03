import RevealOnScroll from "../RevealOnScroll";

export default function EntityVerificationCard() {
  return (
    <div className="-mt-14 md:-mt-16 relative z-20 mb-20">
      <RevealOnScroll variant="scale">
        <div className="rounded-xl sm:rounded-2xl bg-surface-container-lowest shadow-xl p-4 sm:p-6 md:p-10 border border-outline-variant/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-outline-variant/20">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[24px] sm:text-[30px]">
                  shield
                </span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-1">
                  <span>Registered US LLC</span>
                </div>
                <h2 className="text-[22px] sm:text-[32px] font-bold text-on-surface tracking-tight">
                  ASHIVOX LLC
                </h2>
                <p className="text-[12px] sm:text-[13px] text-on-surface-variant">
                  State of New Mexico &bull; Active &amp; in Good Standing
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[12px] sm:text-[14px] font-semibold transition-colors"
                href="tel:+15055289302"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary">
                  call
                </span>
                <span>+1 (505) 528-9302</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[12px] sm:text-[14px] font-semibold transition-colors"
                href="mailto:support@ashivox.net"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary">
                  mail
                </span>
                <span>support@ashivox.net</span>
              </a>
            </div>
          </div>

          {/* Details Mosaic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 bg-surface-container-low/60 rounded-lg sm:rounded-xl p-4 sm:p-6 mt-5 sm:mt-6">
            <div className="space-y-1">
              <span className="text-[11px] uppercase text-outline tracking-wider font-bold block">
                Jurisdiction &amp; Type
              </span>
              <div className="text-[15px] font-bold text-on-surface">
                New Mexico, USA
              </div>
              <p className="text-[12px] text-on-surface-variant">
                Limited Liability Company
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase text-outline tracking-wider font-bold block">
                Business Registration #
              </span>
              <div className="text-[15px] font-mono font-bold text-primary">
                0008132694
              </div>
              <p className="text-[12px] text-on-surface-variant">
                NM Secretary of State ID
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase text-outline tracking-wider font-bold block">
                Registered Office
              </span>
              <div className="text-[14px] font-bold text-on-surface">
                1209 Mountain Road PL NE, Ste R
              </div>
              <p className="text-[12px] text-on-surface-variant">
                Albuquerque, NM 87110, USA
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase text-outline tracking-wider font-bold block">
                Registered Agent
              </span>
              <div className="text-[15px] font-bold text-on-surface">
                Registered Agents Inc.
              </div>
              <p className="text-[12px] text-on-surface-variant">
                Official Commercial Registered Agent
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
