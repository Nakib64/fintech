"use client";

import { useEffect } from "react";

interface LottieDoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  orderId?: string;
  email?: string;
  message?: string;
  buttonText?: string;
}

export default function LottieDoneModal({
  isOpen,
  onClose,
  title = "Confirmation Sent!",
  subtitle,
  orderId,
  email,
  message,
  buttonText = "Got it",
}: LottieDoneModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[360px] sm:max-w-[420px] rounded-[2rem] bg-white text-neutral-900 p-7 text-center flex flex-col items-center justify-center border border-neutral-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden animate-scale-in cursor-default"
      >
        {/* Soft Ambient Emerald Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-100/70 rounded-full blur-2xl pointer-events-none" />

        {/* Close (X) button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 flex items-center justify-center text-xs transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* ── Lottie Done Animated Checkmark SVG (Light Theme) ── */}
        <div className="relative w-24 h-24 flex items-center justify-center my-1">
          {/* Radiating Sparkle Bursts */}
          <div className="absolute inset-0 rounded-full border border-emerald-300/60 animate-[lottie-burst_1s_ease-out_forwards] pointer-events-none" />

          {/* Spark Particles */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[lottie-burst_0.9s_ease-out_forwards]" />
          <div className="absolute top-4 -right-1 w-1.5 h-1.5 bg-teal-400 rounded-full animate-[lottie-burst_1s_ease-out_forwards]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-[lottie-burst_0.9s_ease-out_forwards]" />
          <div className="absolute top-4 -left-1 w-1.5 h-1.5 bg-teal-400 rounded-full animate-[lottie-burst_1s_ease-out_forwards]" />

          {/* Animated SVG */}
          <svg
            className="w-20 h-20 relative z-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Expanding Circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-emerald-200"
              strokeWidth="4"
              strokeDasharray="276"
              strokeDashoffset="276"
              style={{
                animation: "lottie-circle 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            />

            {/* Glowing Gradient Circle Background */}
            <circle
              cx="50"
              cy="50"
              r="40"
              className="fill-emerald-500"
              style={{
                animation: "lottie-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
                filter: "drop-shadow(0 4px 14px rgba(16, 185, 129, 0.4))",
              }}
            />

            {/* Drawing Checkmark Path */}
            <path
              d="M30 51.5L43.5 65L70 37"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset="60"
              style={{
                animation: "lottie-check 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards",
              }}
            />
          </svg>
        </div>

        {/* Clean Minimal Typography */}
        <h3 className="text-[22px] font-black text-neutral-900 mt-2 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[13px] text-neutral-600 mt-0.5 font-medium">
            {subtitle}
          </p>
        )}

        {orderId && (
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-[11px] font-bold text-neutral-700 tracking-wider">
            <span>Reference:</span>
            <span className="font-mono text-purple-700">{orderId}</span>
          </div>
        )}

        {email && (
          <div className="mt-3 text-[13px] text-neutral-700 bg-emerald-50 border border-emerald-100 rounded-xl p-3 w-full text-left">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-800 text-[12px]">
              <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
              <span>Confirmation Dispatched</span>
            </div>
            <p className="text-[12px] text-emerald-950 mt-1">
              We&apos;ve sent your order request details to <strong>{email}</strong>.
            </p>
          </div>
        )}

        {message && (
          <p className="text-[13px] text-neutral-600 mt-3 leading-relaxed">
            {message}
          </p>
        )}

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[14px] font-extrabold shadow-[0_4px_16px_rgba(5,150,105,0.3)] active:scale-95 transition-all cursor-pointer"
        >
          {buttonText}
        </button>
      </div>

      <style jsx global>{`
        @keyframes lottie-circle {
          from {
            stroke-dashoffset: 276;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes lottie-pop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes lottie-check {
          from {
            stroke-dashoffset: 60;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes lottie-burst {
          0% {
            transform: scale(0.6);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
