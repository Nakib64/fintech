"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/checkout", label: "Checkout" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setDrawerOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  // Only homepage has the full-bleed dark hero at top
  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "h-16 sm:h-16 bg-[#160430]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
        : isHomePage
          ? "h-16 sm:h-20 sm:bg-transparent border-b border-white/5 sm:border-transparent backdrop-blur-sm sm:backdrop-blur-none"
          : "h-16 sm:h-20 bg-[#160430]/90 backdrop-blur-md border-b border-white/10"
        }`}
    >
      <div className="max-w-[1280px] w-full h-full mx-auto px-4 sm:px-6 md:px-margin flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="ASHIVOX LLC"
        >
          <Image
            src="/logo.png"
            alt="ASHIVOX LLC"
            width={160}
            height={40}
            priority
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Inline Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[14px] font-medium transition-colors py-1 ${isActive
                  ? "text-white font-semibold"
                  : "text-white/75 hover:text-white"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center font-bold text-white bg-gradient-to-r from-primary via-primary-container to-[#b060ff] hover:from-[#8b24e6] hover:to-[#a44cf8] active:scale-95 transition-all duration-200 rounded-full shadow-[0_6px_20px_rgba(112,21,226,0.4)] hover:shadow-[0_8px_24px_rgba(112,21,226,0.6)] border border-white/20 px-3.5 sm:px-5 py-1.5 sm:py-2 text-[12px] sm:text-[13px]"
          >
            <span>Purchase</span>
          </Link>

          {/* Mobile Hamburger Toggle (md:hidden) */}
          <button
            ref={buttonRef}
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 flex items-center justify-center text-white border border-white/10 transition-colors cursor-pointer"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? (
              <span className="text-sm font-bold">✕</span>
            ) : (
              <div className="w-4 h-3 flex flex-col justify-between items-center pointer-events-none">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer (Mounted on <header> outside overflow containers for 100% visibility) */}
      {drawerOpen && (
        <div
          ref={drawerRef}
          className="md:hidden absolute top-[calc(100%+8px)] right-4 w-[min(calc(100vw-2rem),280px)] 
          rounded-2xl bg-gradient-to-r from-[#160430]/95 to-[#2d0a74] border border-primary/30 shadow-[0_20px_50px_rgba(18,3,41,0.95)] 
          p-4 flex flex-col gap-2 z-50 animate-scale-in"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-primary-fixed-dim">
            <span>Navigation</span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] transition-colors ${isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-primary-fixed-dim">↗</span>
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10">
            <Link
              href="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white text-[13px] font-bold flex items-center justify-center gap-1 shadow-md"
            >
              <span>Purchase Plan</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
