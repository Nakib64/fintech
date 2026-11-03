import Link from "next/link";
import RevealOnScroll from "../RevealOnScroll";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const pillars = [
  {
    icon: "assured_workload",
    color: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "US Registered",
    desc: "State of New Mexico, USA",
  },
  {
    icon: "receipt_long",
    color: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "Commercial Entity",
    desc: "Registered Agents Inc.",
  },
  {
    icon: "security",
    color: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "Safe Payments",
    desc: "Stripe & Wise rails",
  },
];

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: "location_on",
    label: "Registered Office Address",
    value: "1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA",
  },
  {
    icon: "mail",
    label: "Direct Email Support",
    value: "support@ashivox.net",
    href: "mailto:support@ashivox.net",
  },
  {
    icon: "call",
    label: "Business Telephone",
    value: "+1 (505) 528-9302",
    href: "tel:+15055289302",
  },
  {
    icon: "badge",
    label: "Entity Registration ID",
    value: "0008132694 (State of New Mexico)",
  },
  {
    icon: "shield_with_heart",
    label: "Commercial Billing",
    value: "USD ($) via Stripe & Wire Transfers",
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
                Registered in New Mexico, USA. We provide formal commercial contracts, W-9
                tax forms, and secure Stripe billing for domestic and global
                clients.
              </p>
            </RevealOnScroll>

            {/* 3 Mini Identity Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, i) => (
                <RevealOnScroll key={pillar.title} variant="up" delay={200 + i * 100}>
                  <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-[0_4px_20px_-2px_rgba(27,11,56,0.05)] hover:shadow-[0_8px_28px_-4px_rgba(27,11,56,0.1)] transition-shadow duration-300">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${pillar.color} flex items-center justify-center mb-3`}
                    >
                      <span
                        className={`material-symbols-outlined ${pillar.iconColor} text-[18px] sm:text-[20px]`}
                      >
                        {pillar.icon}
                      </span>
                    </div>
                    <span className="text-[13px] sm:text-[14px] leading-[18px] tracking-[0.01em] font-bold text-on-surface block">
                      {pillar.title}
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-on-surface-variant mt-1 block">
                      {pillar.desc}
                    </span>
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
            <div className="bg-surface-container-lowest p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-outline-variant/30 shadow-[0_16px_40px_-8px_rgba(27,11,56,0.08)] flex flex-col gap-4 sm:gap-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                      verified
                    </span>
                  </div>
                  <div>
                    <span className="text-[14px] sm:text-[15px] font-bold text-on-surface block leading-tight">
                      ASHIVOX LLC
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-on-surface-variant font-medium">
                      US Registered Commercial Entity
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3 text-[12px] sm:text-[13px] leading-[18px] sm:leading-[19px]">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-2.5 sm:gap-3 group">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-surface-container-low flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                        {detail.icon}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-outline font-semibold block">
                        {detail.label}
                      </span>
                      {detail.href ? (
                        <a
                          className="text-on-surface font-semibold hover:text-primary transition-colors inline-block mt-0.5 break-all sm:break-normal"
                          href={detail.href}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-on-surface font-medium block mt-0.5 break-words">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-2">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-outline font-semibold">
                  Official Social Channels
                </span>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <a
                    href="https://www.facebook.com/share/1JLg3aSPgV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg sm:rounded-xl bg-surface-container-low hover:bg-[#1877F2]/10 hover:text-[#1877F2] text-on-surface border border-outline-variant/25 hover:border-[#1877F2]/30 transition-all font-semibold text-[11px] sm:text-[12px] group"
                    aria-label="ASHIVOX on Facebook"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#1877F2] transition-transform group-hover:scale-110 shrink-0" />
                    <span>Facebook</span>
                    <span className="text-[10px] text-outline group-hover:text-[#1877F2]">↗</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ashiv_ox?obrf=MWNvam9scmo3a3JwbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg sm:rounded-xl bg-surface-container-low hover:bg-[#E4405F]/10 hover:text-[#E4405F] text-on-surface border border-outline-variant/25 hover:border-[#E4405F]/30 transition-all font-semibold text-[11px] sm:text-[12px] group"
                    aria-label="ASHIVOX on Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#E4405F] transition-transform group-hover:scale-110 shrink-0" />
                    <span>Instagram</span>
                    <span className="text-[10px] text-outline group-hover:text-[#E4405F]">↗</span>
                  </a>
                </div>
              </div>

              {/* Verification Link */}
              <Link
                href="/about"
                className="w-full py-2.5 rounded-lg sm:rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-[12px] sm:text-[13px] font-semibold transition-colors flex items-center justify-center gap-2 border border-outline-variant/25"
              >
                <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary">
                  verified_user
                </span>
                <span>View Entity Governance Details</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
