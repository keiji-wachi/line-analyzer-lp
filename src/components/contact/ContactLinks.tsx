import ContactLinkCard from "@/components/contact/ContactLinkCard";
import { contactLinks } from "@/data/contactLinks";
import { PLATFORM } from "@/constants/platform";

const contactMessages = {
  crowdworks:
    "ご相談・お見積りは、クラウドワークス内のメッセージからお願いいたします。",
  lancers:
    "ご相談・お見積りは、ランサーズ内のメッセージからお願いいたします。",
  general:
    "各クラウドソーシングサービス内のメッセージからご相談ください。",
} as const;

export default function ContactLinks() {
  return (
    <div className="rounded-card border border-border/60 bg-surface p-6 sm:p-8">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary">
        CONTACT METHOD
      </p>

      <h3 className="mt-4 text-2xl font-bold text-text-primary">
        ご相談はこちら
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        {contactMessages[PLATFORM]}
      </p>

      <div
        className={
          contactLinks.length === 1
            ? "mt-8"
            : "mt-8 grid gap-4 sm:grid-cols-2"
        }
      >
        {contactLinks.map((contact) => (
          <ContactLinkCard
            key={contact.name}
            {...contact}
          />
        ))}
      </div>

      <p className="mt-6 text-xs leading-6 text-text-muted">
        ※ ご依頼・ご連絡は各プラットフォームの規約に沿って対応します。
      </p>
    </div>
  );
}