import Image from "next/image";
import RevealOnScroll from "../RevealOnScroll";

export default function CaseStudySection() {
  return (
    <section className="w-full bg-background py-space-xl">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin flex flex-col gap-12">
        {/* Section Header with Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <RevealOnScroll variant="up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-2">
                <span className="text-[12px] uppercase font-bold tracking-wider">
                  Our Work
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={80}>
              <h2 className="text-[32px] sm:text-[40px] leading-[1.2] font-bold text-on-surface tracking-tight">
                Real Results for Growing Brands
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[15px] leading-[24px] text-on-surface-variant max-w-xl">
                See how our studio creates and distributes high-performing media
                for modern companies.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="fade" delay={200}>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-[38px] sm:text-[44px] font-extrabold text-primary leading-none block">
                  250+
                </span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-on-surface-variant">
                  Projects Completed
                </span>
              </div>
              <div className="h-10 w-[1px] bg-outline-variant/50 hidden sm:block" />
              <div className="text-right">
                <span className="text-[38px] sm:text-[44px] font-extrabold text-on-surface leading-none block">
                  99%
                </span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-on-surface-variant">
                  On-Time Sprints
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Bento Grid Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Big 1: Studio */}
          <div className="md:col-span-7">
            <RevealOnScroll variant="up" delay={100} className="h-full">
              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-6 relative">
                  <Image
                    src= "/hero-services.webp"
                    alt="Creative film editing studio workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[11px] uppercase font-bold text-on-surface tracking-wider shadow-sm">
                    Video Studio
                  </div>
                </div>
                <div>
                  <h4 className="text-[22px] sm:text-[24px] font-bold text-on-surface tracking-tight mt-1">
                    Product Videos for Tech Brands
                  </h4>
                  <p className="text-[14px] leading-[22px] text-on-surface-variant mt-2">
                    18 custom explainer videos generating over 2.4M views in the
                    first 60 days of launch.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Bento Column 2 */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Bento Card 2: Social Media Distribution */}
            <RevealOnScroll variant="up" delay={200}>
              <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] rounded-[1.25rem] overflow-hidden mb-4 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJ8XUGEKiqUJ0NgkYM2af1nEWQyAW61Nc3bbxy9DNc_HtAe1Jo0oj_dJskpTztA4-y6jY_FKtXTKCBy8ZW0kQ2iy2IotLmKK5T_SgJWZqk0Qtz5ApmAb0OtXuUsvyDEuUmDG5CfYovmz-_vHxKA6Rs7FFHmdvtnBss2GiLQ2BIGtWyEFrier4O6QynyiSXNlvkJr46WMtF1wR9wJJP243SjIpDcsawn73DRqEh-jP"
                    alt="Digital marketing strategy session"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-on-surface mt-1">
                    Social Media Distribution
                  </h4>
                  <p className="text-[13px] leading-[20px] text-on-surface-variant mt-1">
                    Scheduled posting, cross-platform adaptation, and active
                    community replies.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Metric Highlight Box */}
            <RevealOnScroll variant="up" delay={300}>
              <div className="bg-gradient-to-br from-primary-fixed to-secondary-fixed p-6 rounded-[2rem] flex items-center justify-between text-on-primary-fixed shadow-sm">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider block opacity-90">
                    Fast Delivery
                  </span>
                  <h4 className="text-[32px] font-bold mt-1 tracking-tight">
                    48 Hours
                  </h4>
                  <p className="text-[13px] opacity-80 mt-1">
                    Average draft turnaround across all packages
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest/40 backdrop-blur-md flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[32px]">
                    bolt
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
