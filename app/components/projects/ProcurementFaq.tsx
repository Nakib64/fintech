import RevealOnScroll from "../RevealOnScroll";

const faqs = [
  {
    icon: "verified",
    question: "Who owns the work and files?",
    answer:
      "You own 100% of all final deliverables, project files, footage, and commercial copyrights once approved.",
  },
  {
    icon: "credit_card",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, Apple Pay, Google Pay, US ACH transfers, and wires through Stripe.",
  },
  {
    icon: "speed",
    question: "How fast is delivery?",
    answer:
      "First drafts are returned within 48 business hours. Edits and revisions submitted during business hours usually turn around same-day.",
  },
  {
    icon: "description",
    question: "Can we sign a contract or NDA?",
    answer:
      "Yes. We provide bilateral NDAs and master service agreements governed by New Mexico, US corporate law.",
  },
];

export default function ProcurementFaq() {
  return (
    <section className="relative w-full bg-surface-container-lowest py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll variant="up">
            <span className="text-[12px] uppercase font-bold text-primary tracking-widest block">
              FAQ
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="up" delay={80}>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-on-surface tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="up" delay={160}>
            <p className="text-[15px] text-on-surface-variant mt-2 leading-relaxed">
              Quick answers about ownership, payments, turnarounds, and
              contracts.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <RevealOnScroll key={faq.question} variant="up" delay={idx * 100}>
              <div className="p-7 rounded-[1.75rem] bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 transition-colors h-full">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      {faq.icon}
                    </span>
                  </div>
                  <h3 className="text-[17px] text-on-surface font-bold">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-[14px] leading-[22px] text-on-surface-variant">
                  {faq.answer}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
