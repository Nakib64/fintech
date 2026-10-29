import RevealOnScroll from "../RevealOnScroll";

const logos = [
  { icon: "hub", name: "HubSpot" },
  { icon: null, name: "auping", style: "lowercase tracking-tighter" },
  { icon: "star", name: "Heineken" },
  { icon: "radio_button_checked", name: "EXPOMARK", style: "uppercase" },
  {
    icon: "change_history",
    name: "ASTRA-NET",
    style: "uppercase tracking-wide",
  },
];

export default function LogoStrip() {
  return (
    <section className="w-full bg-background pt-32 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <RevealOnScroll variant="fade">
          <p className="text-center text-[12px] lg:text-3xl leading-[16px] font-bold text-on-surface-variant uppercase tracking-widest mb-6">
            Trusted by leading brands
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="up" delay={200}>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {logos.map((logo, i) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 lg:gap-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {logo.icon && (
                  <span className="material-symbols-outlined text-primary text-[26px] lg:text-2xl">
                    {logo.icon}
                  </span>
                )}
                <span
                  className={`text-[20px] lg:text-2xl font-bold tracking-tight text-on-surface ${logo.style || ""
                    }`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
