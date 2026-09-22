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
} as const;

const generalContactLinks = [
  contactLinkMap.crowdworks,
  contactLinkMap.lancers,
] as const;

export const contactLinks =
  PLATFORM === "crowdworks"
    ? [contactLinkMap.crowdworks]
    : PLATFORM === "lancers"
      ? [contactLinkMap.lancers]
      : generalContactLinks;