import Link from "next/link";
import { SiGithub } from "react-icons/si";

import Container from "@/components/layout/Container";
import { navigationItems } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <Container>
        <div className="py-12 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-background">
                  LA
                </span>

                <span className="text-lg font-bold text-text-primary">
                  LineAnalyzer
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-7 text-text-secondary">
                製造業のデータを、
                <br />
                より良い未来へ。
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="フッターナビゲーション"
              className="flex flex-wrap gap-x-8 gap-y-4"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* External Links */}
            <div>
              <a
                href="https://github.com/keiji-wachi/line-analyzer-lp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                <SiGithub size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-border/60 pt-6">
            <p className="text-xs text-text-muted">
              © {currentYear} LineAnalyzer. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}