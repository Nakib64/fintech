import RevealOnScroll from "../RevealOnScroll";

const pillars = [
  {
    icon: "assured_workload",
    color: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "US Registered",
    desc: "Delaware File #7491028-DE.",
  },
  {
    icon: "receipt_long",
    color: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "Tax Compliant",
    desc: "Federal EIN: 88-3928174.",
  },
  {
    icon: "security",
    color: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "Safe Payments",
    desc: "Secure Stripe checkout.",
  },
];

const contactDetails = [
  {
    icon: "location_on",
    label: "Office Address:",
    value: "1209 North Orange St, Wilmington, DE 19801",
  },
  {
    icon: "phone_iphone",
    label: "Phone:",
    value: "+1 (302) 555-0198",
    isLink: true,
  },
  {
    icon: "mail",
    label: "Email Support:",
    value: "contracts@vortexdigitalmedia.us",
  },
  {
    icon: "shield_with_heart",
    label: "Currency:",
    value: "USD ($) & major global cards accepted",
  },
];

export default function TrustBlock() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <RevealOnScroll variant="up">
              <h2 className="text-[32px] sm:text-[40px] leading-[1.2] tracking-tight font-bold text-on-surface">
                Registered US Entity. Built on Trust.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={100}>
              <p className="text-[15px] leading-[24px] text-on-surface-variant max-w-xl">
                Registered in Delaware, USA. We provide formal contracts, W-9
                tax forms, and secure Stripe billing for domestic and global
                clients.
              </p>
            </RevealOnScroll>

            {/* 3 Mini Identity Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, i) => (
                <RevealOnScroll key={pillar.title} variant="up" delay={200 + i * 100}>
                  <div className="bg-surface-container-lowest p-5 rounded-[1rem] shadow-[0_4px_20px_-2px_rgba(27,11,56,0.05)] hover:shadow-[0_8px_28px_-4px_rgba(27,11,56,0.1)] transition-shadow duration-300">
                    <div
                      className={`w-10 h-10 rounded-full ${pillar.color} flex items-center justify-center mb-3`}
                    >
                      <span
                        className={`material-symbols-outlined ${pillar.iconColor} text-[20px]`}
                      >
                        {pillar.icon}
                      </span>
                    </div>
                    <span className="text-[14px] leading-[18px] tracking-[0.01em] font-bold text-on-surface block">
                      {pillar.title}
                    </span>
                    <p className="text-[13px] leading-[20px] text-on-surface-variant mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Contact Card */}
          <RevealOnScroll
            variant="right"
            delay={300}
            className="lg:col-span-5"
          >
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_12px_32px_-4px_rgba(27,11,56,0.08)] flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 bg-surface-container-low/50 p-4 rounded-[1rem]">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className="text-[14px] leading-[18px] tracking-[0.01em] font-bold text-on-surface">
                    Vortex Digital Media LLC
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-[13px] leading-[20px]">
                {contactDetails.map((detail) => (
                  <div key={detail.icon} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                      {detail.icon}
                    </span>
                    <div>
                      <span className="font-bold text-on-surface block">
                        {detail.label}
                      </span>
                      {detail.isLink ? (
                        <a
                          className="text-primary hover:underline font-semibold"
                          href="tel:+13025550198"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-on-surface-variant">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-full bg-surface-container text-on-surface text-[14px] leading-[18px] tracking-[0.01em] font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
                <span>View Full US Incorporation Certificate</span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
