import React from "react";

export function StripeLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 25"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stripe"
    >
      <path
        fill="#635BFF"
        fillRule="evenodd"
        d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
      />
    </svg>
  );
}

export function VisaLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Visa"
    >
      <path
        d="M14.07 11.64h-2.31l1.45-8.94h2.31l-1.45 8.94zm9.62-8.74c-.46-.18-1.19-.38-2.09-.38-2.3 0-3.92 1.22-3.94 2.98-.02 1.29 1.16 2.01 2.04 2.44.91.44 1.21.73 1.21 1.12 0 .6-.73.89-1.4.89-.94 0-1.44-.14-2.2-.48l-.31-.14-.33 2.06c.56.26 1.59.48 2.66.49 2.44 0 4.04-1.21 4.06-3.08.01-1.02-.61-1.8-1.95-2.45-.81-.41-1.31-.68-1.31-1.09.01-.37.42-.77 1.32-.77.75 0 1.3.16 1.72.34l.21.1.37-2.03zm7.18 0h-1.79c-.55 0-.97.16-1.21.75l-3.45 8.23h2.43l.48-1.34h2.97l.28 1.34h2.15l-1.86-8.98zm-2.5 5.62l.93-2.56c-.01.01.19-.52.31-.86l.16.77.54 2.65h-1.94zm-17.13-5.62l-2.27 6.09-.24-1.25c-.42-1.44-1.74-2.99-3.21-3.77l2.08 7.87h2.45l3.65-8.94h-2.46z"
        fill="#1434CB"
      />
      <path
        d="M8.22 2.7H4.55L4.5 2.91c2.86.73 4.75 2.49 5.53 4.61l-.8-4.05c-.14-.56-.53-.75-1.01-.77z"
        fill="#F7B600"
      />
    </svg>
  );
}

export function MastercardLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mastercard"
    >
      <circle cx="14" cy="12" r="10" fill="#EB001B" />
      <circle cx="24" cy="12" r="10" fill="#F79E1B" />
      <path
        d="M19 4.88a9.96 9.96 0 0 1 3.8 7.12A9.96 9.96 0 0 1 19 19.12 9.96 9.96 0 0 1 15.2 12 9.96 9.96 0 0 1 19 4.88z"
        fill="#FF5F00"
      />
    </svg>
  );
}

export function AmexLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="American Express"
    >
      <rect width="42" height="24" rx="3.5" fill="#006FCF" />
      {/* A */}
      <path d="M5.5 16.5L8.5 7.5H10.5L13.5 16.5H11.5L10.8 14.5H8.2L7.5 16.5H5.5ZM8.7 13H10.3L9.5 10L8.7 13Z" fill="white" />
      {/* M */}
      <path d="M14.5 16.5V7.5H16.8L18.8 12.8L20.8 7.5H23.1V16.5H21.2V10.8L19.5 15.2H18.1L16.4 10.8V16.5H14.5Z" fill="white" />
      {/* E */}
      <path d="M24.5 16.5V7.5H29.5V9.3H26.5V11.1H29V12.9H26.5V14.7H29.5V16.5H24.5Z" fill="white" />
      {/* X */}
      <path d="M30.5 16.5L32.8 12L30.6 7.5H32.8L33.9 10L35 7.5H37.2L35 12L37.3 16.5H35.1L33.9 14L32.7 16.5H30.5Z" fill="white" />
    </svg>
  );
}

export function ApplePayLogo({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Apple Pay"
    >
      {/* Apple Icon */}
      <path d="M6.3 3.3c.4-.5.7-1.3.6-2.1-.7 0-1.6.5-2.1 1.1-.4.5-.8 1.3-.7 2.1.8.1 1.7-.4 2.2-1.1zM6.9 4.7c-1.2-.1-2.2.7-2.8.7-.6 0-1.5-.7-2.4-.6-1.3.1-2.4.8-3 2-1.3 2.2-.3 5.4 1 7.1.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6 1 0 1.7-.9 2.3-1.8.7-1 1-2.1 1-2.1-.1 0-2-.8-2-3 0-1.9 1.5-2.8 1.6-2.9-1-1.3-2.3-1.4-2.8-1.4z" />
      {/* Pay text */}
      <path d="M16 1.5h3.4c2.2 0 3.7 1.4 3.7 3.5 0 2.2-1.5 3.6-3.7 3.6h-1.7v6.6H16V1.5zm3.2 5.3c1.2 0 2-.7 2-1.8 0-1.1-.8-1.8-2-1.8h-1.5v3.6h1.5zM24 10.5c0-1.7 1.3-2.7 3.6-2.9l2-.1v-.8c0-.9-.7-1.5-1.9-1.5-1.1 0-1.8.5-2 1.3h-1.6c.2-1.6 1.6-2.8 3.7-2.8 2.2 0 3.5 1.1 3.5 3.1v8.4H30v-1.6c-.7 1.1-1.9 1.8-3.3 1.8-2 0-3.3-1.3-3.3-3.1v-1.8zm5.6 1.3v-1l-1.8.1c-1.4.1-2.1.7-2.1 1.6 0 .9.8 1.5 1.9 1.5 1.2 0 2-.9 2-2.2zM33.4 6.1h1.8l2.9 8.2 2.9-8.2h1.8L38.8 17c-.7 1.9-1.6 2.6-3.3 2.6-.5 0-1.1-.1-1.4-.2v-1.5c.3.1.7.1 1 .1 1 0 1.5-.4 1.9-1.5l.3-.8-4.9-9.6z" />
    </svg>
  );
}

export function GooglePayLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 46 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google Pay"
    >
      {/* G Logo */}
      <path d="M9.1 9.7v-2.3H4.8v2.3h2.5c-.2 1.3-1.3 2.2-2.5 2.2-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c.7 0 1.4.3 1.9.8l1.7-1.7C9.3 4.4 8.2 3.8 6.9 3.8 4 3.8 1.7 6.1 1.7 9.1s2.3 5.3 5.2 5.3c3 0 5-2.1 5-5.1 0-.4 0-.8-.1-1.1H9.1v1.5h-.1z" fill="#4285F4" />
      <path d="M4.8 11.9c-1.5 0-2.8-1.3-2.8-2.8 0-.4.1-.7.2-1.1L.4 6.7C.1 7.4 0 8.2 0 9.1c0 2.9 2.3 5.3 5.2 5.3 1.4 0 2.6-.5 3.5-1.4l-1.7-1.3c-.6.5-1.3.8-2.2.8z" fill="#34A853" />
      <path d="M.4 6.7l1.8 1.3C2.4 7.2 3.5 6.4 4.8 6.4c.7 0 1.4.3 1.9.8l1.7-1.7C7.4 4.5 6.2 3.8 4.8 3.8 2.9 3.8 1.3 4.9.4 6.7z" fill="#EA4335" />
      <path d="M6.9 3.8c1.3 0 2.5.5 3.4 1.4l1.7-1.7C10.7 2.3 8.9 1.5 6.9 1.5 4 1.5 1.6 3.2.4 5.7l1.8 1.4C2.7 5 4.6 3.8 6.9 3.8z" fill="#FBBC05" />
      {/* Pay Text */}
      <path d="M19.7 5.7h-3.9v8.4h1.7v-2.9h2.2c1.8 0 3.2-1.2 3.2-2.7 0-1.6-1.4-2.8-3.2-2.8zm0 4.1h-2.2V7.1h2.2c1 0 1.6.6 1.6 1.3 0 .8-.6 1.4-1.6 1.4zM27 8.3c-1.3 0-2.2 1-2.2 2.3 0 1.3.9 2.3 2.2 2.3.7 0 1.2-.3 1.6-.7v.6h1.5V8.5h-1.5v.6c-.4-.5-1-.8-1.6-.8zm.3 3.3c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1 0 .6-.5 1.1-1.2 1.1zM34.2 8.5l-2 5h-1.6l.8-1.8-2.2-4.9h1.7l1.3 3.3 1.3-3.3h1.7z" fill="#5F6368" />
    </svg>
  );
}

export function WiseLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wise"
      fill="currentColor"
    >
      <path d="M6.488 7.469 0 15.05h11.585l1.301-3.576H7.922l3.033-3.507.01-.092L8.993 4.48h8.873l-6.878 18.925h4.706L24 .595H2.543l3.945 6.874Z" />
    </svg>
  );
}

export function AchWireLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold tracking-wider text-[11px] ${className}`}>
      <span className="material-symbols-outlined text-[15px]">account_balance</span>
      <span>ACH / Wire</span>
    </div>
  );
}

/**
 * Standard White Card Pill Tile for displaying payment logos crisply on dark or light backgrounds.
 */
export function PaymentBadge({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      title={title}
      className={`h-7 px-2.5 rounded-md bg-white border border-black/10 shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 shrink-0 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Pre-assembled set of accepted card & digital payment badges
 */
export function AcceptedPaymentMethods({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 sm:gap-2 ${className}`}>
      <PaymentBadge title="Visa">
        <VisaLogo className="h-3 sm:h-3.5 w-auto" />
      </PaymentBadge>
      <PaymentBadge title="Mastercard">
        <MastercardLogo className="h-4 sm:h-4.5 w-auto" />
      </PaymentBadge>
      <PaymentBadge title="American Express">
        <AmexLogo className="h-3.5 sm:h-4 w-auto" />
      </PaymentBadge>
      <PaymentBadge title="Stripe">
        <StripeLogo className="h-3.5 sm:h-4 w-auto" />
      </PaymentBadge>
      <PaymentBadge title="Apple Pay">
        <ApplePayLogo className="h-3 sm:h-3.5 w-auto text-black" />
      </PaymentBadge>
      <PaymentBadge title="Google Pay">
        <GooglePayLogo className="h-3.5 sm:h-4 w-auto" />
      </PaymentBadge>
      <PaymentBadge title="Wise">
        <div className="flex items-center gap-1 text-[#163300]">
          <WiseLogo className="h-3.5 w-auto text-[#2ed06e]" />
          <span className="font-extrabold text-[10px] tracking-tight text-[#163300]">WISE</span>
        </div>
      </PaymentBadge>
    </div>
  );
}

