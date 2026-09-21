import ContactLinkCard from "@/components/contact/ContactLinkCard";
import { contactLinks } from "@/data/contactLinks";

export default function ContactLinks() {
  return (
    <div className="rounded-card border border-border/60 bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary">
        CONTACT METHOD
      </p>

      <h3 className="mt-4 text-2xl font-bold text-text-primary">
        ご相談方法をお選びください
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        クラウドソーシングサービスをご利用の場合は、
        各サービス内のメッセージ機能からご相談ください。
        直接のご相談はメールでも受け付けています。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {contactLinks.map((contact) => (
          <ContactLinkCard
            key={contact.name}
            {...contact}
          />
        ))}
      </div>

      <p className="mt-6 text-xs leading-6 text-text-muted">
        ※ 各クラウドソーシングサービス経由のご依頼は、
        各プラットフォームの規約に沿って対応します。
      </p>
    </div>
  );
}