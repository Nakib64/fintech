import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

export default function ProjectsCta() {
  return (
    <section className="relative w-full bg-surface-container-lowest pb-20 md:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <RevealOnScroll variant="scale">
          <div className="relative w-full rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#180535] via-[#2a0c59] to-[#3b0f7d] p-6 sm:p-10 md:p-16 overflow-hidden shadow-[0_24px_60px_-8px_rgba(112,21,226,0.35)] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 border border-white/10">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/40 blur-[90px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-surface-tint/30 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-primary-fixed-dim text-[11px] sm:text-[12px] font-semibold mb-3 sm:mb-4 backdrop-blur-sm border border-white/10">
                <span>Now Booking New Projects</span>
              </div>
              <h2 className="text-[26px] sm:text-[40px] text-white font-bold tracking-tight">
                Ready to start your video project?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-secondary-fixed-dim/90 mt-2 sm:mt-3 font-normal leading-relaxed">
                Fast 48-hour delivery, full copyright ownership, and dedicated support.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg sm:rounded-full bg-gradient-to-r from-primary-fixed-dim to-primary-container text-on-primary-fixed text-[14px] sm:text-[15px] font-bold shadow-[0_10px_28px_rgba(138,63,252,0.45)] hover:shadow-[0_12px_32px_rgba(138,63,252,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
                href="#discovery-form"
              >
                <span>Purchase / Start</span>
                <span className="text-lg">↗</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg sm:rounded-full bg-white/10 hover:bg-white/15 text-white text-[14px] sm:text-[15px] font-semibold transition-colors text-center border border-white/10"
                href="mailto:support@ashivox.net"
              >
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
