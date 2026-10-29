"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "scale"
  | "fade";

type ElementTag =
  | "div"
  | "span"
  | "p"
  | "section"
  | "article"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "ul"
  | "li"
  | "header"
  | "footer";

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  threshold?: number;
  as?: ElementTag;
}

const variantClassMap: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

export default function RevealOnScroll({
  children,
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const TagComponent = Tag as any;

  return (
    <TagComponent
      ref={ref}
      className={`${variantClassMap[variant]} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </TagComponent>
  );
}
