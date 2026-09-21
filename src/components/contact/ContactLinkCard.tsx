import {
  Briefcase,
  ExternalLink,
  Mail,
  MessageSquare,
  Store,
  type LucideIcon,
} from "lucide-react";

type ContactIcon = "work" | "message" | "service" | "mail";

type ContactLinkCardProps = {
  name: string;
  description: string;
  href: string;
  icon: ContactIcon;
  external: boolean;
};

const iconMap: Record<ContactIcon, LucideIcon> = {
  work: Briefcase,
  message: MessageSquare,
  service: Store,
  mail: Mail,
};

export default function ContactLinkCard({
  name,
  description,
  href,
  icon,
  external,
}: ContactLinkCardProps) {
  const Icon = iconMap[icon];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background p-5 transition hover:border-primary/70 hover:bg-primary/5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={22} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-bold text-text-primary">
          {name}
        </p>

        <p className="mt-1 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>

      <ExternalLink
        size={18}
        aria-hidden="true"
        className="shrink-0 text-text-muted transition group-hover:text-primary"
      />
    </a>
  );
}