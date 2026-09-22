import { LINKS } from "@/constants/links";

export const contactLinks = [
  {
    name: "クラウドワークス",
    description: "クラウドワークスの公開プロフィールはこちら",
    href: LINKS.crowdworks,
    icon: "work",
    external: true,
  },
  {
    name: "ランサーズ",
    description: "ランサーズの公開プロフィールはこちら",
    href: LINKS.lancers,
    icon: "message",
    external: true,
  },
  {
    name: "ココナラ",
    description: "ココナラの公開プロフィールはこちら",
    href: LINKS.coconala,
    icon: "service",
    external: true,
  },
  {
    name: "メールで相談",
    description: "直接のご相談はこちら",
    href: `${LINKS.email}?subject=${encodeURIComponent("Web制作のご相談")}`,
    icon: "mail",
    external: false,
  },
] as const;