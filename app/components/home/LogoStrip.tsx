import RevealOnScroll from "../RevealOnScroll";

const sectors = [
  { icon: "terminal", name: "SaaS & Tech" },
  { icon: "storefront", name: "E-Commerce Brands" },
  { icon: "podcasts", name: "Creators & Media" },
  { icon: "account_balance", name: "Fintech & Services" },
  { icon: "rocket_launch", name: "Growth Startups" },
];

export default function LogoStrip() {
  return (
    <section className="w-full bg-background pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <RevealOnScroll variant="fade">
          <p className="text-center text-[12px] lg:text-[14px] font-bold text-on-surface-variant uppercase tracking-widest mb-6">
            Creative Production Solutions Across Modern Sectors
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 mt-6 opacity-75 hover:opacity-100 transition-opacity duration-300">
            {sectors.map((sec, i) => (
              <div
                key={sec.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-surface-container-low border border-outline-variant/30"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="material-symbols-outlined text-primary text-[22px]">
                  {sec.icon}
                </span>
                <span className="text-[14px] lg:text-[16px] font-bold tracking-tight text-on-surface">
                  {sec.name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
