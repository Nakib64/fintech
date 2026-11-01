import RevealOnScroll from "../RevealOnScroll";

export default function EntityVerificationCard() {
  return (
    <div className="-mt-14 md:-mt-16 relative z-20 mb-20">
      <RevealOnScroll variant="scale">
        <div className="rounded-[2rem] bg-surface-container-lowest shadow-xl p-6 md:p-10 border border-outline-variant/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[30px]">
                  shield
                </span>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-1">
                  <span>Registered US LLC</span>
                </div>
                <h2 className="text-[28px] sm:text-[32px] font-bold text-on-surface tracking-tight">
                  ASHIVOX LLC
                </h2>
                <p className="text-[13px] text-on-surface-variant">
                  State of New Mexico &bull; Active &amp; in Good Standing
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[14px] font-semibold transition-colors"
                href="tel:+15055289302"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  call
                </span>
                <span>+1 (505) 528-9302</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[14px] font-semibold transition-colors"
                href="mailto:support@ashivox.com"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  mail
                </span>
                <span>support@ashivox.com</span>
              </a>
            </div>
          </div>

          {/* Details Mosaic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 bg-surface-container-low/60 rounded-2xl p-6 mt-6">
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
