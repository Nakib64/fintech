import Image from "next/image";
import RevealOnScroll from "../RevealOnScroll";

export default function ProductionShowcase() {
  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Studio Visual */}
          <RevealOnScroll variant="left">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-video md:aspect-[4/3] group border border-outline-variant/30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAluERTFZ_bdZ4p4jcgRjlkrJgZyMHPTF0fJXgVdEX8g6u2j4IqYorUTjD4ZLg2-IjfSlBUgOTLTPdfdPDZkZd8LYxiarleOeU51w_dsp2s-TeZCdO78Of6EW617XNVUHj0PFR83nW9-7-sNN2MPB7oBqifJ8hUbLqw-pPamNqIyHp8fkzZ5TLYhYMjR9Ug79k93JBzy1yo2sbI-aYGAXjXLm3u7B1jCQazxpII9rLN"
                alt="High-end video production editing suite"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180535]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <p className="text-[18px] font-bold">Studio Quality</p>
                  <p className="text-[13px] text-surface-container-high/80">
                    US Production Pipeline
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    verified
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Content */}
          <div className="flex flex-col gap-6 md:pl-6">
            <RevealOnScroll variant="up">
              <span className="text-[12px] uppercase font-bold text-primary tracking-widest block">
                How We Work
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={80}>
              <h3 className="text-[32px] sm:text-[38px] leading-[1.2] font-bold text-on-surface tracking-tight">
                Built for speed and consistency
              </h3>
            </RevealOnScroll>
            <RevealOnScroll variant="up" delay={160}>
              <p className="text-[15px] leading-[24px] text-on-surface-variant">
                Skip freelancer headaches. Get a dedicated creative team with
                reliable 48-hour turnarounds and guaranteed quality.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={240}>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-[1.5rem] bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                  <p className="text-[38px] font-extrabold text-primary leading-none">
                    99.4%
                  </p>
                  <p className="text-[13px] text-on-surface-variant font-medium mt-1">
                    On-Time Delivery
                  </p>
                </div>
                <div className="p-5 rounded-[1.5rem] bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                  <p className="text-[38px] font-extrabold text-primary leading-none">
                    4.8M+
                  </p>
                  <p className="text-[13px] text-on-surface-variant font-medium mt-1">
                    Views Generated
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
