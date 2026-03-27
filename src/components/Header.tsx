"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "사업영역", href: "#services" },
  { label: "실적", href: "#track-record" },
  { label: "파트너", href: "#partners" },
  { label: "대표소개", href: "#ceo" },
  { label: "문의", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/60 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo: coral-pink gradient icon + Playfair text */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e85d3a] to-[#f8e8ee]">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-2.04a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364L4.25 8.81" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-playfair)] text-2xl italic text-zinc-800">
            MoaBridge
          </span>
        </a>

        {/* Right side: certification badges + nav */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Certification badges */}
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#e85d3a]/30 bg-[#f8e8ee]/50 px-3 py-1 text-[11px] font-semibold text-[#e85d3a]">
              여성기업
            </span>
            <span className="rounded-full border border-[#2a4494]/30 bg-[#2a4494]/10 px-3 py-1 text-[11px] font-semibold text-[#2a4494]">
              중소기업
            </span>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-zinc-300" />

          {/* Nav links */}
          <nav className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-[#e85d3a]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-[#e85d3a] px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-[#d4522f] hover:shadow-lg"
          >
            상담하기
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="메뉴 열기"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-zinc-200/60 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {/* Mobile badges */}
            <div className="flex items-center gap-2 pb-2">
              <span className="rounded-full border border-[#e85d3a]/30 bg-[#f8e8ee]/50 px-3 py-1 text-[11px] font-semibold text-[#e85d3a]">
                여성기업
              </span>
              <span className="rounded-full border border-[#2a4494]/30 bg-[#2a4494]/10 px-3 py-1 text-[11px] font-semibold text-[#e85d3a]">
                중소기업
              </span>
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#e85d3a]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#e85d3a] px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              상담하기
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
