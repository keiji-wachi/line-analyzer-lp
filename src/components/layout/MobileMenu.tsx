"use client";

import { useState } from "react";
import Link from "next/link";

import { navigationItems } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-primary"
      >
        <span className="text-xl">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background/95 backdrop-blur-xl">
          <nav
            id="mobile-navigation"
            aria-label="モバイルナビゲーション"
            className="flex flex-col px-5 py-6"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border/50 py-4 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-button bg-primary px-5 py-3 text-center font-semibold text-background shadow-glow"
            >
              デモを体験
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}