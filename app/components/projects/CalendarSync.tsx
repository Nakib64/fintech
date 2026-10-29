"use client";

import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

export default function CalendarSync() {
  const [selectedSlot, setSelectedSlot] = useState("04:30 PM");
  const [booked, setBooked] = useState(false);

  const slots = [
    { time: "11:30 AM", day: "Today" },
    { time: "02:00 PM", day: "Today" },
    { time: "04:30 PM", day: "Today", popular: true },
    { time: "10:00 AM", day: "Tomorrow" },
    { time: "01:30 PM", day: "Tomorrow" },
    { time: "03:30 PM", day: "Tomorrow" },
  ];

  return (
    <section className="relative w-full bg-surface-container-low py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-margin">
        <RevealOnScroll variant="scale">
          <div className="rounded-[2.5rem] bg-surface-container-lowest border border-outline-variant/30 shadow-[0_8px_32px_rgba(27,11,56,0.06)] p-8 md:p-14 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_month
                  </span>
                  <span>Book A Call</span>
                </div>
                <h2 className="text-[30px] sm:text-[38px] font-bold text-on-surface tracking-tight leading-[1.2]">
                  Want to talk directly?
                </h2>
                <p className="text-[15px] text-on-surface-variant leading-relaxed">
                  Book a quick 20-min call. We will discuss your goals, answer questions, and show you our workflow.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        videocam
                      </span>
                    </div>
                    <div>
                      <p className="text-[14px] text-on-surface font-semibold">
                        Google Meet / Zoom
                      </p>
                      <p className="text-[12px] text-on-surface-variant">
                        Instant calendar invite + link
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        person_check
                      </span>
                    </div>
                    <div>
                      <p className="text-[14px] text-on-surface font-semibold">
                        Lead Producer Direct
                      </p>
                      <p className="text-[12px] text-on-surface-variant">
                        No sales representatives
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Slot Previews */}
              <div className="lg:col-span-6 flex flex-col justify-center bg-surface-container-low/70 rounded-[2rem] p-6 md:p-8 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase text-outline font-semibold tracking-wider">
                    Next Available Slots (EST)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    4 Slots Today
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {slots.map((s) => (
                    <button
                      key={s.time + s.day}
                      type="button"
                      onClick={() => setSelectedSlot(s.time)}
                      className={`p-3 rounded-xl text-center transition-all cursor-pointer ${selectedSlot === s.time
                          ? "bg-primary text-white border border-primary shadow-sm"
                          : "bg-surface-container-lowest border border-outline-variant/30 text-on-surface hover:border-primary"
                        }`}
                    >
                      <span className="text-[14px] font-bold block">
                        {s.time}
                      </span>
                      <span
                        className={`text-[11px] ${selectedSlot === s.time
                            ? "text-white/80"
                            : "text-on-surface-variant"
                          }`}
                      >
                        {s.popular ? "Popular" : s.day}
                      </span>
                    </button>
                  ))}
                </div>

                {booked ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 text-[13px] font-semibold animate-fade-in">
                    ✓ Slot {selectedSlot} Reserved! Calendar invite dispatched.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setBooked(true)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-on-primary text-[14px] font-bold shadow-md hover:shadow-lg hover:bg-primary-container transition-all cursor-pointer"
                  >
                    <span>Reserve {selectedSlot} Slot</span>
                    <span className="text-base">↗</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
