import { LINKS } from "@/constants/links";
import { PLATFORM } from "@/constants/platform";

const contactLinkMap = {
  crowdworks: {
    name: "クラウドワークス",
    description: "クラウドワークス内からご相談ください",
    href: LINKS.crowdworks,
    icon: "work",
    external: true,
  },

  lancers: {
    name: "ランサーズ",
    description: "ランサーズ内からご相談ください",
    href: LINKS.lancers,
    icon: "message",
    external: true,
  },

  coconala: {
    name: "ココナラ",
    description: "ココナラからご相談ください",
    href: LINKS.coconala,
    icon: "service",
    external: true,
  },

  email: {
    name: "メールで相談",
    description: "直接のご相談はこちら",
    href: `${LINKS.email}?subject=${encodeURIComponent(
      "Web制作のご相談"
    )}`,
    icon: "mail",
    external: false,
  },
} as const;

const generalContactLinks = [
  contactLinkMap.crowdworks,
  contactLinkMap.lancers,
  contactLinkMap.coconala,
  contactLinkMap.email,
] as const;

export const contactLinks =
  PLATFORM === "crowdworks"
    ? [contactLinkMap.crowdworks]
    : PLATFORM === "lancers"
      ? [contactLinkMap.lancers]
      : generalContactLinks;