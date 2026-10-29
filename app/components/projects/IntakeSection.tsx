"use client";

import { useState, type FormEvent } from "react";
import RevealOnScroll from "../RevealOnScroll";

export default function IntakeSection() {
  const [service, setService] = useState("video");
  const [budget, setBudget] = useState("1.5k-3k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [nda, setNda] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className="relative w-full bg-surface-container-lowest py-16 md:py-24"
      id="discovery-form"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Commercial Office & Institutional Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <RevealOnScroll variant="left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider mb-3">
                  <span className="material-symbols-outlined text-[14px]">
                    shield
                  </span>
                  <span>Direct Contact</span>
                </div>
                <h2 className="text-[32px] sm:text-[38px] font-bold text-on-surface tracking-tight">
                  Our Office
                </h2>
                <p className="text-[15px] leading-[24px] text-on-surface-variant mt-2">
                  Based in Wilmington, Delaware. Reach us anytime by phone, email, or Slack.
                </p>
              </div>
            </RevealOnScroll>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <RevealOnScroll variant="left" delay={80}>
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/30 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase text-outline font-semibold tracking-wider">
                      Registered Commercial Office
                    </span>
                    <span className="text-[16px] text-on-surface font-semibold mt-0.5">
                      1201 N Orange St, Suite 700
                    </span>
                    <span className="text-[13px] text-on-surface-variant">
                      Wilmington, DE 19801, United States
                    </span>
                    <span className="text-[12px] text-tertiary font-semibold mt-2 inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Registered Agent &amp; Corp Headquarters
                    </span>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant="left" delay={160}>
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/30 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      call
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase text-outline font-semibold tracking-wider">
                      Direct Commercial Hotline
                    </span>
                    <a
                      className="text-[18px] text-primary font-bold hover:underline mt-0.5"
                      href="tel:+18005829104"
                    >
                      +1 (800) 582-9104
                    </a>
                    <span className="text-[13px] text-on-surface-variant">
                      Mon – Fri, 8:00 AM – 7:00 PM EST Priority Dispatch
                    </span>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant="left" delay={240}>
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/30 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      alternate_email
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase text-outline font-semibold tracking-wider">
                      Enterprise Inquiries &amp; RFP
                    </span>
                    <a
                      className="text-[18px] text-primary font-bold hover:underline mt-0.5"
                      href="mailto:ops@vortexdigitalmedia.us"
                    >
                      ops@vortexdigitalmedia.us
                    </a>
                    <span className="text-[13px] text-on-surface-variant">
                      Reviewed within 2 business hours by Managing Partner
                    </span>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll variant="left" delay={320}>
                <div className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/30 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      forum
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase text-outline font-semibold tracking-wider">
                      Commercial Slack Studio
                    </span>
                    <span className="text-[16px] text-on-surface font-semibold mt-0.5">
                      Real-time Dedicated Production Channel
                    </span>
                    <span className="text-[13px] text-on-surface-variant">
                      9:00 – 18:00 EST dedicated channel invite granted upon
                      sprint qualification.
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Fast Institutional SLA Cards */}
            <RevealOnScroll variant="up" delay={360}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/20 text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                    timer
                  </span>
                  <span className="text-[14px] font-bold text-on-surface">
                    &lt; 2hr
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Technical Response
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/20 text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                    gavel
                  </span>
                  <span className="text-[14px] font-bold text-on-surface">
                    Mutual NDA
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    First Workflow
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/20 text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                    badge
                  </span>
                  <span className="text-[14px] font-bold text-on-surface">
                    Direct Access
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Executive Producer
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Corporate Verification Seal */}
            <RevealOnScroll variant="up" delay={400}>
              <div className="p-5 rounded-[1.5rem] bg-[#180535] text-white flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-fixed-dim">
                    <span className="material-symbols-outlined text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">
                      Delaware Division of Corporations
                    </p>
                    <p className="text-[12px] text-secondary-fixed-dim">
                      Entity #742910-US • Good Standing Verified
                    </p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider">
                  Active
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="right" delay={150}>
              <div className="rounded-[2rem] bg-surface-container-lowest border border-outline-variant/30 shadow-[0_16px_40px_rgba(27,11,56,0.06)] p-6 sm:p-12 relative overflow-hidden">
                <div className="border-b border-outline-variant/30 pb-6 mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="text-[12px] uppercase tracking-wider text-primary font-bold">
                        Quick Intake
                      </span>
                      <h3 className="text-[26px] font-bold text-on-surface mt-1">
                        Tell Us About Your Project
                      </h3>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[12px] font-semibold">
                      Takes 2 Minutes
                    </span>
                  </div>
                  <p className="text-[14px] text-on-surface-variant mt-2 leading-relaxed">
                    Tell us what you need. We will review your goals and reply within 2 hours with recommendations.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-[1.5rem] bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-scale-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-[36px]">
                        check_circle
                      </span>
                    </div>
                    <h4 className="text-[22px] font-bold text-emerald-900">
                      Discovery Request Confirmed!
                    </h4>
                    <p className="text-[14px] text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{name}</strong>. Your parameters have been
                      dispatched directly to our Lead Executive Producer. A formal
                      statement of work and calendar invitation will arrive at{" "}
                      <strong>{email}</strong> within 2 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-[13px] font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      Submit Another Scope
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-[14px] text-on-surface font-semibold mb-2"
                          htmlFor="client-name"
                        >
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-3.5 text-outline text-[18px]">
                            person
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface-container-lowest focus:outline-none text-[14px] text-on-surface transition-all placeholder:text-outline/70"
                            id="client-name"
                            placeholder="Alexander Wright"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-[14px] text-on-surface font-semibold mb-2"
                          htmlFor="client-email"
                        >
                          Corporate Email <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-3.5 text-outline text-[18px]">
                            mail
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface-container-lowest focus:outline-none text-[14px] text-on-surface transition-all placeholder:text-outline/70"
                            id="client-email"
                            placeholder="founder@company.com"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-[14px] text-on-surface font-semibold mb-2"
                          htmlFor="client-company"
                        >
                          Company / Entity Name{" "}
                          <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-3.5 text-outline text-[18px]">
                            business
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface-container-lowest focus:outline-none text-[14px] text-on-surface transition-all placeholder:text-outline/70"
                            id="client-company"
                            placeholder="Acme Technologies Inc."
                            required
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-[14px] text-on-surface font-semibold mb-2"
                          htmlFor="client-phone"
                        >
                          Direct Phone (Optional)
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-3.5 text-outline text-[18px]">
                            phone
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface-container-lowest focus:outline-none text-[14px] text-on-surface transition-all placeholder:text-outline/70"
                            id="client-phone"
                            placeholder="+1 (555) 019-2834"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Primary Service Selection */}
                    <div>
                      <label className="block text-[14px] text-on-surface font-semibold mb-2.5">
                        Primary Service Needed{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          {
                            id: "video",
                            title: "Video Editing & VFX",
                            price: "$1,499 / month",
                          },
                          {
                            id: "writing",
                            title: "Content Writing & Scripting",
                            price: "$999 / month",
                          },
                          {
                            id: "social",
                            title: "Social Media Management",
                            price: "$1,899 / month",
                          },
                          {
                            id: "custom",
                            title: "Custom Multi-Pod Package",
                            price: "Bespoke SLA Sizing",
                          },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${service === opt.id
                                ? "border-primary bg-primary/5 shadow-sm"
                                : "border-outline-variant/40 hover:border-primary/50 bg-surface-container-low"
                              }`}
                          >
                            <input
                              checked={service === opt.id}
                              onChange={() => setService(opt.id)}
                              className="accent-primary w-4 h-4 cursor-pointer"
                              name="service"
                              type="radio"
                              value={opt.id}
                            />
                            <div className="flex flex-col">
                              <span className="text-[14px] text-on-surface font-semibold">
                                {opt.title}
                              </span>
                              <span className="text-[12px] text-primary font-bold">
                                {opt.price}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Monthly Budget Range */}
                    <div>
                      <label className="block text-[14px] text-on-surface font-semibold mb-2.5">
                        Estimated Monthly Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          { id: "1.5k-3k", label: "$1,500 – $3,000 / mo" },
                          { id: "3k-6k", label: "$3,000 – $6,000 / mo" },
                          { id: "6k-12k", label: "$6,000 – $12,000 / mo" },
                          { id: "enterprise", label: "$12,000+ Enterprise Tier" },
                        ].map((b) => (
                          <label key={b.id} className="cursor-pointer">
                            <input
                              checked={budget === b.id}
                              onChange={() => setBudget(b.id)}
                              className="sr-only"
                              name="budget"
                              type="radio"
                              value={b.id}
                            />
                            <span
                              className={`inline-block px-4 py-2 rounded-full text-[13px] font-semibold border transition-all ${budget === b.id
                                  ? "bg-primary text-white border-primary shadow-sm"
                                  : "bg-surface-container-low text-on-surface-variant border-outline-variant/40 hover:border-outline"
                                }`}
                            >
                              {b.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Project Timeline & Scope Details */}
                    <div>
                      <label
                        className="block text-[14px] text-on-surface font-semibold mb-2"
                        htmlFor="project-details"
                      >
                        Project Timeline &amp; Strategic Deliverables{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <textarea
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface-container-lowest focus:outline-none text-[14px] text-on-surface transition-all placeholder:text-outline/70 min-h-[110px]"
                        id="project-details"
                        placeholder="Briefly outline your goals, sprint timeframe, key visual styles, target distribution channels, or existing production bottlenecks..."
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                      />
                    </div>

                    {/* Checkbox: Mutual NDA */}
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
                      <input
                        checked={nda}
                        onChange={(e) => setNda(e.target.checked)}
                        className="accent-primary w-4 h-4 mt-1 rounded cursor-pointer"
                        id="mutual-nda"
                        type="checkbox"
                      />
                      <label
                        className="text-[13px] text-on-surface-variant cursor-pointer select-none"
                        htmlFor="mutual-nda"
                      >
                        <span className="font-semibold text-on-surface">
                          Request mutual Delaware NDA before sprint kickoff.
                        </span>{" "}
                        Our counsel will counter-sign and issue bilateral
                        confidentiality documents within 60 minutes of submission.
                      </label>
                    </div>

                    <button
                      className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary text-[16px] font-bold shadow-[0_8px_28px_rgba(112,21,226,0.38)] hover:shadow-[0_12px_36px_rgba(112,21,226,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                      type="submit"
                    >
                      <span>Send Request</span>
                      <span className="text-lg">↗</span>
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-outline text-[12px]">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600">
                          lock
                        </span>
                        256-bit Encrypted
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          schedule
                        </span>
                        Under 2-Hour Response
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          check_circle
                        </span>
                        No Long-Term Lock-in
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
