import RevealOnScroll from "../RevealOnScroll";

export default function LegalCounselBanner() {
  return (
    <div className="mt-16">
      <RevealOnScroll variant="scale">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary to-primary-container p-5 sm:p-8 md:p-12 text-on-primary flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 text-on-primary text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
              <span>Enterprise Support</span>
            </div>
            <h3 className="text-[22px] sm:text-[32px] font-bold text-white tracking-tight">
              Need a custom contract or NDA?
            </h3>
            <p className="text-[13px] sm:text-[15px] text-white/90 leading-relaxed">
              We provide signed NDAs, custom agreements, and enterprise invoices
              within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-full bg-surface-container-lowest text-primary text-[13px] sm:text-[14px] font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              href="mailto:support@ashivox.net"
            >
              Contact Support ↗
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
