import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

export default function EnterpriseBanner() {
  return (
    <section className="w-full bg-surface-container-lowest pb-24 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <RevealOnScroll variant="scale">
          <div className="relative rounded-[2.5rem] p-8 md:p-14 bg-gradient-to-br from-[#180535] via-[#240a4d] to-[#320e6d] text-surface-container-lowest overflow-hidden shadow-2xl border border-white/10">
            {/* Background Decorative Flare */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-2xl space-y-4">
                <span className="text-[12px] uppercase font-bold text-primary-fixed-dim tracking-widest block">
                  Custom Plans
                </span>
                <h2 className="text-[30px] sm:text-[38px] leading-[1.2] font-bold text-white tracking-tight">
                  Need a custom plan or higher volume?
                </h2>
                <p className="text-[15px] text-surface-container-high/85 leading-relaxed">
                  We build custom packages for teams needing dedicated creators,
                  faster turnarounds, or custom invoicing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary text-[14px] font-bold shadow-lg shadow-primary/40 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <span>Book a Call</span>
                  <span>↗</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-[14px] font-semibold backdrop-blur-md transition-all border border-white/10"
                >
                  <span>View Terms</span>
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
