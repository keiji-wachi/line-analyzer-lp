import {
  PanelsTopLeft,
  Code2,
  GitBranch,
  MonitorSmartphone,
} from "lucide-react";

import ContactLinks from "@/components/contact/ContactLinks";
import SectionHeading from "@/components/common/SectionHeading";
import Section from "@/components/layout/Section";

const contactCapabilities = [
  {
    label: "LP / Webサイト制作",
    icon: MonitorSmartphone,
  },
  {
    label: "React / Next.jsによるフロントエンド実装",
    icon: Code2,
  },
  {
    label: "WordPress・CMS・ノーコード案件もご相談可能",
    icon: PanelsTopLeft,
  },
  {
    label: "レスポンシブ対応・Git / GitHubによる開発",
    icon: GitBranch,
  },
] as const;

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="CONTACT"
        title="お問い合わせ"
        description="Web・LP制作のご相談など、お気軽にお問い合わせください。"
      />

      <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        {/* 案件受付情報 */}
        <div className="rounded-card border border-border/60 bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-primary">
            AVAILABLE FOR WORK
          </p>

          <h3 className="mt-4 text-2xl font-bold text-text-primary">
            Web・LP制作案件を受付中
          </h3>

          <p className="mt-4 leading-8 text-text-secondary">
            LP制作・Webサイト制作からフロントエンド実装まで、目的・ご予算・運用方法に合わせた制作方法をご提案します。
            WordPressやCMSを利用した案件についてもご相談ください。
          </p>

          <ul className="mt-8 space-y-4">
            {contactCapabilities.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} aria-hidden="true" />
                </span>

                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-border/60 pt-6">
            <p className="text-sm font-semibold text-text-primary">
              対応について
            </p>

            <p className="mt-2 text-sm leading-7 text-text-secondary">
              平日・休日を問わず、1日3〜5時間程度を目安に継続対応しています。
                納期や作業量については、案件内容に応じて柔軟にご相談可能です
            </p>
          </div>
        </div>

        {/* 相談方法 */}
          <ContactLinks />
      </div>
    </Section>
  );
}