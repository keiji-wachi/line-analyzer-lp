// src/components/layout/Header.tsx

import Link from "next/link";

import Button from "@/components/common/Button";
import Container from "@/components/layout/Container";
import { navigationItems } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

import {LINKS} from "@/constants/links"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="relative">
        <div className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-background shadow-glow">
              LA
            </span>

            <span className="text-lg text-text-primary">
              LineAnalyzer
            </span>
          </Link>

          <nav
            aria-label="メインナビゲーション"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={LINKS.demo} external>
              デモを体験
            </Button>
          </div>

          <MobileMenu />

        </div>
      </Container>
    </header>
  );
}