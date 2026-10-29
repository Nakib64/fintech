import RevealOnScroll from "../RevealOnScroll";

export default function LegalCounselBanner() {
  return (
    <div className="mt-16">
      <RevealOnScroll variant="scale">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-primary to-primary-container p-8 md:p-12 text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-on-primary text-[12px] font-bold uppercase tracking-wider">
              <span>Enterprise Support</span>
            </div>
            <h3 className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight">
              Need a custom contract or NDA?
            </h3>
            <p className="text-[15px] text-white/90 leading-relaxed">
              We provide signed NDAs, custom agreements, and enterprise invoices
              within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-surface-container-lowest text-primary text-[14px] font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              href="mailto:ops@vortexdigitalmedia.us"
            >
              Contact Us ↗
            </a>
            <a
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[14px] font-semibold transition-colors border border-white/20"
              href="tel:+18005829104"
            >
              Call Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
